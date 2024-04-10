package routes

import "github.com/gin-gonic/gin"

func InitRoutes() routes {
	r := routes{
		router: gin.Default(),
	}

	v1 := r.router.Group("/v1/api")

	r.addAuth(v1)

	return r
}

func (r routes) Run(addr ...string) error {
	return r.router.Run()
}
