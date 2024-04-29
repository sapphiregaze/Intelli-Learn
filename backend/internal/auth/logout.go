package auth

import (
	"errors"
	"net/http"

	"intelli-learn/backend/internal/utils"

	"github.com/gin-gonic/gin"
)

var BlacklistedTokens = make(map[string]bool)

func GetToken(ctx *gin.Context) (string, error) {
	token, err := utils.ExtractTokenFromHeader(ctx)
	if err != nil {
		return "", err
	}

	if BlacklistedTokens[token] {
		return "", errors.New("token is blacklisted")
	}

	_, err = utils.ValidateToken(token)
	if err != nil {
		return "", err
	}

	return token, nil
}

func LogoutHandler(ctx *gin.Context) {
	token, err := GetToken(ctx)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid bearer token in authorization header"})
		return
	}

	BlacklistedTokens[token] = true

	ctx.JSON(http.StatusOK, gin.H{"message": "Logout successful"})
}
