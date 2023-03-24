let url = 'https://tiendaclara.thivisha.com.co/api/general_account';
import axios from "axios";

export function postGeneralAccount(id, data, setSuccess) {
    axios.post(`${url}/{id}`, {
        daily_expenses: data,
    })
        .then(function (response) {
            return setSuccess(response.data.code === 200);
        })
        .catch(function (error) {
            throw error;
        });
}
