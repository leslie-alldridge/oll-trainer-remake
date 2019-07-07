import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Home from './home';
import Learning from './learning';

const { Sider } = Layout;
const { SubMenu } = Menu;

class SideBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      collapsed: false,
      keys: '0'
    };
  }
  

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  navigate = (keys) => {
    console.log(keys)
    this.setState({
      keys
    })
  }

  render() {
    console.log(this.state)
    const { pathname } = this.props.props.location
    const { push } = this.props.props.history
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className='logo' />
          <Menu theme='dark' selectedKeys={[this.state.keys]} defaultSelectedKeys={['0']} mode='inline'>
            <Menu.Item onClick={() => {push('/'); this.navigate('0')}} key='0'>
              <Icon type='home' />
              <span>Home</span>
            </Menu.Item>
            <Menu.Item onClick={() => {push('/learning'); this.navigate('1')}} key='1'>
              <Icon type='solution' />
              <span>Learning</span>
            </Menu.Item>
            <Menu.Item key='2'>
              <Icon type='hourglass' />
              <span>Timed</span>
            </Menu.Item>
            <SubMenu
              key='sub1'
              title={
                <span>
                  <Icon type='book' />
                  <span>OLL Algs</span>
                </span>
              }
            >
              <Menu.Item key='3'>All-Edges</Menu.Item>
              <Menu.Item key='4'>T-Shapes</Menu.Item>
              <Menu.Item key='5'>Squares</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        {console.log(this.props.props.match)}
        {pathname === '/' && (
          <Home />
        )}
        {pathname === '/learning' && (
          <Learning />
        )}
      </Layout>
    );
  }
}

export default SideBar;
