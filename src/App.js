import axios from "axios";
import React, { useReducer } from 'react'
import {useEffect} from 'react'
import cartReducer from './reducers/cartReducer';
import './App.css';
import Products from './components/products';
import Cart from './components/cart';

function App() {
  const [state,dispatch]=useReducer(cartReducer,{
    products:[],
    cart:[],
  });
  console.log(state)
    const fetchData=async()=>{
        const {data}= await axios.get("https://dummyjson.com/products");
        dispatch({
          type:"ADD_PRODUCTS",
          payload:data.products,
        })
    }

    useEffect(()=>{fetchData()},[])
    
  return (
    <div style={{display:"flex"}}>
    <Products state={state} dispatch={dispatch}/>
    <Cart state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
