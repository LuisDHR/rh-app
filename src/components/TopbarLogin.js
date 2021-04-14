import Logo from '../assets/Logo.png'
import Logo2 from '../assets/Logo2.png'

const style = {
  borderBottom: 'solid 1px #aaa',
  fontFamily: 'Mulish, sans-serif',
  fontSize: '18px',
  fontWeight: 800,
  width: 'calc(100vw - 20%)',
  display: 'flex',
  position: 'fixed',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2px 10% 2px 10%',
  boxShadow: '0px 4px 4px rgba(51, 51, 51, 0.25)',
  backgroundColor: '#FFFFFF',
}

const TopbarLogin = () => {
  return (
    <div style={style}>
      <img src={ Logo } alt="logo" width="40px"/>
      <p>Departamento de recursos humanos</p>
      <img src={ Logo2 } alt="logo" width="40px"/>
    </div>
  )
}

export default TopbarLogin