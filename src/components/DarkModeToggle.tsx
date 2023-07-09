'use client';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const DarkModeToggle = () => {
    const { toggle, mode }: { toggle: () => void; mode: 'dark' | 'light' } =
        useContext(ThemeContext);
    return (
        <div
            className="w-[42px] h-[24px] border-[1.5px] border-[#53c28b70] rounded-[30px] flex items-center justify-between p-[2px] relative cursor-pointer"
            onClick={toggle}
        >
            <div className="text-xs">🌙</div>
            <div className="text-xs">🔆</div>
            <div
                className="w-[15px] h-[15px] bg-[#53c28b] rounded-full absolute"
                style={mode === 'light' ? { left: '2px' } : { right: '2px' }}
            />
        </div>
    );
};
export default DarkModeToggle;
