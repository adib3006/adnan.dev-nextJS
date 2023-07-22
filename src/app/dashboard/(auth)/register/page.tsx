"use client"

import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

type Props = {};
const Register = (props: Props) => {
    const [error, setError] = useState<null | string>(null);

  const router = useRouter();

  const handleSubmit = async (e:SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
        username: {value: string};
      email: { value: string };
      password: { value: string };
    };
    const name = target.username.value;
    const email = target.email.value;
    const password = target.password.value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 && router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(err as string);
      console.log(err);
    }
  };
    return <div className="flex flex-col items-center justify-center gap-5">
        <form className="flex flex-col items-center justify-center gap-5" onSubmit={(e)=>handleSubmit(e)}>
            <input className="p-5 bg-transparent border-2 border-[#bbb] text-xl font-bold rounded-md" placeholder="user name" type="text" name="username" id="" />
            <input className="p-5 bg-transparent border-2 border-[#bbb] text-xl font-bold rounded-md" placeholder="email" type="email" name="email" id="" />
            <input className="p-5 bg-transparent border-2 border-[#bbb] text-xl font-bold rounded-md" placeholder="password" type="password" name="password" id="" />
            <input type="submit" value="Register" className="p-[5px] border-none bg-[#53c28b] text-white cursor-pointer rounded w-full"/>
            {error && "Something went wrong!"}
        </form>
        <button className="p-[5px] border-none bg-[#53c28b] text-white cursor-pointer rounded">Login with existing email</button>
    </div>;
};
export default Register;
