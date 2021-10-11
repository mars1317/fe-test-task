export interface PaginationPropsType {
  currentPage:number,
  totalPages:number,
  setCurrentPage: (currentPage: number) => void,
}

export interface PaginationProps {
  paginationData:PaginationPropsType
}
