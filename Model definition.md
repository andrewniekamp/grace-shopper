# PRODUCT MODEL 

NAME PRICE DESCRIPTION IMG URL CATEGORY ID STOCK 

Product.belongsTo(Category)
Category.hasMany(Product)

# CATEGORY MODEL 
NAME DESCRIPTION 

# USER MODEL
 * like in boilerplate 

# ORDER MODEL 

PRODUCT ID ORDER ID 

Join table( order => product )