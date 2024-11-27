import './App.css'
import Product from './Product'

function App() {
  // intalizing product variable
  const Products=[
    {id:1,name:"Apples",image:"https://static.scientificamerican.com/dam/m/900c2da7b85fe1a/original/apples_on_wooden_table.jpg?m=1729785707.414",description:"Fresh Apples" , price:30},
    {id:2,name:"oranges",image:"https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg",description:"Fresh Oranges",price:40},
    {id:3,name:"kiwi",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfg4tulOMjUjwJ6oFrBZiEVqEOoMmE2vWL6g&s",description:"Fresh Kiwi",price:150},
    {id:3,name:"pineapples",image:"https://images2.minutemediacdn.com/image/upload/c_crop,w_6000,h_3375,x_0,y_482/v1684341694/images/voltaxMediaLibrary/mmsport/mentalfloss/01h0n9d2b8aet9amr049.jpg",description:"Fresh pineapples",price:150},
    {id:4,name:"watermelon",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvg01M7DXooe2LsGFoCVITVzz1twBUO7QZ-g&s",description:"Fresh watermelons",price:290},
    {id:5,name:"pear",image:"https://www.producemarketguide.com/media/user_RZKVrm5KkV/22476/pears_commodity-page.png",description:"Fresh pear",price:290},
   
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
