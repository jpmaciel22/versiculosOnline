const path = require('path');
const fs = require('fs');

const rawData = fs.readFileSync(path.join(__dirname, '../data/bibliaAveMaria.json'), 'utf8');
const biblia = JSON.parse(rawData);

const livros = [
  ...biblia.antigoTestamento.map(l => ({ ...l, testamento: 'Antigo' })),
  ...biblia.novoTestamento.map(l => ({ ...l, testamento: 'Novo' }))
];

function slugify(nome) {
  return nome
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/gi, '')
    .replace(/\s+/g, '-');
}

function getAllBooks() {
  return livros.map(livro => ({
    id: slugify(livro.nome),
    name: livro.nome,
    testamento: livro.testamento
  }));
}

function getDailyVerse() {
  const livro = livros[Math.floor(Math.random() * livros.length)];
  const capitulo = livro.capitulos[Math.floor(Math.random() * livro.capitulos.length)];
  const versiculo = capitulo.versiculos[Math.floor(Math.random() * capitulo.versiculos.length)];

  return {
    reference: `${livro.nome} ${capitulo.capitulo}:${versiculo.versiculo}`,
    text: versiculo.texto,
    translation: {
      name: 'Ave Maria',
      identifier: 'ave-maria',
      language: 'Português'
    }
  };
}

function getChapters(bookSlug) {
  const livro = livros.find(l => slugify(l.nome) === bookSlug);
  if (!livro) return null;

  return livro.capitulos.map(cap => ({
    book: livro.nome,
    book_slug: slugify(livro.nome),
    chapter: cap.capitulo,
    url: `/books/${slugify(livro.nome)}/${cap.capitulo}`
  }));
}

function getVerses(bookSlug, chapter) {
  const livro = livros.find(l => slugify(l.nome) === bookSlug);
  if (!livro) return null;

  const cap = livro.capitulos.find(c => c.capitulo === parseInt(chapter));
  if (!cap) return null;

  return cap.versiculos.map(v => ({
    book: livro.nome,
    chapter: cap.capitulo,
    verse: v.versiculo,
    text: v.texto
  }));
}


module.exports = {
  getAllBooks,
  getDailyVerse,
  getChapters,
  getVerses
};
