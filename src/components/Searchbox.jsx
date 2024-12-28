import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import "./Searchbox.css"
import { useState } from 'react';
export default function Searchbox ({updateinfo}){
  let [city,setcity] = useState("");
  let [error,seterror] = useState(false);
  const API_URL = "";
  const API_KEY = "";

  let getweatherinfo = async()=> {
    try{
   let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
   let jsonresponse = await response.json();
   console.log(jsonresponse);
   let result = {
    city:city,
    temp :jsonresponse.main.temp,
    tempMin:jsonresponse.main.temp_min,
    tempMax:jsonresponse.main.temp_max,
    humidity:jsonresponse.main.humidity,
    feelsLike:jsonresponse.main.feels_like,
    weather:jsonresponse.weather[0].description,
   };
  console.log(result);
  return result;
    }catch(error){
      throw error;
    }
  }
  

  let handlechange = (evt) => {
    setcity(evt.target.value);
  }

  let handlesubmit = async (event) => {
    try{
    event.preventDefault();
    console.log(city);
    setcity("");
    let newinfo =await getweatherinfo();
    updateinfo(newinfo);
    }catch(error){
    seterror(true);
    }
  }
 return <div className='searchbox '>
  <form action="" onSubmit={handlesubmit}>
  <TextField id="city" label="Enter City" variant="outlined" required value={city} onChange={handlechange}/>
  <br /><br /><br />
  <Button variant="contained" type = "submit" endIcon={<SendIcon />}>
        get weather
      </Button>
      {error && <p style={{color:"red"}}>No Such Place Exists!</p> }
  </form>
 </div>
}
