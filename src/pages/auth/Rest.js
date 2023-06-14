import {useState} from "react";
import {Link} from "react-router-dom"
import styles from "./auth.module.scss"
import {FaGoogle} from "react-icons/fa"
import Card from "../../components/card/Card"
import resetImg from"../../assets/forgot.png"
// firebase
import {sendPasswordResetEmail} from "firebase/auth";
import { auth } from "../../firebase/config";
// toastif

import {toast } from "react-toastify";
import Loader from "../../components/loader/Loader";
const Rest = () => {
  const [email, setEmail] = useState("");
  const [isloading, setIsloading] = useState(false);
  const resetPassword=(e)=>{
    e.preventDefault()
    setIsloading(true)
   
    sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
    setIsloading(false)
      toast.success("check your email for a reset link")
    })
    .catch((error) => {
    setIsloading(false)
    toast.error(error.message)

    });
  }
  return (
    <>
    {isloading&& <Loader/>}
    <section className = {`container ${styles.auth}`}>
    <div className = {styles.img}>
      <img src={resetImg}alt="Reset Password" width={400}/>
    </div>
    <Card>
    <div className = {styles.form}>
      <h2> Reset Password</h2>
     
      <form  onSubmit={resetPassword}>
        
        <input type="text" placeholder="Email"
        required
         value={email} 
         onChange={(e)=>setEmail(e.target.value)} />
     
        <button type="sumbit" className ="--btn --btn-primary --btn-block">Reset Password</button>
        <div className = {styles.links}>
          <p>
          <Link to="/login">-Login </Link>
          </p>
          <p>
          <Link to="/register">-Register </Link>
          </p>
        </div>

      </form>
    
    </div>
    </Card>
    </section>
    </>
  );
};

export default Rest;
