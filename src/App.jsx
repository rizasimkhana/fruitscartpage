import './App.css'
import Product from './Product'

function App() {
  // intalizing product variable
  const Products=[
    {id:1,name:"Apples",image:"./src/assets/apples.png",description:"Fresh Apples" , price:30},
    {id:2,name:"oranges",image:"./src/assets/oranges.png",description:"Fresh Oranges",price:40},
    {id:3,name:"kiwi",image:"./src/assets/kiwi.png",description:"Fresh Kiwi",price:150},
    {id:4,name:"watermelon",image:"./src/assets/watermelon.png",description:"Fresh watermelons",price:290},
    {id:5,name:"pear",image:"./src/assets/pear.png",description:"Fresh pear",price:290},
   
  ]

  return (
 <div>
 <div className="container mx-auto p-4">
  <h1 className="text-3xl-font-bold mb-8 text-center bg-slate-600 text-white">Shopping Cart Page</h1>
 </div>
 {/* Product listing using props */}
 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
  {Products.map((product)=>(
    <Product key={product.id} product={product}/>
  ))}
 </div>
 </div>
  )
}

export default App
