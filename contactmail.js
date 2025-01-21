const apiKey = "7XRoPzNPyeAcpTfc1";
emailjs.init(apiKey);

const serviceId = "service_k4gnbdn";
const templateId = "template_o4fkvdg";

document
  .getElementById("messageForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
      alert("Proszę wypełnić wszystkie pola!");
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    console.log("Dane do wysłania:", templateParams);

    emailjs.send(serviceId, templateId, templateParams).then(
      function (response) {
        console.log(
          "Wiadomość została wysłana!",
          response.status,
          response.text
        );
        alert("Wiadomość została wysłana!");
        document.getElementById("messageForm").reset();
      },
      function (error) {
        console.error("Wystąpił błąd podczas wysyłania wiadomości", error);
        alert(
          "Wystąpił błąd podczas wysyłania wiadomości: " + JSON.stringify(error)
        );
      }
    );
  });
