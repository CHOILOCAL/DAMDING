const exprss = require('express');
const app = exprss();

const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;

app.use(cors());

app.use(bodyParser.json()); // server에서 json형식으로 받아옴
app.use('/api', (req, res) =>
    res.json({username:'choihyunij'}));

app.listen(port, ()=>{
    console.log("express is running on ${port} 🟩 ");
})
