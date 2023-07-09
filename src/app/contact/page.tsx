import Button from '@/components/Button';
import Image from 'next/image';

type Props = {};

export const metadata = {
    title: 'Adnan Dev Contact Information',
    description: 'This is Contact Page',
};

function Contact({}: Props) {
    return (
        <div>
            <h1 className="text-6xl font-bold mb-24 text-center">
                Let&apos;s Keep in Touch
            </h1>
            <div className="flex items-center gap-[100px]">
                <div className="flex-1 h-[500px] relative">
                    <Image
                        src="/contact.png"
                        alt=""
                        fill={true}
                        className="object-contain animate-bounce-scale"
                    />
                </div>
                <form className="flex-1 flex flex-col gap-5">
                    <input
                        type="text"
                        placeholder="name"
                        className="p-5 bg-transparent border-[3px] border-[#bbb] text-xl font-bold text-[#bbb]"
                    />
                    <input
                        type="text"
                        placeholder="email"
                        className="p-5 bg-transparent border-[3px] border-[#bbb] text-xl font-bold text-[#bbb]"
                    />
                    <textarea
                        placeholder="message"
                        cols={30}
                        rows={10}
                        className="p-5 bg-transparent border-[3px] border-[#bbb] text-xl font-bold text-[#bbb]"
                    />
                    <Button url="#" text="Send" />
                </form>
            </div>
        </div>
    );
}
export default Contact;
