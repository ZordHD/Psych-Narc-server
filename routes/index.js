const Router = require('express')
const router = new Router()
const administratorsRouter = require('./administratorsRouter')
const feedbackRouter = require('./feedbackRouter')
const moderatorsRouter = require('./moderatorsRouter')
const recordsofvisitsRouter = require('./recordsofvisitsRouter')
const rolesRouter = require('./rolesRouter')
const usersRouter = require('./usersRouter')
const newsRouter = require('./newsRouter')
const servicesRouter = require('./servicesRouter')
const partnerRouter = require('./partnersRouter')
const galleryRouter = require('./galleryRouter')
const questionRouter = require('./questionRouter')
const gratitudeRouter = require('./gratitudeRouter')
const lineRouter = require('./lineRouter')
const documentsRouter = require('./documentsRouter')
const departmentsRouter = require('./departmentsRouter')
const massmediaRouter = require('./massmediaRouter')
const vacanciesRouter = require('./vacanciesRouter')
const halloffameRouter = require('./halloffameRouter')
const otherservicesRouter = require('./otherservicesRouter')
const foreignservicesRouter = require('./foreignservicesRouter')
const servicesRBRouter = require('./servicesRBRouter')




router.use('/users', usersRouter)
router.use('/feedback', feedbackRouter)
router.use('/recordsofvisits', recordsofvisitsRouter)
router.use('/news', newsRouter)
router.use('/services', servicesRouter)
router.use('/partners', partnerRouter)
router.use('/gallery', galleryRouter)
router.use('/gratitude', gratitudeRouter)
router.use('/question', questionRouter)
router.use('/line', lineRouter)
router.use('/documents', documentsRouter)
router.use('/administrators', administratorsRouter)
router.use('/departments', departmentsRouter)
router.use('/massmedia', massmediaRouter)
router.use('/vacancies', vacanciesRouter)
router.use('/halloffame', halloffameRouter)
router.use('/otherservices', otherservicesRouter)
router.use('/foreignservices', foreignservicesRouter)
router.use('/servicesRB', servicesRBRouter)

module.exports = router