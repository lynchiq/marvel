import styled from 'styled-components'

const StyledCardList = styled.div`
  display: flex;
  justify-content: space-between;
`

const CardList = ({children}) => {
  return (
    <StyledCardList>
      {children}
    </StyledCardList>
  )
}

export default CardList