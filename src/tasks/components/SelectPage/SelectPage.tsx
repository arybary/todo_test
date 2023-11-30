import React, { useState } from 'react';
import s from './SelectPage.module.scss';

const optionsPageCount = [5, 10, 20];

interface SelectPage {
    rowsPerPage: number;
    handlePageChange: (newPage: number) => void;
    pageNumbers: number[];
    handlePerPageChange: (newPerPage: number) => void;
    countPages: number;
}

const SelectPage: React.FC<SelectPage> = ({
    rowsPerPage,
    handlePageChange,
    pageNumbers,
    handlePerPageChange,
    countPages,
}) => (
    <div>
        <label htmlFor="pageSelector">Select Pages:</label>
        <select
            id="pageSelector"
            value={rowsPerPage}
            onChange={(e) => handlePerPageChange(parseInt(e.target.value))}
        >
            {optionsPageCount.map((option, i) => (
                <option key={i} value={option}>
                    {option}
                </option>
            ))}
        </select>
        <div>
            <span onClick={() => handlePageChange(countPages - 1)} style={{ cursor: 'pointer' }}>
                &lt; Prev
            </span>
            {pageNumbers.map((pageNumber) => (
                <span
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    style={{ cursor: 'pointer', fontWeight: pageNumber === countPages ? 'bold' : 'normal' }}
                >
                    {pageNumber}
                </span>
            ))}
            <span onClick={() => handlePageChange(countPages + 1)} style={{ cursor: 'pointer' }}>
                Next &gt;
            </span>
        </div>
    </div>
);

export default SelectPage;
