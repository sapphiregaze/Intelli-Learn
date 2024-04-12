package main

import (
	"intelli-learn/backend/internal/database"
	"intelli-learn/backend/internal/routes"
	"log"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	PORT := os.Getenv("PORT")

	database.InitDatabase()
	routes.InitRoutes().Run(PORT)
}
