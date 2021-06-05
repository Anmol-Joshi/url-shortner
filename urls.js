/* eslint-disable object-shorthand */
/* eslint-disable no-console */
// eslint-disable-next-line import/no-unresolved
const express = require('express');
const shortid = require('shortid');
const { urls } = require('./url_data');

const router = express.Router();

router.get('/:shortUrlId', (req, res) => {
    // console.log('**inside get shortUrlId is', req.params.shortUrlId);
    const longUrl = urls[req.params.shortUrlId];
    // console.log('**inside get longUrl is ', longUrl);
    // console.log('data inside req.params is',req.params)
    // console.log('data inside req.params.shortUrlId is',req.params.shortUrlId)
    if (longUrl) {
        // res.send({
        //     shortUrl: `http://localhost:3000/urls/${req.params.shortUrlId}`,
        //     longUrl: longUrl,
        // });
        // console.log(`longUrl is ${longUrl}`);
        // console.log(longUrl)
        res.redirect(`${longUrl}`);
    } else {
        res.status(404).send("Url doesn't exist");
    }
    // console.log(req.params.shortUrlId)
    // res.send(urls[shortUrlId]);
});

router.post('/', (req, res) => {
    // console.log('req inside port is',req)
    const data = req.body;
    // console.log('data inside post is', data)
    // eslint-disable-next-line prefer-destructuring
    const longUrl = data.longUrl;
    const shortUrl = shortid.generate();

    urls[shortUrl] = longUrl;
    // console.log('urls inside post is',urls);
    // console.log('shortUrl inside post is',shortUrl);
    // console.log('longUrl inside post is',longUrl);
    res.send({ shortUrl: `https://ur--l.herokuapp.com/urls/${shortUrl}` });
});
router.get('/', (req, res) => {
    res.send(urls);
});

module.exports = router;
