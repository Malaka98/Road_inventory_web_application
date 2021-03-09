import axios from "axios";


const Logout = () => {


    axios({
        method: 'POST',
        url: 'http://localhost:4000/logout',
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true,
      
      }).then((response)=>{
        
        console.log(response);
        
      }).catch((response)=>{

        console.log(response);

      })

}

export default Logout