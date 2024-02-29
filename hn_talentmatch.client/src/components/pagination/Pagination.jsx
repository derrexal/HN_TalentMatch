import React from 'react';
import { PaginationContainer, PaginationButton } from '../../styles/PaginationStyles';

const Pagination = ({ vacanciesPerPage, totalVacancies, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalVacancies / vacanciesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <PaginationContainer>
            {pageNumbers.map(number => (
                <PaginationButton key={number} onClick={() => paginate(number)}>
                    {number}
                </PaginationButton>
            ))}
        </PaginationContainer>
    );
}

export default Pagination;
