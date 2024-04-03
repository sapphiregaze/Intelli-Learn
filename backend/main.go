package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	res := gin.Default()
	res.GET("/", func(ctx *gin.Context) {
		ctx.JSON(200, "this is working :3")
	})
	res.Run()
}
