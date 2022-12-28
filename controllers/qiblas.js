import axios from "axios";

export function getPrayerTimes(req,res){
  const options = {
    method: 'GET',
    url: 'https://aladhan.p.rapidapi.com/timingsByCity',
    params: {country: `${res.body.country}`, city: `${res.body.city}`, state: `${res.body.state}`},
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