import {useState} from 'react'
import {PaginationControl, StyledPagination} from "./Pagination.style";

const Pagination = ({total, count, onChange}) => {

  const pagesCount = Math.ceil(total/count)

  return (
    <StyledPagination>
      <PaginationControl>Prev</PaginationControl>
      <PaginationControl onClick={() => onChange(20)}>{pagesCount}</PaginationControl>
      <PaginationControl>2</PaginationControl>
      <PaginationControl>3</PaginationControl>
      <PaginationControl>Next</PaginationControl>
    </StyledPagination>
  )
}

export default Pagination