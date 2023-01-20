
const Product = ({key, product}) => {
  return (
    <div className="card">
        <div>
            <p style={{color: 'black'}}>
              {product.category}   | 
              <span style={{color: 'red'}}><button className="btn" value="Delete" /></span>
            </p> 
        </div>
        <img src={product.image} alt="Denim Jeans" style={{width:80}} />
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        <p>Some text about the jeans..</p>
        <p><button>Add to Cart</button></p>
    </div>
  )
}

export default Product
