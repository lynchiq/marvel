import {RowWrapper} from "./Row.styles";

const Row = ({children}) => {
  return (
    <RowWrapper>
      {children}
    </RowWrapper>
  )
}

export default Row