import { toast } from 'react-toastify';

export const fetchSubAdminData = async (token) => {
    try {
        const response = await fetch('http://localhost:3000/subadmin/profile', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            toast.error(errorData.message || 'Failed to fetch sub-admin data');
            throw new Error(errorData.message || 'Failed to fetch sub-admin data');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        toast.error('Error fetching sub-admin data');
        console.log('Error:', error);
        throw error;
    }
};

export const fetchCenterData = async (token) => {
    try {
        const response = await fetch('http://localhost:3000/subadmin/centerData', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            toast.error(errorData.message || 'Failed to fetch center data');
            throw new Error(errorData.message || 'Failed to fetch center data');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        toast.error('Error fetching center data');
        console.log('Error:', error);
        throw error;
    }
};
