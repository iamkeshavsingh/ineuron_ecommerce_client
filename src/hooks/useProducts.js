import useSWR from 'swr';
import { GET_PRODUCTS } from '../utils/api.util';
import server from '../utils/axios.util';



function useProducts() {

    var { data, error } = useSWR(GET_PRODUCTS, function (key) {
        return server.get(key).then(response => response.data)
    }, {
        refreshInterval: 1000 * 5 * 60
    });

    return {
        products: data,
        error,
        isLoading: !data && !error,
    }
}


export default useProducts;