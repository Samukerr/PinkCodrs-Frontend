import {useState, UseEffect} from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    }
    fetchProducts();
  }, [])

  return(
    <div>
    <h3>Product List</h3>
    {products.map((product) => (
     <div key = {product.id}>
        <h2>{Product.title}</h2>
        <p>{Product.price}</p>
        <p>{Product.category}</p>
      </div>
  ))}
  </div>
  )
}
  export default ProductList