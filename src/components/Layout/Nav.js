import {NavLink} from 'react-router-dom';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Nav = props =>{

  return(
    <nav className={classes.nav}>
      <ul>
      <li>
          <NavLink to='/products' activeClassName={classes.active}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to='/orders' activeClassName={classes.active}>
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink to='/cart' activeClassName={classes.active}>
            Cart
          </NavLink>
        </li>
        <li>
          <HeaderCartButton onClick={props.onClick}/>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;