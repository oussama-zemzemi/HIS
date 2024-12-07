import React from 'react'

const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
            About of
            <span className="text-irisBlueColor font-bold text-[24px] leading-9">Mohammed Ahmed
            </span>
            </h3>
            <p className="text__para">
            Dr. Mohammed Ahmed is a highly skilled and compassionate general surgeon with over 10 years of experience in performing complex surgical procedures. He specializes in minimally invasive techniques and has extensive expertise in gastrointestinal, endocrine, and trauma surgeries. Dr. Ahmed is committed to providing patient-centered care and staying updated with the latest advancements in surgical practices.
            </p>
            </div>

            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Education

                </h3>
                <ul className="pt-4 md:p-5">
                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gab-5 mb-[30px]">
                        <dir>
                            <span className="text-irisBlueColor text-[-15px] leading-6 font-semibold">23 June,2009</span>
                        </dir>
                    </li>
                </ul>
            </div>
    </div>
  )
}

export default DoctorAbout