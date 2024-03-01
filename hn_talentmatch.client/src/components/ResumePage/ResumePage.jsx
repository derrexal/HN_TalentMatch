import React, { useState } from 'react';
import ResumeCard from '../resumeCard/ResumeCard';
import useData from '../../hooks/useData.js';
import Modal from '../modal/Modal';
import Pagination from "../pagination/Pagination.jsx";
import { Container, Title, CardsContainer } from '../../styles/ResumePageStyles';
import {ActionButton} from "../../styles/CardStyles.js";

const ResumePage = () => {
    const { resumeData, loading, error } = useData();
    const [currentPage, setCurrentPage] = useState(1);
    const [resumesPerPage] = useState(16);
    const [selectedResume, setSelectedResume] = useState(null);

    const indexOfLastResume = currentPage * resumesPerPage;
    const indexOfFirstResume = indexOfLastResume - resumesPerPage;
    const currentResumes = resumeData.slice(indexOfFirstResume, indexOfLastResume);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const handleViewResume = (resume) => {
        setSelectedResume(resume);
    };

    const handleCloseDetails = () => {
        setSelectedResume(null);
    };

    if (loading) {
        return <Container>Loading...</Container>;
    }

    if (error) {
        return <Container>Error: {error.message}</Container>;
    }

    return (
        <Container>
            <Title>Список резюме</Title>
            <CardsContainer>
                {currentResumes.map(resume => (
                    <div>                        
                        <ResumeCard
                            key={resume.uuid}
                            resume={resume}                            
                        />
                        <ActionButton onClick={() => handleViewResume(resume)}>Подробнее</ActionButton>
                    </div>
                ))}
            </CardsContainer>
            <Pagination
                totalPages={Math.ceil(resumeData.length / resumesPerPage)}
                currentPage={currentPage}
                paginate={paginate}
            />
            {selectedResume && (
                <Modal onClose={handleCloseDetails}>
                    <ResumeCard
                        resume={selectedResume}
                    />
                </Modal>
            )}
        </Container>
    );
}

export default ResumePage;
