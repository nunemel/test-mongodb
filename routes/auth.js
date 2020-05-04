const router = require('express').Router();
const UserModel = require('../models/userSchema.js');

router.get('/test', async (req, res) => {

    res.send('OK Nune Test');
});

router.post('/register', async (req, res) => {
    
    const { name, email, password } = req.body;  
    //     console.log("req.body.name = " + req.body.name);
    //     const user = await userModel({
    //         name: req.body.name,
    //         email: req.body.email,
    //         password: req.body.password
    //     });
        
    try {    
    //     const newUser = await user.save();
    //     res.status(201).json(newUser);
    //     //   console.log("awaiting save... User object = " + user);
    await UserModel.create({
        name,
        email,
        password
      }); 
        console.log("awaiting save...");
        //const savedUser = await userModel.create();
        //res.send(user);
        console.log("after save");
       // res.send(savedUser);
       res.status(200).json({ email });
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

router.post('/login');

module.exports = router;