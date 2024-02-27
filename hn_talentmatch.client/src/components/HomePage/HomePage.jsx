import React from 'react';
import { Container, Title } from '../../styles/PageStyles';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Container>
            <Title>Добро пожаловать в прогноз погоды!</Title>
            <p>Для просмотра прогноза погоды на ближайшие дни нажмите <Link to="/data">Посмотреть прогноз</Link> или кнопку в меню навигации.</p>
        </Container>
    );
}

export default HomePage;
