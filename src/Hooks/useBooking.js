import { useQuery } from 'react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useBooking  = () => {
    const { user, loading } = useAuth();  
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: booking = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/bookings?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })
    return [booking , refetch]

}


export default useBooking;