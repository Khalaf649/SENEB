export const registerDonor = async (formData) => {
    const formDataToSend = new FormData();
  
    for (const [key, value] of Object.entries(formData)) {
      if (value !== null && value !== undefined) {
        formDataToSend.append(key, value);
      }
    }
  
    try {
      const response = await fetch('http://localhost:3000/auth/donor/register', {
        method: 'POST',
        body: formDataToSend,
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message || "Registration failed.");
        return null; // Stop here without throwing
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error during registration:', error.message);
      alert("Something went wrong. Please try again later.");
      return null; // Also return null in case of unexpected errors
    }
  };
  export const login = async (credentials) => {
    try {
      // Send the credentials as JSON in the request body
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify JSON content type
        },
        body: JSON.stringify(credentials), // Convert credentials to JSON string
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message || "Login failed.");
        return null; // Return null if the login failed
      }
  
      // Parse the response data and return it
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error during login:', error.message);
      alert("Something went wrong. Please try again later.");
      return null; // Return null in case of an error
    }
  };
