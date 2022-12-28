import { Hadith } from "../models/hadith.js";
import axios from "axios";
export function getChapters(req,res){
  axios(`https://api.hadith.gading.dev/books`) 
  .then(response => {
      const data = (response.data)
      res.json(data)
  })
  .catch(error => {
      console.log(error);
  })
}
export function getInfo(req,res){
  axios(`https://api.hadith.gading.dev/books/${req.params.id}?range=300-500`) 
  .then(response => {
      const data = (response.data)
      res.json(data)
  })
  .catch(error => {
      console.log(error);
  })
}