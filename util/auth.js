const DATABASE_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${process.env.FIREBASE_API_KEY}`;

export async function createUser(email, password) {
   
  try {
    const response = await fetch(`${DATABASE_URL}/auth.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Sign up successful:", data);
    return id;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
}
