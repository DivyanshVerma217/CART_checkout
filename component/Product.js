import React from 'react'

export default function Product(props) {
    const {product,onAdd}=props;

    return (
        <div>
            <img className="small" src={product.image} alt={product.name}></img>    {/* NO PICTURE UPLOADED PLEASE MERCY*/}
            <h3>{product.name}</h3>
            <div>Rs{product.price}</div>
            <div>
                <button onClick={()=>onAdd(product)}>ADD TO CART</button>
            </div>
        </div>
    );
}
