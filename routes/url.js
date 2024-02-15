const express = require("express");
const { handleGenerateNewShortURL, handleGetAnalytics, handleReDirectURL } = require("../controllers/url");

const router = express.Router(); 

router.post('/', handleGenerateNewShortURL);
router.get('/:shortenedID', handleReDirectURL); 
router.get('/analytics/:shortID', handleGetAnalytics);

module.exports = router;