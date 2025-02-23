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
                     subtitle={"hello check and sfslkfs sdfslfs"}
                      title={"Note Details"}
                      image={details}

                 ></DynamicTitle>
            </div>
        </div>
    );
};

export default NoteDetails;