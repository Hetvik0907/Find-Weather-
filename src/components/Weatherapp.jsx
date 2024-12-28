import Searchbox from "./Searchbox";
import Infobox from "./Infobox";
import { useState } from "react";
export default function Weatherapp(){
  const [weatherinfo,setweatherinfo] = useState(
{
city:"vadodara",
feelsLike: 25.23,
humidity: 65,
temp: 24.98,
tempMax: 24.98,
tempMin: 24.98,
weather: "haze",
}
  );

  let updateinfo = (newinfo) =>{
    setweatherinfo(newinfo);
  }

  return (
    <div style = {{textAlign:"center"}}
    >
    <h2 >weather app by hetvik</h2>
    <Searchbox updateinfo={updateinfo}></Searchbox>
    <Infobox info={weatherinfo}></Infobox>
    </div>

  );
}