import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'

export const pages = [
  {
    title: 'Users',
    href: '/rh/users',
    icon: <FontAwesomeIcon icon={faUsers} />,
  },
  {
    title: 'Users info',
    href: '/rh/usersInfo',
    icon: <FontAwesomeIcon icon={faAddressCard} />,
  },
];
