import React, { useState } from 'react';
import useData from '../../hooks/useData';
import { Container, CardsContainer, Title } from '../../styles/VacancyStyles.js';
import VacancyCard from '../vacancyCard/VacancyCard.jsx';
import Modal from '../modal/Modal';
import Pagination from "../pagination/Pagination.jsx";
import {ActionButton} from "../../styles/CardStyles.js";

const VacancyPage = () => {
    const { vacancyData, loading, error } = useData();
    const [currentPage, setCurrentPage] = useState(1);
    const [vacanciesPerPage] = useState(16);
    const [selectedVacancy, setSelectedVacancy] = useState(null);

    const indexOfLastVacancy = currentPage * vacanciesPerPage;
    const indexOfFirstVacancy = indexOfLastVacancy - vacanciesPerPage;
    const currentVacancies = vacancyData.slice(indexOfFirstVacancy, indexOfLastVacancy);
    const totalPages = Math.ceil(vacancyData.length / vacanciesPerPage);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    const handleViewDetails = (vacancy) => {
        setSelectedVacancy(vacancy);
    };

    const handleCloseDetails = () => {
        setSelectedVacancy(null);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Container>
            <div>
                <Title>Список вакансий</Title>
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

            {totalPages !== 1 ?
                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    paginate={paginate}
                /> : null   
            }

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
