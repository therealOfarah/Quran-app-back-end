import { Router } from 'express'
import * as quranCtrl from '../controllers/qurans.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
// router.get('/', checkAuth, quranCtrl.index)

export { router }
