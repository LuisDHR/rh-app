const style = {
  backgroundColor: '#ffffff',
  border: '1px solid #ddd',
  borderRadius: '10px',
  padding: '50px 55px',
}

const Card = (props) => {
  const { children } = props;

  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Card
