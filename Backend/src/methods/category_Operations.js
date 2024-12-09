const News = require('../model/NewsSchema');
const Category = require('../model/categoryschema');

const asyncHandler = require("express-async-handler");

exports.category_news_list = asyncHandler(async (req, res, next) => {
    const [category, categoryNews] = await Promise.all([
      Category.findById(req.params.id).exec(),
      News.find({ category: req.params.id }, "heading subheading author").exec(),
    ]);
  
    res.json({ category, categoryNews });
  });

  exports.categories = asyncHandler(async (req, res, next) => {
    const category = await  Category.find();
    // const [category] = await Promise.all([
    //   Category.findAll().exec(),
    //   // News.find({  }, "heading subheading author").exec(),
    // ]);
  
    res.json(category);
  });
  
  exports.addCategory = asyncHandler(async (req, res, next) => {
    try {
        const { name } = req.body; // Destructure `name` from the request body
        if (!name) {
            return res.status(400).json({ message: "Category name is required" });
        }

        const category = new Category({ title: name }); // Use `title` as defined in your schema
        const result = await category.save(); // Save the category to the database
        console.log("Category saved:", result);

        res.status(201).json({ success: true, data: result }); // Send success response
    } catch (error) {
        next(error); // Pass error to the global error handler
    }
});
