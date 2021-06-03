import React from 'react';

export default  function Basket(props) {
    const {cartItems,onAdd,onRemove}= props;
    const itemsPrice = cartItems.reduce((a,c) => a+c.price * c.qty,0);
    
    return (
    <aside className="block col-1">
        <h2>CART ITEMS</h2>
        <div>
            {cartItems.length === 0 && <div>CART IS EMPTY</div>}
        </div>
        {cartItems.map((item) =>(
            <div key ={item.name} className ="row">
                <div className = "col-2">{item.name}</div>
                <div className = "col-2">
                    <button onClick={()=>onAdd(item)} className ="add">+</button>
                    <button onClick={()=>onRemove(item)} className ="remove">-</button>
            </div>
            


            <div className = "col-2 text-right" >
                {item.qty} x Rs{item.price.toFixed(2)}
            </div>

            </div>

        ))}
        {cartItems.length !==0 && (
            <>
            <hr></hr>
            <div className ="row">
            <div className = "col-2"><b>TOTAL PRICE</b></div>
            <div className = "col-1 text-right"><b>Rs{itemsPrice.toFixed(2)}</b></div>
            </div>
            <hr/>
            <div className = "row">
                <button onClick ={() => alert("IMPLEMENT CHECKOUT")}>
                    CHECKOUT
                </button>
            </div>

            
            </>
        )}
     </aside>
    )}
