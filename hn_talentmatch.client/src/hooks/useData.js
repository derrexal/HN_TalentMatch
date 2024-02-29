import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = () => {
    const [resumeData, setResumeData] = useState([]);
    const [vacancyData, setVacancyData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resumeResponse = await axios.get('resumes/GetAll');
                setResumeData(resumeResponse.data);

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

    const getResumeById = async (id) => {
        try {
            const response = await axios.get(`resumes/GetById?id=${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    return { resumeData, vacancyData, loading, error, getVacancyById, getResumeById };
}

export default useData;
