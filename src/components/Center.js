const style = {
  textAlign: 'center',
  width: '100%',
}

const Center = (props) => {
  const { ...rest } = props;
  return (
    <div {...rest} style={style} />
  )
}

export default Center
