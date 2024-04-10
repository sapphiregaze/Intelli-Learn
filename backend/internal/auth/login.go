package auth

import (
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v4"
)

func LoginHandler(c *gin.Context) {
	var request LoginRequest
	jwtKey := []byte(os.Getenv("SECRET_KEY"))

	if err := c.BindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	// test credentials, validate against db later :(
	if request.Username == "user1" && request.Password == "password1" {
		expirationTime := time.Now().Add(12 * time.Hour)

		claims := &Claims{
			Username: request.Username,
			RegisteredClaims: jwt.RegisteredClaims{
				ExpiresAt: jwt.NewNumericDate(expirationTime),
			},
		}

		token := jwt.NewWithClaims(jwt.SigningMethodHS512, claims)
		tokenString, err := token.SignedString(jwtKey)

		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Could not generate token"})
			return
		}

		c.JSON(http.StatusOK, gin.H{"token": tokenString})
	} else {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid credentials"})
	}
}
