let url = 'https://tiendaclara.thivisha.com.co/api/general_account/find_last';
import axios from "axios";

export async function getGeneralAccount() {
    try {
        return  await axios.get(url);
    } catch (error) {
        throw error;
    }
}
