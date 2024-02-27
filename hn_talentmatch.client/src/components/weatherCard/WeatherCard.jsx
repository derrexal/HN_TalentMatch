// WeatherCard.js
import React, { useState } from 'react';
import { CardContainer, Date, Summary, Temperature, ButtonContainer, Button } from "../../styles/WeatherCard";
import axios from 'axios';

const WeatherCard = ({ id, weatherData, refetchData }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedSummary, setEditedSummary] = useState(weatherData.summary);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        try {
            await axios.put(`weatherforecast/${id}`, { ...weatherData, summary: editedSummary });
            refetchData();
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating weather data:', error);
        }
    };

    const handleClose = () => {
        setIsEditing(false);
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`weatherforecast/${id}`);
            refetchData();
        } catch (error) {
            console.error('Error deleting weather data:', error);
        }
    };

    return (
        <CardContainer>
            <Date>{weatherData.date}</Date>
            <Temperature>Temperature: {weatherData.temperatureC}°C / {weatherData.temperatureF}°F</Temperature>
            {isEditing ? (
                <>
                    <textarea value={editedSummary} onChange={(e) => setEditedSummary(e.target.value)} />
                    <ButtonContainer>
                        <Button onClick={handleSave}>Save</Button>
                        <Button onClick={handleClose}>Close</Button>
                    </ButtonContainer>
                </>
            ) : (
                <>
                    <Summary>{weatherData.summary}</Summary>
                    <ButtonContainer>
                        <Button onClick={handleEdit}>Edit</Button>
                        <Button onClick={handleDelete}>Delete</Button>
                    </ButtonContainer>
                </>
            )}
        </CardContainer>
    );
}

export default WeatherCard;
