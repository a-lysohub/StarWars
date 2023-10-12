import { useCallback, useEffect, useMemo, useState } from 'react';

import { getPeopleCount } from '@app/services/api/api';

interface Response {
  currentPage: number;
  gotoNextPage: () => void;
  gotoPrevPage: () => void;
  isNextPageExist: boolean;
  isPrevPageExist: boolean;
}

interface PaginationMeta {
  peopleCount: number;
  peopleCountPerPage: number;
}

export const usePagination = (): Response => {
  const [currentPage, setCurrentPage] = useState(1);

  const [paginationMeta, setPaginationMeta] = useState<PaginationMeta>({
    peopleCount: 0,
    peopleCountPerPage: 0,
  });

  const maxPages = useMemo(() => {
    const { peopleCount, peopleCountPerPage } = paginationMeta;
    return peopleCountPerPage !== 0
      ? Math.ceil(peopleCount / peopleCountPerPage)
      : 0;
  }, [paginationMeta]);

  useEffect(() => {
    async function loadData() {
      const { peopleCount, peopleCountPerPage } = await getPeopleCount();
      setPaginationMeta({ peopleCount, peopleCountPerPage });
    }

    loadData();
  }, []);

  const gotoNextPage = useCallback(() => {
    setCurrentPage(pageNum => (maxPages === pageNum ? pageNum : pageNum + 1));
  }, [maxPages]);

  const gotoPrevPage = useCallback(() => {
    setCurrentPage(pageNum => (pageNum === 1 ? pageNum : pageNum - 1));
  }, []);

  return {
    currentPage,
    gotoNextPage,
    gotoPrevPage,
    isNextPageExist: maxPages > currentPage,
    isPrevPageExist: currentPage > 1,
  };
};
