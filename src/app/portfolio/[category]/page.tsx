import Button from '@/components/Button';
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';
import { items } from './data';
import { notFound } from 'next/navigation';

const getData = (cat: string) => {
    const data = items[cat];
    if (!data) {
        return notFound();
    }
    return data;
};

type Props = {
    params: {
        category: string
    };
};
const Category = ({ params:{category} }: Props) => {
    const data = getData(category)
    console.log(data);
    return (
        <div>
            <h1 className="text-3xl font-bold">{category}</h1>
            {
data.map((item,index)=>{
    return <div className={`flex gap-[50px] mt-[50px] mb-[100px] ${index%2!==0 && 'flex-row-reverse'}`} key={item.id}>
    <div className="flex-1 flex flex-col gap-5 justify-center">
        <h1 className="text-5xl font-bold">{item.title}</h1>
        <p className="text-xl">{item.desc}</p>
        <Button text="See More" url="#" />
    </div>
    <div className="flex-1 h-[500px] relative">
        <Image
            src={
                item.image
            }
            alt=""
            fill={true}
            className="object-cover"
        />
    </div>
</div>
})
            }
        </div>
    );
};
export default Category;
