import React from 'react';

const orders =(props)=>{
    const ingtest=[];
    for (let i in props.ing){
        ingtest.push({
            name: i,
            amount:props.ing[i]
        }
        )
    }

    const ingg=[];
    ingtest.map(res=>(
        ingg.push(
            <div key={Math.random()}>
            <span style={{color: 'pink'}} >{res.name} ({res.amount})</span>
            </div>
        )
    )
        
    )
    /* {props.ing.map(ii=>{
        ingtest.push(
            name: ii.
        )
    }
    )} */
    /* {ingtest.map(res=>{
        <span>{ingtest.name}</span>
        <span>{ingtest.amount}</span>
    }

    )
    }  */

    console.log(ingtest)
    return(
        <div>
            total price: <strong>{props.price} </strong>
            {/* ingrad: <strong>{props.ing}</strong> */}
            ingradent: {ingg}
            
        </div>
    )
}

export default orders