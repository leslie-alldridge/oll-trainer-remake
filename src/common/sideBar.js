import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SideBar extends Component {
  state = {
    collapsed: false,
    page: 'home'
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  navigateTo = route => {
    this.setState({
      page: route
    });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className='logo' />
          <Menu theme='dark' defaultSelectedKeys={['0']} mode='inline'>
            <Menu.Item key='0'>
              <Icon type='pie-chart' />
              <span>Home</span>
            </Menu.Item>
            <Menu.Item key='1'>
              <Icon type='pie-chart' />
              <span>Learning</span>
            </Menu.Item>
            <Menu.Item key='2'>
              <Icon type='desktop' />
              <span>Timed</span>
            </Menu.Item>
            <SubMenu
              key='sub1'
              title={
                <span>
                  <Icon type='user' />
                  <span>OLL Algs</span>
                </span>
              }
            >
              <Menu.Item key='3'>Tom</Menu.Item>
              <Menu.Item key='4'>Bill</Menu.Item>
              <Menu.Item key='5'>Alex</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        {this.state.page === 'home' && (
          <Layout>
            <section className='b1'>
              <div className='in1'>
                <div className='content'>
                  <h1>OLL Trainer</h1>
                  <a
                    className='btn'
                    onClick={() => this.navigateTo('learning')}
                  >
                    GET STARTED
                  </a>
                </div>
              </div>
            </section>
          </Layout>
        )}
        {this.state.page === 'learning' && (
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                Bill is a cat.
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              OLL Trainer 2019 | Powered by Ant Design | Created by Leslie
              Alldridge
            </Footer>
          </Layout>
        )}
      </Layout>
    );
  }
}

export default SideBar;
