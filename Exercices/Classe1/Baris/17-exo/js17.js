document.getElementById('bouton').addEventListener('click', function (e) {
    for (let i = 0; i < 5; i++) {
        const miettes = document.createElement('div');
        miettes.className = 'miettes';
        miettes.style.left = `${e.clientX + (Math.random() * 20 - 10)}px`;
        miettes.style.top = `${e.clientY + (Math.random() * 20 - 10)}px`;
        document.body.appendChild(miettes);

        miettes.addEventListener('animationend', function () {
            miettes.remove();
        });
    }
});