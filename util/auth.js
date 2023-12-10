import { Alert } from "react-native";

async function authenticate (mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;
  
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
    });

    console.log("Response status:", response.status); // Log the response status

    const data = await response.json(); // Parse the response JSON

    if (!response.ok) {
      console.log(data.error.message || "Network response was not ok");
    }

    console.log(`${mode} successful: `, data);
    const token = response.data.idToken;
    return token;
  } catch (error) {
      console.log(`Error with ${mode}: `, error);
    throw error;
  }
  
}


export function createUser(email, password) {
   return authenticate("signUp", email, password);
}

export async function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
