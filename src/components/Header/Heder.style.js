import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  background-color: #202020;
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
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
  box-sizing: border-box;
  font-size: 48px;
  background-color: #e62429;
  font-family: fantasy;
`

export const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`

export const MenuItem = styled.li`
  padding: 0 20px;
  font-weight: 800;
  
  a {
    display: flex;
    align-items: center;
    height: 100%;
    border-bottom: 2px solid transparent;

    :hover {
      border-bottom: 2px solid #e62429;
    }
  }
`