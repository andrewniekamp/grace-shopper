import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {handleAddProduct, addProduct, addName, addPrice, addDescription, addImageURL, addQuantity, addCategory} from '../store'


/*COMPONENT*/
export const AddProduct = (props) => {
    const {productToAdd, handleSubmit, handleName, handlePrice, handleDescription, handleImageURL, handleQuantity, handleCategory} = props
    console.log(productToAdd)
  
    return(
        <form onSubmit={(event)=> handleSubmit(event, productToAdd)}>
            <label>
            Add Product Name:
                <div>
                    <input type="text" name="name" onChange={handleName}/>
                </div>
            </label>
            <label>
            Add Product Price ($USD):
                <div>
                    <input type="text" name="price" onChange ={handlePrice} />
                </div>
            </label>
            <label>
            Add Product Description:
                <div>
                    <input type="text" name="description" onChange={handleDescription}/>
                </div>
            </label>
            <label>
            Add Product Image URL:
                <div>
                    <input type="text" name="imageURL" onChange={handleImageURL}/>
                </div>
            </label>
            <label>
            Add Product Quantity:
                <div>
                    <input type="text" name="quantity" onChange={handleQuantity}/>
                </div>
            </label>
            <label>
            Add Product Category:
            </label>
                <div>
                    <input type="submit" value="Submit" />
                    <select name="category">
                        <option value="Scotch">Scotch</option>
                        <option value="Rye">Rye</option>
                        <option selected value="Bourbon">Bourbon</option>
                        <option value="Irish Whiskey">Irish Whiskey</option>
                        <option value="Japanese Whiskey">Japanese Whiskey</option>
                        <option value="Accessories">Accessories</option>
                    </select>
                </div>
        </form>
    )
  }
  

/* CONTAINER */
const mapState = (state) => {
    return {
        productToAdd: state.addProduct
    }
  }
  
  const mapDispatch = function(dispatch){
    return {
        handleSubmit(event, productToAdd){
            event.preventDefault()
            let newProduct = {
                name: event.target.name.value,
                price: (+event.target.price.value)*100,
                description: event.target.description.value,
                imageURL: event.target.imageURL.value,
                quantity: +event.target.quantity.value,
                category: event.target.category.value
            }
            console.log('!!!!!! productToAdd is: ', newProduct)
            return dispatch(handleAddProduct(newProduct))
        },
        handleName(event){
            console.log(event.target.value)
            return dispatch(addName(event))
        },
        handlePrice(event){
            console.log(event.target.value)
            return dispatch(addPrice(event))
        },
        handleDescription(event){
            console.log(event.target.value)
            return dispatch(addDescription(event))
        },
        handleImageURL(event){
            console.log(event.target.value)
            return dispatch(addImageURL(event))
        },
        handleQuantity(event){
            console.log(event.target.value)
            return dispatch(addQuantity(event))
        },
        handleCategory(event){
            console.log(event.target.value)
            return dispatch(addCategory(event))
        },
    }
  }
  export default connect(mapState, mapDispatch)(AddProduct)