import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addProduct} from '../store'


/*COMPONENT*/
export const AddProduct = (props) => {
    const {productToAdd, handleAddProduct} = props
  
    return(
        <form onClick={handleAddProduct}>
            <label>
            Add Product Name:
                <div>
                    <input type="text" name="name" />
                </div>
            </label>
            <label>
            Add Product Price ($USD):
                <div>
                    <input type="text" name="price" />
                </div>
            </label>
            <label>
            Add Product Description:
                <div>
                    <input type="text" name="description" />
                </div>
            </label>
            <label>
            Add Product Image URL:
                <div>
                    <input type="text" name="imageURL" />
                </div>
            </label>
            <label>
            Add Product Quantity:
                <div>
                    <input type="text" name="quantity" />
                </div>
            </label>
            <label>
            Add Product Category:
            </label>
            <select>
                <option value="Scotch">Scotch</option>
                <option value="Rye">Rye</option>
                <option selected value="Bourbon">Bourbon</option>
                <option value="Irish Whiskey">Irish Whiskey</option>
                <option value="Japanese Whiskey">Japanese Whiskey</option>
                <option value="Accessories">Accessories</option>
            </select>
            <input type="submit" value="Submit" />
        </form>
    )
  }
  

/* CONTAINER */
const mapState = (state) => {
    return {
        productToAdd: state.products
    }
  }
  
  const mapDispatch = function(dispatch){
    return {
        handleAddProduct(event){
        console.log('!!!!!', event.target.value)
  
        dispatch(addProduct(event.target.value))
      }
    }
  }
  export default connect(mapState, mapDispatch)(AddProduct)