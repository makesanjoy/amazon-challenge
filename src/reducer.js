
export const initialState = {
  basket: [],
  user: null
};

// Selector
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    
    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: [],
        user: null
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);

      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        )
      }

      return {
        ...state,
        basket: newBasket
      }
      
    
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }

    default:
      return state;
  }
};

export default reducer;


// //Redux and context APi are ot the same thing but uses the same pattern
// export const initialState = {  //this wil create the initial state
//     basket: [],  //this will start with an empty basket

//   };

//   //Selector
//   export const getBasketTotal = (basket) =>
//   // the purpose of reducer(function) is it maps(iterates) through the basket and will tell the total
//   basket?.reduce((amount, item)=> //we will be having initial amount and iterates through each  item
//   item.price + amount, 0  // 0 is the initial amount it is just a fancy way of writing for loop and then incrementing everything
//   );     




//   const reducer = (state, action) => {
//       //Here state is the state of the application 
//       //action is what we are trying to do eg trying to add to the basket or remove from the basket
//     console.log(action);
//     switch (action.type) { //switch is based on the action.type
//     case 'ADD_TO_BASKET':
//     return {
//         ...state,
//         basket:[...state.basket, action.item ]  //this line changes the basket before to when items are added to basket
//         //...state.basket is the previous state whereas action.item is updating the basket with current item
//     };
//     case 'REMOVE_FROM_BASKET' :
//      const index = state.basket.findIndex(
//        (basketItem)=> basketItem.id === action.id  //it will only find the first one that matches and returns
//      );
//      let newBasket = [...state.basket];//copy the basket into a temporary variable
      
//      if (index >=0){ //it means item is found inside the basket
// newBasket.splice(index,1); //it only cut one at a time
//      } else{
//        console.warn(
//          `Cant remove product (id:${action.id}) as its not in the basket`
//        )
//      }

// default:
//     return state; 

//     }
//   }; 
//   export default reducer;