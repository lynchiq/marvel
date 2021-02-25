import {useState} from 'react'
import {PaginationControl, StyledPagination} from "./Pagination.style";

const Pagination = ({offset, limit, total, count, goToPage}) => {

  const pagesCount = Math.ceil(total/count)

  let pages = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount/10)
  let [portionNumber, setPortionNumber] = useState(1)

  let leftPortionPageNumber = (portionNumber - 1) * 10 + 1;
  let rightPortionPageNumber = portionNumber * 10;

  const changePage = (page) => {
    goToPage((page - 1) * count)
  }

  return (
    <StyledPagination>
      { portionNumber > 1 &&
      <PaginationControl onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</PaginationControl> }
      {
        pages
          .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
          .map(page => {
          return <PaginationControl onClick={() => changePage(page)}>{page}</PaginationControl>
        })
      }
      { portionCount > portionNumber &&
      <PaginationControl onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</PaginationControl> }
    </StyledPagination>
  )
}

export default Pagination