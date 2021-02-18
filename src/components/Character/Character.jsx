import {Container, Title} from "./Character.style";

export const Character = ({id, name, thumbnail}) => {
  return (
    <Container>
      <Title>{name}</Title>
      <img width={100} src={thumbnail} alt={name}/>
    </Container>
  )
}