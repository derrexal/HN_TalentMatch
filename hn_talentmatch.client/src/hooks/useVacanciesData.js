import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = () => {
    const [vacancyData, setVacancyData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const vacancyResponse = await axios.get('vacancies/GetAll');
                setVacancyData(vacancyResponse.data);

                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();

    }, []);

    const getVacancyById = async (id) => {
        try {
            const response = await axios.get(`vacancies/GetById?id=${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    };


    return { vacancyData, loading, error, getVacancyById };
}

export default useData;
