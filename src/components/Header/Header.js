import {Link} from "react-router-dom";
import {StyledHeader} from "./Heder.style";

export const Header = () => {
  return (
    <StyledHeader>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/characters'}>Characters</Link>
        </li>
      </ul>
    </StyledHeader>
  )
}