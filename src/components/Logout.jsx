import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

const Logout = () => {
  const dispatch = useDispatch();
  dispatch(logout());
};

export default Logout;
