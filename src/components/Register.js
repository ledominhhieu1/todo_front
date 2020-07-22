/* eslint-disable no-sequences */
import React from 'react';
import 'antd/dist/antd.css';
import '../styles/overwrite.css';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Redirect } from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.Username = this.Username.bind(this);  
    this.Password = this.Password.bind(this);  
    this.Fullname = this.Fullname.bind(this);
    this.Email = this.Email.bind(this);
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

  Fullname(event) {  
    this.setState({ Fullname: event.target.value })  
  }  

  Email(event) {  
    this.setState({ Email: event.target.value })  
  }  

  handleSubmit(event) {
    axios({
      method: 'post',
      url: 'http://localhost:5321/user/register',
      data: {
        username: this.state.Username,
        password: this.state.Password,
        fullname: this.state.Fullname,
        email: this.state.email
      }
    }).then(response => {
          alert('Success');
          this.setState({ redirect: true})
      }).catch(error => {alert('Fail');});
    this.setState({
      username: '',
      password: '',
      fullname: '',
      email: ''
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
               onChange={this.Username}
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
          onChange={this.Password}
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
                onChange={this.Fullname}
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
                onChange={this.Email}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Register
        </Button>
        Or <a href="/login">login now!</a>
      </Form.Item>
    </Form>
  );
}
};
export default Register;