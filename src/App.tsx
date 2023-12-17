import React from 'react';
import './App.css';
import { FirstComponent } from './components';
import { ProductTable } from './components/ProductTable/ProductTable';

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <ProductTable />
    </div>
  );
}

export default App;
