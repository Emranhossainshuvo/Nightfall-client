import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
    
    const axiosSecure = useAxiosSecure(); 

    const {data: cart = []} = useQuery({
        queryKey: ['cart'], 
        queryFn: async () => {
            // TODO: change the name from 'cart' to 'carts' if it make any problems
            const res = await axiosSecure.get('cart'); 
            return res.data
        }
    }); 
    return cart; 
};

export default useCart;