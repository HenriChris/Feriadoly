import api from "../api";
/* apikey = c830eba06186831261fab92aa4b6325727b35a8e */
export default {
    async getHolidays(country : string, year : string, day : string, month : string, apiKey : string) {

        try {
                const response = api.get('v2/holidays?api_key=' + apiKey + '&country=' + country + '&year=' + year + '&day=' + day + '&month=' + month);
            return response;
        } catch (e) {
            console.log(e);
        }
    }
}