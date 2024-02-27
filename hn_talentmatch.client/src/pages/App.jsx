import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes, Route as Navigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import HomePage from '../components/HomePage/HomePage';
import DataTab from '../components/DataTab/DataTab';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/data" element={<DataTab />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;