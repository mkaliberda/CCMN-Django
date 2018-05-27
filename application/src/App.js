import React, { Component } from 'react';
import './App.css';
import { Menu, Icon, Button, notification, Switch } from 'antd';
const SubMenu = Menu.SubMenu;

const themesMenu = (theme) => {
    const args = {
        message: 'Changed menu themes',
        description: theme ? 'dark' : 'light',
        duration: 1,
    };
    notification.open(args);
};

class App extends Component {
    state = {
        collapsed: false,
        change_color: false,
        theme: 'dark',
    };

    changeTheme = (value) => {
        themesMenu(value);
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    };
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
  render() {
    return (
      <div className="App">
        <div style={{ width: 256 }} >

          <Menu
              theme={this.state.theme}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              inlineCollapsed={this.state.collapsed}
              className={"navbar"}>
            <Menu.Item onClick={this.toggleCollapsed} title="Hide menu">
              <Icon  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                <span>Hide menu</span>
            </Menu.Item>
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Nav1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Nav2</span>
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
              <Menu.Item key="4">Option 5</Menu.Item>
              <Menu.Item key="5">Option 6</Menu.Item>
              <Menu.Item key="6">Option 7</Menu.Item>
              <Menu.Item key="7">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
              <Menu.Item key="8">Option 9</Menu.Item>
              <Menu.Item key="9">Option 10</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="10">Option 11</Menu.Item>
                <Menu.Item key="11">Option 12</Menu.Item>
              </SubMenu>
            </SubMenu>
            <li className={"change-themes-box"}>
                <Switch
                    checked={this.state.theme === 'dark'}
                    onChange={this.changeTheme}
                    checkedChildren="Dark"
                    unCheckedChildren="Light"
                    className="changeMenu"
                />
                { this.state.collapsed ? null :<span>Change themes</span>   }
            </li>
          </Menu>



        </div>
      </div>
    );
  }
}
export default App;
