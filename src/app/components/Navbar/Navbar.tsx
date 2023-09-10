import Assets from '@/constants/assets.constant'
import React from 'react';
import Image from 'next/image';
import { IconButton } from '@mui/material';

export default function Navbar() {
    return (
        <div className='w-full h-[72px] bg-white border px-16 flex justify-between items-center'>
            <h1 className='inter-font text-[24px] font-[700]'>Todo</h1>
            <div className='flex items-center space-x-7'>
                <IconButton>
                    <Image src={Assets.setting} alt='' width={20} height={20} />
                </IconButton>
                <IconButton>
                    <Image src={Assets.bell} alt='' width={20} height={20} />
                </IconButton>
                <div className="w-[40px] h-[40px] rounded-full">
                    <Image src={Assets.avatar} alt='' width={1000} height={1000} style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '100%' }} />
                </div>
            </div>
        </div>
    )
}
