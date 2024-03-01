import React from 'react';
import { PaginationContainer, PaginationButton } from '../../styles/PaginationStyles';

const Pagination = ({ totalPages, currentPage, paginate }) => {
    const pageNumbers = [];
    const maxPagesToShow = 10;

    // Вычисляем начальную и конечную страницы для отображения в пагинации
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > maxPagesToShow) {
        const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);
        if (currentPage > halfMaxPagesToShow) {
            startPage = currentPage - halfMaxPagesToShow;
            endPage = currentPage + halfMaxPagesToShow;
        }
        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = totalPages - maxPagesToShow + 1;
        }
    }

    // Добавляем кнопку для перехода на первую страницу
    pageNumbers.push(
        <PaginationButton
            key={1}
            onClick={() => paginate(1)}
            disabled={currentPage === 1}
        >
            {"<<"}
        </PaginationButton>
    );
    pageNumbers.push(
        <PaginationButton
            key={"prev"}
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
        >
            {"<"}
        </PaginationButton>
    );

    // Добавляем кнопки для отображения страниц
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
            <PaginationButton
                key={i}
                onClick={() => paginate(i)}
                active={i === currentPage}
            >
                {i}
            </PaginationButton>
        );
    }

    // Добавляем кнопку для перехода на следующую страницу
    pageNumbers.push(
        <PaginationButton
            key={"next"}
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
        >
            {">"}
        </PaginationButton>
    );
    pageNumbers.push(
        <PaginationButton
            key={totalPages}
            onClick={() => paginate(totalPages)}
            disabled={currentPage === totalPages}
        >
            {">>"}
        </PaginationButton>
    );

    return (
        <PaginationContainer>
            {pageNumbers}
        </PaginationContainer>
    );
}

export default Pagination;
