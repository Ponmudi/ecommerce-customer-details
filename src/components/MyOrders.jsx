import React, {Component} from 'react';
import { Collapse } from 'antd';

const Panel = Collapse.Panel;

export default class MyOrder extends Component{
    callback = (key) => {
        console.log(key);
    }
    render(){
        //console.log(this.props.productData)
        return(
            <div className="productContainer">
            <Collapse accordion defaultActiveKey={['1']} onChange={this.callback} >
                {this.props.productData.map( (item,index) => (
                        <Panel header={item.product.name} key={index+1}>
                        <div className="leftContainer">
                            <div className="productImage"><img src={item.product.picture} alt="Product" /></div>
                        </div>
                        <div className="rightContainer">
                            <div className="row"><label>Product Name:&nbsp;</label> <div><span>{item.product.name}</span></div></div>
                            <div className="row"><label>Price:&nbsp;</label> <div><span>{item.price}</span></div></div>
                            <div className="row"><label>Description:&nbsp;</label><div><span>{item.product.description}</span></div></div>
                            <div className="row"><label>Order Date:&nbsp;</label><div><span>{item.product.orderDate}</span></div></div>
                            <div className="row"><label>Order Status:&nbsp;</label><div><span>{item.product.orderStatus}</span></div></div>
                        </div>
                        </Panel>
                )
                )}
            </Collapse>           
            </div>
        )
    }
}