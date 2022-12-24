import { Quran } from "../models/quran.js";
import axios from "axios";
//get a random number
export function getRandomVerse(req,res){

    axios.get(`http://api.alquran.cloud/v1/ayah/${req.params.edition}`)
    .then(response=>{
      let data = response.data.data
        res.json(data)
      }). catch (error=> {
    console.log(error)
    res.status(500)
  })
}
export async function getAll(req,res){
try {
  await( axios.get(`http://api.alquran.cloud/v1/quran/ar.asad`))
  .then(response=>{
    let data = response.data.data
      res.json(data)
    })
} catch (error) {
  console.log(error)
  res.status(500)
}
}