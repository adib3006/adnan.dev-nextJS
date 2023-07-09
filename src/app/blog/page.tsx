import Image from 'next/image';
import Link from 'next/link';

type Props = {};
function Blog({}: Props) {
    return (
        <div className="">
            <Link
                href={`/blog/itemId`}
                className="flex items-center gap-[50px] mb-[50px]"
                // key={item.id}
            >
                <div className="">
                    <Image
                        src={
                            'https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
                        }
                        alt=""
                        width={400}
                        height={250}
                        className="object-cover"
                    />
                </div>
                <div className="">
                    <h1 className="text-4xl font-bold mb-[10px]">Test</h1>
                    <p className="text-lg text-[#999]">Desc</p>
                </div>
            </Link>
        </div>
    );
}
export default Blog;
