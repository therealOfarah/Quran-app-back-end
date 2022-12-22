import mongoose from 'mongoose'

const Schema = mongoose.Schema

const quranSchema = new Schema({
  text: String,
  surah: {
    number: Number,
    name:String,
    englishName: String,
    englishNameTranslation: String,
    numberOfAyahs: Number,
    revelationType: String
  },
  juz: String,
  page: String,
},{
  timestamps: true,
})

const Quran = mongoose.model('Quran', quranSchema)

export { Quran }
