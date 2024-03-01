import React, { useState, useEffect } from 'react';
import { Container, CardsContainer } from '../../styles/VacancyStyles.js';
import VacancyCard from '../vacancyCard/VacancyCard.jsx';
import Modal from '../modal/Modal';
import useData from '../../hooks/useData';
import Pagination from "../pagination/Pagination.jsx";
import {ActionButton} from "../../styles/CardStyles.js";

const VacancyPage = () => {
    const { vacancyData, loading, error, getVacancyById } = useData();

    const [selectedVacancy, setSelectedVacancy] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [vacanciesPerPage] = useState(16);

    useEffect(() => {
        // Вызываем метод получения данных, если это необходимо
        // Пример использования: fetchVacancies();
    }, []); // Указываем зависимость, если это необходимо

    const handleViewDetails = (vacancy) => {
        setSelectedVacancy(vacancy);
    };

    const handleCloseDetails = () => {
        setSelectedVacancy(null);
    };

    const indexOfLastVacancy = currentPage * vacanciesPerPage;
    const indexOfFirstVacancy = indexOfLastVacancy - vacanciesPerPage;
    const currentVacancies = vacancyData.slice(indexOfFirstVacancy, indexOfLastVacancy);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Container>
            <div>
                <h2>Список вакансий</h2>
                <CardsContainer>
                    {currentVacancies.map(vacancy => (
                        <div>                            
                            <VacancyCard
                                key={vacancy.uuid}
                                vacancy={vacancy}
                            />
                            <ActionButton onClick={() => handleViewDetails(vacancy)}>Подробнее</ActionButton>
                        </div>
                    ))}
                </CardsContainer>
            </div>

            <Pagination
                totalPages={Math.ceil(vacancyData.length / vacanciesPerPage)}
                currentPage={currentPage}
                paginate={paginate}
            />

            {selectedVacancy && (
                <Modal onClose={handleCloseDetails}>
                    <VacancyCard 
                        vacancy={selectedVacancy} 
                        handleViewDetails={() => handleViewDetails(selectedVacancy)} 
                    />
                </Modal>
            )}
        </Container>
    );
}

export default VacancyPage;
