import styled from "styled-components";

const StyledMain = styled.main`
  position: relative;
  background-color: #202020;
`

const Main = ({children}) => {
  return (
    <StyledMain>
      {children}
    </StyledMain>
  )
}

export default Main