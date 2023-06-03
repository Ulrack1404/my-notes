import httpService from "./http.service";
const categoriesEndpoint = "categories/";

const categoriesService = {
    fetchAll: async () => {
        const { data } = await httpService.get(categoriesEndpoint);
        return data;
    }
};
export default categoriesService;
