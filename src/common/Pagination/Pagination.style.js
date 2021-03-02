import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PaginationPerPage = styled.div``

export const StyledPagination = styled.div`
  display: flex;
  user-select: none;
`

export const PaginationControl = styled.div`
  cursor: pointer;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #000;

  :not(:first-child) {
    margin-left: 5px;
  }

  :hover {
    border: 1px solid #e62429;
    background: #e62429;
    color: #fff;
  }
`
