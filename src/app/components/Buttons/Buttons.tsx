"use client"

import React from 'react';
import Image from 'next/image';

export function AppButton({ icon, title, handleClick }: { icon: any; title: string; handleClick: any; }) {
    return (
        <button onClick={handleClick} className="bg-primaryColor rounded-[8px] flex items-center space-x-3 py-[10px] px-[16px]"
            style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)" }}
        >
            <Image src={icon} alt='' width={20} height={20} />
            <p className='font-[600px] text-[14px] text-white'>{title}</p>
        </button>
    )
}


export function AppOutlineButton({ title, handleClick }: { title: string; handleClick: () => void; }) {
    return (
        <button onClick={handleClick} className="border border-[#D0D5DD] rounded-[8px] flex items-center justify-center space-x-3 py-[10px] px-[16px] w-full"
            style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)" }}
        >
            <p className='font-[600px] text-[14px] text-[#344054]'>{title}</p>
        </button>
    )
}


export function NoIconAppButton({ title, handleClick }: { title: string;  handleClick: () => void; }) {
    return (
        <button onClick={handleClick} className="bg-primaryColor rounded-[8px] flex items-center justify-center space-x-3 py-[10px] px-[16px] w-full"
            style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)" }}
        >
            <p className='font-[600px] text-[14px] text-white'>{title}</p>
        </button>
    )
}