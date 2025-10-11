import { useActionState, useState } from "react";
import { loginUser } from "../api/user";
import CustomButton from "./CustomButton";

const Login = () => {
  // const [user, setUser] = useState(null);
  // const [error, setError] = useState(null);
  // const [isPending, setIsPending] = useState(false);
  //  1. Jab tum submit karte ho → browser formData
  //  banata hai aur submitAction ko deta hai.
  // 2.React internally bolta hai: “OK, ab action run karna hai.
  const login = async (previousState, formData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await loginUser(email, password);
      return { error: null, data: response.data };
    } catch (error) {
      return { ...previousState, error: error.error };
    }
  };
  const [user, submitAction, isPending] = useActionState(login, {
    error: null,
    data: null,
  });
  console.log(user);

  return (
    <form action={submitAction}>
      <div>
        <label>Email:</label>
        <input name="email" type="email" required />
      </div>
      <div>
        <label>Password:</label>
        <input name="password" type="password" required />
      </div>
      {/* <button type="submit" disabled={isPending}>
        {isPending ? "Logging in..." : "Login"}
      </button> */}
      <CustomButton />
      {user.data && (
        <p style={{ color: "green" }}>Logged in: {user.data.email}</p>
      )}
      {user.error && <p style={{ color: "red" }}>{user.error}</p>}
      {isPending && <h3>Validating..</h3>}
    </form>
  );
};

export default Login;
