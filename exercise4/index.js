const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
const { v4: uuidv4 } = require("uuid");

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

let product = [{
  id: 1,
  name: "kattila",
  manufacturer: "Pirkka",
  category: "kitchen",
  description: "5/5",
  price: "12€"
}]

let user = [{
  id: 1,
  name: "TestUser"
}]
let invoice = [{
  id: 1,
  total: "3.50€"
}]
let ProductId = product.length;
let userId = user.length;
let invoiceId = invoice.length;


app.get("/all", (req, res) => {
    res.send("tähän kaikki");
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
// POST product (name manufacturer category description price
app.post("/product", (req, res) => {
  console.log(req.params);
  console.log(req.body);
  ProductId++;
  product.push({
    id: ProductId,
    name: req.body.name,
    manufacturer: req.body.manufacturer,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price
  })
  console.log("tuotteen nimi: " + req.body.name);
  res.send("Creating new product");
})

//GET all
app.get("/product", (req, res) => {
  console.log(req.params);
  res.json(product);
})

// GET single product
app.get("/product/:id", (req, res) => { 
  console.log(req.params);
})
// modify 
app.put("/product/:id", (req, res) => { 
  console.log(req.params);
  res.send("Modifying product")
})


//USER Create user (POST)

app.post("/user", (req, res) => {
  console.log(req.params);
  console.log(req.body);
  userId++;
  user.push({
    id: userId,
    name: req.body.name
  })
  console.log("käyttäjä: " + req.body.name);
  res.send("Creating new user");
})

//search

//purchace:
//create invoice with products and price
app.post("user/invoice", (req, res) => {
  console.log(req.params);
  console.log(req.body);
  invoice.push({
    id: invoiceId,
    total: req.body.total
  })
  console.log("kuitti " + invoiceId);
  res.send("Creating new kuitti");
})


//GET invoices based on user
app.get("user/invoice", (req, res) => {
  res.send(req.params)
  res.send("Invoices from user")
}
)



//GET single invoice of user

app.get("user/invoice/id:", (req, res) => {
  res.send("Invoices from user:" + req.params.id)
}
)
//Delete invoice DELETE/invoice/3

app.delete("user/invoice/id:", (req,res) =>{
  res.send("deleting");
})