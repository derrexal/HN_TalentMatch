// WeatherCardsCanUpdate.js
import React from 'react';
import WeatherCard from '../weatherCard/WeatherCard';
import useWeatherData from '../../hooks/useWeatherData';
import { Container, CardContainer } from '../../styles/WeatherCardsStyles';
import axios from 'axios';

const WeatherCardsCanUpdate = () => {
    const { data, loading, error, refetchData } = useWeatherData();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <Container>
            {data.map((forecast, index) => (
                <CardContainer key={index}>
                    <WeatherCard
                        id={index}
                        weatherData={forecast}
                        refetchData={refetchData}
                    />
                </CardContainer>
            ))}
        </Container>
    );
}

export default WeatherCardsCanUpdate;
