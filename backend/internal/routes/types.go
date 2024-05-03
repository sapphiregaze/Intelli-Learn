package routes

import "github.com/gin-gonic/gin"

type routes struct {
	router *gin.Engine
}

type CreateFolderRequest struct {
	Name string `form:"name" json:"name" binding:"required"`
}
