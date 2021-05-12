import axios from "axios";
export default {
    mandar: async (num = 0) => {
        await axios.post('https://resumepablo.herokuapp.com/telegram', {
            tipo: num,
            device: navigator.userAgent
        }, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
                "Access-Control-Allow-Headers": "*"
            }
        })
    }
}
