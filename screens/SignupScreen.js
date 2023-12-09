import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { createUser } from '../util/auth';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
   console.log(process.env["REACT_APP_FIREBASE_API_KEY"]);
  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    await createUser(email, password);
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;