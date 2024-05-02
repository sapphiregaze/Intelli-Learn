package routes

import (
	"bytes"
	"fmt"
	"intelli-learn/backend/internal/utils"
	"io"
	"net/http"
	"os"
	"os/exec"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
)

func (r routes) addUpload(rg *gin.RouterGroup) {
	uploadGroup := rg.Group("/upload")

	uploadGroup.POST("/", func(ctx *gin.Context) {
		err := ctx.Request.ParseMultipartForm(50 << 20)
		if err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{"error": "Error parsing form"})
			return
		}

		file, _, err := ctx.Request.FormFile("file")
		if err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{"error": "Error retrieving file"})
			return
		}
		defer file.Close()

		buf := bytes.NewBuffer(nil)
		if _, err := io.Copy(buf, file); err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Error copying file to buffer"})
			return
		}

		format := strings.Split(http.DetectContentType(buf.Bytes()), "/")[1]
		text, err := utils.ExtractTextFromImage(buf.Bytes(), format)
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Error extracting text from image"})
			return
		}

		latex, err := utils.ConvertTextToLatex((*text).Parts[0])
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Error generating LaTeX code"})
			return
		}

		content := fmt.Sprintf("\\documentclass{article}\n\\usepackage{graphicx}\n\\begin{document}\n%s\n\\end{document}\n", (*latex).Parts[0])
		filename := time.Now().Format("20060102150405")

		outputDir := "./output"
		if _, err := os.Stat(outputDir); os.IsNotExist(err) {
			if err := os.MkdirAll(outputDir, 0755); err != nil {
				ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Error creating output directory"})
				return
			}
		}

		filePath := fmt.Sprintf("%s/%s.tex", outputDir, filename)
		if err := os.WriteFile(filePath, []byte(content), 0644); err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Error saving LaTeX code"})
			return
		}

		cmd := exec.Command("pdflatex", "-output-directory", outputDir, filePath)
		if err := cmd.Run(); err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Error compiling LaTeX document", "detail": err.Error()})
			return
		}

		ctx.JSON(http.StatusOK, gin.H{"message": "File uploaded and processed successfully"})
	})
}
