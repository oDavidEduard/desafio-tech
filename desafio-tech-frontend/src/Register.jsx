import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./services/api";
import { Container, Container2, FormWrapper, Title, Button, Input, Subtitle, Logo } from "./components/StyledComponents";
import { Link } from 'react-router-dom';

function Register(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            
            const response = await api.post("/register", { email, password });

            console.log ("Cadastro realizado com sucesso", response.data);
            
            navigate ("/login");

        } catch (error) {
            console.error("Erro no cadastro", error);
            alert("Falha no cadastro. Verifique seu e-mail e senha.");
        }
    }

    return (
        <Container>
            <Container2>
                <Logo src="/images/Logo.png" alt="Logo" />
            </Container2>

            <FormWrapper>
                <form onSubmit={handleSubmit}>
                    <Title>Vamos nos cadastrar?</Title>
                    <Subtitle>Preencha os campos abaixo</Subtitle>
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

                    <Button type="submit">Cadastrar</Button>

                    <Subtitle style={{ marginTop: "20px"}}><Link to="/login">Já tem conta?</Link></Subtitle>
                </form>
                
            </FormWrapper>
        </Container>
    );
}

export default Register;