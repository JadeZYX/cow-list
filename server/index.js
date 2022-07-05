const express = require('express');
const path = require('path');
const db = require('../database');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.get('/api/cows', (req, res) => {
  db.getAll((err,result)=>{
    if(result){
      res.json(result);
    }
    else{
      res.status(401).send('Could not get result');
    }
  })
})

app.post('/api/cows',(req,res)=>{
  db.create(req.body,(err,result)=>{
    if(err){
      res.status(401).send('Could not post item to database');
    }
    else{

      res.status(201).json(result);
    }
  })
})

app.delete('/api/cows/:id',(req,res)=>{
  db.deleteItem(req.params.id,(err,result)=>{
    if(err){
      res.status(405).send('Could not delete item')
    }
    else{
      res.status(200).send('Successfully delete item');
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
