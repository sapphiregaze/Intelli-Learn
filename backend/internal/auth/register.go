package auth

import (
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

func isValidUniversityEmail(email string) bool {
	validSuffixes := []string{"@edu", "@univ", "@etu"} // Add others
	for _, suffix := range validSuffixes {
		if strings.HasSuffix(email, suffix) {
			return true
		}
	}
	return false
}

func RegisterHandler(c *gin.Context) {
	var req RegisterRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	if !isValidUniversityEmail(req.Email) {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Please enter a valid university email address"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "User registered successfully"})
}
