import axios from "axios";
export default {
    mandar: async (num = 0) => {
        await axios.get('/index.php/welcome/ws/', {
            params: {
                tipo: num,
                device: navigator.userAgent
            }
        })
    }
}
