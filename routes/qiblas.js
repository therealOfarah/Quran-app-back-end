import { Router } from 'express'
import * as qiblaCtrl from '../controllers/qiblas.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/:location', qiblaCtrl.getPrayerTimes)
/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

export { router }
