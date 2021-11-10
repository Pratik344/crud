import { useLocation } from "react-router";

const useQuery=()=>{
    console.log(useLocation().search);
    return new URLSearchParams(useLocation().search);
}
export default useQuery;