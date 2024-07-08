// AuthButton.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/'); // Redirect to home page after login
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/home'); // Redirect to home page after logout
  };

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogout}><img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cd10219f3e73bf876afa223b611e254c085c85b01a03b93657c8fd8d14d2c3a?"
        className="img-5"
        alt="Login"
      /></button>
      ) : (
        <button onClick={handleLogin}>Sign In</button>
      )}
    </div>
  );
}

export default AuthButton;
