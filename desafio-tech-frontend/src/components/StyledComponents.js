// src/components/StyledComponents.js
import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Montserrat";
    src: url("/fonts/Montserrat-Light.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`

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
  background-color: #440986;
  display: flex;
  align-items:center;
  justify-content:flex-start;
  padding-left: 26px;
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
  font-family: "Montserrat", sans-serif
`;

export const TitleLogin = styled.h2`
  text-align: center;
  color: #9115a1ff;
  margin-bottom: 24px;
  font-size: 24px;
  font-family: "Montserrat", sans-serif;
  font-weight: normal;
`;

export const Subtitle = styled.h3`
  text-align: center;
  color: #000000ff;
  margin-bottom: 24px;
  font-size: 16px;
  margin-top: -16px;
  margin-bottom: 32px;
  font-family: "Montserrat", sans-serif;
  font-weight: normal;
`;

export const SubtitleLogin = styled.h3`
  text-align: center;
  color: #000000ff;
  margin-bottom: 24px;
  font-size: 16px;
  margin-top: -16px;
  margin-bottom: 32px;
  font-family: "Montserrat", sans-serif;
  font-weight: normal;
`;

export const Logo = styled.img`
   height: 24px;
  width: 120px;

`;

export const LogoLogin = styled.img`
  height: 24px;
  width: 120px;
  
`

export const Title2 = styled.h1`
  text-align: left;
  color: #000;
  margin-bottom: 24px;
  font-size: 24px;
  font-family: "Montserrat", sans-serif;
`;


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

export const ButtonLogin = styled.button`
  width: 100%;
  padding: 12px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #5A0BAD;
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
    background-color: #440986;
  }
`;

export const DashboardContainer = styled.div`
  width:100%;
  max-width:1200px;
  margin: 40px auto;
  padding: 20px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);

  th, td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }

  thead {
    background-color: #f2f2f2;
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tbody tr:hover {
    background-color: #f1f1f1;
  }
`;

export const ActionButton = styled.button`
  padding: 6px 12px;
  margin-right: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  background-color: ${props => props.type === 'delete' ? '#DC3545' : '#007BFF'};

  &:hover {
    opacity: 0.8;
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
  color: #555;
  font-size: 14px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;

  &:focus {
    outline: none;
    border-color: #440986;
  }
`;