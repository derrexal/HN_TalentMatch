import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, DataTable, TableRow, TableCell } from '../../styles/DataTabStyles';

const DataTab = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('weatherforecast');
            setData(response.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

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
