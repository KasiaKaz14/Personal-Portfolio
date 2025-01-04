// require("dotenv").config(); // Załaduj zmienne środowiskowe
// const express = require("express");
// const cors = require("cors");
// const emailjs = require("emailjs"); // Zainstaluj i używaj oficjalnej wersji dla Node.js

// const app = express();
// const port = 5500;

// // Middleware do obsługi CORS
// app.use(cors());

// // Middleware do obsługi JSON
// app.use(express.json());

// // Endpoint do obsługi wysyłania wiadomości
// app.post("/send-email", (req, res) => {
//   const { name, email, message } = req.body;

//   // Sprawdzamy, czy dane zostały poprawnie odebrane
//   console.log("Received data:", name, email, message);

//   // Konfiguracja serwera SMTP za pomocą emailjs
//   const server = emailjs.server.connect({
//     user: process.env.EMAILJS_USER_ID, // Użyj zmiennej środowiskowej dla user_id
//     password: process.env.EMAILJS_PASSWORD, // Zmienna środowiskowa dla hasła
//     host: "smtp.your-email-provider.com", // Zmień na odpowiedni host, np. smtp.gmail.com
//     ssl: true,
//   });

//   // Parametry wiadomości
//   const messageParams = {
//     text: message,
//     from: email,
//     to: "recipient@example.com", // Zmień na docelowy e-mail
//     subject: `Message from ${name}`,
//   };

//   // Wysyłanie wiadomości e-mail
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

// // Uruchomienie serwera
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });
