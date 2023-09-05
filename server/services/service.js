
var Userdb =require('../model/model');

// exports.addNewUser = async (data) => {
//     return await Userdb.create("/add-user")
//     // res.redirect('/add-user');
    
// }
exports.getAllUser = async () => {
    return await Userdb.find({});
}

exports.userById = async (id) => {
    return await Userdb.findById(id);
}
exports.updateExistUser = async (data) => {
    const user = await Userdb.find({ _id: data.id })
    if (user) {
        return await Userdb.findOneAndUpdate({ _id: data.id },
            {
                name: data.name,
                phone:data.phone,
                email: data.email,
                password: data.password
            },{new:true})
    }else{
        return;
    }
}
exports.remove = async (id) => {
    const user = await Userdb.findById(id)
    if (user) {
       return await Userdb.deleteOne({_id:id});
    }else{
        return;
    }
}