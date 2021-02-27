import {useState} from 'react'
import {PaginationContainer, PaginationControl, PaginationPerPage, StyledPagination} from "./Pagination.style";

const Pagination = ({total = 1, count = 1, onChange}) => {

  const pagesCount = Math.ceil(total/count)
  const pages = new Array(pagesCount).fill(0).map((el, i) => i + 1)

  const setOffset = (pageNumber) => {
    alert(pageNumber * count)
  }

  return   (
    <PaginationContainer>
      <PaginationPerPage>Per page : 12</PaginationPerPage>
      <StyledPagination>
        <PaginationControl>Prev</PaginationControl>
        {
          pages.map(p => {
            return <PaginationControl key={p} onClick={() => setOffset(p)}>{p}</PaginationControl>
          })
        }
        <PaginationControl>Next</PaginationControl>
      </StyledPagination>
    </PaginationContainer>
  )
}

export default Pagination