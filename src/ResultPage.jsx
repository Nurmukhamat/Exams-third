import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { password, isPrivate, data, email } = location.state;
  const filteredData = data.filter(item => 
    (isPrivate && item.status === 'Приват') || 
    (!isPrivate && item.status === 'Публик')
  );
  const formatEmail = (email) => {
    const [localPart, domain] = email.split('@');
    if (localPart.length <= 5) {
      return email; 
    }
    const firstThree = localPart.slice(0, 1);
    const lastTwo = localPart.slice(-2);
    const maskedPart = '*'.repeat(localPart.length - 5); 
    return `${firstThree}${maskedPart}${lastTwo}@${domain}`;
  };
  return (
    <StyledForm>
      <button onClick={() => navigate('/')}>Назад</button>
      <p>email: {isPrivate ? formatEmail(email) : email}</p> 
      <p>password: {isPrivate ? '*'.repeat(password.length) : password}</p>
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>
            ID: {item.id}, Статус: {item.status}
          </li>
        ))}
      </ul>
    </StyledForm>
  );
};

export default ResultPage;
const StyledForm = styled.div`
  margin: 30px 0 0 600px;
`