const express = require('express');
const router = express.Router();
const { getAllBooks, getDailyVerse } = require('../services/booksService');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await getAllBooks();
    res.status(200).json(books)
  } catch (err) {
    console.error('Erro ao buscar livros:', err.message);
    res.status(500).json({ error: 'Erro ao buscar livros' });
  }
}

exports.getDailyVerse = async (req, res) => {
  try {
    const verse = await getDailyVerse();
    res.status(200).json(verse)
  }
  catch (err) {
    console.error('Erro ao capturar verso diário',err);
    res.status(500).json({error: 'Erro ao capturar verso diário'})
  }
}
