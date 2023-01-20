
import './App.css';
import AllProducts from './components/AllProducts'
// import Header from './componenets/Header';
// import ProductsList from './componenets/Products';
import {useState, useEffect} from 'react'


function App() {

  

  const [products, setProducts] = useState([
    
  ]); 

  useEffect ( () => {
    const getProdcuts = async () => {
      const productsFromServer= await fetchProdcuts(); 

        setProducts(productsFromServer)

    }

    getProdcuts()
  }, []);


  const fetchProdcuts = async () => {
    const res = await fetch("http://localhost:3000/data");
    const data = await res.json()


    return data; 
    
  }

 
  return (
    <div className="App">
      <AllProducts  products={products} />
      {/* <Header /> */}
      {/* <ProductsList products={[{id:1, title:"t1"}]} /> */}
    </div>
  );
}

export default App;
