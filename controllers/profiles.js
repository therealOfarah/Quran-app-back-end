import { Profile } from '../models/profile.js'
import { v2 as cloudinary } from 'cloudinary'

function index(req, res) {
  Profile.find({})
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}
export function account(req,res){
  Profile.findById(req.params.id)
  .populate('quran')
  .populate('hadith')
  .then(profile=>{
    res.json(profile)
  })
  .catch(error=>{
    console.error(error)
    res.status(500).json(error)
  })
}
function addPhoto(req, res) {
  const imageFile = req.files.photo.path
  Profile.findById(req.params.id)
  .then(profile => {
    cloudinary.uploader.upload(imageFile, {tags: `${req.user.email}`})
    .then(image => {
      profile.photo = image.url
      profile.save()
      .then(profile => {
        res.status(201).json(profile.photo)
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  })
}

export { index, addPhoto }
