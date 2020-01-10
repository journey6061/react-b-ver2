import React from 'react';
import classes from './navitems.module.css';
import {NavLink} from 'react-router-dom';

const navitems =(props)=>{
    return(
        <li className={classes.Items}>
            <NavLink to={props.link}
            activeClassName={classes.active}
            exact
            >
                {props.children}
            </NavLink>
        </li>
        
    )
}

export default navitems;