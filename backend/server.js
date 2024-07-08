const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Edlanta39!",
  database: "signup",
});

app.post("/signup", (req, res) => {
  const sql = "INSERT INTO login (`name`, `email`,`password`) VALUES (?, ?, ?)";
  const values = [req.body.name, req.body.email, req.body.password];
  db.query(sql, values, (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log(data);
    return res.json(data);
  });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Fail");
    }
  });
});

app.post("/changepassword", (req, res) => {
  const { email, currentPassword, newPassword } = req.body;

  // Check if the provided new password is different from the current password
  if (currentPassword === newPassword) {
    return res
      .status(400)
      .json({
        message: "New password must be different from the current password",
      });
  }

  // Verify user's identity based on email and current password
  const verifyUserSql =
    "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
  db.query(verifyUserSql, [email, currentPassword], (err, data) => {
    if (err) {
      console.error("Error verifying user:", err);
      return res.status(500).json({ message: "Error verifying user" });
    }

    // Check if user exists with the provided email and current password
    if (data.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const updatePasswordSql =
      "UPDATE login SET `password` = ? WHERE `email` = ?";
    db.query(updatePasswordSql, [newPassword, email], (err, result) => {
      if (err) {
        console.error("Error updating password:", err);
        return res.status(500).json({ message: "Error updating password" });
      }

      return res.status(200).json({ message: "Password updated successfully" });
    });
  });
});

app.listen(8081, () => {
  console.log("listening");
});
