import styled from "styled-components";

const StyledMain = styled.main`
  position: relative;
  background-color: #2d2f2d;
`

const Main = ({children}) => {
  return (
    <StyledMain>
      {children}
    </StyledMain>
  )
}

export default Main