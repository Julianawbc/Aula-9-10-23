
import axios from './axios';

// Função para fazer uma requisição GET para a API
export async function getPosts() {
  try {
    const response = await axios.get('/posts');
    return response.data;
  } catch (error) {
    throw new Error('Erro ao obter os posts');
  }
}