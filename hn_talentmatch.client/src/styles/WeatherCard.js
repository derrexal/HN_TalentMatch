import styled from 'styled-components';

export const CardContainer = styled.div`
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Date = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Summary = styled.div`
  margin-bottom: 10px;
`;

export const Temperature = styled.div`
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #0056b3;
  }
`;