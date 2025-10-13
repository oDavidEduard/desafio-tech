import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./services/api";
import { Container, Container2, FormWrapper, TitleLogin, ButtonLogin, Input, SubtitleLogin, Subtitle, Logo, LogoLogin } from "./components/StyledComponents";
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
                <Logo src="/images/Logo.png" alt="Logo"/>
            </Container2>
            <FormWrapper>
                <form onSubmit={handleSubmit}>
                    <TitleLogin>Bem-vindo ao Fanation!</TitleLogin>
                    <SubtitleLogin>Acesse sua conta para começar</SubtitleLogin>
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

                    <ButtonLogin type="submit">Acessar</ButtonLogin>

                    <Subtitle style={{ marginTop: "20px"}}><Link to="/register">Ainda não tem conta? </Link></Subtitle>

                </form>
                
            </FormWrapper>
        </Container>
    );
}

export default Login;