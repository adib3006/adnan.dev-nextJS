import Button from '@/components/Button';
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';

type Props = {
    params: ParsedUrlQuery;
};
const Category = ({ params }: Props) => {
    console.log(params);
    return (
        <div>
            <h1 className="text-3xl font-bold">{params.category}</h1>
            <div className="flex gap-[50px] mt-[50px] mb-[100px]">
                <div className="flex-1 flex flex-col gap-5 justify-center">
                    <h1 className="text-5xl font-bold">Test</h1>
                    <p className="text-xl">Desc</p>
                    <Button text="See More" url="#" />
                </div>
                <div className="flex-1 h-[500px] relative">
                    <Image
                        src={
                            'https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
                        }
                        alt=""
                        fill={true}
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
};
export default Category;
