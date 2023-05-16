import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { MyRoutes } from './routes/routes'
import { Header } from './components/Produc/Header'
import { ProductList } from './components/Produc/ProductList'
import { Home } from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)
  const [allProducts, setAllProducts]= useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  

  return (
    <div className='app'>
     
     
    
         
      <>
      <MyRoutes/>
      <>
         <Header 
          allProducts={allProducts} 
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
          />
         <ProductList 
          allProducts={allProducts} 
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
          />

       </>

      </>
      
      
    </div>
    
  );
};
  

  export default App;
  

