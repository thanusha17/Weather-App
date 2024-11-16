import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './DisplayInfo.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';



export default function DisplayInfo({result}){

    const summer = "https://images.unsplash.com/photo-1681586255040-64a93db3690a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const winter = "https://images.unsplash.com/photo-1610607469437-14cdee392347?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const rainy = "https://plus.unsplash.com/premium_photo-1665956066817-15afd1f0cb22?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    const image = result.humidity > 80 ? rainy : result.temp > 15 ? summer : winter;

    return (
        <>
        <div className="cardComponent">

         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 180 }}
        image ={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            <div>
          {result.city} &nbsp;<span>{result.humidity > 80 ? <ThunderstormIcon></ThunderstormIcon> : result.temp > 15 ? <WbSunnyIcon></WbSunnyIcon> : <AcUnitIcon></AcUnitIcon>}</span>
          </div>
        </Typography>
        <div>Temperature = {result.temp}&deg;C</div>
        <div>Humidity = {result.humidity}</div>
        <div>Min Temp = {result.tempMin}&deg;C</div>
        <div>Max Temp = {result.tempMax}&deg;C</div>
        <div>The weather can be described as <i>{result.description}</i> and feels like {result.feelsLike}</div>
      </CardContent>
    </Card>
    </div>
        </>
    )
}