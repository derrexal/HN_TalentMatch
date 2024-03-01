import React from 'react';
import { CardContainer, CardContent, CardTitle, CardDescription } from '../../styles/CardStyles';

const ResumeCard = ({ resume }) => {
    const { first_name, about } = resume;

    return (
        <CardContainer>
            <CardContent>
                <CardTitle>{first_name}</CardTitle>
                <CardDescription>{about}</CardDescription>
            </CardContent>
        </CardContainer>
    );
}

export default ResumeCard;