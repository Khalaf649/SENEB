export const createBloodCenter = async (credentials) => {
  try {
    const token = localStorage.getItem('token'); // or get it from props/context

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
      alert(errorData.message || "Failed to create blood center.");
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during createBloodCenter:', error);
    alert("Something went wrong. Please try again later.");
    return null;
  }
};
export const getBloodCenters = async () => {
  try {
    const token = localStorage.getItem('token');

    const response = await fetch('http://localhost:3000/admin/getCenters', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      alert(errorData.message || "Failed to fetch blood centers.");
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during getBloodCenters:', error);
    alert("Something went wrong. Please try again later.");
    return null;
  }
};
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
      alert(errorData.message || "Failed to update blood center.");
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during updateBloodCenter:', error);
    alert("Something went wrong. Please try again later.");
    return null;
  }
};
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
      alert(errorData.message || "Failed to delete blood center.");
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during deleteBloodCenter:', error);
    alert("Something went wrong. Please try again later.");
    return null;
  }
};
