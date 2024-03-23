import React from "react";
// import './wallHangingsPageStyle.css'; // You can create a new CSS file for this page

const CushionsPage = () => {
    const cushionsData = [
        { id: 1, name: "Floor Rug 1", price: "$20" },
        { id: 2, name: "Floor Rug 2", price: "$25" },
        // Add more products as needed
    ];

    return (
        <div>
            <h2>Cushions</h2>
            <div className="cushions-container">
                {cushionsData.map(product => (
                    <div key={product.id} className="cushion-card">
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

export default CushionsPage;
