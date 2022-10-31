import axios from "axios";

 const apis = axios.create({
    baseURL: 'http://test.prophecytours.com/cms/index.php?url=apis'
})

export default apis;