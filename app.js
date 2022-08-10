const express = require('express');
const app = express()
const mongoose = require('mongoose') ;

const blogRouts = require('./routes/blogRoutes')

//reg view 
app.set('view engine', 'ejs');



//listen for req


//conect to mongodb


const dburi = 'mongodb+srv://skb-test:test12345@test.ancqk.mongodb.net/Nodejs?retryWrites=true&w=majority';

mongoose.connect(dburi, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => app.listen(3000))
.catch((err) => console.log(err));


//middleware & static files

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
//app.use(morgan('dev'));



app.get('/', (req, res)=> {
   
    res.redirect('/blogs')
    
    
    /*
     const blogs = [
         {title: 'blog1', snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non sapien turpis. Ut sit amet ex fermentum, pellentesque metus vel, lacinia ipsum. Aenean sollicitudin rhoncus ultrices. Duis dictum viverra libero ut semper.'},
         {title: 'blog2', snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non sapien turpis. Ut sit amet ex fermentum, pellentesque metus vel, lacinia ipsum. Aenean sollicitudin rhoncus ultrices. Duis dictum viverra libero ut semper.'},
         {title: 'blog3', snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non sapien turpis. Ut sit amet ex fermentum, pellentesque metus vel, lacinia ipsum. Aenean sollicitudin rhoncus ultrices. Duis dictum viverra libero ut semper.'}
     ]
 
 
     res.render('index', {title: 'home ', blogs})*/
 
 
 });
 app.get('/about', (req, res)=> {
     res.render('about', {title: 'about '})
 });
 

 //blog routs
app.use('/blogs', blogRouts)



//404

app.use((req,res)=>{
    res.status(404).render('404', {title: '404'})
})