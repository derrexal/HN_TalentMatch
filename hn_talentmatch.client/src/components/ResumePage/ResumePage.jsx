import React, { useState } from 'react';
import { Container, Title } from '../../styles/ResumePageStyles.js';
import ResumeCard from '../resumeCard/ResumeCard';
import useData from '../../hooks/useData.js';
import Modal from '../modal/Modal';
import Pagination from "../pagination/Pagination.jsx";

const ResumePage = () => {
    const { resumeData, loading, error } = useData();
    const [currentPage, setCurrentPage] = useState(1);
    const [resumesPerPage] = useState(10);
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
        <Container style={{ display: 'flex', flexDirection: 'column' }}>
            <Title>Список резюме</Title>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
                {currentResumes.map(resume => (
                    <ResumeCard
                        key={resume.uuid}
                        resume={resume}
                        handleViewResume={() => handleViewResume(resume)}
                    />
                ))}
            </div>
            <Pagination
                resumesPerPage={resumesPerPage}
                totalResumes={resumeData.length}
                paginate={paginate}
            />
            {selectedResume && (
                <Modal onClose={handleCloseDetails}>
                    <ResumeCard
                        first_name={selectedResume.first_name}
                        about={selectedResume.about}
                    />
                </Modal>
            )}
        </Container>
    );
}

export default ResumePage;
