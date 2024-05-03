package routes

import (
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func InitRoutes() routes {
	router := gin.Default()
	router.ForwardedByClientIP = true
	router.SetTrustedProxies(nil)

	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://127.0.0.1/"},
		AllowMethods:     []string{"GET", "POST"},
		AllowHeaders:     []string{"Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	r := routes{
		router: router,
	}

	v1 := r.router.Group("/v1/api")

	r.addAuth(v1)
	r.addUpload(v1)
	r.addCreate(v1)

	return r
}

func (r routes) Run(addr ...string) error {
	return r.router.Run()
}
