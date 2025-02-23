import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DynamicTitle from '../../../Shared Components/DynamicTitle';
import details from '../../../assets/image/details.png'

const NoteDetails = () => {
    const note = useLoaderData();
    console.log(note)
    return (
        <div>
            <div className="mt-2">
                 <DynamicTitle
                     subtitle={"Access & Analyze Your Notes in Detail"}
                      title={"My Note"}
                      image={details}

                 ></DynamicTitle>
                 <div className=" text-base mt-12 px-20  mx-auto py-10 w-full bg-[#ffffff] rounded-xl">
                      <div className="text-3xl font-bold text-[#0A033C] pt-5 text-center">{note?.title}</div>
                      <div className="text-sm font-normal pt-1 text-center">{note?.email}</div>
                      <div className="divider text-[#ffffff] pr-3"></div>
                      <div className="text-base text-[#131313] font-normal pt-1 text-center">{note?.description}</div>
                 </div>
            </div>
        </div>
    );
};

export default NoteDetails;