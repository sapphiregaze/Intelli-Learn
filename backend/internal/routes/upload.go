package routes

import (
	"bytes"
	"fmt"
	"intelli-learn/backend/internal/utils"
	"io"
	"net/http"
	"strings"

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

		file, header, err := ctx.Request.FormFile("file")
		if err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{"error": "Error retrieving file"})
			return
		}
		defer file.Close()

		filename := header.Filename
		fmt.Println("Received file:", filename)

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
		fmt.Printf("%s\n", (*text).Parts[0])

		latex, err := utils.ConvertTextToLatex((*text).Parts[0])
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Error generating latex code"})
			return
		}
		fmt.Printf("%s\n", (*latex).Parts[0])

		ctx.JSON(http.StatusOK, gin.H{"message": "File uploaded and processed successfully"})
	})
}
