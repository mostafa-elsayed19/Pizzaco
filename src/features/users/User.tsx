import { useAppSelector } from "../../hooks/useReduxMethods";
import { getUserName } from "./UserSlice";

function User() {
  const user = useAppSelector(getUserName);

  if (!user) return null;
  return <p className="text-sm font-semibold text-text-color">{user}</p>;
}

export default User;
