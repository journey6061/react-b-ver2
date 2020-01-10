import React, {Component} from 'react';
import Orders from '../../component/order/orders/orders';
import axios from '../../a_order';

class order extends Component {
    state={
        order:[],
        loading:true,
    }
    componentDidMount(){
        axios.get('/ordertest.json')
        .then(res=>{
            console.log(res.data);
            const orderList=[];
            for( let i in res.data){
                orderList.push({
                    ...res.data[i],
                    id: i
                }
                )
            }
            this.setState({loading:false, order:orderList})
            console.log(this.state.order.length);
            /* const inngra=[]
            for( let x in this.state.order.length){


            } */
        }
            
        )
        .catch(err=>{
            this.setState({loading:false})
        }
        )
    }
    
    render(){
        console.log(this.state.order.length);
        return(
            <div>
            {this.state.order.map(tes=>(
                <Orders key={tes.id} 
                ing={tes.ingradience}
                price={tes.baseprice}
                
                />
                ))}
                </div>
            /* <>
            
            <Orders />
            <Orders />
            </> */

        )
    }
}

export default order