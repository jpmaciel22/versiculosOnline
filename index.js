const valorDeInput = document.querySelector('.search-input');
const printarResultado = document.querySelector('.texto-resultado');
const botaoRandom = document.querySelector('.random-verse');
const dialog = document.querySelector("dialog");
const showButton = document.querySelector('.showDialog');
const closeButton = document.querySelector('.closeDialog');
const guiaTexto = document.querySelector('.guia-texto')
const wallpapers = [
    'url("wall1.jpg")',
    'url("wall2.jpg")',
    'url("wall3.jpg")'
];
escolherWallpaperAleatorio = () => {
    const randIndex = Math.floor(Math.random() * wallpapers.length);
    return wallpapers[randIndex]; 
}
class BuscadorDeVersiculos {

    executaPrograma = () => {
        this.capturaEnter();
        this.capturaClick();
        this.rodaGuia();
    }
    capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
              this.buscarVersiculo();
            }
          });
    }
    capturaClick = () => {
        botaoRandom.addEventListener('click', e => {
            e.preventDefault();
            this.randomVerse();
        });
        closeButton.addEventListener('click',e => {
            dialog.close();
        });
        showButton.addEventListener('click',e => {
            dialog.showModal();
        });
    }
    buscarVersiculo = () => {
        const url = 'https://bible-api.com/'+valorDeInput.value+'?single_chapter_book_matching=indifferent'
        async function fetchData(url) {
            const response = await fetch(url);
            const dadosObtidos = await response.json();
            if (dadosObtidos.verses && dadosObtidos.verses.length > 0) {
                const todosVersiculos = dadosObtidos.verses.map(verso => {
                    return `${verso.book_name} - Capítulo ${verso.chapter}, Versículo ${verso.verse}: ${verso.text.replace(/\n+/g, ' ').trim()}`;
                }).join('\n\n');

                printarResultado.innerText = todosVersiculos;

            } else {
                printarResultado.value = 'Nenhum versículo encontrado.';
            }
        }
        fetchData(url);
    }
    randomVerse = () => {
        const url = 'https://bible-api.com/data/web/random';
        async function fetchData(url) {
            const response = await fetch(url);
            const dadosObtidos = await response.json();
    
            if (dadosObtidos.random_verse) {
                const verso = dadosObtidos.random_verse;
                const versiculoFormatado = `${verso.book} - Chapter ${verso.chapter}, Verse ${verso.verse}: ${verso.text.replace(/\n+/g, ' ').trim()}`;
                
                printarResultado.innerText = versiculoFormatado;
            } else {
                printarResultado.innerText = 'Nenhum versículo encontrado.';
            }
        }
        fetchData(url);
    }
    rodaGuia = () => {
        const url = 'https://bible-api.com/data/web';
        async function fetchData(url) {
            const response = await fetch(url);
            const dadosObtidos = await response.json();
            const livros = dadosObtidos.books
            for(let i=0;i<livros.length;i++){
                guiaTexto.innerHTML += '  '+livros[i].id +'='+livros[i].name+' <br />';
            }
        }
        fetchData(url)
    }
}
const app = new BuscadorDeVersiculos();
document.body.style.backgroundImage = escolherWallpaperAleatorio();
app.executaPrograma();