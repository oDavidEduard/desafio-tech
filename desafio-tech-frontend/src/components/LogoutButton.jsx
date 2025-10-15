import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import React from 'react'
import styled from 'styled-components';
import api from "../services/api";


const LogoutButton = styled.button`
    padding: 8px 16px;
    background-color: white;
    color: #4B0082;
    border: 1px solid white;
    border-radius: 4px;
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background-color: #4B0082;
        color: white;
    }
`;

function Logout() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        delete api.defaults.headers.Authorization;
        navigate("/login");
    };

    return (
        <LogoutButton onClick={handleLogout}>
            Sair
        </LogoutButton>
    );
}

export default Logout;

