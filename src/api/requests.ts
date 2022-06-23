import axios from "axios";
import { baseURL } from "./config";


export let requests = {
    loadProducts: {
        loadProducts: (loadProducts?: any) =>
          axios.get(`${baseURL}/products`, loadProducts), 
    },

    loadProduct: {
        loadProduct: (id?: any) =>
          axios.get(`${baseURL}/products/${id}`), 
    },
    
}

