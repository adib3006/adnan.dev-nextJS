import Image from 'next/image';
import Link from 'next/link';
import Illustration from 'public/illustration.png';
import Websites from 'public/websites.jpg';
import Apps from 'public/apps.jpg';

type Props = {};
function Portfolio({}: Props) {
    return (
        <div>
            <h1 className="text-3xl font-semibold my-5">Choose a gallery</h1>
            <div className="flex gap-[50px]">
                <Link
                    href="/portfolio/illustrations"
                    className="text-4xl font-semibold h-[400px] w-[300px] border-[5px] border-[#bbb] relative bg-cover rounded-[5px] overflow-hidden hover:text-[#53c28b]"
                >
                    <Image
                        src={Illustration}
                        alt=""
                        className="w-full h-full object-cover hover:scale-105 transition duration-1000 ease-in-out"
                    />
                    <span className="absolute bottom-2 right-2">
                        Illustrations
                    </span>
                </Link>
                <Link
                    href="/portfolio/websites"
                    className="text-4xl font-semibold h-[400px] w-[300px] border-[5px] border-[#bbb] relative bg-cover rounded-[5px] overflow-hidden hover:text-[#53c28b]"
                >
                    <Image
                        src={Websites}
                        alt=""
                        className="w-full h-full object-cover hover:scale-105 transition duration-1000 ease-in-out"
                    />
                    <span className="absolute bottom-2 right-2">Websites</span>
                </Link>
                <Link
                    href="/portfolio/applications"
                    className="text-4xl font-semibold h-[400px] w-[300px] border-[5px] border-[#bbb] relative bg-cover rounded-[5px] overflow-hidden hover:text-[#53c28b]"
                >
                    <Image
                        src={Apps}
                        alt=""
                        className="w-full h-full object-cover hover:scale-105 transition duration-1000 ease-in-out"
                    />
                    <span className="absolute bottom-2 right-2">
                        Applications
                    </span>
                </Link>
            </div>
        </div>
    );
}
export default Portfolio;
