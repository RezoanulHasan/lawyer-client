import { useQuery } from 'react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useSingleLawyer = () => {
    const { user, loading } = useAuth();  
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: card = [] } = useQuery({
        queryKey: ['lawyers', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/lawyers?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })
    return [card, refetch]

}

export default useSingleLawyer;