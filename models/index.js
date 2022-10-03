// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

Product.belongsToMany(Tag, { through: ProductTag });

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)
Tag.belongsToMany(Product, { through: ProductTag });
// Tags belongToMany Products (through ProductTag)

// await Product.sync();
// await Category.sync();
// await Tag.sync();
// await ProductTag.sync();

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

