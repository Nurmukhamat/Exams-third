import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isPrivate, data } = location.state;
  const filteredData = data.filter(item => 
    (isPrivate && item.status === 'PRIVATE') || 
    (!isPrivate && item.status === 'PUBLIC')
  );
  
  return (
    <StyledForm>
      <button onClick={() => navigate('/')}>Назад</button>
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>
             {item.userName}{item.userAge},{item.status}
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