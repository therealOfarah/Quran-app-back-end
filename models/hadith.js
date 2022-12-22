import mongoose from 'mongoose'

const Schema = mongoose.Schema

const hadithSchema = new Schema({
  hadithnumber: Number,
  arabicnumber: Number,
  text: String,
  grades: [
    {
      name: String,
      grade: String
    }
  ],
  reference: {
      book: Number,
      hadith: Number
  }
},{
  timestamps: true,
})

const Hadith = mongoose.model('Hadith', hadithSchema)

export { Hadith }
