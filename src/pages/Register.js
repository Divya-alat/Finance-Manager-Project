import React,{useState} from "react";
import {Form,Input,message} from "antd" ;
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
const Register = () => {
    const navigate = useNavigate();
    const[Loading,setLoading] = useState(false)
    const submitHandler = async (value)=>{
    try {
        setLoading(true)
        await axios.post('/PFM/register', value)
        message.success('Registration Successful')
        setLoading(false)
        navigate('/login')
    } catch (error) {
        message.error('Invalid username or password');
        setLoading(false)
        console.log(error)
    }
    };
    return (
        <>
        <div className="register-page">
            {Loading && <Spinner/>}
        <Form layout="vertical " onFinish={submitHandler}>
        <h1><b>Register Form</b></h1>
        <Form.Item label="Name" name="Name" >
             <Input type="text" placeholder="Enter your name" />
             </Form.Item>
        <Form.Item label="Email" name="Email">
            <Input type="Email" placeholder="Enter your Email" />
            </Form.Item>
        <Form.Item label="Username" name="username">
                <Input type="username" placeholder="Enter your username" />
            </Form.Item>
        <Form.Item label="Password" name="password">
                <Input type="password" placeholder="Enter your password" />
            </Form.Item>

            <div className="d-flex justify-content-between">
                <Link to="/login">Already Registered</Link>
                <button className="btn btn-primary">Register</button>
            </div>
        </Form>
        </div>
        </>
    )
    };
    export default Register;