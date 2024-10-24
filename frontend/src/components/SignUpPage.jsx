import React, { useState } from 'react';
import axios from '../axiosConfig';


const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    dob: '',
    role: 'Explorer',
    location: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const response = await axios.post('/api/users/signup', formData);
      alert('User registered successfully!');
      // Redirect or perform any action after successful registration
    } catch (error) {
      console.error(error);
      alert('Registration failed!');
    }
  };

  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="date" name="dob" onChange={handleChange} required />
        <select name="role" onChange={handleChange}>
          <option value="Admin">Admin</option>
          <option value="Explorer">Explorer</option>
        </select>
        <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUpPage;
