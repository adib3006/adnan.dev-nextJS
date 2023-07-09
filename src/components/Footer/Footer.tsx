import Image from 'next/image';

type Props = {};
function Footer({}: Props) {
    return (
        <div className="flex justify-between items-center">
            <p className="text-sm">©Mirza Adnan. All rights reserved.</p>
            <div className="flex gap-[10px]">
                <Image
                    className="opacity-60 hover:opacity-80"
                    src={'/1.png'}
                    width={15}
                    height={15}
                    alt="facebook"
                />
                <Image
                    className="opacity-60 hover:opacity-80"
                    src={'/2.png'}
                    width={15}
                    height={15}
                    alt="facebook"
                />
                <Image
                    className="opacity-60 hover:opacity-80"
                    src={'/3.png'}
                    width={15}
                    height={15}
                    alt="facebook"
                />
                <Image
                    className="opacity-60 hover:opacity-80"
                    src={'/4.png'}
                    width={15}
                    height={15}
                    alt="facebook"
                />
            </div>
        </div>
    );
}
export default Footer;
