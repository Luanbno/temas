//Prática com JavaScript, HTML e CSS - Alterando as cores de acordo com o número inserido

function meuEscopo() {

    //Selecionando os blocos do HTML:
    const p1 = document.querySelector('#p');
    const h1 = document.querySelector('.container h1');
    const container = document.querySelector('.container');
    const b = document.querySelector('body');
    const estilosBody = getComputedStyle(document.body);
    const corBack = estilosBody.backgroundColor;

    //Centralizando titulo e parágrafo manualmente:
    h1.classList.add('centro');
    p1.classList.add('centro');

    //Função para criar uma label
    const criaLabel = () => {
        const label = document.createElement('label');
        label.innerHTML = '<strong>Insira um nº: <strong/>'
        return label;
    }

    //Função para criar um parágrafo:
    const criaP2 = () => {
        const p2 = document.createElement('p');
        return p2;
    }

    //Função para criar um input:
    const criaInput = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'number');
        return input;
    }


    //Função para criar um botão:
    const criaButton = () => {
        const button = document.createElement('button');
        button.innerText = 'Enviar';
        button.classList.add('color-Button');
        return button;
    }

    //Passando as funções criadas para constantes
    const input = criaInput();
    const p2 = criaP2();
    const button = criaButton();
    const label = criaLabel();

    //Inclusões na árvore DOM
    p1.appendChild(label);
    p1.appendChild(p2);
    p2.appendChild(input);
    p2.appendChild(button);

    //Estrutura de decisão para alteração do tema da página:
    const alterarTema = () => {
        if (input.value % 5 === 0) {
            return b.style.backgroundColor = corBack,
                container.style.backgroundColor = 'rgb(200, 220, 240)',
                button.style.backgroundColor = corBack,
                button.style.color = 'white';
        }
        else if (input.value % 2 === 0) {
            return b.style.backgroundColor = 'black',
                container.style.backgroundColor = 'wheat',
                button.style.backgroundColor = 'black',
                button.style.color = 'white';
        }
        else if (input.value % 2 !== 0) {
            return b.style.backgroundColor = 'white',
                container.style.backgroundColor = 'rgb(224, 222, 214)',
                button.style.backgroundColor = 'wheat',
                button.style.color = 'black';
        }
    }

    //Capturando o clique no botão Enviar
    button.addEventListener('click', function (evento) {
        const elemento = evento.target;
        if (!input.value) return;
        alterarTema();
    })

    //Capturando a tecla Enter
    input.addEventListener('keyup', function (e) {
        const el = e.target;
        if (e.key === 'Enter') {
            if (!input.value) return;
            alterarTema();
        }
    })

} meuEscopo()