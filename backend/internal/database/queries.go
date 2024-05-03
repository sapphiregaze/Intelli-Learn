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
		CREATE TABLE IF NOT EXISTS Users (
			id INT AUTO_INCREMENT PRIMARY KEY,
			email VARCHAR(255) NOT NULL UNIQUE,
			username VARCHAR(255) NOT NULL UNIQUE,
			password_hash VARCHAR(255) NOT NULL
		)
	`)
	if err != nil {
		return err
	}

	_, err = db.Exec(`
		CREATE TABLE IF NOT EXISTS Folders (
			id INT AUTO_INCREMENT PRIMARY KEY,
			user_id INT,
			name VARCHAR(255),
			FOREIGN KEY (user_id) REFERENCES Users(id)
		)
	`)
	if err != nil {
		return err
	}

	_, err = db.Exec(`
		CREATE TABLE IF NOT EXISTS Notes (
			id INT AUTO_INCREMENT PRIMARY KEY,
			user_id INT,
			folder_id INT,
			file_path VARCHAR(255),
			FOREIGN KEY (user_id) REFERENCES Users(id),
			FOREIGN KEY (folder_id) REFERENCES Folders(id)
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

	err = db.QueryRow("SELECT email, username, password_hash FROM Users WHERE username = ?", username).Scan(&user.Email, &user.Username, &user.PasswordHash)
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

	err = db.QueryRow("SELECT email, username, password_hash FROM Users WHERE email = ?", email).Scan(&user.Email, &user.Username, &user.PasswordHash)
	if err != nil {
		return user, err
	}

	return user, nil
}

func InsertUser(email, username, passwordHash string) error {
	db, err := sql.Open("mysql", cfg.FormatDSN())
	if err != nil {
		return err
	}
	defer db.Close()

	_, err = db.Exec("INSERT INTO Users (email, username, password_hash) VALUES (?, ?, ?)", email, username, passwordHash)
	if err != nil {
		return err
	}

	return nil
}

func InsertFolder(userId int, name string) error {
	db, err := sql.Open("mysql", cfg.FormatDSN())
	if err != nil {
		return err
	}
	defer db.Close()

	_, err = db.Exec("INSERT INTO Folders (user_id, name) VALUES (?, ?)", userId, name)
	if err != nil {
		return err
	}

	return nil
}
