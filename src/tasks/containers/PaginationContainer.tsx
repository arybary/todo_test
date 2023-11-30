import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectPaginationParam } from '../selector';
import SelectPage from '../components/Paination/Pagination';
import { setPaginationPage, setPaginationRowsPerPage } from '../slice/pagination';

const PaginationContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    const { page, pageNumbers, countPages, rowsPerPage } = useAppSelector(selectPaginationParam);

    const handlePerPageChange = (newPerPage: number) => {
        dispatch(setPaginationRowsPerPage(newPerPage));
    };

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= countPages) {
            dispatch(setPaginationPage(newPage));
        }
    };

    return (
        <SelectPage
            pageNow={page}
            rowsPerPage={rowsPerPage}
            handlePerPageChange={handlePerPageChange}
            pageNumbers={pageNumbers}
            handlePageChange={handlePageChange}
            countPages={countPages}
        />
    );
};

export default PaginationContainer;
