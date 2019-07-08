import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Home from './home';
import Learning from './learning';
import Stopwatch from '../timer/stopwatch';

const { Sider } = Layout;
const { SubMenu } = Menu;

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      keys: '0'
    };
  }

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  navigate = keys => {
    this.setState({
      keys
    });
  };

  render() {
    console.log(this.state);
    const { pathname } = this.props.props.location;
    const { push } = this.props.props.history;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className='logo' />
          <Menu
            theme='dark'
            selectedKeys={[this.state.keys]}
            defaultSelectedKeys={['0']}
            mode='inline'
          >
            <Menu.Item
              onClick={() => {
                push('/');
                this.navigate('0');
              }}
              key='0'
            >
              <Icon type='home' />
              <span>Home</span>
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                push('/learning');
                this.navigate('1');
              }}
              key='1'
            >
              <Icon type='solution' />
              <span>Learning</span>
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                push('/timer');
                this.navigate('2');
              }}
              key='2'
            >
              <Icon type='hourglass' />
              <span>Timer</span>
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
              <Menu.Item
                onClick={() => {
                  push('/algs');
                  this.navigate('3');
                }}
                key='3'
              >
                All
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  push('/algs/all-edges');
                  this.navigate('4');
                }}
                key='4'
              >
                All-Edges
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  push('/algs/t-shapes');
                  this.navigate('5');
                }}
                key='5'
              >
                T-Shapes
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  push('/algs/squares');
                  this.navigate('6');
                }}
                key='6'
              >
                Squares
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        {pathname === '/' && <Home navigate={() => this.navigate('1')} />}
        {pathname === '/learning' && <Learning />}
        {pathname === '/timer' && <Stopwatch />}
      </Layout>
    );
  }
}

export default SideBar;
