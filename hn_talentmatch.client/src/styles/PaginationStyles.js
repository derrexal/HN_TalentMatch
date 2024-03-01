import styled, { css } from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PaginationButton = styled.button`
  padding: 10px;
  margin: 0 5px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  ${({ disabled }) => disabled && css`
    opacity: 0.5;
    pointer-events: none;
    filter: grayscale(100%);
  `}
`;
