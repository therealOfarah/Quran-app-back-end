import { Router } from 'express'
import * as qiblaCtrl from '../controllers/qiblas.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
// router.get('/', qiblaCtrl.index)
/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

export { router }
