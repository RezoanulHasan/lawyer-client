import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useLawyer = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: isLawyer, isLoading: isLawyerLoading } = useQuery({
        queryKey: ['isLawyer', user?.email],
        enabled: !loading,
        queryFn: async () => {
          const res = await axiosSecure.get(`/users/lawyer/${user?.email}`);
          return res.data.lawyer;
        }
      });
    
  return [ isLawyer, isLawyerLoading];
};

export default useLawyer;