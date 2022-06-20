import React, { useEffect, useState } from 'react';
import Products from "../Products/Products";
import './Shop.css';

const Shop = () => {
    const [product, setProduct] = useState([]);
    const [cart , setCart] = useState([]); 
    const [totalPrice, setTotalPrice] = useState(0);
    const [shpingCost , setShipingCost] = useState(0);
    const [tax , setTax] = useState(0);
    const [grandTotal , setGrandTotal] = useState(0);
    
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[]);
    
    const handleAddToCart = (prodcuts) => {
        const newCart = [...cart, prodcuts];
        setCart(newCart);

        const newPrice = totalPrice+prodcuts.price;
        setTotalPrice(newPrice);

        const newShipingCost = shpingCost+1;
        setShipingCost(newShipingCost);

    }

    useEffect(()=>{
        const newTax = totalPrice*25/100;
        setTax(newTax);
        const grandTotalCal = totalPrice+shpingCost+newTax;
        setGrandTotal(grandTotalCal);
        
    },[totalPrice]);

    return (
        <div className='shop_container'>
           <div className="products">
                {product.map(produc => <Products 
                prodcuts={produc} 
                key={produc.id} 
                handleAddToCart={handleAddToCart}
                ></Products>)}
           </div>
           <div className="summary">
                <h2>Order Summary</h2>
                <p>Selected Items: {cart.length} </p>
                <p>Total Price: ${totalPrice} </p>
                <p>Shiping Cost: ${shpingCost} </p>
                <p>Tax: ${tax}</p>

                <h3>Grand Total: ${grandTotal}</h3>
           </div>
        </div>
    );
};

export default Shop;