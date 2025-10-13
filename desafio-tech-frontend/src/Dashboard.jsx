import { useState, useEffect } from "react";
import api from "./services/api";
import { Link } from "react-router-dom";
import { ActionButton, DashboardContainer, StyledTable, Button, Container2, Title2, Logo } from "./components/StyledComponents";

function Dashboard() {

    const [recortes, setRecortes] = useState([]);

    useEffect(() => {
        const fetchRecortes = async () => {
            try {
                
                const response = await api.get("/recortes");
                setRecortes(response.data);
                console.log("Recortes carregados:", response.data);


            } catch (error) {
                console.error("Erro ao buscar recortes:", error);
                alert("Não foi possivel carregar os recortes.");
            }


        };

        fetchRecortes();

    }, []);

    const handleDelete = async (recorteId) => {

        const isConfirmed = window.confirm(
            "Tem certeza que deseja excluir? Essa opção não pode ser desfeita."
        );

        if (isConfirmed) {
            try {
                
                await api.delete(`/recortes/${recorteId}`);

                setRecortes(recortes.filter((recorte) => recorte.id !== recorteId));
                
                alert("Recorte excluido.");

            } catch (error) {
                console.error("Erro ao excluir recorte.", error);
                alert("Não foi possivel excluir o recorte.");
                
            }
        }
    };

    return (
        <DashboardContainer>
            <Container2>
                <Logo src="./public/images/Logo.png" alt="Logo"/>
            </Container2>
            <Title2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Peças gerais</Title2>
            <Button as={Link} to="/recortes/novo">Adicionar peça</Button>

            <StyledTable>
                <thead>
                    <tr>
                        <th>Nome do modelo</th>
                        <th>SKU</th>
                        <th>Ordem</th>
                        <th>Tipo</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {recortes.map((recorte) => (
                        <tr key={recorte.id}>
                            <td>{recorte.nome_modelo}</td>
                            <td>{recorte.sku}</td>
                            <td>{recorte.ordem_exibicao}</td>
                            <td>{recorte.tipo_recorte}</td>
                            <td>
                                <ActionButton as={Link} to={`/recortes/editar/${recorte.id}`} type="edit">Editar</ActionButton>
                                <ActionButton type="delete" onClick={() => handleDelete(recorte.id)}>Excluir</ActionButton>
                            </td>
                        </tr>
                        ))}
                </tbody>
            </StyledTable>
        </DashboardContainer>
    );

}

export default Dashboard;