const style = {
  color: '#606060',
  fontFamily: 'Mulish, sans-serif',
  fontSize: '24px',
}

const Title = (props) => {
  const { children, ...rest } = props;

  return (
    <h2 {...rest} style={style}>{ children } </h2>
  )
}
  
export default Title
