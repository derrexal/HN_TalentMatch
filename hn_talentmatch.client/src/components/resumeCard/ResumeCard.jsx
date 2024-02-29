// ResumeCard.jsx
import React from 'react';
import { ResumeCardContainer, ResumeCardTitle, ResumeCardDescription, ViewResumeButton } from '../../styles/ResumeCardStyles.js';

const ResumeCard = ({ resume, handleViewResume }) => {
    return (
        <ResumeCardContainer>
            <ResumeCardTitle>{resume.first_name}</ResumeCardTitle>
            <ResumeCardDescription>{resume.about}</ResumeCardDescription>
            <ViewResumeButton onClick={handleViewResume}>Подробнее</ViewResumeButton>
        </ResumeCardContainer>
    );
}

export default ResumeCard;
