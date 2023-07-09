import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};
const layout = ({ children }: Props) => {
    return (
        <div>
            <h1 className="text-[100px] font-bold">Our Works</h1>
            {children}
        </div>
    );
};
export default layout;
