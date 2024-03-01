import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Обновлено импортирование

import Header from '../components/Header/Header';
import HomePage from '../components/HomePage/HomePage';
import VacancyPage from "../components/VacancyPage/VacancyPage.jsx";
import ResumePage from "../components/ResumePage/ResumePage.jsx";

const App = () => {
    // Создаем div для modal-root прямо здесь
    const modalRoot = document.getElementById('modal-root');
    if (!modalRoot) {
        // Если элемент modal-root не существует, создаем его
        const div = document.createElement('div');
        div.id = 'modal-root';
        document.body.appendChild(div);
    }

    return (
        <Router>
            <div>
                <Header />
                <Routes> {/* Здесь используется компонент Routes */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/vacancies" element={<VacancyPage />} />
                    <Route path="/resume" element={<ResumePage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
