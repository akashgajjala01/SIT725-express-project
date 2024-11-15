const express = require('express')
const app = express()
const port = 3000
app.use(express.json());

app.get("/addTwoNumbers", (req, res)  => {
    let num1=req.query.num1;
    let num2=req.query.num2;

    res.send({Data: parseInt(num1)+parseInt(num2),statusCode: 200,message: "success",});
});

app.listen(port, () => {
  console.log(`Express server started`);
})