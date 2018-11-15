import React, { Component } from 'react';
import './App.css';
import { Tabs } from 'antd';
import jsonData from './data/data.json';
import MyProfile from './components/MyProfile'
import MyOrders from './components/MyOrders'

const TabPane = Tabs.TabPane;

class App extends Component {

  state = {
    contacts: []
  };

  // componentDidMount(){

  // } 

  render() {
    return (
    <section className="main-container">
      <div className="card-container">
        <Tabs type="card">
          <TabPane tab="My Profile" key="1">
            <MyProfile profileData={jsonData}  />
          </TabPane>
          <TabPane tab="My Orders" key="2">
            <MyOrders productData={jsonData.orders} />
          </TabPane>
        </Tabs>
      </div>
    </section>
    );
  }
}

export default App;
