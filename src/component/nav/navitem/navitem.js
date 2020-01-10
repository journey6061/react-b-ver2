import React from 'react';
import Navitems from './navirems/navitems';
import classes from './navitem.module.css'

const navitem =()=>{
    return(
        <div>
            <ul className={classes.Navitem}>
                <Navitems link='/' active>home</Navitems>
                <Navitems link='/order'>order</Navitems>
            </ul>
        </div>
    )
}

export default navitem;