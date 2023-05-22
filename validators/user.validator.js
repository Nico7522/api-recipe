const yup = require("yup");

const regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;


const registerValidator = yup.object({
  name: yup.string().min(1).max(25).required('Required field !'),
  surname: yup.string().min(1).max(50).required('Required field !'),
  birthdate: yup.date().required('Required field !'),
  email: yup.string().matches(regexMail, 'Email not match the requirement').min(1).max(100).required('Required field !'),
  password: yup.string().matches(regexPassword, 'Password not match the requirement').min(8).max(100).required('Required field !')
});

const loginValidator = yup.object({
    email: yup.string().matches(regexMail, 'Email not match the requirement').min(1).max(100).required('Required field !'),
    password: yup.string().matches(regexPassword).min(8).max(100).required('Required field !')

})

module.exports = {registerValidator, loginValidator}
