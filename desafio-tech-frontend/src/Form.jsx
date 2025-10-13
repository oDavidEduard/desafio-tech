import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from './services/api';
import { Input, Button, Title, FormGrid, FieldContainer, Label, Select, Logo, Container2 } from './components/StyledComponents'; // MUDANÇA: O caminho para components agora é '../'
import styled from 'styled-components';

const FormContainer = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: 40px auto 0 auto;
`;

function RecorteFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({
    nome_modelo: '',
    ordem_exibicao: '',
    sku: '',
    tipo_recorte: '',
    posicao_recorte: '',
    tipo_produto: '',
    material_recorte: '',
    cor_material: '',
  });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (isEditing) {
      const fetchRecorte = async () => {
        try {
          const response = await api.get(`/recortes/${id}`);
          setFormData(response.data);
        } catch (error) {
          console.error("Erro ao buscar dados do recorte:", error);
          alert("Não foi possível carregar os dados para edição.");
        }
      };
      fetchRecorte();
    } else {
      setFormData({
        nome_modelo: '', ordem_exibicao: '', sku: '', tipo_recorte: '',
        posicao_recorte: '', tipo_produto: '', material_recorte: '', cor_material: '',
      });
    }
  }, [id, isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataPayload = new FormData();
    Object.keys(formData).forEach(key => {
        dataPayload.append(key, formData[key]);
    });
    if (imageFile) {
        dataPayload.append('imagem', imageFile);
    }

    try {
      if (isEditing) {

        await api.put(`/recortes/${id}`, dataPayload, {
            headers: { 'Content-Type': 'multipart/-data' },
        });
        alert('Recorte atualizado com sucesso!');
      } else {

        await api.post('/recortes', dataPayload, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        alert('Recorte criado com sucesso!');
      }
      navigate('/');
    } catch (error) {
      console.error('Erro ao salvar recorte:', error);
      alert('Erro ao salvar recorte.');
    }
  };

  return (
    <FormContainer>
      <Container2>
        <Logo src="/images/Logo.png" alt="Logo"/>
      </Container2>
      <Title>{isEditing ? 'Editar Recorte' : 'Cadastrar Novo Recorte'}</Title>
      
      <form onSubmit={handleSubmit}>
        <FormGrid>
          <FieldContainer>
            <Label htmlFor="nome_modelo">Nome do Modelo</Label>
            <Input id="nome_modelo" name="nome_modelo" value={formData.nome_modelo} onChange={handleChange} required />
          </FieldContainer>
          
          <FieldContainer>
            <Label htmlFor="tipo_recorte">Tipo do recorte</Label>
            <Select id="tipo_recorte" name="tipo_recorte" value={formData.tipo_recorte} onChange={handleChange} required>
              <option value="">Escolher...</option>
              <option value="frente">Frente</option>
              <option value="aba">Aba</option>
              <option value="lateral">Lateral</option>
            </Select>
          </FieldContainer>

          <FieldContainer>
            <Label htmlFor="posicao_recorte">Posição da imagem</Label>
            <Input id="posicao_recorte" name="posicao_recorte" value={formData.posicao_recorte} onChange={handleChange} placeholder="frente, traseira..." required />
          </FieldContainer>

          <FieldContainer>
            <Label htmlFor="ordem_exibicao">Ordem de exibição</Label>
            <Input id="ordem_exibicao" name="ordem_exibicao" value={formData.ordem_exibicao} onChange={handleChange} type="number" required />
          </FieldContainer>

          <FieldContainer>
            <Label htmlFor="material_recorte">Tecidos</Label>
            <Select id="material_recorte" name="material_recorte" value={formData.material_recorte} onChange={handleChange} required>
                <option value="">Escolher...</option>
                <option value="linho">Linho</option>
            </Select>
          </FieldContainer>
          
          <FieldContainer>
            <Label htmlFor="cor_material">Cor do tecido</Label>
            <Select id="cor_material" name="cor_material" value={formData.cor_material} onChange={handleChange} required>
                <option value="">Escolher...</option>
                <option value="azul marinho">Azul Marinho</option>
                <option value="laranja">Laranja</option>
            </Select>
          </FieldContainer>
        </FormGrid>
        
        <FieldContainer style={{ marginBottom: '20px' }}>
            <Label htmlFor="sku">SKU</Label>
            <Input id="sku" name="sku" value={formData.sku} onChange={handleChange} required />
        </FieldContainer>
        
        <FieldContainer style={{ marginBottom: '20px' }}>
            <Label htmlFor="tipo_produto">Tipo do produto</Label>
             <Select id="tipo_produto" name="tipo_produto" value={formData.tipo_produto} onChange={handleChange} required>
                <option value="">Escolher...</option>
                <option value="boné americano">Boné Americano</option>
                <option value="boné trucker">Boné Trucker</option>
            </Select>
        </FieldContainer>

        <FieldContainer>
          <Label>Mídia (selecione apenas se for alterar/cadastrar)</Label>
          <Input type="file" name="imagem" onChange={handleFileChange} />
        </FieldContainer>
        
        <br/><br/>
        <Button type="submit">Salvar</Button>
      </form>
    </FormContainer>
  );
}

export default RecorteFormPage;