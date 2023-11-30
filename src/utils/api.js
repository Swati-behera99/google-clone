import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: "AIzaSyBK3WiqO7YTfJtyUqrky_kFXT7sA13Ampc",
    cx: "a030e7b45a499422a",
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    
    return data;
};
