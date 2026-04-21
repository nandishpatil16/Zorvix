const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let stats = { users:0, edits:0 };

app.get('/stats', (req,res)=> res.json(stats));

app.post('/edit', (req,res)=>{
  stats.edits++;
  res.json({success:true});
});

app.listen(5000, ()=> console.log('Server running'));
