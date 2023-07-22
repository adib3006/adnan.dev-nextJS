"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { notFound, useRouter } from 'next/navigation';
import { SyntheticEvent } from 'react';
import useSWR from 'swr'
type Props = {};
const Dashboard = (props: Props) => {
  const session = useSession();
  const router = useRouter();
  console.log(session);
    const fetcher = (...args:Parameters<typeof fetch>) => fetch(...args).then((res) => res.json());

    const { data, mutate, error, isLoading } = useSWR(
      session?.data?.user ? `/api/posts?username=${session?.data?.user.name}` : null,
      fetcher
    );    
      console.log(data);
      const handleSubmit = async (e:SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
          title: { value: string };
          desc: { value: string };
          image: { value: string };
          content: { value: string };
        };
        const title = target.title.value;
        const desc = target.desc.value;
        const img = target.image.value;
        const content = target.content.value;
    
        try {
          await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({
              title,
              desc,
              img,
              content,
              username: session?.data?.user?.name,
            }),
          });
          mutate();
          (e.target as HTMLFormElement).reset();
        } catch (err) {
          console.log(err);
        }
      };

      const handleDelete = async (id:string) => {
        try {
          await fetch(`/api/posts/${id}`, {
            method: "DELETE",
          });
          mutate();
        } catch (err) {
          console.log(err);
        }
      };


      if (session.status === "loading") {
        return <p>Loading...</p>;
      }
    
      if (session.status === "unauthenticated") {
        router?.push("/dashboard/login");
        return null;
      }
      if(isLoading){
        return <div>Loading...</div>
      }
      if(error){
        return notFound();
      }
      
      if (session.status === "authenticated") {
        return (
          <div className='flex gap-[100px]'>
            <div className='flex-1'>
              {isLoading
                ? "loading"
                : data?.map((post:Post) => (
                    <div className='flex items-center justify-between m-[50px] border-2 border-[#bbb]' key={post._id}>
                      <div className='w-[200px] h-[100px]'>
                        <Image src={post.img} alt="" width={150} height={200} className="object-cover"/>
                      </div>
                      <h2 className=''>{post.title}</h2>
                      <span
                        className='cursor-pointer text-red-600'
                        onClick={() => handleDelete(post._id)}
                      >
                        X
                      </span>
                    </div>
                  ))}
            </div>
            <form className="flex flex-col flex-1 justify-center gap-5" onSubmit={(e)=>handleSubmit(e)}>
              <h1>Add New Post</h1>
              <input type="text" placeholder="Title" className="p-5 bg-transparent border-2 border-[#bbb] text-xl font-bold rounded-md" name='title'/>
              <input type="text" placeholder="Desc" className="p-5 bg-transparent border-2 border-[#bbb] text-xl font-bold rounded-md" name='desc'/>
              <input type="text" placeholder="Image" className="p-5 bg-transparent border-2 border-[#bbb] text-xl font-bold rounded-md" name='image'/>
              <textarea
                placeholder="Content"
                name='content'
                className="p-5 bg-transparent border-2 border-[#bbb] text-xl font-bold rounded-md"
                cols={30}
                rows={10}
              ></textarea>
              <button className="p-[5px] border-none bg-[#53c28b] text-white cursor-pointer rounded w-full">Send</button>
            </form>
          </div>
        );
      }
};
export default Dashboard;
