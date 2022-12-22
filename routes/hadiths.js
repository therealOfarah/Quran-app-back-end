import { Router } from 'express'
import * as hadithCtrl from '../controllers/hadiths.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
// router.get('/', checkAuth, hadithCtrl.index)

export { router }
