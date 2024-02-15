const URL = require("..url/models/url");
const shortid = require("shortid");

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    
    if(!body) {
        return res.status(400).json({ error : "URL not found" });
    }

    const shortID = shortid();

    await URL.create({
        shortID : shortID,
        reDirected : body.url,
    });

    return res.json({ id : shortID });
}

async function handleReDirectURL(req, res) {
    const shortID = req.params.shortID;

    const entry = await URL.findOneAndUpdate(
    {
        shortID
    },

    {
        clicks: clicks + 1
    }    
    );

    res.redirect(entry.reDirect);
}

async function handleGetAnalytics (req, res) {
    const shortID = req.params.shortID;

    const result = await URL.findOne({
        shortID
    });

    return res.json({ clicks : result.clicks })
}

module.exports = {
    handleGenerateNewShortURL,
    handleReDirectURL,
    handleGetAnalytics
};
