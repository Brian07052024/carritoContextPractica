import axios from 'axios';

export async function fetchProducts() {
    try {
        const { data } = await axios.get('/mocks/products.json');

        if (!data || !data.products) {
            throw new Error('Formato de respuesta inválido');
        }

        return data.products;

    } catch (error) {
        throw new Error(`Error cargando productos: ${error.message}`);
    }
}