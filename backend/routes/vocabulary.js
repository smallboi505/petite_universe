const express = require('express');
const router = express.Router();
const Vocabulary = require('../models/Vocabulary');

// Fetch vocabulary list
router.get('/vocabulary-list', async (req, res) => {
  try {
    const vocabulary = await Vocabulary.find();
    res.json(vocabulary);
  } catch (error) {
    res.status(500).send('Failed to fetch vocabulary list');
  }
});

// Add new vocabulary
router.post('/add-vocabulary', async (req, res) => {
  const { word, definition, language } = req.body;
  try {
    const newVocabulary = new Vocabulary({ word, definition, language });
    await newVocabulary.save();
    res.status(200).send('Vocabulary added');
  } catch (error) {
    res.status(500).send('Failed to add vocabulary');
  }
});

// Edit a vocabulary item
router.put('/edit-vocabulary/:id', async (req, res) => {
    const { word, definition, language } = req.body;
    try {
      await Vocabulary.findByIdAndUpdate(req.params.id, { word, definition, language });
      res.status(200).send('Vocabulary updated');
    } catch (error) {
      res.status(500).send('Failed to update vocabulary');
    }
  });

// Delete a vocabulary item
router.delete('/delete-vocabulary/:id', async (req, res) => {
    try {
      await Vocabulary.findByIdAndDelete(req.params.id);
      res.status(200).send('Vocabulary deleted');
    } catch (error) {
      res.status(500).send('Failed to delete vocabulary');
    }
  });

module.exports = router;
