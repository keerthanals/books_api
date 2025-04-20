console.log('validateBook middleware loaded');

const validateBook =(req,res,next)=>{
    const { title, author,publishedYear}=req.body;
    if( !title || !author || !publishedYear ){
        return res.status(400).send(' title, author,publishedYear are required')
    }
        next();
};

module.exports = validateBook;