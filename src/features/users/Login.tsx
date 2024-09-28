import { Form } from "react-router-dom";
import Input from "./../../ui/Input";
import Button from "./../../ui/Button";
import Logo from "../../ui/Logo";

function Login() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-background-color">
      <Logo link={false} height="h-48" />
      <Form className="flex flex-col gap-4">
        <Input
          required={true}
          name="username"
          placeholder="Username"
          type="text"
        />
        <Input
          required={true}
          name="password"
          placeholder="Password"
          type="password"
        />
        <Button type="primary">Login</Button>
      </Form>
    </div>
  );
}

export default Login;
