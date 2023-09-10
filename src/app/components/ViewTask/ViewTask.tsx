import Assets from '@/constants/assets.constant'
import { IconButton } from '@mui/material'
import React from 'react';
import Image from 'next/image';
import { AppOutlineButton, NoIconAppButton } from '../Buttons/Buttons';

export default function ViewTask({ task, onDeleteTask, onEditTask, onClose, onOpenEditTask }: any) {
    console.log(task)
    
    return (
        <div className='bg-[#fff] rounded-[8px] p-[24px] w-full h-auto relative'
            style={{ boxShadow: "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)" }}
        >
            <div className="absolute right-3 top-3">
                <IconButton onClick={onClose}>
                    <Image src={Assets.close} alt='' width={20} height={20} />
                </IconButton>
            </div>

            <h1 className="text-[#272727] font-[700] text-[18px]">{task?.name}</h1>
            <div className='mt-7 space-y-5'>
                <div className="flex space-x-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M17.5 8.33334H2.5M13.3333 1.66667V5.00001M6.66667 1.66667V5.00001M6.5 18.3333H13.5C14.9001 18.3333 15.6002 18.3333 16.135 18.0609C16.6054 17.8212 16.9878 17.4387 17.2275 16.9683C17.5 16.4335 17.5 15.7335 17.5 14.3333V7.33334C17.5 5.93321 17.5 5.23314 17.2275 4.69836C16.9878 4.22796 16.6054 3.84551 16.135 3.60582C15.6002 3.33334 14.9001 3.33334 13.5 3.33334H6.5C5.09987 3.33334 4.3998 3.33334 3.86502 3.60582C3.39462 3.84551 3.01217 4.22796 2.77248 4.69836C2.5 5.23314 2.5 5.93321 2.5 7.33334V14.3333C2.5 15.7335 2.5 16.4335 2.77248 16.9683C3.01217 17.4387 3.39462 17.8212 3.86502 18.0609C4.3998 18.3333 5.09987 18.3333 6.5 18.3333Z" stroke="#3F5BF6" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p>{task?.day}</p>
                </div>
                <div className="flex space-x-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clip-path="url(#clip0_18_17775)">
                            <path d="M9.99984 5V10L13.3332 11.6667M18.3332 10C18.3332 14.6024 14.6022 18.3333 9.99984 18.3333C5.39746 18.3333 1.6665 14.6024 1.6665 10C1.6665 5.39762 5.39746 1.66666 9.99984 1.66666C14.6022 1.66666 18.3332 5.39762 18.3332 10Z" stroke="#3F5BF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_18_17775">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p>{task?.timeRange}</p>
                </div>
            </div>

             {/* Buttons */}
             <div className="flex space-x-5 mt-7">
                    <AppOutlineButton title='Delete' handleClick={() => onDeleteTask(task)} />
                    <NoIconAppButton title='Edit' handleClick={() => onOpenEditTask(task)} />
                </div>
        </div>
    )
}
