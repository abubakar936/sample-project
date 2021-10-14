const express = require("express");
const cors = require('cors');

const app = express();
//------Enable CORS-----//

var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions));

//------express middleware-----//
app.use(express.json());
var number = [1000, 2000, 3000, 4000]

app.get('/getNumbers', (req, res) => {
    res.json({ data: number });
});
app.post('/addNumber', (req, res) => {
    if (!req.body.number) {
        return res.status(400).json({ message: "please add number" })
    }
    number.push(req.body.number)
    return res.status(200).json({ data: number })
})
app.get('/add_Number/:number', (req, res) => {
    if (!req.params.number) {
        return res.status(400).json({ message: "please add number" })
    }
    number.push(req.params.number)
    return res.status(200).json({ data: number })
})
app.get('/', (req, res) => {
    res.send("helloo from sample project....");
});

app.listen(process.env.PORT || 8001, () => {
    console.log("listening on port 8001")
    // console.log(process.env.NODE_ENV)  
});