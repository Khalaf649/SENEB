/* Create Blood Center */
export const createBloodCenter = async (credentials) => {
  try {
    const token = localStorage.getItem('token');

    const response = await fetch('http://localhost:3000/admin/createCenter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));

      let message = "Failed to create blood center.";
      switch (response.status) {
        case 400:
          message = errorData.message || "Please fill all required fields.";
          break;
        case 401:
          message = "Unauthorized. Please log in again.";
          break;
        case 409:
          message = errorData.message || "A blood center with this name or location already exists.";
          break;
        case 500:
        default:
          message = errorData.message || "Server error. Please try again later.";
          break;
      }

      throw new Error(message);
    }

    return await response.json();
  } catch (error) {
    console.error('Error during createBloodCenter:', error);
    throw new Error(error.message);
  }
};


/* Get Blood Centers */
export const getBloodCenters = async (filter = "all") => {
  try {
    const token = localStorage.getItem("token");

    let url = "http://localhost:3000/admin/getCenters";
    if (filter === "with" || filter === "without") {
      url += `?subadmin=${filter}`;
    }

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Unable to fetch blood centers. Please try again.");
    }

    return await response.json();
  } catch (error) {
    console.error("Error during getBloodCenters:", error);
    throw new Error(error.message);
  }
};


/* Update Blood Center */
export const updateBloodCenter = async (id, updatedData) => {
  try {
    const token = localStorage.getItem('token');

    const response = await fetch(`http://localhost:3000/admin/updateCenter/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));

      let message = "Failed to update blood center.";
      switch (response.status) {
        case 400:
          message = errorData.message || "Invalid data. Please check your input.";
          break;
        case 404:
          message = "Blood center not found.";
          break;
        case 401:
          message = "Unauthorized. Please log in again.";
          break;
        case 500:
        default:
          message = errorData.message || "Server error. Please try again later.";
          break;
      }

      throw new Error(message);
    }

    return await response.json();
  } catch (error) {
    console.error('Error during updateBloodCenter:', error);
    throw new Error(error.message);
  }
};


/* Delete Blood Center */
export const deleteBloodCenter = async (id) => {
  try {
    const token = localStorage.getItem('token');

    const response = await fetch(`http://localhost:3000/admin/deleteCenter/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));

      let message = "Failed to delete blood center.";
      switch (response.status) {
        case 404:
          message = "Blood center not found.";
          break;
        case 401:
          message = "Unauthorized action.";
          break;
        case 500:
        default:
          message = errorData.message || "Server error. Please try again later.";
          break;
      }

      throw new Error(message);
    }

    return await response.json();
  } catch (error) {
    console.error('Error during deleteBloodCenter:', error);
    throw new Error(error.message);
  }
};


/* Create Sub Admin */
export const createSubadmin = async (credentials) => {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:3000/admin/createSubadmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(credentials),
    });

    const data = await res.json();

    if (!res.ok) {
      let message = "Failed to create subadmin.";
      switch (res.status) {
        case 400:
          message = data?.message || "Please fill all required fields.";
          break;
        case 409:
          message = data?.message || "A subadmin with this email already exists.";
          break;
        case 401:
          message = "Unauthorized. Please log in again.";
          break;
        default:
          message = data?.message || "Server error. Please try again.";
          break;
      }

      return { success: false, error: message };
    }

    return { success: true, message: data.message };
  } catch {
    return { success: false, error: "Network or server error. Please try again." };
  }
};


/* Get All Subadmins */
export const getAllSubadmins = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:3000/admin/getSubAdmins", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        success: false,
        error: data?.message || "Unable to fetch subadmins. Please try again later.",
      };
    }

    return { success: true, data };
  } catch {
    return { success: false, error: "Network or server error. Please try again." };
  }
};


/* Delete Subadmin */
export const deleteSubadmin = async (userId) => {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch(`http://localhost:3000/admin/deleteSubadmin/${userId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      let message = data?.message || "Failed to delete subadmin.";
      switch (res.status) {
        case 404:
          message = "Subadmin not found.";
          break;
        case 401:
          message = "Unauthorized action.";
          break;
        default:
          message = data?.message || "Server error. Please try again.";
          break;
      }

      return { success: false, error: message };
    }

    return { success: true, message: data.message };
  } catch {
    return { success: false, error: "Network or server error. Please try again." };
  }
};
