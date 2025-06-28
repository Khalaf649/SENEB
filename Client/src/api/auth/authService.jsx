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

      let message = "Something went wrong.";

      switch (response.status) {
        case 400:
          message = errorData.message || "Please fill in all required fields.";
          break;
        case 409:
          message = errorData.message || "An account with this email already exists.";
          break;
        case 500:
        default:
          message = "Server error. Please try again later.";
          break;
      }

      throw new Error(message);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during registration:', error.message);
    throw new Error(error.message);
  }
};

export const login = async (credentials) => {
  try {
    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();

      let message = "Login failed.";

      switch (response.status) {
        case 400:
          message = "Please enter both email and password.";
          break;
        case 401:
          message = errorData.message || "Incorrect email or password.";
          break;
        case 404:
          message = "No account found with this email.";
          break;
        case 409:
          message = "This account already exists.";
          break;
        default:
          // Use backend message if exists; otherwise fallback
          message = errorData.message || `Unexpected error (status ${response.status}). Please try again later.`;
          break;
      }


      throw new Error(message);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during login:', error.message);
    throw new Error(error.message);
  }
};
