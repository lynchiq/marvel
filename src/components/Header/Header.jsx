import {Link} from "react-router-dom";
import {HeaderWrapper, Logo, Menu, MenuContainer, MenuItem} from "./Heder.style";

export const Header = () => {
  return (
    <HeaderWrapper>
      <MenuContainer>
        <Link to={'/'}><Logo>super hero</Logo></Link>
      </MenuContainer>
      <MenuContainer>
        <Menu>
          <MenuItem>
            <Link to={'/characters'}>Characters</Link>
          </MenuItem>
          <MenuItem>
            <Link to={'/comics'}>Comics</Link>
          </MenuItem>
          <MenuItem>
            <Link to={'/favorites'}>Favorites</Link>
          </MenuItem>
          <MenuItem>
            <Link to={'/search'}>Search</Link>
          </MenuItem>
        </Menu>
      </MenuContainer>
    </HeaderWrapper>
  )
}