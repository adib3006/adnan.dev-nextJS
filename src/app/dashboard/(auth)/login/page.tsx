"use client"
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SyntheticEvent } from "react";

type Props = {};
const Login = (props: Props) => {
    const session = useSession();
  const router = useRouter();

    const handleSubmit = (e:SyntheticEvent) => {
        e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;
    
        signIn("credentials", {
          email,
          password,
        });
      };

      if (session.status === "loading") {
        return <p>Loading...</p>;
      }
    
      if (session.status === "authenticated") {
        router?.push("/dashboard");
      }
      
    return <div className="flex flex-col items-center justify-center gap-5">
        <form className="flex flex-col items-center justify-center gap-5" onSubmit={(e)=>handleSubmit(e)}>
            
            <input className="p-5 bg-transparent border-2 border-[#bbb] text-xl font-bold rounded-md" placeholder="email" type="email" name="email" id="" />
            <input className="p-5 bg-transparent border-2 border-[#bbb] text-xl font-bold rounded-md" placeholder="password" type="password" name="password" id="" />
            <input type="submit" value="Login" className="p-[5px] border-none bg-[#53c28b] text-white cursor-pointer rounded w-full"/>
        </form>
<button
onClick={() => signIn('google')}
className="p-[5px] border-none bg-[#53c28b] text-white cursor-pointer rounded"
>Log in with Google</button>
    </div>;
};
export default Login;
