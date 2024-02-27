import styled from 'styled-components';

export const Container = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
`;

export const Nav = styled.nav`
  margin-right: auto;
`;

export const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  display: inline;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }

  a {
    color: #fff;
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 4px;
    background-color: #4CAF50;
    transition: background-color 0.3s;
  }

  a:hover {
    background-color: #45a049;
  }
`;
