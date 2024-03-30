import { useState, useEffect } from 'react';

export default function Filters() {
  const [profesionals, setProfesionals] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect

  return (
    <aside className="">
      <div>
        <label htmlFor="">Precio a partir de:</label>
        <input type="range" id="" min="0" max="1000" onChange="" value="" />
        <span>$</span>
      </div>

      <div>
        <label htmlFor={''}>Categoría</label>
        <select id={''} onChange={''}>
          <option value="all">Todas</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </aside>
  );
}
