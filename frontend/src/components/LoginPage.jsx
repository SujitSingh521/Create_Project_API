import React, {useState} from 'react';
import axios from 'axios';

const LoginPage = ({setUser})=>{
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange =(e)=>{
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:5000/api/users/login', formData);
            const { token, username, role } = response.data;
            localStorage.setItem('token', token);
            setUser({ username, role });
        }catch (error){
            console.error(error);
        }
    };

    return (
      <center>
          <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Login</button>
        </form>
      </center>
    );
};

export default LoginPage;
