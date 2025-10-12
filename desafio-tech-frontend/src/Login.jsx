import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./services/api";
import { Container, Container2, FormWrapper, Title, Button, Input, Subtitle } from "./components/StyledComponents";
import { Link } from 'react-router-dom';

function Login() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            
            const response = await api.post("/login", { email, password });

            console.log ("Login bem sucedido", response.data);
            const { token } = response.data;

            localStorage.setItem("authToken", token);

            api.defaults.headers.Authorization = `Bearer ${token}`;

            navigate("/");


        } catch (error) {
            console.error("Erro no login", error);
            alert("Falha no login. Verifique seu e-mail e senha.");
        }
    };

    return (
        <Container>
            <Container2>
            </Container2>

            <FormWrapper>
                <form onSubmit={handleSubmit}>
                    <Title>Bem-vindo ao Fanation!</Title>
                    <Subtitle>Acesse sua conta para começar</Subtitle>
                    <Input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required/>
                    <Input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required/>

                    <Button type="submit">Entrar</Button>

                    <Subtitle style={{ marginTop: "20px"}}><Link to="/register">Ainda não tem conta? </Link></Subtitle>

                </form>
                
            </FormWrapper>
        </Container>
    );
}

export default Login;