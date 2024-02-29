import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

export const VacancyCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

export const VacancyCardView = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  height: 200px; /* фиксированная высота карточки */
  overflow: hidden; /* скрытие излишнего текста */
`;

export const VacancyTitle = styled.h3`
  color: #333;
  font-size: 20px;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis; /* текст скрывается за троеточием */
  white-space: nowrap; /* предотвращает перенос строк */
`;

export const VacancyDescription = styled.p`
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const VacancyKeywords = styled.p`
  color: #666;
  font-style: italic;
  margin-top: 10px;
`;

export const VacancyLink = styled.a`
  display: inline-block;
  color: #007bff;
  text-decoration: none;
  margin-top: 10px;
  transition: color 0.3s;

  &:hover {
    color: #0056b3;
  }
`;
