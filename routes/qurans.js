import { Router } from 'express'
import * as quranCtrl from '../controllers/qurans.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/

router.get('/:id', quranCtrl.getRandomVerse)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

export { router }
