package routes

import (
	"intelli-learn/backend/internal/auth"

	"github.com/gin-gonic/gin"
)

func (r routes) addAuth(rg *gin.RouterGroup) {
	authGroup := rg.Group("/auth")

	authGroup.GET("/verify", auth.VerifyHandler)
	authGroup.GET("/logout", auth.LogoutHandler)
	authGroup.POST("/login", auth.LoginHandler)
	authGroup.POST("/register", auth.RegisterHandler)
}
