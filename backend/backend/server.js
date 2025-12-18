const express = require('express');
const app = express();
app.get('/', (req,res)=>res.send('KPI Backend Running'));
app.listen(3001, ()=>console.log('Backend running on 3001'));
