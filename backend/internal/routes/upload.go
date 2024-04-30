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
			return
		}

		format := strings.Split(http.DetectContentType(buf.Bytes()), "/")[1]
		resp, err := utils.ExtractTextFromImage(buf.Bytes(), format)
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Error extracting test from image"})
			return
		}

		ctx.JSON(http.StatusOK, gin.H{"message": (*resp).Parts[0]})
	})
}
