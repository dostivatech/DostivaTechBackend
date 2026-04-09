// src/middleware/validate.middleware.js

module.exports = (req, res, next) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" })
  }

  const emailRegex = /\S+@\S+\.\S+/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email" })
  }

  next()
}