import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProfuctInfoPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({ images: [] });

  useEffect(() => {
    fetch("https://dummyjson.com/products/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <div className="content">
      <div>
        <h2>{product.title}</h2>
        <img src={product.images[0]} />
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
      </div>
    </div>
  );
}
export default ProfuctInfoPage;
