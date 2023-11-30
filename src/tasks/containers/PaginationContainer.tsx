import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectPaginationParam } from '../selector';
import SelectPage from '../components/SelectPage/SelectPage';
import { setPaginationRowsPerPage } from '../slice/pagination';

const PaginationContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    const { page, countPages, rowsPerPage } = useAppSelector(selectPaginationParam);
    const handlePerPageChange = (newPerPage: number) => {
        dispatch(setPaginationRowsPerPage(newPerPage));
    };

    const pageNumbers = Array.from({ length: countPages }, (_, index) => index + 1);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= countPages) {
            dispatch(setPaginationRowsPerPage(countPages));
        }
    };

    return (
        <SelectPage
            rowsPerPage={rowsPerPage}
            handlePerPageChange={handlePerPageChange}
            pageNumbers={pageNumbers}
            handlePageChange={handlePageChange}
            countPages={countPages}
        />
    );
};

export default PaginationContainer;
