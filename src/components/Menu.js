import React from 'react';

function Menu({ items }) {
  return (
    <nav>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
