const DATABASE_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;

export async function createUser(email, password) {
   console.log(DATABASE_URL);
  try {
    const response = await fetch(DATABASE_URL, {
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
      throw new Error(data.error.message || "Network response was not ok");
    }

    console.log("Sign up successful:", data);
    return data;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
}
