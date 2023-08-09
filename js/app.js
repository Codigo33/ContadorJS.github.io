// Valor inicial del contador
let contador = 0;

// valor del contador y botones
const valor = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // console.log(e.currentTarget.classList);
        const referencia = e.currentTarget.classList;

        if (referencia.contains('decreciente')) {
            contador--;
        } else if (referencia.contains('incremento')) {
            contador++;
        } else {
            contador = 0;
        }

        switch (true) {
            case contador > 0:
                valor.style.color = 'green';
                break;
            case contador < 0:
                valor.style.color = 'red';
                break;
            default:
                valor.style.color = 'blue';
        }

        valor.textContent = contador;
    });

    // console.log(btn);
});