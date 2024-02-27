import React from 'react';
import { Container, DataTable, TableRow, TableCell } from '../../styles/DataTabStyles';
import useWeatherData from '../../hooks/useWeatherData';

const DataTab = () => {
    const { data, loading, error } = useWeatherData();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <Container>
            <h1>Прогноз погоды</h1>
            <DataTable>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
                </thead>
                <tbody>
                {data.map(forecast => (
                    <TableRow key={forecast.date}>
                        <TableCell>{forecast.date}</TableCell>
                        <TableCell>{forecast.temperatureC}</TableCell>
                        <TableCell>{forecast.temperatureF}</TableCell>
                        <TableCell>{forecast.summary}</TableCell>
                    </TableRow>
                ))}
                </tbody>
            </DataTable>
        </Container>
    );
}

export default DataTab;
