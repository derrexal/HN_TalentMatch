import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, NavItem } from '../../styles/HeaderStyles';

const Header = () => {
    return (
        <Container>
            <Nav>
                <NavItem><Link to="/">Добро пожаловать!</Link></NavItem>
                <NavItem><Link to="/vacancy">Посмотреть вакансии</Link></NavItem>
                <NavItem><Link to="/resume">Посмотреть резюме</Link></NavItem>
            </Nav>
        </Container>
    );
}

export default Header;