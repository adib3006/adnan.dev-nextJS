import Image from 'next/image';
import Link from 'next/link';

async function getData():Promise<Post[]> {
    const res = await fetch("https://adnan-dev-next-js.vercel.app/api/posts",{cache: 'no-store'});
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }

type Props = {
    
};
export const dynamic = 'force-dynamic'
async function Blog({}: Props) {
    const data:Post[] = await getData();
    // console.log(posts);
    return (
        <div className="">
            {
                data?.map((item)=>{
                    return <Link
                    href={`/blog/${item._id}`}
                    className="flex items-center gap-[50px] mb-[50px]"
                    key={item._id}
                >
                    <div className="w-1/3">
                        <Image
                            src={
                                item?.img
                            }
                            alt=""
                            width={400}
                            height={250}
                            className="object-cover"
                        />
                    </div>
                    <div className="w-2/3">
                        <h1 className="text-4xl font-bold mb-[10px]">{item?.title}</h1>
                        <p className="text-lg text-[#999]">{item?.desc}</p>
                    </div>
                </Link>
                })
            }
        </div>
    );
}
export default Blog;

// export async function getStaticProps() {
    
//     const res = await fetch("https://adnan-dev-next-js.vercel.app/api/posts",{cache: 'no-store'});
//     const posts = await res.json()
//     console.log(res);
  
//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     return {
//       props: {
//         posts,
//       },
//     }
//   }
