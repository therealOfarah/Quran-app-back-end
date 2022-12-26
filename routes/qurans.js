import { Router } from 'express'
import * as quranCtrl from '../controllers/qurans.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/

router.get("/",quranCtrl.getAll)
router.get('/:edition', quranCtrl.getRandomVerse)
router.get('/:surah', quranCtrl.getSurah)
/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post("/save",checkAuth,quranCtrl.saveVerse)

export { router }
