import  { useState }  from "react";
import {Link,useNavigate} from "react-router-dom"
import styles from "./auth.module.scss"
import {FaGoogle} from "react-icons/fa"
import Card from "../../components/card/Card"
import loginImg from"../../assets/login.png"
// toastif
import 'react-toastify/dist/ReactToastify.css';
import {toast } from "react-toastify";
// import firebase
import { signInWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import { auth } from "../../firebase/config";
import Loader from "../../components/loader/Loader";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isloading, setIsloading] = useState(false);
  // nav
const navigate=useNavigate()
  const loginUser=(e)=>{
    e.preventDefault()
 setIsloading(true)
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setIsloading(false)
    toast.success("Login Successful...")
    navigate('/')
  })
  .catch((error) => {
    setIsloading(true)
 toast.error(error.message)
 

  });
    }
    // login with google
 const provider = new GoogleAuthProvider();


  const signInWithGoogle=()=>{
   
      signInWithPopup(auth, provider)
  .then((result) => {
  
    // const user = result.user;
 
    toast.success("Login Successfully")
    navigate("/")
    // ...
  }).catch((error) => {
    toast.error(error.message)
  
  });
    }
  return (
    <>
  {isloading && <Loader/>}
    <section className = {`container ${styles.auth}`}>
    <div className = {styles.img}>
      <img src={loginImg}alt="Login" width={400}/>
    </div>
    <Card>
    <div className = {styles.form}>
      <h2> Login</h2>
     
      <form  onSubmit={loginUser}>
        
        <input type="text" placeholder="Email"  
        required
         value={email} 
         onChange={(e)=>setEmail(e.target.value)} 
         />
        <input type="password" placeholder="Password" 
        required
          value={password} 
          onChange={(e)=>setPassword(e.target.value)} 
          />
        <button type="submit" className ="--btn --btn-primary --btn-block">Login</button>
        <div className = {styles.links}>
          <Link to="/rest">
          Rest Password
          </Link>
        </div>
        <p> -- or --</p>
        <button className ="--btn --btn-danger --btn-block"onClick={signInWithGoogle}><FaGoogle color="#fff"/>Login With Google</button>
        <span className={styles.register}>
          <p>Don't Have an account ?</p>
          <Link to="/register">Register</Link>
        </span>
        
      </form>
    
    </div>
    </Card>
    </section>
    </>
  );
};

export default Login;
