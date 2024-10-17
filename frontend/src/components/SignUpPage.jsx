import React, {useState} from 'react';
import axios from 'axios';

const SignUpPage = ()=>{
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        dob: '',
        role: 'Explorer',
        location: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/api/users/signup', formData);
            alert('User registered successfully');
        }catch (error){
            console.error(error);
        }
    };

    return(
        <div className='formContainer'>
               <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="date" name="dob" onChange={handleChange} required />
            <select name="role" onChange={handleChange}>
                <option value="Explorer">Explorer</option>
                <option value="Admin">Admin</option>
            </select>
            <input type="text" name="location" placeholder="Location" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
            <button type="submit">Sign Up</button>
        </form>
        </div>
    );
};

export default SignUpPage;
