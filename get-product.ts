// Product type (simplified version)
type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  rating: number;
};


type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

async function getProducts(): Promise<ProductsResponse> {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data: ProductsResponse = await response.json();

    console.log(data);

    return data;

  } catch (error) {
    console.error("Can't find product",);
    throw error;
  }

}
getProducts()

//adding a new product
async function addProduct() {
  const res = await fetch("https://dummyjson.com/products",{
    method: "POST",
    headers: {"Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "eyeshadow",
      description: "The eyeshadow is a cosmetic product that is applied on the eyelids to enhance the eyes' appearance. It comes in various colors and finishes, allowing individuals to create different looks, from natural to dramatic.",
      price: 150,
      stock: 100,
      rating: 4.2
    })
})
  const data = await res.json();
  console.log(data);
}

//updating an existing product

async function updateProduct() {
  const res = await fetch("https://dummyjson.com/products/2",{
    method: "PUT",
    headers: {"Content-Type": "application/json"
    },
    body: JSON.stringify({
      stock: 20,
      rating: 5.0
    })
}) 
  const data = await res.json()
  console.log(data);
}

//deleting a product
async function deleteProduct() {
const res = await fetch("https://dummyjson.com/products",{
    method: "DELETE",
  
})
const data = await res.json()
console.log(data);
}