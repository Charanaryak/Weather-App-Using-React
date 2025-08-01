import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import "./InfoBox.css"

export default function InfoBox({info}){
    const HOT_URL=
    "https://images.unsplash.com/photo-1661498198533-4d1bc830546f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
     
    const INIT_URL="https://images.unsplash.com/photo-1647618217230-6e394eae21cb?q=80&w=722&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1476400424721-e25994a9f0ff?q=80&w=1347&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
    <div className="InfoBox">
      <div className='cardContainer'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN_URL:info.temp>15 ?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
          info.humidity>80
          ?<ThunderstormIcon />
          :info.temp>15 
          ?<SunnyIcon/>
          :<AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temperature={info.temp}&deg;C</p>
         <p>Humidity:{info.humidity}</p>
         <p>Min Temp:{info.tempMin}&deg;C</p>
         <p>Max Temp:{info.tempMax}&deg;C</p>
         <p>The weather can be described as <i>{info.weather} </i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      </Card>
      </div>
    </div>
    );
}