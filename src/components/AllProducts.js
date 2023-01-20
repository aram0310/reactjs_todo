import Product from "./Product"

const AllProducts = ({products}) => {

  return (

    <div className="container">
       
        {products.map( (product) => (
            
            <Product 
                key={product.id} 
                product={product} 
            />
        ))}
        
    </div>

  )
}

export default AllProducts
