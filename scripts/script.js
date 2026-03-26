emailjs.init({
        publicKey: "FfVcYmJ4rCUd_2-tt",
      });


document.getElementById("contact_form").addEventListener("submit", function(event){
    event.preventDefault()

    const formData = {
        name: document.getElementById("contato-nome").value,
        email: document.getElementById("contato-email").value,
        telefone: document.getElementById("contato-telefone").value,
        mensagem: document.getElementById("contato-mensagem").value
    }

    const serviceID = "service_a35jhfn"
    const templateID = "template_ulxacda"
    const submitButton = document.getElementById('submit_button')

    submitButton.textContent = "Enviando..."
    submitButton.disabled = true

    emailjs.send(serviceID, templateID,{
        name: formData.name,
        email: formData.email,
        telefone: formData.telefone,
        message: formData.mensagem,
        subject: "Clínica de estética",
    }).then(() => {
        Toastify({

            text: "E-mail enviado com sucesso!",

            duration: 3000,
            style: {
                background: "#28a745",
                color: "#f4f4f4"
            }

        }).showToast();

        document.getElementById("contact_form").reset()

    }).catch((error) => {
         Toastify({

            text: "Erro ao enviar o e-mail!",

            duration: 3000,
            style: {
                background: "#dc3545",
                color: "#f4f4f4"
            }

        }).showToast();
    }).finally(() => {
        submitButton.textContent = "Enviar mensagem"
        submitButton.disabled = false
    })

    console.log(formData)

})

