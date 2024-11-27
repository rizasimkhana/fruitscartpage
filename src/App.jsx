import './App.css'
import Product from './Product'

function App() {
  // intalizing product variable
  const Products=[
    {id:1,name:"Apples",image:"../images/apples.png",description:"Fresh Apples" , price:30},
    {id:2,name:"oranges",image:"../images/oranges.png",description:"Fresh Oranges",price:40},
    {id:3,name:"kiwi",image:"../images//kiwi.png",description:"Fresh Kiwi",price:150},
    {id:3,name:"pineapples",image:"../images/pine.png",description:"Fresh pineapples",price:150},
    {id:4,name:"watermelon",image:"../images/watermelon.png",description:"Fresh watermelons",price:290},
    {id:5,name:"pear",image:"../images/pear.png",description:"Fresh pear",price:290},
   
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
