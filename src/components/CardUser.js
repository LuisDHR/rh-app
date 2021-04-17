import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { IconButton } from '@material-ui/core'
import { useHistory } from "react-router"

const style = {
  backgroundColor: '#ffffff',
  borderLeft: '10px solid #4B77C5',
  borderRadius: '8px',
  padding: '10px 15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: '0px 4px 4px rgba(51, 51, 51, 0.25)',
  fontFamily: 'Mulish, sans-serif',
  fontSize: '16px',
  fontWeight: 800,
  color: '#505050',
}

const CardUsers = (props) => {
  const { user } = props
  const history = useHistory()

  const handleUpdate = () => {
    history.push('/rh/users/' + user)
  }

  return (
    <div style={style}>
      <p>{ user }</p>
      <IconButton
        color="inherit"
        onClick={handleUpdate}
      >
        <FontAwesomeIcon icon={faUserEdit} />
      </IconButton>
    </div>
  )
}

export default CardUsers