import {useState} from "react";


function ProductSearch() {
  const [query, setQuery] = useState("")
  const[results, setResults] = useState([]);

  async function nameSearch() {
    const res = await fetch("https://dummyjson.com/products/search?q=" + query);
    const data = await res.json();
    setResults(data.products);
  }

  return(
    <div>
      <input>
      value = {query}
      onChange = {(e) => setQuery(e.target.value)}
      placeholder = "Search Product"
      </input>

      <button onClick={nameSearch}>Search</button>
      results.map() => (
        <div key = {product.id}>
        <h2>{Product.title}</h2>
        <p>{Product.price}</p>
        <p>{Product.category}</p>
        </div>
      )
    </div>
  )

  export default ProductSearch