
import { auth } from "../authentication/api";


export const handleLogin = (email, password, navigation) => {
    
    auth.signInWithEmailAndPassword(email, password).then(userCredentials => {
      const user = userCredentials.user;

      alert("Successfully Logged in :)")
      console.log("Logged in with:", user.email);

      navigation.navigate("Screen4");

    })
      .catch(error => alert(error.message));
  }