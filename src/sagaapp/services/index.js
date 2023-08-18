import axios from "axios";

export class CategoryService {
    constructor(){
        this.url = "https://catprdapi.azurewebsites.net/api/Category";
    }

    async getCategories(){
        const response = await axios.get(this.url);
        return response;
    }

    async postCategory(category){
        const response = await axios.post(this.url, category, {
            headers :{
                'Content-Type':'application/json'
            }
        });
        return response;
    }

    async putCategory(id,category){
        const response = await axios.put(`${this.url}/${id}`, category, {
            headers :{
                'Content-Type':'application/json'
            }
        });
        return response;
    }

    async deleteCategory(id){
        const response = await axios.delete(`${this.url}/${id}`);
        return response;
    }
}
