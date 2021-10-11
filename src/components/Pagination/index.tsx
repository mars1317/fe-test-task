import React, { Children } from 'react';
import {PaginationProps} from 'types/Pagination';
import { createStyles } from './style';

const Pagination = (props:PaginationProps) => {
  const {paginationData} = props;
  const {currentPage, totalPages, setCurrentPage} = paginationData;
  const classes = createStyles();

  let minPage:number = 1;
  let pageNumbers = [];

  for (let i:number = minPage; i <= totalPages; i++) {
 
    pageNumbers.push(
        <div key={i} className={(i === currentPage ? `${classes.PaginationButton} ${classes.active}` :  `${classes.PaginationButton}`)} onClick={()=>{ setCurrentPage(i)}}>
          {i}
        </div>
      );
  }

  const nextPage = () => {
    if(currentPage<totalPages){
      setCurrentPage(currentPage+1)
    }
  }
  
  const prevPage = () => {
    if(currentPage>1){
      setCurrentPage(currentPage-1)
    }
  }
return (
  <div className={classes.Pagination}>
  <div className={classes.PaginationControl}>
    <div className={classes.PaginationButton} onClick={prevPage}> &lsaquo; </div>
      {pageNumbers}
    <div className={classes.PaginationButton} onClick={nextPage}> &rsaquo; </div>
  </div>
</div>
)
}

export default Pagination;