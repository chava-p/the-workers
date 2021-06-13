const workers = require('../model/workers');
const Worker=require('../model/workers');
const jwt=require('jsonwebtoken');

const setNewEmployed=(req,res)=>{
    const newEmlpoye=new Worker(req.body)
    newEmlpoye.save().then(
        (data)=>{
            res.status(200).json({user:data})
        }
    ).catch(
        (err)=>{
            console.log(err);
        }
    )
}

const checkPermission=(req,res)=>{
    Worker.findOne({password:req.body.password,email:req.body.email}).then(
        (worker)=>{
            let token=jwt.sign(req.body.password+req.body.email,process.env.SECRET);
            if(worker){
                if(worker.email === `admin@workers.com` && worker.password === `admin2765`){
                    res.status(200).json({jwt:token,tafkid:'management',worker:worker})
                }
                else{
                    res.status(200).json({jwt:token,tafkid:'employe',worker:worker})
                }
            }
            else{
                res.status(404).json({massage:'not found'})
            }
        }
    )
}

const getAllEmploye=(req,res)=>{
    Worker.find({}).then(
        (workers)=>{
            res.status(200).json({workers})
        }
    ).catch(
        (err)=>{
            console.log(err);
        }
    )
}

const getEmployeById=(req,res)=>{
    Worker.findById(req.params.id).then(
        (worker)=>{
            res.status(200).json({worker})
        }
    ).catch((err)=>{
        console.log(err)
    })
}

const updateEmploye=(req,res)=>{
    Worker.findByIdAndUpdate(req.params.id,req.body,{new:true}).then(
        
            (worker)=>{
                res.status(200).json({worker})
            }
        
    ).catch((err)=>{
        console.log(err)
    })
}

module.exports={setNewEmployed,checkPermission,getAllEmploye,getEmployeById,updateEmploye}