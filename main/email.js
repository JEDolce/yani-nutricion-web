const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Enviando...';
        btn.disabled = true;

        const serviceID = 'default_service';
        const templateID = 'template_slm7gug';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.disabled = false;
                btn.value = 'Enviar consulta';
                alert('Consulta Enviada!');
            }, (err) => {
                btn.value = 'Enviar consulta';
                alert(JSON.stringify(err));
            });
    });