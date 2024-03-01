import React from 'react';
import { CardContainer, CardContent, CardTitle, CardDescription, ActionButton } from '../../styles/CardStyles';

const VacancyCard = ({ vacancy }) => {
    const { name, description, keywords } = vacancy;

    return (
        <CardContainer>
            <CardContent>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{description}</CardDescription>
                <CardDescription><p>Требуемые навыки: {keywords}</p></CardDescription>
            </CardContent>
        </CardContainer>
    );
}

export default VacancyCard;