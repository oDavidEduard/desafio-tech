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
  justify-content:space-between;
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
  font-family: "Montserrat", sans-serif;

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
  font-family: "Montserrat", sans-serif;
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
  border-collapse: separate;
  border-spacing: 0;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  color: #222;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  margin-top: 20px;

  thead {
    background-color: #fafafa;
    color: #555;
    text-transform: none;
    font-weight: 600;
  }

  th {
    text-align: left;
    padding: 14px 18px;
    border-bottom: 1px solid #e5e5e5;
    font-size: 13px;
  }

  td {
    padding: 14px 18px;
    border-bottom: 1px solid #f0f0f0;
    vertical-align: middle;
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  tbody tr:hover {
    background-color: #fafafa;
    transition: background 0.2s ease-in-out;
  }
`;

export const ActionButton = styled.button`
  padding: 6px 12px;
  margin-right: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  background-color: ${props => props.type === 'delete' ? '#440986' : '#440986'};

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
  font-family: "Montserrat", sans-serif;
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  font-family: "Montserrat", sans-serif;

  &:focus {
    outline: none;
    border-color: #440986;
  }
`;

export const VisualizerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  height: 100%;
  font-family: "Montserrat", sans-serif;
`;

export const ControlPanel = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  overflow-y: auto;
`;

export const DisplayArea = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  background-color: #f0f0f0;
  border-radius: 8px;
  border: 2px dashed #ccc;
`;

export const ImageLayer = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: ${props => props.order}; 
`;