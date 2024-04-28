package routes

import (
	"intelli-learn/backend/internal/auth"

	"github.com/gin-gonic/gin"
)

func (r routes) addAuth(rg *gin.RouterGroup) {
	authGroup := rg.Group("/auth")

	authGroup.POST("/login", auth.LoginHandler)
	authGroup.POST("/register", auth.RegisterHandler)
}
