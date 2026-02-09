import React, { useEffect,useState } from 'react'
import Cart from './Cart';
import './Itemlist.css'
const ItemList = () => {
    const [items,setItems]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>{
            setItems(data);
        })
    },[])
  return (
    <div className='itemlist'>
      {
        items.map((b,i)=>(
            <Cart key={i} item={b}/>
        ))
      }
    </div>
  )
}

export default ItemList
