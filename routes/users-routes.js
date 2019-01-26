var users = require('../models/models-user');

module.exports = (server)=>{
 
    server.get('/getAllUsers',(req,res)=>{
        users.find().
        limit(5).
        sort({balance: 1}).
        exec((err,users)=>{
            if(err){
                return res.json({success: false , err: err});
            }
            res.json({success:true,data:users});
        });
    });

    server.post('/addUser',(req,res)=>{
        let user = new users({name:req.body.name,email:req.body.email,balance:req.body.balance});
        user.save((err,user)=>{
            if (err) {
                return res.json({ success: false, err: err })
            }
            res.json({ success: true, data: user })
        });
    
    });
    server.get('/search/:name',(req,res)=>{
        users.find({name:{$in:[req.params.name]}}).
        limit(5).
        exec((err,users)=>{
            if(err){
                return res.json({success: false , err: err});
            }
            // console.log(users)
            res.json({success:true,data:users});
        });
    });
    server.delete('/deleteUser',(req,res)=>{
        users.deleteOne({_id:req.body.id},(err,result)=>{
            if(err){
                return res.json({success: false , err: err});
            }
            res.json({success:true})
        });
       
    });
    server.put('/targetUpdate',(req,res)=>{
        users.findById(req.body.id, (err,user)=>{
            if(err){
                return res.json({success: false , err: err});
            }
            res.json({success:true,data:user});
        });
       
    });
   server.put('/updateUser',(req,res)=>{
       let user = req.body;
       users.findByIdAndUpdate(user.id,{$set:{name:user.name,email:user.email,balance:user.balance}}, { new: true },(err,user)=>{
        if(err){
            res.json({success:false,err:err})
        }
        res.json({success:true,data:user})   
    });
   });
}
