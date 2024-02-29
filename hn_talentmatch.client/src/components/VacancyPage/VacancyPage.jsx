import React, { useState, useEffect } from 'react';
import { Container, VacancyCardsContainer, VacancyCardView, VacancyTitle, VacancyDescription, VacancyKeywords } from '../../styles/VacancyStyles.js';
import Modal from '../modal/Modal';
import VacancyCard from "../vacancyCard/VacancyCard.jsx";
import useData from '../../hooks/useData'; // Импортируем созданный вами хук

const VacancyPage = () => {
    const { vacancyData, loading, error, getVacancyById } = useData(); // Используем хук useData

    const [selectedVacancy, setSelectedVacancy] = useState(null);

    useEffect(() => {
        // Вызываем метод получения данных, если это необходимо
        // Пример использования: fetchVacancies();
    }, []); // Указываем зависимость, если это необходимо

    const handleViewDetails = async (vacancyId) => {
        try {
            const vacancy = await getVacancyById(vacancyId);
            setSelectedVacancy(vacancy);
        } catch (error) {
            console.error("Error fetching vacancy details:", error);
        }
    };

    const handleCloseDetails = () => {
        setSelectedVacancy(null);
    };

    if (loading) {
        return <div>Loading...</div>; // Отображаем индикатор загрузки, пока данные загружаются
    }

    if (error) {
        return <div>Error: {error.message}</div>; // Отображаем сообщение об ошибке, если произошла ошибка при загрузке данных
    }

    return (
        <Container>
            <div>
                <h2>Список вакансий</h2>
                <VacancyCardsContainer>
                    {vacancyData.map(vacancy => (
                        <VacancyCardView key={vacancy.uuid}>
                            <VacancyTitle>{vacancy.name}</VacancyTitle>
                            <VacancyDescription>{vacancy.description}</VacancyDescription>
                            <VacancyKeywords>Требуемые навыки: {vacancy.keywords}</VacancyKeywords>
                            <button onClick={() => handleViewDetails(vacancy.id)}>Подробнее</button>
                        </VacancyCardView>
                    ))}
                </VacancyCardsContainer>
            </div>

            {selectedVacancy && (
                <Modal onClose={handleCloseDetails}>
                    <VacancyCard vacancyId={selectedVacancy.id} />
                </Modal>
            )}
        </Container>
    );
}

export default VacancyPage;
