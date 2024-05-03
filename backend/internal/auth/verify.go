package auth

import (
	"intelli-learn/backend/internal/utils"
	"net/http"

	"github.com/gin-gonic/gin"
)

func VerifyHandler(ctx *gin.Context) {
	token, err := utils.ExtractTokenFromHeader(ctx)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid bearer token in authorization header"})
		return
	}

	decoded, _, err := utils.ValidateToken(token)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Token is invalid"})
		return
	}

	ctx.JSON(http.StatusOK, decoded)
}
