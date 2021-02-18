const Character = ({id, name, thumbnail}) => {
  return (
    <div>
      <h2>{name}</h2>
      <img width={100} src={thumbnail} alt={name}/>
    </div>
  )
}

export default Character