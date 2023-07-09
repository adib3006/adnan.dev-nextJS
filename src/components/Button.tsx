import Link from 'next/link';

type Props = {
    url: string;
    text: string;
};
const Button = ({ url, text }: Props) => {
    return (
        <Link href={url}>
            <button className="p-[20px] cursor-pointer bg-[#53c28b] border-none rounded-md w-max text-white">
                {text}
            </button>
        </Link>
    );
};

export default Button;
