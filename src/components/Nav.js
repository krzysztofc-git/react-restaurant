import { Link } from 'react-router';

function Nav() {
  const links = {
    "Home": "/",
    "About": "#",
    "Menu": "#",
    "Reservations": "/booking",
    "Order Online": "#",
    "Login": "#",
  };
  return (
    <nav>
      <ul>
        {Object.keys(links).map(
          title => (
            <li>
              <Link to={links[title]}>{title}</Link>
            </li>
          )
        )}
      </ul>
    </nav>
  )
}

export default Nav;