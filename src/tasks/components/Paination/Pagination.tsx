import React from 'react';
import s from './Pagination.module.scss';

const optionsPageCount = [5, 10, 20];

interface PaginationProps {
	pageNow: number;
	rowsPerPage: number;
	handlePageChange: (newPage: number) => void;
	pageNumbers: number[];
	handlePerPageChange: (newPerPage: number) => void;
	countPages: number;
}

const SelectPage: React.FC<PaginationProps> = ({
	pageNow,
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
			<button onClick={() => handlePageChange(countPages - 1)} style={{ cursor: 'pointer' }}>
				&lt; Prev
			</button>
			{pageNumbers.map((pageNumber) => (
				<button
					key={pageNumber}
					onClick={() => {
						console.log(pageNumber);
						handlePageChange(pageNumber);
					}}
					style={{ cursor: 'pointer', fontWeight: pageNumber === pageNow ? 'bold' : 'normal' }}
				>
					{pageNumber}
				</button>
			))}
			<button onClick={() => handlePageChange(countPages + 1)} style={{ cursor: 'pointer' }}>
				Next &gt;
			</button>
		</div>
	</div>
);

export default SelectPage;
