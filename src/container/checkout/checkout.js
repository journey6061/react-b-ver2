import React, {Component} from 'react';
import Checkoutsum from '../../component/order/checkoutsum/checkoutsum';
import Contact from './contact/contact';
import {Route} from 'react-router-dom';

class checkout extends Component{
    state={
        ingrad:{
            custom1:0,
            custom2:0,
            custom3:0
        },
        price:0
    }

    componentDidMount(){
        const query=new URLSearchParams(this.props.location.search);
        const ingrade={};
        let pri=0;
        for(let param of query.entries()){
            if(param[0]==='price'){
                pri=param[1]
            }
            else{
                ingrade[param[0]]=+param[1];
            }
        }
        this.setState({ingrad:ingrade, price:pri})
    }

    connectServer=()=>{
        this.props.history.replace('/checkout/contact-data');
        console.log(this.state.ingrad)
    }

    cancelServer=()=>{
        this.props.history.goBack();
    }

    render(){
        return(
            <div>
            <Checkoutsum 
            ingra={this.state.ingrad}
            sendData={this.connectServer}
            cancelData={this.cancelServer}
            />
            <Route 
            path={this.props.match.path+'/contact-data'} 
            render={(props)=>
                (<Contact ing={this.state.ingrad} myprice={this.state.price} {...props}/>)
            }
            />
            </div>

        )
    }
}

export default checkout