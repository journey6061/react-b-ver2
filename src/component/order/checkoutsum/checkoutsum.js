import React from 'react';
import Burger from '../../burger/burger';
import classes from './checkoutsum.module.css';
import Button from '../../UI/button/button'

const checkoutsum =(props)=>{
    return(
        <>
        <h2>
            hope you like it
        </h2>
        <div className={classes.CheckoutSummary}>
            <Burger ingra={props.ingra} />
        </div>
        <Button type='Success' clicked={props.sendData}>continue</Button>
        <Button type='Danger' clicked={props.cancelData}>cancel</Button>

        </>
    )

}

export default checkoutsum;