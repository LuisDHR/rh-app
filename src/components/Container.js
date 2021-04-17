const style = (center, lay) => ({
  alignItems: center ? 'center': undefined,
  backgroundColor: '#EEEEEE',
  display: 'flex',
  flexDirection: 'column',
  height: lay ? 'calc(100vh - 15vh)' : 'calc(100vh - 20px)',
  justifyContent: center ? 'center': undefined,
  padding: '10px 15px',
  width: lay ? 'calc(100vw - 45vh)' : 'calc(100vw - 30px)',
})

const Container = (props) => {
  const {children, center = false, lay = false} = props;

  return (
    <div style={style(center, lay)}>
      {children}
    </div>
  )
}

export default Container