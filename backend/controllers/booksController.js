const {
  getAllBooks,
  getDailyVerse,
  getChapters,
  getVerses,
  searchVerses
} = require('../services/booksService');

exports.getAllBooks = (req, res) => {
  try {
    const books = getAllBooks();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar livros' });
  }
};

exports.getDailyVerse = (req, res) => {
  try {
    const verse = getDailyVerse();
    res.status(200).json({ verses: [verse], translation: verse.translation });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao capturar verso diário' });
  }
};

exports.getChapters = (req, res) => {
  try {
    const { bookSlug } = req.params;
    const chapters = getChapters(bookSlug);
    if (!chapters) return res.status(404).json({ error: 'Livro não encontrado' });
    res.status(200).json(chapters);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar capítulos' });
  }
};

exports.getVerses = (req, res) => {
  try {
    const { bookSlug, chapter } = req.params;
    const verses = getVerses(bookSlug, chapter);
    if (!verses) return res.status(404).json({ error: 'Capítulo ou livro não encontrado' });
    res.status(200).json({ verses });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar versículos' });
  }
};

