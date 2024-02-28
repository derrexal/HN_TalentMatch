import { useState, useEffect } from 'react';
import axios from 'axios';

const useWeatherData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('resumes/GetAll');
                setData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();

    }, []);

    return { data, loading, error };
}

export default useWeatherData;
