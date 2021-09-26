const { Schema, model } = require('mongoose')
const {isEmail} = require('validator')
const bcrypt = require('bcryptjs');


const userSchema = new Schema({
  email:{
    type: String,
    required: [true, 'Please enter an email'],
    lowercase : true,
    unique: true,
    validate: [isEmail, 'Please enter a valid email']
  },
  userid: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlenght: [6, 'Minimum password length is 6 characters']
  }
});

// fire a function before doc saved to db
userSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// static method to login user
userSchema.statics.login = async function(userid, password) {
  const user = await this.findOne({ userid });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email');
};

const User = model("User", userSchema);
module.exports = User;
