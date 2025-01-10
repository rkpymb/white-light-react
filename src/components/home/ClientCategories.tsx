// import React from "react";


// const clients = [
//   {
//     category: "Industrial Clients",
//     items: [
//       { name: "UVDHL", logo: "src/components/home/main/clientsLogo/uncl.png" },
//       { name: "MAX SPARE", logo: " main/Logo in CDR.png" },
//       { name: "SPOTON", logo: "path-to-logo3.png" },
//       { name: "J K TEXBOND", logo: "src/components/home/main/clientsLogo/JK.png" },
//     ],
//   },
//   {
//     category: "Garments Clients",
//     items: [
//       { name: "Raymond", logo: "main/Raymond_logo.svg.png" },
//       { name: "Bata", logo: "main/bata.png" },
//       { name: "Peter England", logo: "main/peter-england.png" },
//       { name: "Lifestyle", logo: "main/Lifestyle_Stores_-_New.png" },
//       { name: "Lifestyle", logo: "main/Lifestyle_Stores_-_New.png" },
//       { name: "Lifestyle", logo: "main/Lifestyle_Stores_-_New.png" },
//     ],
//   },
//   {
//     category: "Electronic Clients",
//     items: [
//       { name: "Xiaomi", logo: "main/XIAOMI.png" },
//       { name: "Xiaomi", logo: "main/XIAOMI.png" },
//       { name: "Xiaomi", logo: "main/XIAOMI.png" },
//       { name: "Samsung", logo: "main/samsung.png  " },
//       { name: "Viva Supermarket", logo: "main/viva-uae (2).png" },
//     ],
//   },
// ];

// const ClientCategories = () => {
//   return (
//     <div className="client-categories-container">
//       {clients.map((clientCategory, index) => (
//         <div key={index} className="category-section">
//           <h2 className="category-title">{clientCategory.category}</h2>
//           <div className="clients-grid">
//             {clientCategory.items.map((client, idx) => (
//               <img
//                 key={idx}
//                 src={client.logo}
//                 alt={client.name}
//                 className="client-logo"
//               />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// // export default ClientCategories;
// import React from 'react';

// const IconSection: React.FC = () => {
//   return (
//     <section className="bg-white h-screen w-full flex justify-center items-center dark:bg-gray-900 p-8">
//       <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
//         <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
//           <a className="flex items-center lg:justify-center" target="_blank" rel="noopener noreferrer">
//             <svg
//               className="h-9 hover:text-gray-900 dark:hover:text-white"
//               viewBox="0 0 125 35"
//               fill="currentColor"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               {/* Blank Path */}
//             </svg>
//           </a>
//           <a className="flex items-center lg:justify-center" target="_blank" rel="noopener noreferrer">
//             <svg
//               className="h-9 hover:text-gray-900 dark:hover:text-white"
//               viewBox="0 0 86 29"
//               fill="currentColor"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d=" "
//                 fill="currentColor"
//               />
//             </svg>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IconSection;

import React, { useEffect } from 'react';

const Showcase: React.FC = () => {
  useEffect(() => {
    const slider = document.querySelector('.sliderC') as HTMLElement;
    const sizeImage = 250;
    const itemCs = slider.children.length;
    const itemCsWidth = itemCs * sizeImage;
    slider.style.width = `${itemCsWidth}px`;

    const rotating = true;


    const sliderSpeed = 3000;

    const rotateSlider = () => {
      if (rotating) {
        const firstItem = slider.querySelector('.itemC:first-child') as HTMLElement;
        
        // Use transform for smoother transitions instead of marginLeft
        firstItem.animate(
          { transform: `translateX(-${sizeImage}px)` },
          { duration: 3000, easing: 'linear' }
        ).onfinish = () => {
          firstItem.style.transform = 'translateX(0)';
          slider.appendChild(firstItem); // Move the first item to the end
        };
      }
    };

    const interval = setInterval(rotateSlider, sliderSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="showcaseC">
      <h2 className='Head'>Our Partners</h2>
      <div className="sliderC clearfix">
        <div className="itemC">
          <img src="https://user-assets-unbounce-com.s3.amazonaws.com/696ab8d6-6b5e-4332-9b95-c585f80a7c88/e27672f8-b772-4c73-aafc-a06e6f19e043/brand1.original.svg" alt="Brand 1" />
        </div>
        <div className="itemC">
          <img src="https://user-assets-unbounce-com.s3.amazonaws.com/696ab8d6-6b5e-4332-9b95-c585f80a7c88/16289b1c-5c8a-4612-8f13-c2c73a95e59c/brand2.original.svg" alt="Brand 2" />
        </div>
        <div className="itemC">
          <img src="https://user-assets-unbounce-com.s3.amazonaws.com/696ab8d6-6b5e-4332-9b95-c585f80a7c88/0bdffcbc-8ac1-4b28-b268-66f179c28194/brand3.original.svg" alt="Brand 3" />
        </div>
        <div className="itemC">
          <img src="https://user-assets-unbounce-com.s3.amazonaws.com/696ab8d6-6b5e-4332-9b95-c585f80a7c88/2a84ff9a-bbb8-46bf-88a5-b140ef66742f/brand4.original.svg" alt="Brand 4" />
        </div>
        <div className="itemC">
          <img src="https://app.unbounce.com/publish/assets/e76b38fe-5b6f-4c0b-975c-6a410903b9a1/a421287c-brand5.svg" alt="Brand 5" />
        </div>
        <div className="itemC">
          <img src="https://user-assets-unbounce-com.s3.amazonaws.com/696ab8d6-6b5e-4332-9b95-c585f80a7c88/f1abfd34-36e9-4d49-8920-9855d1e8630f/brand6.original.svg" alt="Brand 6" />
        </div>
        <div className="itemC">
          <img src="https://user-assets-unbounce-com.s3.amazonaws.com/696ab8d6-6b5e-4332-9b95-c585f80a7c88/f1abfd34-36e9-4d49-8920-9855d1e8630f/brand6.original.svg" alt="Brand 6" />
        </div>
        <div className="itemC">
          <img src="https://user-assets-unbounce-com.s3.amazonaws.com/696ab8d6-6b5e-4332-9b95-c585f80a7c88/f1abfd34-36e9-4d49-8920-9855d1e8630f/brand6.original.svg" alt="Brand 6" />
        </div>
        <div className="itemC">
          <img src="https://user-assets-unbounce-com.s3.amazonaws.com/696ab8d6-6b5e-4332-9b95-c585f80a7c88/f1abfd34-36e9-4d49-8920-9855d1e8630f/brand6.original.svg" alt="Brand 6" />
        </div>
        <div className="itemC">
          <img src="https://user-assets-unbounce-com.s3.amazonaws.com/696ab8d6-6b5e-4332-9b95-c585f80a7c88/f1abfd34-36e9-4d49-8920-9855d1e8630f/brand6.original.svg" alt="Brand 6" />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
