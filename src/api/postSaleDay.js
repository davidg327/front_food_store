let url = 'https://tiendaclara.thivisha.com.co/api/sale_day';
import axios from "axios";

export function postSaleDay(data, setSuccess) {
    axios.post(url, data)
        .then(function (response) {
            return setSuccess(response.data.code === 200);
        })
        .catch(function (error) {
            throw error;
        });
}
