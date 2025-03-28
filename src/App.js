import React, { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import './styles.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const data = [
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 20 },
  ];

  return (
    <div className="container">
      <header>Mi Tienda</header>
      <div className="input-section">
        <Input
          label="Entrada"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="button-section">
        <Button text="Enviar" onClick={() => alert(inputValue)} />
      </div>
      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>
                  <button
                    onClick={() => alert(`Soy el Producto ${product.id}`)}
                    className="product-button"
                  >
                    Alerta
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}export default App;