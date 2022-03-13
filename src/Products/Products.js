import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((allProducts) => {
                console.log(allProducts);

                setProducts(allProducts);
            });
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <div className="row">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4"
                    >
                        <Link className="card" to={`/products/${product.id}`}>
                            <div className="card-img-top">
                                <img src={product.image} alt="product" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">
                                    {product.description}
                                </p>
                                <p className="card-text">{product.price} Lei</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

// {/* <Link
//     to={`/products/${product.id}`}
//     key={product.id}
//     style={{ display: "block" }}
// >
//     <img src={product.images[0]} width="200px" alt="product" />
//     <h3>{product.title}</h3>
//     <p>{product.description}</p>
//     <small>{product.price} Lei</small>
// </Link>; */}

export default Products;
