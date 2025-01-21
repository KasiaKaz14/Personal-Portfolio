const apiKey = "7XRoPzNPyeAcpTfc1"; // Twój klucz API
emailjs.init(apiKey); // Inicjalizacja EmailJS

const serviceId = "service_k4gnbdn"; // Upewnij się, że to jest poprawny identyfikator usługi
const templateId = "template_o4fkvdg"; // Upewnij się, że to jest poprawny identyfikator szablonu

// Obsługa formularza
document
  .getElementById("messageForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Zatrzymaj domyślną akcję wysyłki formularza

    // Pobieranie danych z formularza
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Walidacja - upewnij się, że wszystkie pola są wypełnione
    if (!name || !email || !message) {
      alert("Proszę wypełnić wszystkie pola!");
      return;
    }

    // Ustaw parametry do wysłania
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    console.log("Dane do wysłania:", templateParams); // Log danych

    // Wyślij e-mail za pomocą EmailJS
    emailjs.send(serviceId, templateId, templateParams).then(
      function (response) {
        console.log(
          "Wiadomość została wysłana!",
          response.status,
          response.text
        );
        alert("Wiadomość została wysłana!");
        document.getElementById("messageForm").reset(); // Opcjonalnie zresetuj formularz
      },
      function (error) {
        console.error("Wystąpił błąd podczas wysyłania wiadomości", error);
        alert(
          "Wystąpił błąd podczas wysyłania wiadomości: " + JSON.stringify(error)
        );
      }
    );
  });
