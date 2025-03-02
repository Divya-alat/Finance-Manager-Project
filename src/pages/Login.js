import React,{useState} from 'react';
import { Form, Input,message } from 'antd';
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';
import Spinner from '../components/Spinner';
const Login = () => {
    const [Loading,setLoading] = useState(false);
    const navigate = useNavigate()
    const submitHandler = async (values) => {
        try {
            setLoading(true)
            const {data} = await axios.post('/PFM/Login',values)
            setLoading(false)
            message.success('Login Success')
            localStorage.setItem('user', JSON.stringify({...data,Password:''}))
            navigate('/')
        } catch (error) {
            setLoading(false)
            message.error('Something went wrong')
        }
    };
    return (
        <>
        <div className="register-page">
            {Loading && <Spinner />}
                <Form layout="vertical " onFinish={submitHandler}>
                <h1><b>Login Form</b></h1>
                <Form.Item label="Username" name="username">
                        <Input type="username" placeholder="Enter your username" />
                    </Form.Item>
                <Form.Item label="Password" name="password">
                        <Input type="password" placeholder="Enter your password" />
                    </Form.Item>
        
                    <div className="d-flex justify-content-between">
                        <Link to="/register">New User? Click Here</Link>
                        <button className="btn btn-primary">Login</button>
                    </div>
                </Form>
                </div>
        </>
    )
}
export default Login;