"use client"

import Assets from '@/constants/assets.constant'
import { Checkbox } from '@mui/material'
import React, { useState } from 'react'
import { AppButton } from '../Buttons/Buttons'
import EmptyStateView from '../EmptyStateView/EmptyStateView'
import ReactPaginate from 'react-paginate';

export default function AllTask({ header, tasks, onToggleEdit, onCreateTask }: any) {
    const [currentPage, setCurrentPage] = useState<any>(0);
    const tasksPerPage = 5; // Number of tasks to display per page

    const handlePageChange = (selectedPage: { selected: any }) => {
        setCurrentPage(selectedPage.selected);
    };

    const offset = currentPage * tasksPerPage;
    const paginatedTasks = tasks.slice(offset, offset + tasksPerPage);

    return (
        <>
            {tasks?.length <= 0 ? (
                <div className="w-full flex justify-center items-center h-[400px]">
                    <EmptyStateView
                        icon={Assets.notFound}
                        title="You have not added any task yet!"
                        subtitle=''
                        actions={<AppButton icon={Assets.whitePlus} title="Create Task" handleClick={onCreateTask} />}
                    />
                </div>
            ) : (
                <div className='w-full h-auto'>
                    <p className="text-[#101828] font-[600] text-[16px]">{header}</p>
                    <div className='space-y-4 mt-3'>
                        {paginatedTasks?.map((task: any, i: React.Key | null | undefined) => (
                            <div key={i} onClick={() => onToggleEdit(task)} className='border-b border-[#EAECF0] bg-[#F9FAFB] w-full py-[16px] pr-[24px] pl-[15px] flex items-center justify-between rounded-[5px]'>
                                <div className="flex space-x-2 items-center">
                                    <Checkbox
                                        onClick={() => { }}
                                        sx={{
                                            color: '#C9C9C9',
                                            '& .MuiSvgIcon-root': { fontSize: 20, backgroundColor: '#fff', borderRadius: '50px' },
                                        }}
                                    />
                                    <div>
                                        <p className="text-[#101828] font-[500] text-[14px]">{task.name}</p>
                                        <p className='text-[#475467] font-[400] text-[14px]'>{task.timeRange}</p>
                                    </div>
                                </div>
                                <p className='text-[#475467] font-[400] text-[14px]'>{task.day}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Pagination */}
            {tasks?.length > 0 && (
                <div className="w-full">
                    <ReactPaginate
                        previousLabel={'Previous'}
                        nextLabel={'Next'}
                        breakLabel={'...'}
                        pageCount={Math.ceil(tasks.length / tasksPerPage)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageChange}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                    />
                </div>
            )}
        </>
    )
}
