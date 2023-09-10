import React from 'react'

export default function HorizontalCalendar({ header, calendarData, dayNames, currentDate }: { header: any; calendarData: any, dayNames: any; currentDate: any; }) {


    return (
        <div className='w-full h-auto'>
            <p className="text-[#101828] font-[600] text-[16px]">{header}</p>
            <div className='flex space-x-3 mt-3'>
                {calendarData?.map((date: { getDay: () => string | number; getDate: () => string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }, index: React.Key | null | undefined) => (
                    <div key={index} 
                    className={`border rounded-[8px] w-[62px] py-[10px] flex flex-col items-center justify-center ${date.getDate() === currentDate.getDate() ? 'bg-primaryColor text-white border-primaryColor' : 'text-[#344054] border-[#D0D5DD]'}`}
                        style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)" }}>
                        <p className='font-[600] text-[14px]'>
                            {dayNames[date.getDay()]}
                        </p>
                        <p className='font-[600] text-[14px]'>{date.getDate()}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
