import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const useStartup = (commentors) => {
    const navigate = useNavigate();
 
    useEffect(() => {
        if(!commentors.length) navigate('/');
    }, [commentors, navigate]);
}