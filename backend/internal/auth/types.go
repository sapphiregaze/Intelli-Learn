package auth

import "github.com/golang-jwt/jwt/v4"

type Claims struct {
	Username string `form:"username" json:"username" binding:"required"`
	jwt.RegisteredClaims
}

type LoginRequest struct {
	Username string `form:"username" json:"username" binding:"required"`
	Password string `form:"password" json:"password" binding:"required"`
}

type RegisterRequest struct {
	Email    string `form:"email" json:"email" binding:"required"`
	Username string `form:"username" json:"username" binding:"required"`
	Password string `form:"password" json:"password" binding:"required"`
}
