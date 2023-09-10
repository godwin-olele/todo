import React from 'react'

interface TextAreaFieldProps {
    label: string;
    placeholder: string;
    value: any;
    id: string;
    require: boolean;
    onInputChange: () => void;
}

export default function TextArea({ label, placeholder, value, require, id, onInputChange }: TextAreaFieldProps) {
    return (
        <div>
            {label && <label htmlFor={id} className="block mb-2 text-[1vw] font-medium text-gray-900 dark:text-white">{label}</label>}
            <textarea
                id={id}
                rows={2}
                className={`bg-[#F9FAFB] border border-[#DDE2E5] h-[140px] text-gray-900 text-[1vw] rounded-[5px] outline-none w-full py-[12px] px-[14px] resize-none`}
                placeholder={placeholder}
                required={require}
                onChange={onInputChange}
            >
                {value}
            </textarea>
        </div>
    )
}
