document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("7XRoPzNPyeAcpTfc1");

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };

      // Wysyłanie wiadomości za pomocą EmailJS
      emailjs.send("service_k4gnbdn", "template_o4fkvdg", formData).then(
        function (response) {
          alert("Wiadomość wysłana pomyślnie!");
          document.getElementById("contact-form").reset();
        },
        function (error) {
          alert("Nie udało się wysłać wiadomości.");
          console.log(error);
        }
      );
    });
});
