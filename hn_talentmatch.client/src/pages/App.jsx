import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes, Route as Navigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import HomePage from '../components/HomePage/HomePage';
import DataTab from '../components/DataTab/DataTab';
import WeatherCardsCanUpdate from "../components/weatherCardsCanUpdate/weatherCardsCanUpdate";

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/data" element={<DataTab />} />
                    <Route path="/dataCard" element={<WeatherCardsCanUpdate />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;