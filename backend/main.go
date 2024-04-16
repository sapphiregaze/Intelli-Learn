package main

import (
	"intelli-learn/backend/internal/database"
	"intelli-learn/backend/internal/routes"
	"log"
	"os"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	PORT := os.Getenv("PORT")

	switch strings.ToLower(os.Getenv("GIN_MODE")) {
	case "release":
		gin.SetMode(gin.ReleaseMode)
	case "test":
		gin.SetMode(gin.TestMode)
	default:
		gin.SetMode(gin.DebugMode)
	}

	database.InitDatabase()
	routes.InitRoutes().Run(PORT)
}
