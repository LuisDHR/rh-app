const style = (full) => ({
  backgroundColor: '#ffffff',
  border: '1px solid #ddd',
  borderRadius: '10px',
  padding: '55px 85px',
  width: full ? '100%' : undefined,
})

const Card = (props) => {
  const { children, full = false } = props;

  return (
    <div style={style(full)}>
      {children}
    </div>
  )
}

export default Card
