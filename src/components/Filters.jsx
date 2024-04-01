import { useState, useEffect } from 'react';

export default function Filters() {
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    fetch('https://6602f0839d7276a75554a537.mockapi.io/api/v1/jobs')
      .then((response) => response.json())
      .then((data) => {
        setFilter(data);
      });
  }, []);

  return (
    <div>
      <h2>Filtrar profesionales</h2>
      <form>
        <label htmlFor="filter">Trabajo:</label>
        <select name="filter" id="filter">
          <option value="all">All</option>
          {filter.map(({ id, job }) => (
            <option key={id}>{job}</option>
          ))}
        </select>
      </form>
    </div>
  );
}
