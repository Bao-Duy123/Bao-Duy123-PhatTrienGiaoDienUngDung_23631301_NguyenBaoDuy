import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
  // Quản lý ẩn hiện form
  const [isVisible, setIsVisible] = useState(true);
  // Quản lý dữ liệu input
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Đăng nhập với: ${formData.username}`);
  };

  if (!isVisible) return <button onClick={() => setIsVisible(true)}>Hiện Form</button>;

  return (
    <div className="wrapper">
      <div className={`login-box ${isVisible ? 'fade-in' : ''}`}>
        <span className="close-icon" onClick={() => setIsVisible(false)}>×</span>
        
        <h2>Đăng Nhập</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username</label>
            <input 
              type="text" 
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Nhập tên đăng nhập..."
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Nhập mật khẩu..."
            />
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;