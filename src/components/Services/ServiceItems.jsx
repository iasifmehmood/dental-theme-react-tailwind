import React from 'react';

const ServiceItems = ({ item: { img, title, desc } }) => {
  return (
    <div className='text-center bg-white p-5 rounded overflow-hidden transform transition-transform hover:scale-105'>
      <img src={img} className='mx-auto h-10' alt={title} />
      <h3 className='text-xl font-medium leading-10 text-black py-2'>
        {title}
      </h3>
      <p className='leading-normal text-light-color'>{desc}</p>
    </div>
  );
};

export default ServiceItems;

// import React from "react";

// const ServiceItems = ({ item: { img, title, desc } }) => {
//   return (
//     <div className="text-center bg-white p-5 rounded">
//       <img src={img} className="mx-auto h-10" alt={title} />
//       <h3 className="text-xl font-medium leading-10 text-black py-2">
//         {title}
//       </h3>
//       <p className="leading-normal text-light-color">{desc}</p>
//     </div>
//   );
// };

// export default ServiceItems;
