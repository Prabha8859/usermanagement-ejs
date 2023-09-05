var Userdb =require('../model/model');
const servic = require('../services/service')

//create and save new user
// exports.create = async (req, res) => {
//     // validate request
//     try {
//         console.log(req.body);
//         const result = await servic.addNewUser(req.body)
        
//         if (result) {
//             res.status(200).json({
//                 status: 'success',
//                 message: 'User Added ',
//                 data: result
//             })
//         }
       

//     } catch (err) {
//         // console.log(err)
//         res.status(500).json({
//             status: 'error',
//             message: err.message,
//             // data:result
//         })
//         // res.send(err);
//     }
// }

exports.create = (req,res) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).send({ message: "Content can not be empty!" });
    }

    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender.toLowerCase() ,
        status: req.body.status.toLowerCase() 
    });

    user.save()
        .then(data => {
            // res.send(data);
            res.redirect('/add-user');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            });
        });

}

// retrieve and return all users / retrive and return a single user
exports.find = async (req, res) => {
    try {

        const result = await servic.getAllUser()
        console.log(result);
        res.status(200).json({
            status: 'success',
            message: 'User List',
            data: result
        })
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: ` ${err.message}`

        })
    }

}
// get data by single id 
exports.findUserId = async (req, res) => {
    try {
       
        const id = req.params['id'];
        if(id){
         const result = await servic.userById(id)
         if(result){
             res.status(200).json({
                 status:'success',
                 message:'User List',
                 data:result
             })
         }else{
             res.status(404).json({
                 status:'success',
                 message:'User Not Found!'
             })
         }
         
        }else{
         res.status(400).json({
             status:'success',
             message:'id is required!'
         })
        }
        
     } catch (err) {
         res.status(500).json({
             status:'error',
             message:` ${err.message}`
             
         })
     }
   
}
// Update a new identified user by user is

exports.update = async(req, res) => {
    try {
        if(req.body.id){
            const result = await servic.updateExistUser(req.body)
            if(result){
                res.status(200).json({
                    status:'success',
                    message:'User Updated',
                    data:result
                })
            }
            else{
                res.status(404).json({
                    status:'success',
                    message:'User Not Found!'
                })
            }
        }else{
            res.status(400).json({
                status:'success',
                message:'id is required!'
            })
        }
      
       
    } catch (err) {
        res.status(500).json({
            status:'error',
            message:` ${err.message}`
            
        })
    }
}

    //Delete a user with specified user id in the request

exports.delete = async(req, res) => {
    try {
        if(req.query.id){
            const result = await servic.remove(req.query.id)
            if(result){
                res.status(200).json({
                    status:'success',
                    message:'User deleted'
                })
            }
            else{
                res.status(404).json({
                    status:'success',
                    message:'User Not Found!'
                })
            }
        }else{
            res.status(400).json({
                status:'success',
                message:'id is required!'
            })
        }
      
       
    } catch (err) {
        res.status(500).json({
            status:'error',
            message:` ${err.message}`
            
        })
    }
}