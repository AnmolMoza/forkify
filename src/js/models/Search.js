import axios from 'axios';
/*Using axios instead of fetch because it works in every browser, 
it is good in error handling, it automatically converts to json, 
whereas in fetch it was a two step process*/

export default class Search {
    constructor(query){
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`);
            this.result = res.data.recipes;
        } catch(error){
            alert(error);
        } 
    }
}