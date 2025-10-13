import { useState, useEffect } from "react";
import api from "./services/api";
import { Link } from "react-router-dom";
import { ActionButton, DashboardContainer, StyledTable, Button, Container2, Title2, Logo } from "./components/StyledComponents";


function Login() {
    return (
        <Container2>
            <Logo src="/images/Logo.png" alt="Logo" />
        </Container2>
    )
}

export default Login;