import { Router } from 'express'
import * as hadithCtrl from '../controllers/hadiths.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/

router.get('/', hadithCtrl.getChapters)
router.get('/:id', hadithCtrl.getInfo)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

export { router }
