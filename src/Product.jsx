function Product({product}){
    return(
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 grid place-content-center transition-transform-0.3s hover:scale-125">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover mx-auto" style={{width:"212px",height:"212px"}}/>
    <div className="px-6 py-4 text-center">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">&#8377;{product.price}</p>
      </div>
      <a className="w-full bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-700" href="https://www.bigbasket.com/?nc=logo" target="_blank">Add</a>
  </div>
    )
}
export default Product