import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UploadWithSecDtls = () => {
    const data =useLoaderData()
    console.log(data)
    return (
        <div>
            dtls {data.title}
        </div>
    );
};

export default UploadWithSecDtls;