
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { setTheme, toggleTheme } from './slices/ThemeSlice';
import { useEffect } from 'react';
import { Products } from './thunks/productsThunk';

function App() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state)=>state.products)
  
  useEffect(() => { 
    dispatch(Products());
  }, []);

  if (loading === 'pending')
    return 'Loading...';
  
  if (loading === 'rejected')
    return error;

  return (
    <div className="App">
      <button onClick={() => dispatch(toggleTheme())}>click me</button>
      <button onClick={() => dispatch(setTheme('dark'))}>click me 2</button>
      {theme.value}

      {products.map(product => <div key={product.id}>{product.title}</div> )}
    </div>
  );
}

export default App;
