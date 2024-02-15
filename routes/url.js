const exress = require("express");
const { handleGenerateNewShortURL, handleGetAnalytics, handleReDirectURL } = require("../controllers/url");
const { handleReDirectURL } = require("../controllers/url");

const router = express.router();

router.post('/', handleGenerateNewShortURL);
router.get('/shortenendID', handleReDirectURL);
router.get('/analytics/:shortID', handleGetAnalytics);

module.exports = router;