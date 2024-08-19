import React from 'react'

export default function PersonalDetailPreview({resumeInfo}) {
  return (
    <div>
        <h2 className='font-bold text-center text-xl' style={{ color:resumeInfo?.themeColor }}>{resumeInfo?.firstName} {resumeInfo?.lastName}</h2>
        <h2 className='font-medium text-center text-sm'>{resumeInfo?.jobTitle} </h2>
        <h2 className='font-normal text-center text-xs' style={{ color:resumeInfo?.themeColor }}>{resumeInfo?.address} </h2>

        <div className='flex justify-between'>
            <h2 className='font-normal text-xs' style={{ color:resumeInfo?.themeColor }}>{resumeInfo?.phone} </h2>
            <h2 className='font-normal text-xs' style={{ color:resumeInfo?.themeColor }}>{resumeInfo?.email} </h2>
        </div>
        <hr className='border-[1.5px] my-2' ></hr>
    </div>
  )
}
