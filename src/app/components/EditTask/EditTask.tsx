"use client"

import Assets from '@/constants/assets.constant'
import React, { useState } from 'react'
import Image from 'next/image';
import { IconButton, Tooltip } from '@mui/material';
import TextArea from '../Fields/TextArea';
import { AppOutlineButton, NoIconAppButton } from '../Buttons/Buttons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import moment from 'moment';


export default function EditTask(
    {
        header,
        startDate,
        setStartDate,
        handleDatePicker,
        handleTimePicker,
        handleEndTimePicker,
        isDatePickerOpen,
        isTimePickerOpen,
        formatDate,
        handleCloseDatePicker,
        hours,
        minutes,
        handleHoursChange,
        handleMinutesChange,
        endHours,
        endMinutes,
        handleEndHoursChange,
        handleEndMinutesChange,
        isEndTimePickerOpen,
        handleTextAreaChange,
        textValue,
        handleAddTask,
    }: any) {


    return (
        <>
            <div className='bg-[#fff] rounded-[8px] p-[24px] w-full h-auto relative'
                style={{ boxShadow: "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)" }}
            >
                <div className='flex justify-between items-center'>
                    <h1 className='text-[#101828] font-[600] text-[18px]'>{header}</h1>
                    <IconButton>
                        <Image src={Assets.close} alt='' width={20} height={20} />
                    </IconButton>
                </div>

                {/* Text Area */}
                <div className="mt-5">
                    <TextArea
                        id="text"
                        label=""
                        placeholder=""
                        value={textValue}
                        onInputChange={handleTextAreaChange}
                        require={true}
                    />
                </div>

                {/* date Picker */}
                {isDatePickerOpen && (
                    <div className='absolute'>
                        <DatePicker
                            selected={startDate}
                            onChange={(date: any) => setStartDate(date)}
                            open={isDatePickerOpen}
                            onClickOutside={handleCloseDatePicker}
                            inline
                        />
                    </div>
                )}

                {isTimePickerOpen && (
                    <div className='absolute'>
                        <TimePicker
                            value={moment(`${hours}:${minutes}`, 'HH:mm')} // Convert to a Date object
                            showHour={true} // Show hours input
                            showMinute={true} // Show minutes input
                            inputReadOnly={true}
                            open={isTimePickerOpen}
                            showSecond={false}
                            placement='topRight'
                            allowEmpty={false}
                            defaultValue={moment(`00:00`, 'HH:mm')}
                            defaultOpenValue={moment(`00:00`, 'HH:mm')}
                            onChange={(newTime) => {
                                const newMoment = moment(newTime);
                                handleHoursChange(newMoment.hours());
                                handleMinutesChange(newMoment.minutes());
                            }}
                        />
                    </div>
                )}

                {/* End Tine */}
                {isEndTimePickerOpen && (
                    <div className='absolute'>
                        <TimePicker
                            value={moment(`${endHours}:${endMinutes}`, 'HH:mm')} // Convert to a Date object
                            showHour={true} // Show hours input
                            showMinute={true} // Show minutes input
                            inputReadOnly={true}
                            open={isEndTimePickerOpen}
                            showSecond={false}
                            placement='topRight'
                            allowEmpty={false}
                            defaultValue={moment(`00:00`, 'HH:mm')}
                            defaultOpenValue={moment(`00:00`, 'HH:mm')}
                            onChange={(newEndTime) => {
                                const newEndMoment = moment(newEndTime);
                                handleEndHoursChange(newEndMoment.hours());
                                handleEndMinutesChange(newEndMoment.minutes());
                            }}
                        />
                    </div>
                )}


                <div className="mt-5 flex justify-between space-x-3">
                    <div onClick={handleDatePicker} className="border border-[#D0D5DD] rounded-[8px] px-[16px] py-[10px] flex space-x-3 items-center w-full"
                        style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)" }}
                    >
                        <Image src={Assets.calendar} alt='' width={20} height={20} />
                        <p className="text-[#667085] font-[600] text-[14px]">
                            {startDate ? `${formatDate(startDate)}` : 'Today'}
                        </p>
                    </div>

                    <div onClick={handleTimePicker} className="border border-[#D0D5DD] rounded-[8px] px-[16px] py-[10px] flex space-x-3 items-center w-full"
                        style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)" }}
                    >
                        <Image src={Assets.clock} alt='' width={20} height={20} />
                        <p className="text-[#667085] font-[600] text-[14px]">{`${hours}:${minutes}`}</p>
                    </div>
                    <div onClick={handleEndTimePicker} className="border border-[#D0D5DD] rounded-[8px] px-[16px] py-[10px] flex space-x-3 items-center w-full"
                        style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)" }}
                    >
                        <Image src={Assets.clock} alt='' width={20} height={20} />
                        <p className="text-[#667085] font-[600] text-[14px]">{`${endHours}:${endMinutes}`}</p>
                    </div>
                </div>

                {/* Alarm */}
                <div className="w-full flex justify-between items-center mt-3">
                    <div className="flex items-center space-x-2">
                        <Image src={Assets.bell2} alt='' width={20} height={20} />
                        <p className="text-[#667085] font-[500] text-[16px]">10 Minute before</p>
                    </div>
                    <Tooltip title="Remove Alert" placement="right" arrow>
                        <IconButton>
                            <Image src={Assets.close} alt='' width={15} height={15} />
                        </IconButton>
                    </Tooltip>
                </div>

                {/* Buttons */}
                <div className="flex space-x-5 mt-10">
                    <AppOutlineButton title='Cancel' handleClick={() => { }} />
                    <NoIconAppButton title={header === 'Edit Task' ? 'Edit' : 'Add'} handleClick={handleAddTask} />
                </div>
            </div>

        </>
    )
}
