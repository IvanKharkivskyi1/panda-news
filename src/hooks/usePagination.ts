import { useEffect, useState } from 'react';

export const usePagination = <T>(items: T[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [paginatedItems, setPaginatedItems] = useState<T[]>([]);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const offset = currentPage * itemsPerPage;
    setPaginatedItems(items.slice(offset, offset + itemsPerPage));
  }, [items, currentPage, itemsPerPage]);

  return { paginatedItems, handlePageClick, totalPages, currentPage };
};
