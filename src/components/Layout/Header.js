import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import Nav from './Nav';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>EzOrder</h1>
        <Nav onClick={props.onShowCart} />
      </header>
    </Fragment>
  );
};

export default Header;
