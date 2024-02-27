import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

export const DataTable = styled.table`
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #f9f9f9;
  }
`;

export const TableCell = styled.td`
  padding: 8px;
`;