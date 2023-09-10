"use client"

import Assets from '@/constants/assets.constant'
import React, { useState } from 'react'
import AllTask from './components/AllTask/AllTask';
import { AppButton } from './components/Buttons/Buttons'
import HorizontalCalendar from './components/Calendars/Horizontal'
import EditTask from './components/EditTask/EditTask';
import moment from 'moment';
import ViewTask from './components/ViewTask/ViewTask';



interface Calendar {
  day: string;
  dayNumber: number;
}

interface Task {
  day: string;
  name: string;
  timeRange: any
}

export default function Home() {
  const [selectedTask, setSelectedTask] = useState<any>(null);
  const [textValue, setTextValue] = useState<string>('');
  const [textValueEdit, setTextValueEdit] = useState<string>(selectedTask?.name);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isAddTask, setIsAddTask] = useState<boolean>(true);
  const [tasks, setTasks] = useState<any>([]);
  const [startDate, setStartDate] = useState(new Date());
  const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false);
  const [isTimePickerOpen, setIsTimePickerOpen] = useState<boolean>(false);
  const [isEndTimePickerOpen, setIsEndTimePickerOpen] = useState<boolean>(false);
   const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(10);
    const [endHours, setEndHours] = useState(10);
  const [endMinutes, setEndMinutes] = useState(10);

  // Edit
  const [editHours, setEditHours] = useState(10);
  const [editMinutes, setEditMinutes] = useState(10);
    const [editEndHours, setEditEndHours] = useState(10);
  const [editEndMinutes, setEditEndMinutes] = useState(10);

  const handleDatePicker = () => {
    setIsDatePickerOpen(!isDatePickerOpen)
  }

  const handleCloseDatePicker = () => {
    setIsDatePickerOpen(false)
  }

  const formatDate = (date: any) => {
    const today = new Date();
    const selectedDate = new Date(date);

    if (selectedDate.toDateString() === today.toDateString()) {
      return 'Today';
    } else {
      const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
      const day = String(selectedDate.getDate()).padStart(2, '0');
      return `${day}/${month}`;
    }
  };


  // Time 
  const handleTimePicker = () => {
    setIsTimePickerOpen(!isTimePickerOpen)
    handleEndCloseTimePicker();
  }

  const handleCloseTimePicker = () => {
    setIsTimePickerOpen(false)
  }

  // End Time
  const handleEndTimePicker = () => {
    setIsEndTimePickerOpen(!isEndTimePickerOpen)
    handleCloseTimePicker();
  }

  const handleEndCloseTimePicker = () => {
    setIsEndTimePickerOpen(false)
  }



  // Handle changes to hours and minutes
  const handleHoursChange = (newHours: any) => {
    setHours(newHours);
  };

  const handleMinutesChange = (newMinutes: any) => {
    setMinutes(newMinutes);
  };


  // End time

  // Handle changes to hours and minutes
  const handleEndHoursChange = (newEndHours: any) => {
    setEndHours(newEndHours);
  };

  const handleEndMinutesChange = (newEndMinutes: any) => {
    setEndMinutes(newEndMinutes);
  };


  // Text Area Function
  const handleTextAreaChange = (event: any) => {
    setTextValue(event.target.value);
  };
  const handleEditTextAreaChange = (event: any) => {
    setTextValueEdit(event.target.value);
  };



  // Add Task
  const handleAddTask = () => {
    if (textValue && startDate) {
      const newTask = {
        name: textValue,
        timeRange: `${hours}:${minutes} - ${endHours}:${endMinutes}`,
        day: moment(startDate).format('MMMM Do, YYYY'),
      };

      setTasks([newTask, ...tasks]);

      // Clear the form inputs
      setTextValue('');
      setStartDate(new Date());
      setHours(10);
      setMinutes(11);
      setEndHours(10);
      setEndMinutes(11);
    }
  };


  // Greeting Function
  const currentHour = new Date().getHours();
  let greetingMessage = '';

  if (currentHour >= 0 && currentHour < 12) {
    greetingMessage = 'Good morning!';
  } else if (currentHour >= 12 && currentHour < 17) {
    greetingMessage = 'Good afternoon!';
  }  else if (currentHour >= 17 && currentHour < 20) {
    greetingMessage = 'Good evening!';
  }
    else {
    greetingMessage = 'Working Late right!';
  }


  // Horizontal Calendar Function
  const currentDate = new Date();
  const daysToShow = 7; // Number of days to show after the current date

  // Generate an array of dates starting from the current date
  const dateArray = Array.from({ length: daysToShow }, (_, index) => {
    const date = new Date();
    date.setDate(currentDate.getDate() + index);
    return date;
  });

  // Get the current month and year
  const currentMonth = currentDate.toLocaleDateString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


  // Handle edit
  const toggleEdit = (task: any) => {
    setIsAddTask(false);
    setIsEditing(false);
    setSelectedTask(task);
  };


  // Function to delete a task by its ID
  const handleDeleteTask = (taskToDelete: any) => {
    const updatedTasks = tasks.filter((task: any) => task !== taskToDelete);
    setTasks(updatedTasks);
  };


  const handleEditTask = (editedTask: { name: any; day: any; timeRange: any; }) => {
    console.log('Editing task:', editedTask);
    const updatedTasks = tasks.map((task: { name: any; day: any; }) => {
      // Compare tasks based on properties that uniquely identify them
      if (task.name === editedTask.name) {
        return {
          name: textValueEdit,
          timeRange: editedTask.timeRange,
          day: editedTask.day,
        };
      }
      return task;
    });
  
    setTasks(updatedTasks);
  };
  

  const onClose = () => {
    setIsAddTask(true);
  }

   const onCreateTask = () => {
    setIsAddTask(true);
  }

  const onOpenEditTask = (task: any) => {
    setIsEditing(true);
    setTextValueEdit(task.name);
  }




  return (
    <div className='w-full pt-[48px] px-16'>
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="text-[#101828] text-[30px] font-[700]">{greetingMessage}</h1>
          <p className="text-[#475467] font-[400] text-[16px]">You got some task to do. </p>
        </div>

        {/* App Button */}
        <AppButton icon={Assets.whitePlus} title='Create New Task' handleClick={onCreateTask} />
      </div>

      {/* Main */}
      <div className="flex mt-7">
        <div className="w-full h-auto space-y-10 pr-7 mb-26">
          <HorizontalCalendar
            header={`${currentMonth} ${currentYear}`}
            calendarData={dateArray}
            dayNames={dayNames}
            currentDate={currentDate}
          />
          <AllTask 
          header='My Tasks' 
          tasks={tasks} 
          onToggleEdit={toggleEdit} 
          onCreateTask={onCreateTask}
           />
        </div>
        <div className="border-l w-[600px] h-[500px] pl-7">
          {isAddTask ? (
            <EditTask
              header='Add Task'
              startDate={startDate}
              setStartDate={setStartDate}
              handleDatePicker={handleDatePicker}
              isDatePickerOpen={isDatePickerOpen}
              isTimePickerOpen={isTimePickerOpen}
              formatDate={formatDate}
              handleCloseDatePicker={handleCloseDatePicker}
              handleCloseTimePicker={handleCloseTimePicker}
              handleEndCloseTimePicker={handleEndCloseTimePicker}
              handleTimePicker={handleTimePicker}
              handleEndTimePicker={handleEndTimePicker}
              isEndTimePickerOpen={isEndTimePickerOpen}
              hours={hours}
              minutes={minutes}
              handleHoursChange={handleHoursChange}
              handleMinutesChange={handleMinutesChange}
              endHours={endHours}
              endMinutes={endMinutes}
              handleEndHoursChange={handleEndHoursChange}
              handleEndMinutesChange={handleEndMinutesChange}
              handleTextAreaChange={handleTextAreaChange}
              textValue={textValue}
              handleAddTask={handleAddTask}
            />
          ) : isEditing ? (
            <EditTask
              header='Edit Task'
              startDate={startDate}
              setStartDate={setStartDate}
              handleDatePicker={handleDatePicker}
              isDatePickerOpen={isDatePickerOpen}
              isTimePickerOpen={isTimePickerOpen}
              formatDate={formatDate}
              handleCloseDatePicker={handleCloseDatePicker}
              handleCloseTimePicker={handleCloseTimePicker}
              handleEndCloseTimePicker={handleEndCloseTimePicker}
              handleTimePicker={handleTimePicker}
              handleEndTimePicker={handleEndTimePicker}
              isEndTimePickerOpen={isEndTimePickerOpen}
              hours={hours}
              minutes={minutes}
              handleHoursChange={handleHoursChange}
              handleMinutesChange={handleMinutesChange}
              endHours={endHours}
              endMinutes={endMinutes}
              handleEndHoursChange={handleEndHoursChange}
              handleEndMinutesChange={handleEndMinutesChange}
              handleTextAreaChange={handleEditTextAreaChange}
              textValue={textValueEdit}
              handleAddTask={() => handleEditTask(selectedTask)}
            />
          ) : (
            <ViewTask
              task={selectedTask}
              onDeleteTask={handleDeleteTask}
              onEditTask={handleEditTask}
              onClose={onClose}
              onOpenEditTask={onOpenEditTask}
            />
          )}

        </div>
      </div>
    </div>
  )
}
