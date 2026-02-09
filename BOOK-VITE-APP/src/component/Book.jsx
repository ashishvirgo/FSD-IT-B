import React, { useState } from 'react'
import './Book.css'
const Book = ({book}) => {
    // let count=0;
    const [count,setCount]=useState(0);
    
    function increment(){
        setCount(count+1);
        console.log(`${book.title} count=`+count);
    }
    const addtocart=()=>{
        alert(`successfully added ${book.title} ${count} Book`)
    }
  return (
    <div className='card'>
        <img src={book.image} width="200" height="200" alt={book.title}/>
      <h3>Title: {book.title}</h3>
      <h4>Price: ₹{book.price}/-</h4>
      <div>
        <button>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={addtocart}>Add to Cart</button>
    </div>
  )
}

export default Book
