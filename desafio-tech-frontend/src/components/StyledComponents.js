// src/components/StyledComponents.js
import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const Container2 = styled.div`
  width: 100%;
  height: 60px;
  background-color: #9115a1;
  display: flex;
  align-items:center;
  justify-content:center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 40px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  text-align: center;
  color: #9115a1ff;
  margin-bottom: 24px;
  font-size: 24px;
`;

export const Subtitle = styled.h3`
  text-align: center;
  color: #000000ff;
  margin-bottom: 24px;
  font-size: 16px;
  margin-top: -16px;
  margin-bottom: 32px;
`


export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #8A2BE2;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #5A0BAD;
  }
`;