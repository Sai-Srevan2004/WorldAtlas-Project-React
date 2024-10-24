import React, { useEffect, useState } from 'react';
import '../Css/Country.css';
import { Link } from 'react-router-dom';
import Loader from '../Components/Loader';

const Country = () => {
  const [dta, setDta] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [sort,setSort]=useState('')

  const fetchData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags");
      const data = await response.json();
      setDta(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  let filteredData = [];

  if (filter === 'all') {
    filteredData = [...dta];
  } else {
    filteredData = dta.filter((z) => z.region === filter);
  }

  filteredData = filteredData.filter((c) => c.name.common.toLowerCase().includes(search.toLowerCase())); // Assign filtered search result
  
  if(sort==='asc'){
     filteredData=filteredData.sort((z1,z2)=>z1.name.common.localeCompare(z2.name.common))
  }
  
  if(sort==='des'){
    filteredData=filteredData.sort((z1,z2)=>z2.name.common.localeCompare(z1.name.common))

  }


  return (
    <div>
      <div className="top-div">
        <input 
          onChange={(e) => setSearch(e.target.value)} 
          type="search" 
          name="search" 
          className="search" 
          placeholder="Search by country name" 
          value={search} 
        />
        <button title='sort ascending order' onClick={()=>setSort('asc')} className="btn">Asc</button>
        <button title='sort descending order' onClick={()=>setSort('des')} className="btn">Dec</button>
        <label htmlFor="filter">
          <select 
            onChange={(e) => setFilter(e.target.value)} 
            name="filter" 
            className="filter" 
            value={filter} 
            id="filter"
          >
            <option className="select" value="all">All</option>
            <option className="select" value="Africa">Africa</option>
            <option className="select" value="Europe">Europe</option>
            <option className="select" value="Americas">Americas</option> {/* Corrected "Americans" to "Americas" */}
            <option className="select" value="Asia">Asia</option>
            <option className="select" value="Oceania">Oceania</option>
          </select>
        </label>
      </div>
      <div className="country-cards-container">
        {loading ? <Loader /> :
          filteredData.map((d, i) => (
            <div key={i} className="country-card">
              <div className="img-div">
                <img className="img" src={d.flags.png} alt={d.name.common} />
              </div>
              <p>
                <strong>Country</strong>: <span className="country">
                  <strong>{(d.name.common.length > 10) ? `${d.name.common.substring(0, 10)}...` : d.name.common}</strong>
                </span>
              </p>
              <p>Capital: <span>{d.capital ? d.capital[0] : 'N/A'}</span></p> {/* Added fallback for missing capital */}
              <p>Population: <span>{d.population}</span></p>
              <p>Region: <span>{d.region}</span></p>
              <Link to={`/country/${d.name.common}`}>
              <button className="read-more">
                Read More &#8594;
              </button>
              </Link>

  
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Country;
