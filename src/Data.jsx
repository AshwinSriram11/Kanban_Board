import axios from "axios";

const Data = ({url}) => {
    axios.get(url)
    .then(res => {
        console.log(res.data)
    })
    .catch(err =>{
        console.log(err)
    })
}

export default Data;