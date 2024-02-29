
import styled from 'styled-components';

export const ResumeCardContainer = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  margin: 10px auto; /* Центрирование карточки по горизонтали */
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  height: 200px; /* Пример высоты карточки */
  overflow: hidden;
  width: 300px; /* Пример ширины карточки */
  text-align: left; /* Выравнивание текста по левому краю */
`;

export const ResumeCardTitle = styled.h3`
  color: #333;
  font-size: 20px;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ResumeCardDescription = styled.p`
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Количество строк для отображения */
  -webkit-box-orient: vertical;
`;

export const ViewResumeButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
