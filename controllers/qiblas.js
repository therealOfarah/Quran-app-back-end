import axios from "axios";

export function getPrayerTimes(req,res){
  const options = {
    method: 'GET',
    url: 'https://aladhan.p.rapidapi.com/timingsByCity',
    params: {country: `${req.params.country}`, city: `${req.params.city}`, state: `${req.params.state}`},
    headers: {
      'X-RapidAPI-Key': process.env.PRAYER_KEY,
      'X-RapidAPI-Host': process.env.PRAYER_HOST,
    }
  };
  axios(options)
  .then(response=>{
    const data = response.data
    res.json(data)
  }).catch(error=>{
    console.error(error)
  })
}