// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const emailjs = require("emailjs");

// const app = express();
// const port = 5500;

// // Middleware do obsługi CORS
// app.use(cors());

// // Middleware do obsługi JSON
// app.use(express.json());

// app.post("/send-email", (req, res) => {
//   const { name, email, message } = req.body;

//   console.log("Received data:", name, email, message);

//
//   const server = emailjs.server.connect({
//     user: process.env.EMAILJS_USER_ID,
//     password: process.env.EMAILJS_PASSWORD,
//     host: "smtp.your-email-provider.com",
//     ssl: true,
//   });

//
//   const messageParams = {
//     text: message,
//     from: email,
//     to: "recipient@example.com",
//     subject: `Message from ${name}`,
//   };

//
//   server.send(messageParams, (error, message) => {
//     if (error) {
//       console.error("Error sending email:", error);
//       return res
//         .status(500)
//         .json({ message: "Failed to send email. Try again later." });
//     }
//     console.log("Email sent successfully:", message);
//     return res.status(200).json({ message: "Email sent successfully!" });
//   });
// });

//
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });
