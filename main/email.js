const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Enviando...';
        btn.disabled = true;

        const serviceID = 'service_olqw41n';
        const templateID = 'template_wlr7nsy';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.disabled = false;
                btn.value = 'Enviar consulta';
                alert('Consulta Enviada!');
            }, (err) => {
                btn.disabled = false;
                btn.value = 'Enviar consulta';
                alert(JSON.stringify(err));
            });
    });