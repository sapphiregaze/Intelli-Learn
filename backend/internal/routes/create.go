package routes

import (
	"fmt"
	"intelli-learn/backend/internal/utils"
	"net/http"

	"github.com/gin-gonic/gin"
)

func (r routes) addCreate(rg *gin.RouterGroup) {
	createGroup := rg.Group("/create")

	createGroup.POST("/folder", func(ctx *gin.Context) {
		var request CreateFolderRequest

		if err := ctx.BindJSON(&request); err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
			return
		}

		if request.Name == "" {
			ctx.JSON(http.StatusBadRequest, gin.H{"error": "Fields cannot be left empty"})
			return
		}

		token, err := utils.ExtractTokenFromHeader(ctx)
		if err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid bearer token in authorization header"})
			return
		}

		_, username, err := utils.ValidateToken(token)
		if err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{"error": "Token is invalid"})
			return
		}

		fmt.Println(username)

		ctx.JSON(http.StatusOK, gin.H{"message": "Folder successfully created"})
	})
}
