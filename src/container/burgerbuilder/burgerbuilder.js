import React, {Component} from 'react';
//import classes from 'burgerbuilder.css'; 
import Burger from '../../component/burger/burger';
import Burgercontrols from '../../component/burger/burgercontrols/burgercontrols';
import UI from '../../component/UI/ui';
import Ordersummery from '../../component/burger/ordersummery';
import Backdrop from '../../component/UI/backdrop';
import Button from '../../component/UI/button/button';
import axios from '../../a_order';
import Checkbutton from '../../component/burger/checkbutton';
import Price from '../../component/burger/price';
import Spinner from '../../component/UI/spinner/spinner';
//import reducer from '../../store/reducer';
import {connect} from 'react-redux';
import * as actionType from '../../store/action'

const price={
    custom1:0.4,
    custom2:1.5,
    custom3:0.7
}

class burgerbuilder extends Component {
    state={
        /* ingradience:{
            custom1:0,
            custom2:0,
            custom3:0,
        }, */
        /* ingradience:null, */
        baseprice:4,
        purchasing:false,
        //checkout:false,
        loading:false
    }

    componentDidMount(){
        console.log(this.props);
        /* axios.get('https://my-test1-6e78c.firebaseio.com/ingradient.json')
        .then(response=>{
            this.setState({ingradience: response.data})
        })
        .catch( error => {
            this.setState( { error: true } );
        } ); */
    }
    

    addingradient=(tt)=>{
        let chooseingra=this.state.ingradience[tt];
        let added=chooseingra+1;
        let updateingrad={...this.state.ingradience};
        updateingrad[tt]=added;

        let countprice=price[tt];
        let addedprice=this.state.baseprice;
        let newprice=countprice+addedprice;

        this.setState({ingradience:updateingrad, baseprice:newprice});
    }

    removeingradient=(kk)=>{
        const removeingrad=this.state.ingradience[kk];
        if(removeingrad>0){
        const removeamount=removeingrad-1;
        const newcustomised={...this.state.ingradience};
        newcustomised[kk]=removeamount;

        const baseprice=this.state.baseprice;
        const singleingrad=price[kk];
        const newamount=baseprice-singleingrad;

        this.setState({ingradience:newcustomised, baseprice:newamount});
            }
        }
    purchasable=()=>{
        this.setState({purchasing:true})
    }

    hiddencheck=()=>{
        this.setState({purchasing:false})
    }

    continuealert=()=>{
        //alert('continue yes')
        /* this.setState({loading:true})
        const order={
            ingradience:this.state.ingradience,
            baseprice:this.state.baseprice,
            testname:'mine'
        }
        axios.post('/ordertest.json', order)
        //.then((response)=>console.log(response))
        .then(response=>{
        this.setState({loading:false, purchasing:false})
    }
        )
        .catch(error=>{
        this.setState({loading:false, purchasing:false})
        }
        ); */
        const queryParams=[];
        for(let i in this.state.ingradience){
            queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingradience[i]));
        }
        queryParams.push('price='+this.state.baseprice);
        const queryString=queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search:'?'+queryString
        })

    }

   /*  getChildrenMsg = (result, msg) => {
        // console.log(result, msg)
        // 很奇怪这里的result就是子组件那bind的第一个参数this，msg是第二个参数
        this.setState({
            checkout: msg
        })
    } */

    




    render(){
        let orderList=null;
        let burgers=<Spinner />;

        

        if(this.props.ingi){
            burgers=(
                <>
                <Burger ingra={this.props.ingi} buy={this.purchasable}/>
                <Burgercontrols 
                    //addmethod={this.addingradient}
                    addmethod={this.props.oningradientAdd}
                    removemethod={this.props.oningradientDel}
                    price={this.state.baseprice}
                    />
                    </>
                    );

             orderList=<Ordersummery ingra={this.props.ingi} />
        }
       
        if(this.state.loading){
            orderList=<Spinner />
        }

        return(
            <>
{/*             <Price customprice={this.state.baseprice} />
 */}            
            {/* <Burger ingra={this.state.ingradience} buy={this.purchasable}/> */}
            
            <Backdrop show={this.state.purchasing} hidden={this.hiddencheck}/>
            <UI show={this.state.purchasing}>
                {/* <Ordersummery ingra={this.state.ingradience} /> */}
                {orderList}
                <Button type='Success' clicked={this.continuealert}>continue</Button>
                <Button type='Danger' clicked={this.hiddencheck}>cancel</Button>
            </UI>
            {/* <Burgercontrols 
            addmethod={this.addingradient}
            removemethod={this.removeingradient}
            price={this.state.baseprice}
            /> */}
            {burgers}
{/*             <Checkbutton check={this.state.checkout}/>
 */}            </>
        );
    }
}


const mapStateToProps=state=>{
    return{
        ingi:state.ingradien
    }
} 

const mapDispatchToProps=dispatch=>{
    return{
        oningradientAdd:(testname)=>
        dispatch({type:actionType.ADD_INGRAD, ingName:testname}),
        oningradientDel:(testname)=>
        dispatch({type:actionType.DEL_INGRAD, ingName:testname})
    }
} 

//export default burgerbuilder;
export default connect(mapStateToProps, mapDispatchToProps)(burgerbuilder);