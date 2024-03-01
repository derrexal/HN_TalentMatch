import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = () => {
    const [resumeData, setResumeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resumeResponse = await axios.get('resumes/GetAll');
                setResumeData(resumeResponse.data);

                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();

    }, []);

    const getResumeById = async (id) => {
        try {
            const response = await axios.get(`resumes/GetById?id=${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    return { resumeData, loading, error, getResumeById };
}

export default useData;
