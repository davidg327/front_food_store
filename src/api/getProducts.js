let url = 'https://tiendaclara.thivisha.com.co/api/products';
import axios from "axios";

export async function getProducts() {
    try {
        return  await axios.get(url);
    } catch (error) {
        throw error;
    }
}
