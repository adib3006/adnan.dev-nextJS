import Button from '@/components/Button';
import Image from 'next/image';
import Hero from 'public/hero.png';

export default function Home() {
    return (
        <div className="flex items-center gap-[100px]">
            <div className="flex flex-1 flex-col gap-[50px]">
                <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#194c33] to-[#bbb]">
                    Better design for your digital products.
                </h1>
                <p className="text-2xl font-light">
                    Turning your ideas into Reality. We bring together global
                    tech industry.
                </p>
                <Button text="See Our Works" url="#" />
            </div>
            <div className="flex flex-1 flex-col gap-[50px]">
                <Image
                    src={Hero}
                    alt=""
                    className="w-full h-[500px] object-contain animate-bounce-only"
                />
            </div>
        </div>
    );
}
