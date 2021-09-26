const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/authRouter')
const { requireAuth, checkUser } = require('./middleware/authMiddleware');


let mongoDB = 'mongodb+srv://spritan:spritan@cluster0.ydip5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true},() => {
  console.log('Connected to MongoDB')
});



//Get the default connection
//Bind connection to error event (to get notification of connection errors)
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

const port = process.env.port || 5000;
// app.use(express.static('AASHROY-MAIN'));
app.use(cors());
app.use(express.json());
app.use(cookieParser());




// app.get('/api/auth/login')
// app.get('/setcookie', (req, res) => {
//   res.cookie(`Cookie token name`,`encrypted cookie string Value`);
//   res.send('Cookie have been saved successfully');
// });
// app.get('/', (req,res) => {
//   // res.sendFile('/home/rupangkan/Repose/Codes/AASHROY-main/index.html')
//   // console.log(__dirname)
//   res.redirect('../index.html')
// })

app.use(authRouter);
app.get('*', checkUser);
app.get('../addReport', requireAuth, (req, res) => res.render(''));


app.get('/', (req,res) => {
  res.send("Auth route working")
})

app.listen(port,() => {
  console.log(`App listening on http://localhost:${port}`);
})