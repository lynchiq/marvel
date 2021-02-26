import {useState} from 'react'
import {PaginationContainer, PaginationControl, PaginationPerPage, StyledPagination} from "./Pagination.style";

const Pagination = ({total, count, onChange}) => {

  const pagesCount = Math.ceil(total/count)

  return (
    <PaginationContainer>
      <PaginationPerPage>Per page : 12</PaginationPerPage>
      <StyledPagination>
        <PaginationControl>Prev</PaginationControl>
        <PaginationControl onClick={() => onChange(20)}>{pagesCount}</PaginationControl>
        <PaginationControl>2</PaginationControl>
        <PaginationControl>3</PaginationControl>
        <PaginationControl>Next</PaginationControl>
      </StyledPagination>
    </PaginationContainer>
  )
}

export default Pagination