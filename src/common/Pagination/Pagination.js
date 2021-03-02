import {PaginationContainer, PaginationControl, StyledPagination} from "./Pagination.style";

const Pagination = ({total, limit, onChange}) => {

  const pagesList = new Array(12).fill(0).map((el, i) => i + 1)

  const selectPage = (page) => {

  }

  return (
    <PaginationContainer>
      <StyledPagination>
        <PaginationControl>Prev</PaginationControl>
        {pagesList.map(p => {
            return <PaginationControl current={p === pagesList} key={p} onClick={() => onChange(p)}>{p}</PaginationControl>
          })}
        <PaginationControl>Next</PaginationControl>
      </StyledPagination>
    </PaginationContainer>
  )
}

export default Pagination