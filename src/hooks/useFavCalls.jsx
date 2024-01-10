import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import useAxios from "./useAxios"
const userFavCalls = () => {
    const navigate= useNavigate()
    const { axiosWithToken } = useAxios()
    const {user} = useSelector((state)=>state.auth)
 

  const sendFav = async (values) => {

    console.log(values);

    try {
      const { data } = await axiosWithToken.put(`/users/${user._id}/`, values, 
      );
      toastSuccessNotify("Added to favorites.")
      navigate("/favorites")
      // console.log(data);
    } catch (error) {
      // console.log(error.message);
      toastErrorNotify("Adding failed.")
    }
  };


  return {sendFav};
};

export default userFavCalls;
