const URL = require("../models/url");
const shortid = require("shortid");

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;

    if (!body) {
        return res.status(400).json({ error: "URL not found" });
    }

    const existingURL = await URL.findOne({ reDirect: body.url });

    if (existingURL) {
        return res.json({ id: existingURL.shortID });  
    }

    let shortID = shortid();
    while (await URL.findOne({ shortID })) {
        // If shortID already exists, generate a new one
        shortID = shortid();
    }

    await URL.create({
        shortID: shortID,
        reDirect: body.url,
        clicks: 0
    });

    return res.json({ id: shortID });
}

async function handleReDirectURL(req, res) {
    const shortID = req.params.shortID;

    const entry = await URL.findOneAndUpdate(
        { shortID },
        { $inc: { clicks: 1 } },
        { new: true }
    );

    if (!entry) {
        return res.status(404).json({ error: "Short URL not found" });
    }

    res.redirect(entry.reDirect);
}

async function handleGetAnalytics(req, res) {
    const shortID = req.params.shortID;

    const result = await URL.findOne({ shortID });

    if (!result) {
        return res.status(404).json({ error: "Short URL not found" });
    }

    return res.json({ clicks: result.clicks });
}

module.exports = {
    handleGenerateNewShortURL,
    handleReDirectURL,
    handleGetAnalytics
};
