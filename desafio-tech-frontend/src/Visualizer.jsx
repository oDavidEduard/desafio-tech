import { useState, useEffect } from 'react';
import api from './services/api';
import { Title2 } from './components/StyledComponents';
import { Container2, Logo, VisualizerGrid, ControlPanel, DisplayArea, ImageLayer, StyledTable } from './components/StyledComponents';
import LogoutButton from "./components/LogoutButton";

function Visualizer() {
  const [allRecortes, setAllRecortes] = useState([]);
  const [selectedIds, setSelectedIds] = useState(new Set());

  useEffect(() => {
    const fetchRecortes = async () => {
      try {
        const response = await api.get("/recortes");
        setAllRecortes(response.data);
      } catch (error) {
        console.error("Erro ao buscar recortes:", error);
      }
    };
    fetchRecortes();
  }, []);

  const handleCheckboxChange = (recorteId) => {
    setSelectedIds(prevSelectedIds => {
      const newSelectedIds = new Set(prevSelectedIds);
      if (newSelectedIds.has(recorteId)) {
        newSelectedIds.delete(recorteId);
      } else {
        newSelectedIds.add(recorteId);
      }
      return newSelectedIds;
    });
  };

  const recortesToDisplay = allRecortes.filter(recorte => selectedIds.has(recorte.id));

  return (
    <div>
    <Container2>
        <Logo src="/images/Logo.png" alt="Logo" />
    </Container2>
      <br />
      <Title2 style={{ marginBottom: '20px' }}>Ferramenta de Montagem</Title2>
      <VisualizerGrid>
        <ControlPanel>
          <h3>Selecione as Peças</h3>
          <StyledTable>
            <thead>
              <tr>
                <th>Montar?</th>
                <th>Nome</th>
                <th>Ordem</th>
              </tr>
            </thead>
            <tbody>
              {allRecortes.map((recorte) => (
                <tr key={recorte.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedIds.has(recorte.id)}
                      onChange={() => handleCheckboxChange(recorte.id)}
                    />
                  </td>
                  <td>{recorte.nome_modelo}</td>
                  <td>{recorte.ordem_exibicao}</td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </ControlPanel>

        <DisplayArea>
          {recortesToDisplay.map((recorte) => (
            <ImageLayer
              key={recorte.id}
              src={recorte.link_imagem}
              alt={recorte.nome_modelo}
              order={recorte.ordem_exibicao}
            />
          ))}
        </DisplayArea>
      </VisualizerGrid>
    </div>
  );
}

export default Visualizer;