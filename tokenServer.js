// routings
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
// authentication
const googleAuth = require("google-oauth-jwt");
// accountinfo
const acc = require("./credentials.json");

const getToken = async () => {

    return new Promise(resolve => {
        googleAuth.authenticate(
            {
                email: acc.client_email,
                key: acc.private_key,
                scopes: [
                    "https://www.googleapis.com/auth/cloud-platform",
                    "https://www.googleapis.com/auth/dialogflow"
                ]
            },
            (err, token) => {
                console.log('err' + err);
                resolve(token);
            }
        );
    });
};

app.get("/token", async (req, res) => {
    let token = await getToken();
    res.send({ token });
});

app.listen(4000, () => {
    console.log("listening on 4000");
});