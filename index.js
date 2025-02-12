const valorDeInput = document.querySelector('.search-input')
const printarResultado = document.querySelector('.texto-resultado')
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
    }
    capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
              this.buscarVersiculo();
            }
          });
    }
    buscarVersiculo = () => {
        async function fetchData() {
            const url = 'https://bible-api.com/'+valorDeInput.value
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
        fetchData();
    }
}

const app = new BuscadorDeVersiculos();
document.body.style.backgroundImage = escolherWallpaperAleatorio();
app.executaPrograma();