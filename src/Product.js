import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id, title, image, price, rating}) {   // destructuring this is the way of using props
  
    const [{ basket }, dispatch] = useStateValue();

    


    const addToBasket =()=>{
        //dispatch the item to the data layer
        dispatch({  //this dispatch an object in the data layer
type :'ADD_TO_BASKET',
item:{ //these are the items that we want to push to the data layer
    id:id,
    title:title,  //these id, image, price are all props that we have passed
    image:image,
    price:price,
    rating:rating,

}
        })
    }
  
  
  
  
    //Here we are using props from the Home.js to Product.js
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}

                </div>
            </div>
            <img src={image} alt=''/>
        <button onClick={addToBasket}>Add to Basket</button>
            
        </div>
    )
}

export default Product
