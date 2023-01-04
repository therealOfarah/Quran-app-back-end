import axios from "axios";

export function getPrayerTimes(req,res){
  const info = req.params.location.split(',')
  axios(`http://api.aladhan.com/v1/timings/${info[0]}?latitude=${info[1]}&longitude=${info[2]}&method=3`)
  .then(prayer=>{
    const data = prayer.data
    res.json(data)
    }).catch(error=>{
      console.error(error)
    })
}