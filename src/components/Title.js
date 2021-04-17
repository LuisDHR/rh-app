const style = {
  color: '#606060',
  fontFamily: 'Mulish, sans-serif',
  fontSize: '24px',
  fontWeight: 800,
  marginTop: 0
}

const Title = (props) => {
  const { children, ...rest } = props;

  return (
    <p {...rest} style={style}>{ children } </p>
  )
}
  
export default Title
