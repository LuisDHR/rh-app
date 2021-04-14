const style = (center) => ({
  alignItems: center ? 'center': undefined,
  backgroundColor: '#EEEEEE',
  display: 'flex',
  flexDirection: 'column',
  height: 'calc(100vh - 20px)',
  justifyContent: center ? 'center': undefined,
  padding: '10px 15px',
  width: 'calc(100vw - 30px)',
})

const Container = (props) => {
  const {children, center = false} = props;

  return (
    <div style={style(center)}>
      {children}
    </div>
  )
}

export default Container