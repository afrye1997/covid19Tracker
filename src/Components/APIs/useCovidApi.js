import { useState, useEffect } from "react";
import axios from "axios";

const  CallingAPI= (country)=> {
 
  const [url]=useState(`https://coronavirus-19-api.herokuapp.com/countries/${country}`)
  const [res, setRes] = useState({
    data: null,
    complete: false,
    pending: false,
    error: false
  });
  useEffect(() => {
    const fetchData=async()=>{
    try{
      const result = await axios(url);
      setRes({
                data: result.data,
                pending: false,
                error: false,
                complete: true
              })
            
      
    }
    catch(error)
    {
      setRes({
        data: null,
        pending: false,
        error: true,
        complete: true
      })
    }
  }

  fetchData();
  
}, [url]);

  return res.data
}
export default CallingAPI;

  