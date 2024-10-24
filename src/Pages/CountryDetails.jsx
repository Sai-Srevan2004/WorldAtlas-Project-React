


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Css/CountryDetails.css'
import Loader from '../Components/Loader';
const CountryDetails = () => {
  const { id } = useParams();
  const [ct, setCt] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${id}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`);
      const data = await response.json();
      setCt(data[0]); // assuming the API returns an array and you want the first country object
      console.log(data[0]);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) return <Loader/>;
  if (!ct) return <div>No country data found</div>;

  // Handling native names, currencies, and languages
  const nativeNames = ct.name.nativeName && Object.values(ct.name.nativeName).map((nameObj) => nameObj.common).join(", ");
  const currencies = ct.currencies && Object.values(ct.currencies).map((currency) => currency.name).join(", ");
  const languages = ct.languages && Object.values(ct.languages).join(", ");

  return (
    <div>
      <div className="country-details">
        <div className="flag">
          <img src={ct.flags.png} alt={`${ct.name.common} flag`} />
        </div>
        <div className="details">
          <h1>{ct.name.common}</h1>
          <ul>
            <li>Native Names: <span>{nativeNames}</span></li>
            <li>Population: <span>{ct.population}</span></li>
            <li>Region: <span>{ct.region}</span></li>
            <li>Sub Region: <span>{ct.subregion}</span></li>
            <li>Capital: <span>{ct.capital ? ct.capital[0] : "N/A"}</span></li>
            <li>Top Level Domain: <span>{ct.tld ? ct.tld.join(", ") : "N/A"}</span></li>
            <li>Currencies: <span>{currencies}</span></li>
            <li>Languages: <span>{languages}</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
