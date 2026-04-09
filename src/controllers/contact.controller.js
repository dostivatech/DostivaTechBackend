// src/controllers/contact.controller.js

const { sendEmail } = require('../services/email.service')
const emailMap = require('../utils/emailMap')

exports.handleContact = async (req, res) => {
  try {
    const { name, email, phone, message, app } = req.body

    const receiver = emailMap[app] || emailMap['portfolio']

    const html = `
      <h2>New Contact Request</h2>
      <p><strong>App:</strong> ${app}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `

    await sendEmail({
      to: receiver,
      subject: `New Contact from ${app}`,
      html
    })

    res.status(200).json({ message: "Email sent successfully" })

  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Failed to send email" })
  }
}