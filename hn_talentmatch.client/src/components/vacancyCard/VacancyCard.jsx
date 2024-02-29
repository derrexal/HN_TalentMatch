import React, { useEffect, useState } from 'react';
import useData from '../../hooks/useData'; // Импортируем хук useData
import { VacancyCardContainer, VacancyTitle, VacancyDescription } from '../../styles/VacancyCardStyles.js';

const VacancyCard = ({ vacancyId }) => {
    const { getVacancyById } = useData(); // Используем хук useData

    const [vacancy, setVacancy] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedVacancy = await getVacancyById(vacancyId);
                setVacancy(fetchedVacancy);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching vacancy details:", error);
                setLoading(false);
            }
        };

        fetchData();

    }, [getVacancyById, vacancyId]);

    if (loading) {
        return <div>Loading...</div>; // Отображаем индикатор загрузки, пока данные загружаются
    }

    if (!vacancy) {
        return <div>Vacancy not found.</div>; // Отображаем сообщение, если вакансия не найдена
    }

    const { name, description, keywords } = vacancy;

    return (
        <VacancyCardContainer>
            <VacancyTitle>{name}</VacancyTitle>
            <VacancyDescription>{description}</VacancyDescription>
            <p>Требуемые навыки: {keywords}</p>
            {/* Добавьте другие поля вакансии, если они есть */}
        </VacancyCardContainer>
    );
}

export default VacancyCard;
