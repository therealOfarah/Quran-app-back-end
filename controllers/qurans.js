import { Quran } from "../models/quran.js";
import axios from "axios";
//get a random number
export function getRandomVerse(req,res){
  try {
    axios.get(`http://api.alquran.cloud/v1/ayah/${req.params.id}`)
    .then(response=>{
      let data = response.data.data
        res.json(data)
      })
  } catch (error) {
    
  }
}