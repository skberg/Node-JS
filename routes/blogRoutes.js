//req

const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController')


/*
//finding only one
app.get('/add-blog', (req ,res) =>{
    const blog = new Blog({
        title: 'new blog',
        snippet: 'about new',
        body: ' more about the blog'
    });
    blog.save()
    .then((result) =>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})

//finding all the blogs
app.get('/all-blogs', (req ,res) =>{
    Blog.find()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})

//only finding by id
app.get('/singel',(req,res) =>{
    Blog.findById('62bad9522d6ecb77968b9555')
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})*/









 
 //blog rout
 
 router.get('/', blogController.blog_index)
 
 
 
 //post request to db
 router.post('/',  blogController.blog_create_post)
 
 //create new blog
 router.get('/create', blogController.blog_create_get)



 ///geet details blog
 
 router.get('/:id',  blogController.blog_details)
 
 
 
 
 //delete

 router.delete('/:id', blogController.blog_delete);
 
 
 


 module.exports = router;