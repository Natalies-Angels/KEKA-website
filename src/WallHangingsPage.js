import React from "react";
// import './wallHangingsStyle.css'; 

const WallHangingsPage = () => {
    const wallHangingsData = [
        { id: 1, name: "Wall Hanging 1", price: "$20" },
        { id: 2, name: "Wall Hanging 2", price: "$25" },
        // Add more products as needed
    ];

    return (
        <div>
            <h2>Wall Hangings</h2>
            <div className="wall-hangings-container">
                {wallHangingsData.map(product => (
                    <div key={product.id} className="wall-hanging-card">
                        <img src={`#image${product.id}`} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WallHangingsPage;
