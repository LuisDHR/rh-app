import Title from '../components/Title'
import MainButton from '../components/Button'

const style = {
  width: 'calc(100vw - 21%)',
  display: 'flex',
  position: 'fixed',
  justifyContent: 'space-between',
  alignItems: 'center',
}

function Users() {
  return (
    <div style={style}>
      <Title>Usuarios del sistema</Title>
      <MainButton>Crear usuario</MainButton>
    </div>
  );
}

export default Users
