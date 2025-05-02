export const fetchDonorProfile = async (token) => {
    try {
        const response = await fetch('http://localhost:3000/donor/profile', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,  // Include token in Authorization header
            },
        });

        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
            const errorData = await response.json();
            alert(errorData.message || 'Failed to fetch donor profile');
            throw new Error(errorData.message || 'Failed to fetch donor profile');
        }

        // Parse the response JSON and return the data
        const data = await response.json();
        return data;
        
    } catch (error) {
        // Log any errors that occur during the fetch request
        console.error('Error fetching donor profile:', error);
        throw error;  // Re-throw error to be handled in the component
    }
};
