import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./auth.module.scss";
// img
import registerImg from "../../assets/register.png";
// component 
import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";
// toastif
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast } from "react-toastify";
// import firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";

const Register = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [cpassword, setCpassword] = useState("");
const [isloading, setIsloading] = useState(false);
// nav
const navigate=useNavigate()

const registerUser=(e)=>{
e.preventDefault()
if (password!==setCpassword){
  toast.error("Password do not match.")
}
setIsloading(true)
createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  toast.success("Registration successful...")
 
  console.log(user);
  setIsloading(false)
  navigate("/login")
})
.catch((error) => {
  toast.error(error.message)
  setIsloading(false)
  // ..
});
}
  return (
    <>
    <ToastContainer/>
    {isloading && <Loader/>}
    <section className = {`container ${styles.auth}`}>
    <Card>
    <div className = {styles.form}>
      <h2> Register</h2>
     
      <form  onSubmit={registerUser}>
        
        <input type="text"
         placeholder="Email" 
         value={email} 
         onChange={(e)=>setEmail(e.target.value)} 
         required/>
        <input 
        type="password"
         placeholder="Password"
          value={password} onChange={(e)=>setPassword(e.target.value)} required/>
        <input type="password" placeholder="ConfirmPassword"   value={cpassword} onChange={(e)=>setCpassword(e.target.value)}  required/>
        <button className ="--btn --btn-primary --btn-block" type="Submit">Register</button>
     
        <span className={styles.register}>
          <p>Already an account ?</p>
          <Link to="/login">Login</Link>
        </span>
        
      </form>
    
    </div>
    </Card>
    <div className = {styles.img}>
      <img src={registerImg}alt="register" width={400}/>
    </div>
    </section>
    </>
  );
};

export default Register;
