import React, { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Table from './components/Table';
import Menu from './components/Menu';

function App() {
  const [inputValue, setInputValue] = useState('');
  const data = [
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 20 },
  ];
  const columns = [
    { key: 'name', header: 'Nombre' },
    { key: 'price', header: 'Precio' },
  ];
  const menuItems = [
    { id: 1, label: 'Inicio', link: '/' },
    { id: 2, label: 'Productos', link: '/productos' },
  ];
  
  return (
    <div>
      
      <Menu items={menuItems} />
      <Input label="Entrada" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <Button text="Enviar" onClick={() => alert(inputValue)} />
      <Table data={data} columns={columns} />
      <button onClick={() => alert('Soy el Producto 1')}>producto</button>
    </div>
  );


}

export default App;
