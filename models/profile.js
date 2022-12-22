import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  photo: String,
  quran:{ type: Schema.Types.ObjectId, ref: 'Quran' },
  hadith:{ type: Schema.Types.ObjectId, ref: 'Hadith' }
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
