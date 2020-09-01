import React, { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';

const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchWeather(query);

            setWeather(data);
            setQuery('');
        }
    }

    return (
        <div className="main-container">
        </div>
    );
}

export default App;