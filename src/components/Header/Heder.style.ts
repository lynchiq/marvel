import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  background-color: #202020;
`

export const MenuContainer = styled.div`
  min-height: 40px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #393939;
`

export const Logo = styled.div`
  user-select: none;
  height: 100%;
  padding: 0 6px;
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSizes.xl};
  background-color: ${props => props.theme.colors.red};
  text-align: center;
`

export const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: ${props => props.theme.fontSizes.sm};
`

export const MenuItem = styled.li`
  cursor: pointer;
  border-bottom: 2px solid transparent;

  :hover {
    border-bottom: 2px solid ${props => props.theme.colors.red};
  }
  
  a {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    height: 100%;
  }
`