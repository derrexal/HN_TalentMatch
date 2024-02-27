import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, NavItem } from '../../styles/HeaderStyles';

const Header = () => {
    return (
        <Container>
            <Nav>
                <NavItem><Link to="/">Добро пожаловать!</Link></NavItem>
                <NavItem><Link to="/data">Прогноз погоды</Link></NavItem>
            </Nav>
        </Container>
    );
}

export default Header;