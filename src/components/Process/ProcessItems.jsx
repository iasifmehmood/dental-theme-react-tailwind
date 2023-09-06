import React, { useState } from 'react';

const ProcessItems = ({ item: { img, title, desc } }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-blue py-5 px-2 rounded text-center shadow-lg transform transition-transform hover:scale-200 hover:duration-500 ${
        isHovered ? 'scale-110' : 'scale-100'
      } ${isHovered ? 'm-2' : 'm-2'}`} // Apply margin conditionally
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={img}
        className='max-h-[250px] max-w-[250px] mb-3 mx-auto'
        alt={title}
      />
      <h3 className='text-xl font-bold leading-10 text-white py-2'>{title}</h3>
      <p className='leading-normal text-white'>{desc}</p>
    </div>
  );
};

export default ProcessItems;

// import React, { useState } from 'react';

// const ProcessItems = ({ item: { img, title, desc } }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className={`bg-blue py-5 px-2 rounded text-center shadow-lg transform transition-transform ${
//         isHovered ? 'scale-110' : 'scale-100'
//       }`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <img
//         src={img}
//         className='max-h-[250px] max-w-[250px] mb-3 mx-auto'
//         alt={title}
//       />
//       <h3 className='text-xl font-bold leading-10 text-white py-2'>{title}</h3>
//       <p className='leading-normal text-white'>{desc}</p>
//     </div>
//   );
// };

// export default ProcessItems;

// import React from "react";

// const ProcessItems = ({ item: { img, title, desc } }) => {
//   return (
//     <div className="bg-blue py-5 px-2 rounded text-center shadow-lg">
//       <img
//         src={img}
//         className="max-h-[250px] max-w-[250px] mb-3 mx-auto"
//         alt={title}
//       />
//       <h3 className="text-xl font-bold leading-10 text-white py-2">{title}</h3>
//       <p className="leading-normal text-white">{desc}</p>
//     </div>
//   );
// };

// export default ProcessItems;
