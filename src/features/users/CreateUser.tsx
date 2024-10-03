import { useAppDispatch } from "../../hooks/useReduxMethods";
import { updateName } from "./UserSlice";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!userName) return;
    dispatch(updateName(userName));
    navigate("/menu");
  }
  return (
    <form onSubmit={handleSubmit} className="*:mb-6">
      <p className="text-sm text-text-color md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <Input
        type="text"
        value={userName}
        placeholder="Full name"
        onChange={(e) => setUserName(e.target.value)}
      />

      {userName !== "" && (
        <div>
          <Button type="primary">Start Ordering, {userName}</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
