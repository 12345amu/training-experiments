const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req,res) =>{
    res.send("hello world")
})

const products = [
    {
        id:1,
        name:"mi"
    },
    {
        id:2,
        name:"iphone"
    },
    {
        id:3,
        name:"realme"
    }
]

app.get('/products', (req,res)=>{
    res.json(products)
})

app.get('/products/:id',(req,res)=>{
    const newData = products.filter(item => item.id.toString() === req.params.id)
    return res.send(newData);
})

app.post('/addproducts',(req,res)=>{
    const {id,name} = req.body;
    console.log(id,name);
    return res.send('data stored !!');
})
app.listen(5000, () => console.log('server running...'));