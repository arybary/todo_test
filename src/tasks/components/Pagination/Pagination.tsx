import React from 'react';
import s from './Pagination.module.scss';
import classNames from 'classnames';

const optionsPageCount = [6, 10, 20];

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
	<div className={s.pagination}>
		<div>
			<label>Select Pages:</label>
			<select
				className={s.paginationSelect}
				value={rowsPerPage}
				onChange={(e) => handlePerPageChange(parseInt(e.target.value))}
			>
				{optionsPageCount.map((option, i) => (
					<option key={i} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
		<div className={s.paginationPages}>
			<button
				className={s.paginationBtn}
				onClick={() => handlePageChange(pageNow - 1)}
				disabled={pageNow === 1}
			>
				&lt; Prev
			</button>
			{pageNumbers.map((pageNumber) => (
				<button
					key={pageNumber}
					className={classNames(s.paginationBtn, {
						[s.paginationBtn__now]: pageNumber === pageNow,
					})}
					onClick={() => {
						handlePageChange(pageNumber);
					}}
					disabled={pageNow === pageNumber}
				>
					{pageNumber}
				</button>
			))}
			<button
				className={s.paginationBtn}
				onClick={() => handlePageChange(pageNow + 1)}
				disabled={pageNow === countPages}
			>
				Next &gt;
			</button>
		</div>
	</div>
);

export default SelectPage;
