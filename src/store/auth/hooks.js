import { useSelector } from "react-redux";

export const useAccount = () => useSelector(state => state.auth.currentAccount)