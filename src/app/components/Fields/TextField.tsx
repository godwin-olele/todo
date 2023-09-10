"use client"

interface TextFieldProps {
    label: string;
    placeholder: string;
    value: any;
    id: string;
    type: string;
    require: boolean;
    onInputChange: any;
    readOnly: boolean;
}

export default function TextField({ label, placeholder, value, require, id, type, onInputChange, readOnly }: TextFieldProps) {
    return (
        <div className="w-full">
            <label htmlFor={id} className="block mb-2 text-[1vw] font-medium text-gray-900 dark:text-white w-full">{label}</label>
            <div className="relative">
                <input
                    type={type}
                    id={id}
                    value={value}
                    onChange={onInputChange}
                    className='bg-white border border-[#DDE2E5] text-gray-900 text-[1vw] rounded-[5px] outline-none w-full px-4 py-3'
                    placeholder={placeholder}
                    required={require}
                    readOnly={readOnly}
                />
                {/* <div className='absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer' onClick={handleViewPassword}>
                        <IconContext.Provider value={{ color: "#ababaa", size: "20px" }}>
                            <div>
                                {viewPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </div>
                        </IconContext.Provider>
                    </div> */}
            </div>
        </div>
    )
}
