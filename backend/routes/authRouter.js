const express = require('express');
const router = express.Router();
const emailValidator = require('email-validator');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require("./../models/User")
const Location = require("./../models/Locations")
const Report = require("./../models/Report")
const Contribution = require("./../models/Contribute");
const { response } = require('express');

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'net ninja secret', {
    expiresIn: maxAge
  });
};

const validate = ({ userid, password, email }) => {
  let err = {
    errors: 0,
  }
  if(!userid || !email || !password){
    err.errors+=1;
    err = {
      ...err,
      error: {
        userid: "Username or email or password cannot be empty"
      }
    }
  } else {
    if (userid.length < 5) {
      err.errors += 1;
      err = {
        ...err,
        error: {
          userid: "Username has to be greater than 5 letter"
        }
      }
    }
    if (!emailValidator.validate(email)) {
      err.errors += 1;
      err = {
        ...err,
        error: {
          email: "Not a Valid Email Address"
        }
      }
    }
    if (password.length < 5){
      err.errors += 1;
      err = {
        ...err,
        error: {
          password: "Password too short"
        }
      }
    }
  }
  return err;
}

// POST request to /api/auth/signup to signup user by sending userid email password as body

router.post('/signup', async (req, res) => {
  console.log("jhk");
  const err = validate(req.body);
  if(err.errors<0){
    return res.status(400).send(err);
  }
  const {userid, email, password} = req.body;
  // let user = await User.findOne({email});
  // if(user){
  //   console.log(email)
  //   console.log('Error same email')
  //   return res.status(400).json({email: "User already exists"});
  // }
  let user1 = await User.findOne({userid});
  if(user1){
    console.log(userid)
    console.log('Error same User')
    return res.status(400).json({userid: "User already exists"});
    
  }
  // user = new User();
  // user.userid = userid;
  // user.email = email;
  // const salt = await bcryptjs.genSalt(10);
  // user.password = await bcryptjs.hash(password, salt);
  // pass = user.password
  try {
    const user = await User.create({email, userid, password })
    const token = createToken(user._id);
    console.log(token)
    res.cookie('jwt', token, { httpOnly: false, maxAge: maxAge * 1000 });
    console.log(res.cookie)
    // res.status(201).json({ user: user._id });
    res.json( {user : userid} )
  } catch (error) {
    console.log(error);
    // res.status(500).send("INTERNAL SERVER ERROR");
    res.status(400).send(error)
  }
});

// POST request to /api/auth/login to signup user by sending userid password as body

router.post('/login', async (req, res) => {
  const {userid, password} = req.body;
  try {
    const user = await User.login(userid, password)
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: false, maxAge: maxAge * 1000 });
    // res.json().send({user, token})
    console.log(res.cookie)
    
    res.json({ user: user._id });
  } catch (err) {
    console.log(err);
    // res.status(500).send("INTERNAL SERVER ERROR");
  }
})

// GET request to /api/auth/check to signup user by sending auth-token got from signup or login as header("auth-token")

// router.get('/check', async (req, res) => {
//   const token = req.header("auth-token");
//   const ret = jwt.verify(token, "secretkey")
//   if(ret){
//     const user = await User.findById(ret._id);
//     if(user){
//       return res.status(200).json({
//         found: "true",
//         user: user
//       })
//     } else {
//       return res.status(400).json({
//         found: "false"
//       })
//     }
//   }
//   res.status(500).send("INVALID TOKEN");
// })

router.post('/addLocation', async (req,res) => {
  const { name } = req.body
  // const location = new Location()
  // location.name = name
  try {
    const location = await Location.create({name})
    res.status(201).json(location)
  } catch (error) {
    console.log(error)
    res.status(400).send("Error adding Location")
    
  }
  
})

router.post('/addReport', async (req,res) => {
  // console.log(req)
  const { dateOfComplaint, fname, lname, email, streetAddress, city, region, zip, severity, dateOfIncident, complaintDetails, desiredOutcome } = req.body
  
  res.status(201)
  try {
    const complaint = await Report.create({ dateOfComplaint, fname, lname, email, streetAddress, city, region, zip, severity, dateOfIncident, complaintDetails, desiredOutcome })
    
    res.status(201).json(complaint)
  } catch (error) {
    // console.log(error)
    // alert('Error')
    console.log('Error in catch ', error )
    // alert('Fill up the forms properly')
    res.status(error)
    
  }
})

router.post('/addContribution', async (req,res) => {
  // console.log(req)
  const { fname, lname, email, streetAddress, city, region, zip, complaintDetails } = req.body
  // const location = new Location()
  // location.name = name
  // const streetAddress = "sdfas"
  res.status(201)
  try {
    const contribution = await Contribution.create({ fname, lname, email, streetAddress, city, region, zip, complaintDetails})
    
    res.status(201).json(contribution)
  } catch (error) {
    // console.log(error)
    // alert('Error')
    console.log('Error in catch ', error )
    res.status(error)
    
  }
})


let getLocation = router.get((req,res) => {
  Location.find()
  .then(location => res.json(location))
  .catch(err => res.status(400).json('Error: ' + err))
})



module.exports = router
// module.exports = getLocation