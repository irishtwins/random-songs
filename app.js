const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// cors elimination middleware
app.use(cors({ credentials: true, origin: true }));

app.get("/search/:start/:end", (req, res) => {
    let promises = [];
    for (let i = Number(req.params.start); i <= Number(req.params.end); ++i) {
    promises.push(axios.get(`https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=${i}`));
    }

    Promise.allSettled(promises).then((data) => {
        res.json(data.map((x) => x?.value?.data?.artist ?? null));
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
