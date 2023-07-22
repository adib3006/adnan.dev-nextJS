import Image from 'next/image';
import { notFound } from 'next/navigation';

async function getData(id:string):Promise<Post> {
    const res = await fetch(`https://adnan-dev-next-js.vercel.app/api/posts/${id}`,{cache: 'no-store'});
  
    if (!res.ok) {
      return notFound();
    }
  
    return res.json();
  }

  export async function generateMetadata({ params:{id} }:{params:{id:string}}) {
    const post:Post | null = await getData(id)
    return {
      title: post?.title,
      description: post?.desc
    }
  }

type Props = {
    params:{
        id: string
    }
};
export const dynamic = 'force-dynamic'
async function BlogPost({params: {id}}: Props) {
    const data:Post = await getData(id);
    // console.log(data);
    return (
        <div className="">
            <div className="flex gap-5">
                <div className="flex-1 flex flex-col justify-between">
                    <h1 className="text-[40px]">
                        {data.title}
                    </h1>
                    <p className="text-lg font-light text-justify">
                        {data?.desc}
                    </p>
                    <div className="flex items-center gap-[10px]">
                        <Image
                            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
                            alt=""
                            width={40}
                            height={40}
                            className="object-cover rounded-full"
                        />
                        <span>John Doe</span>
                    </div>
                </div>
                <div className="flex-1 h-[300px] relative">
                    <Image
                        src={data?.img}
                        alt=""
                        fill={true}
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="mt-[50px] text-xl font-light text-[#999] text-justify">
                <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus eos corporis rerum! In explicabo inventore
                    laudantium dolores possimus repellat blanditiis vero officia
                    alias aliquam culpa cumque eveniet debitis sequi nihil quae,
                    numquam non eligendi at voluptatum! Nulla libero ea esse
                    recusandae. Enim dolorem earum quisquam sit ratione
                    exercitationem blanditiis maiores iste molestias sed
                    dignissimos, explicabo cum atque odit adipisci accusamus
                    voluptas. Totam possimus laudantium iusto enim dicta ducimus
                    amet placeat quam rerum mollitia corporis ullam, eaque nobis
                    nam modi itaque esse nemo, ad earum? Autem ut unde magni ad
                    deleniti! Tenetur, sit ad? Inventore nihil iusto vitae
                    voluptatem deserunt incidunt?
                </p>
            </div>
        </div>
    );
}
export default BlogPost;
