import axios from "axios";

export function getPrayerTimes(req,res){
  console.log(req.params,'**********')
  axios('http://api.aladhan.com/v1/timings/03012023?latitude=51.508515&longitude=-0.1254872&method=3')
  .then(prayer=>{
    const data = prayer.data
    res.json(data)
    }).catch(error=>{
      console.error(error)
    })
}