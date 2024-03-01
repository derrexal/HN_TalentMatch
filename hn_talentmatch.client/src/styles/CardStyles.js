import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  margin: 10px auto; /* Центрирование карточки по горизонтали */
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: left; /* Выравнивание текста по левому краю */
  width: 300px; /* Фиксированная ширина карточки */
  height: 200px; /* Фиксированная высота карточки */
  display: flex;
  flex-direction: column;
`;

export const CardContent = styled.div`
  flex-grow: 1;
  overflow: hidden;
`;

export const CardTitle = styled.h3`
  color: #333;
  font-size: 20px;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CardDescription = styled.p`
  color: #666;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Количество строк для отображения */
  -webkit-box-orient: vertical;
`;

export const ActionButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;
