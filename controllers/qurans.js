import { Quran } from "../models/quran.js";
import { Profile } from "../models/profile.js";
import axios from "axios";
//get a random number
export function getRandomVerse(req,res){

    axios(`http://api.alquran.cloud/v1/ayah/${req.params.edition}`)
    .then(response=>{
      let data = response.data.data
        res.json(data)
      }). catch (error=> {
    console.log(error)
    res.status(500)
  })
}
export function getAll(req,res){

  axios(`http://api.alquran.cloud/v1/quran/ar.asad`)
  .then(response=>{
    let data = response.data.data
      res.json(data)
    }). catch (error=> {
      console.log(error.data)
      res.status(500)
    })
}
export function getSurah(req,res){
  axios(`http://api.alquran.cloud/v1/surah/${req.params.surah}`)
  .then(response=>{
    let data = response.data.data
    res.json(data)
  }).catch(error=>{
    console.error(error)
    res.status(error)
  })
}
export function saveVerse(req,res){
  console.log(req.user.profile)
  Quran.create(req.body)
  .then(quran=>{
    Profile.findById(req.user.profile)
    .populate('quran')
    .then(profile=>{
      profile.quran.push(quran)
      console.log(profile)
      profile.save()

      res.json(quran)
    }).catch(error=>{console.error(error)})
  })
}