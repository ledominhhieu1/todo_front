import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.Username = this.Username.bind(this);  
    this.Password = this.Password.bind(this);  
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {  
      username: '',
      password: ''
    }  
  }  
  Username(event) {  
    this.setState({ Username: event.target.value })  
  }  
  Password(event) {  
    this.setState({ Password: event.target.value })  
  }  

  handleSubmit(event) {
    axios({
      method: 'post',
      url: 'http://localhost:5321/user/login',
      data: {
        username: this.state.Username,
        password: this.state.Password
      }
    }).then(response => {
          alert('Success');
          this.setState({ redirect: true})
      }).catch(error => {alert('Fail');});
    this.setState({
      username: '',
      password: ''
    })
  }
  
  render() {
  const {redirect} = this.state;
  if (redirect) {
    return <Redirect to='/task'/>
  }
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={this.handleSubmit}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} 
               placeholder="Username" 
               value={this.state.value} 
               onChange={this.Username}/>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value={this.state.value} 
          onChange={this.Password}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="/register">register now!</a>
      </Form.Item>
    </Form>
  );
}};
export default Login;