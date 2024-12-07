import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AuthPage = ({ data }) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePrivateChange = () => {
    setIsPrivate(true);
  };

  const handlePublicChange = () => {
    setIsPrivate(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/result', { state: { password, email, isPrivate, data } });
  };

  return (
    <StyledForm>
      <form onSubmit={handleSubmit}>
        
        <div>
          <label>Почта:</label>
          <EmailStyle
            type="email" 
            value={email}
            onChange={handleEmailChange}
            required
          />
          <label>Пароль:</label>
          <EmailStyle
            type={isPrivate ? 'password' : 'text'}
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={!isPrivate}
              onChange={handlePublicChange}
            />
            PUBLIC
          </label>
          <label>
            <input
              type="checkbox"
              checked={isPrivate}
              onChange={handlePrivateChange}
            />
            PRIVATE
          </label>
        </div>
        <button type="submit">Войти</button>
      </form>
    </StyledForm>
  );
};


export default AuthPage;
const StyledForm = styled.div`
  margin: 30px 0 0 600px;
`
const EmailStyle = styled.input`
  display: flex;
  gap: 20px;
`
