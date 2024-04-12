package auth

import (
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v4"
)

func LoginHandler(ctx *gin.Context) {
	var request LoginRequest
	jwtKey := []byte(os.Getenv("SECRET_KEY"))

	if err := ctx.BindJSON(&request); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	// test credentials, validate against db later :(
	if request.Username == "user1" && request.Password == "password1" {
		expirationTime := time.Now().Add(48 * time.Hour)

		claims := &Claims{
			Username: request.Username,
			RegisteredClaims: jwt.RegisteredClaims{
				ExpiresAt: jwt.NewNumericDate(expirationTime),
			},
		}

		token := jwt.NewWithClaims(jwt.SigningMethodHS512, claims)
		tokenString, err := token.SignedString(jwtKey)
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Could not generate token"})
			return
		}

		ctx.JSON(http.StatusOK, gin.H{"token": tokenString})
	} else {
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid credentials"})
	}
}
