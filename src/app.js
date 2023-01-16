const express = require('express');
const mainRouter = require('./routes/main');
const methodOverride  = require('method-override');
const session = require('express-session');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(methodOverride('_method'));
app.use(session({
secret : 'Challenge-Book',
resave : true,
saveUninitialized : true,
saveUninitializedState : true,
}));
app.use('/', mainRouter);


app.listen(3000, () => {
  console.log('listening in http://localhost:3000');
});
