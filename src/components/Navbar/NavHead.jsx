import React, { useRef } from 'react';
import clock from '../../assets/clock.svg';
import phone from '../../assets/phone.svg';

const NavHead = () => {
  const phoneNumberRef = useRef(null);

  const handlePhoneNumberClick = () => {
    // Get the phone number element
    const phoneNumberElement = phoneNumberRef.current;

    // Create a new textarea element to facilitate copying to clipboard
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = phoneNumberElement.textContent.trim();
    document.body.appendChild(tempTextArea);

    // Select the text in the textarea and copy it to clipboard
    tempTextArea.select();
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(tempTextArea);

    // Change the style of the phone number to indicate it's been copied
    phoneNumberElement.style.color = 'rgb(34, 170, 119)';

    // Reset the style after a brief delay (you can adjust the delay as needed)
    setTimeout(() => {
      phoneNumberElement.style.color = ''; // Reset to default color
    }, 2000); // Reset after 2 seconds (2000 milliseconds)
  };

  return (
    <div className='flex justify-center items-center md:gap-12 gap-1 max-w-[1200px] mx-auto px-5 mt-2'>
      <div className='flex flex-row items-center gap-2 sm:text-xs text-[14px]'>
        <img src={clock} alt='phone' height={20} width={20} />
        <div className='flex flex-row gap-2'>
          <h4
            className='font-bold'
            onClick={handlePhoneNumberClick}
            ref={phoneNumberRef}
          >
            415-205-5550 (24/7)
          </h4>
        </div>
      </div>
      <div className='flex felx-row items-center gap-2 sm:text-xs text-[14px]'>
        <img src={phone} alt='phone' height={20} width={20} />
        <div className='flex flex-row gap-2'>
          <h4 className='font-bold'>Monday-Friday (9AM-9PM)</h4>
        </div>
      </div>
    </div>
  );
};

export default NavHead;

// import React from "react";

// import clock from "../../assets/clock.svg";
// import phone from "../../assets/phone.svg";

// const NavHead = () => {
//   return (
//     <div className="flex justify-center items-center md:gap-12 gap-1 max-w-[1200px] mx-auto px-5 mt-2">
//       <div className="flex flex-row items-center gap-2 sm:text-xs text-[14px]">
//         <img src={clock} alt="phone" height={20} width={20} />
//         <div className="flex flex-row gap-2">
//           <h4 className="font-bold">415-205-5550 (24/7)</h4>
//         </div>
//       </div>
//       <div className="flex felx-row items-center gap-2 sm:text-xs text-[14px]">
//         <img src={phone} alt="phone" height={20} width={20} />
//         <div className="flex flex-row gap-2">
//           <h4 className="font-bold">Monday-Friday (9AM-9PM)</h4>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavHead;
