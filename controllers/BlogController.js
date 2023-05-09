const BlogModel = require("../models/Blog");

exports.getAllBlogs = async (req, res) => {
  const blogs = await BlogModel.find();
  if(!blogs) return res.send("Blog");
  if(!req.query.search) 
    res.render("index", { blogs });
  else {
    let value = new RegExp(req.query.search, "gi");
    let results = [];
    for(let blog of blogs){
      const title = blog.title || "";
      if(title.match(value)) results.push(blog);
    }
    res.render("index", { blogs: results });
  }
};