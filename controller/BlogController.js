const Blog = require('../moldels/blog')

const blogIndex =(req,res)=>{
    Blog.find().sort({createdAt:-1})
    .then((result)=>{
        res.render('index',{title:"All Potatos",blogs:result})
    })
}

const blogCreatePost = (req,res)=>{
    const blog = new Blog({...req.body})

    blog.save()
        .then((result)=>{
            res.redirect("/")
        })
        .catch(err=>{
            console.error(err);
        })
    
}

const blogDetails = (req,res)=>{
    Blog.findById(req.params.id)
    .then((result)=>{
        console.log(result);
        res.render('single-blog',{blog:result})
    })
    .catch((err)=>{
        console.error(err);
    })   
}

const blogCreateGet = (req,res)=>{
    res.render('add_Blog')
}

module.exports = {
    blogIndex,
    blogDetails,
    blogCreatePost,
    blogCreateGet
}