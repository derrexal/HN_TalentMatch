import React from 'react';
import { Container, Title } from '../../styles/PageStyles';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Container>
            <Title>Добро пожаловать в подбор резюме!</Title>
            <p>Для просмотра вакансий нажмите <Link to="/vacancy">Посмотреть вакансии</Link> или кнопку в меню навигации.</p>
            <p>Для просмотра резюме нажмите <Link to="/resume">Посмотреть резюме</Link> или кнопку в меню навигации.</p>
        </Container>
    );
}

export default HomePage;
