/* eslint-disable no-sequences */
import React from 'react';
import 'antd/dist/antd.css';
import '../styles/overwrite.css';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { history } from '../services/history';
class Register extends React.Component {
  constructor(props) {
    super(props);
    

    this.state = {  
      username: '',
      password: '',
      fullname:'',
      email:''


    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }  

  handleSubmit(event) {
    axios({
      method: 'post',
      url: 'http://localhost:5321/user/register',
      data: {
        username: this.state.username,
        password: this.state.password,
        fullname: this.state.fullname,
        email: this.state.email
      }
    }).then(response => {
          alert('Success');
          window.location.replace('/');

          
      }).catch(error => {alert('Fail');});
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
               onChange={e => this.setState({username:e.target.value})}
        />
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
          onChange={e => this.setState({password:e.target.value})}
        />
      </Form.Item>
      <Form.Item
        name="Full name"
        rules={[
          {
            required: true,
            message: 'Please input your Full name!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Fullname" 
                value={this.state.value} 
                onChange={e => this.setState({fullname:e.target.value})}
        />
      </Form.Item>
      <Form.Item
        name="Email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input prefix={<MailOutlined className="site-form-item-icon" /> }   placeholder="Email" 
                value={this.state.value} 
                onChange={e => this.setState({email:e.target.value})}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Register
        </Button>
        Or <a href="/">login now!</a>
      </Form.Item>
    </Form>
  );
}
};
export default Register;