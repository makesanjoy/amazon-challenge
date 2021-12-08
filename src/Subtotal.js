import React from 'react'
import CurrencyFormat from "react-currency-format"
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider'
import { useNavigate } from 'react-router-dom';
import "./Subtotal.css"

function Subtotal() {

  const navigate = useNavigate();
const [{basket},dispatch] =useStateValue();

    return (
        <div className='subtotal'>
             <CurrencyFormat
        renderText={(value) => (  //this is what extually renders on the screen
//here the value is the props which is passed in the below

          <>
            <p>
           
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2} //here tht decimal scale is 2 means the no. after the . eg:23.23
        value={getBasketTotal(basket)} //sets value equal to 0
        displayType={"text"}
        thousandSeparator={true} //this will give coma eg 12,300
        prefix={"$"}
      />

      <button onClick={e => navigate('/payment')} >Proceed to Checkout</button>
            
        </div>
    )
}

export default Subtotal
