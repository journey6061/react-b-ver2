import React, {Component} from 'react';
import Button from '../../../component/UI/button/button';
import classes from './contact.module.css';
import axios from '../../../a_order';
import Spinner from '../../../component/UI/spinner/spinner'

class contact extends Component{
    state={
        
            name:null,
            address:null,
            tel:null,
            email:null,
            loading: false
        
    }

    getOrder=(event)=>{
        //event.preventDefault();
       // console.log(this.props.ing);

        this.setState({loading:true})
        const order={
            ingradience:this.props.ing,
            //baseprice:this.state.baseprice,
            baseprice:this.props.myprice,
            testname:'mine'
        }
        axios.post('/ordertest.json', order)
        //.then((response)=>console.log(response))
        .then(response=>{
        this.setState({loading:false, purchasing:false})
        this.props.history.push('/');
    }
        )
        .catch(error=>{
        this.setState({loading:false, purchasing:false})
        }
        );
    }


    render(){
        let spin=(<form>
                <input type='text' name='name' placeholder='input your name here'/>
                <input type='text' name='address' placeholder='input your address here'/>
                <input type='text' name='tel' placeholder='input your tel here'/>
                <input type='email' name='email' placeholder='input your email here'/>
                <Button type='Success' clicked={this.getOrder}>order</Button>
                <Button type='Danger' >cancel</Button>

            </form>);
        if(this.state.loading){
            spin=<Spinner />
        }

        return(
            <div>
            <h2>contact form</h2>
            {spin}
            </div>
        )
    }


}
export default contact