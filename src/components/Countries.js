import React, { useEffect, useState } from 'react';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([])

    useEffect(() => (fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setData(data))), [])



    return (
        <div className='countries'>
            <ul className='countries-list'>
                {data.map((country) => (
                    <Card country={country} key={country.population} />
                ))}
            </ul>
        </div>
    );
};

export default Countries;