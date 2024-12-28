import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Infobox.css"
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function Infobox({info}){

  const INIT_URL="https://images.unsplash.com/photo-1662377824580-a540e7728635?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
  let COLD_URL="https://cdn.pixabay.com/photo/2022/10/04/04/41/thermometer-7497338_1280.jpg"

  let HOT_URL ="https://cdn.pixabay.com/photo/2022/07/31/06/31/heat-7355046_1280.jpg"

  let RAIN_URL = "https://cdn.pixabay.com/photo/2020/05/01/07/11/rain-5115710_1280.png"
  return <div className='InfoBox'>
   
    <div className="cardcontainer">
    <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL: info.temp>15?HOT_URL:COLD_URL}
       title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp>15?<WbSunnyIcon/>:<SevereColdIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>Min Temp = {info.tempMin}&deg;C</p>
         <p>Max Temp = {info.tempMax}&deg;C</p>
         <p>The Weather can be described as <i>{info.weather}</i> feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
  </div>
}