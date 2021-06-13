const router=require('express').Router();
const {setNewEmployed,checkPermission,getAllEmploye,getEmployeById,updateEmploye}=require('../controller/workerController')

router.post('/setNewEmployed',setNewEmployed)
router.post('/checkPermission',checkPermission)

router.get('/getAllEmploye',getAllEmploye)
router.get('/getEmployeById/:id',getEmployeById)

router.patch('/updateEmploye/:id',updateEmploye)

module.exports=router;