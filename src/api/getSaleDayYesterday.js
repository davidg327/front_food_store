let url = 'https://tiendaclara.thivisha.com.co/api/sale_day_yesterday';
import axios from "axios";

export function getSaleDayYesterday(date, productId, setSaleDayYesterday) {
     axios.post(url, {
        date: date,
        product_id: productId
    })
        .then(function (response) {
            return setSaleDayYesterday(response.data.data);
        })
        .catch(function (error) {
            throw error;
        });
}
