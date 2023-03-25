let url = 'https://tiendaclara.thivisha.com.co/api/general_account';
import axios from "axios";

export function postGeneralAccount(id, data, setSuccess) {
    axios.post(`${url}/${id}`, {
        _method: 'PUT',
        daily_expenses: parseInt(data),
    })
        .then(function (response) {
            console.log(response, 'response');
            return setSuccess(response.data.code === 200);
        })
        .catch(function (error) {
            console.log(error, 'error');
            throw error;
        });
}
