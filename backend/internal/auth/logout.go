package auth

import (
	"intelli-learn/backend/internal/utils"
	"net/http"

	"github.com/gin-gonic/gin"
)

func LogoutHandler(ctx *gin.Context) {
	token, err := utils.ExtractTokenFromHeader(ctx)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid bearer token in authorization header"})
		return
	}

	if _, _, err := utils.ValidateToken(token); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Token is invalid"})
		return
	}

	utils.BlacklistedTokens[token] = true

	ctx.JSON(http.StatusOK, gin.H{"message": "Logout successful"})
}
