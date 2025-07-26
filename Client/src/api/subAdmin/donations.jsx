import { toast } from 'react-toastify';

export const fetchDonations = async (token) => {
    try {
        const response = await fetch('http://localhost:3000/subadmin/donations', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            toast.error(errorData.message || 'Failed to fetch donations');
            throw new Error(errorData.message || 'Failed to fetch donations');
        }

        const data = await response.json();
        return data.data;
    } catch (error) {
        toast.error('Error fetching donations');
        console.log('Error:', error);
        throw error;
    }
};