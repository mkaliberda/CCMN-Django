import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Layout, Menu, Breadcrumb, Icon
} from 'antd'

const { Header, Content, Sider } = Layout

class NavToolBar extends React.Component {
  state = {
    collapsed: false
  }

  static propTypes = {
    children: PropTypes.any,
  }

  toggle = () => {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed,
    }))
  }

  render() {
    const { children } = this.props

    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={['1']}
          >
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{
            background: '#fff', padding: 24, margin: 0, minHeight: 280
          }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default NavToolBar
