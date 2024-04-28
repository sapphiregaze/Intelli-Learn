package database

import (
	"database/sql"
)

func CreateUsersTable() error {
	db, err := sql.Open("mysql", cfg.FormatDSN())
	if err != nil {
		return err
	}
	defer db.Close()

	_, err = db.Exec(`
		CREATE TABLE IF NOT EXISTS users (
			id INT AUTO_INCREMENT PRIMARY KEY,
			email VARCHAR(255) NOT NULL UNIQUE,
			username VARCHAR(255) NOT NULL UNIQUE,
			password VARCHAR(255) NOT NULL
		)
	`)
	if err != nil {
		return err
	}

	return nil
}

func SelectUserByUsername(username string) (User, error) {
	var user User

	db, err := sql.Open("mysql", cfg.FormatDSN())
	if err != nil {
		return user, err
	}
	defer db.Close()

	err = db.QueryRow("SELECT username, email, password FROM users WHERE username = ?", username).Scan(&user.Username, &user.Email, &user.Password)
	if err != nil {
		return user, err
	}

	return user, nil
}

func SelectUserByEmail(email string) (User, error) {
	var user User

	db, err := sql.Open("mysql", cfg.FormatDSN())
	if err != nil {
		return user, err
	}
	defer db.Close()

	err = db.QueryRow("SELECT username, email, password FROM users WHERE email = ?", email).Scan(&user.Username, &user.Email, &user.Password)
	if err != nil {
		return user, err
	}

	return user, nil
}

func InsertUser(email, username, password string) error {
	db, err := sql.Open("mysql", cfg.FormatDSN())
	if err != nil {
		return err
	}
	defer db.Close()

	_, err = db.Exec("INSERT INTO users (email, username, password) VALUES (?, ?, ?)", email, username, password)
	if err != nil {
		return err
	}

	return nil
}
