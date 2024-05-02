"use client";
import React from "react";
interface btn {
  content: string;
  bgcolor: string;
}
const Button = ({ content, bgcolor }: btn) => {
  return (
    <>
      <button
        className={`${bgcolor} rounded-[42px] px-4 py-2 text-sm font-medium ${
          bgcolor === "bg-black" ? "text-white" : "text-black outline outline-1"
        }`}
      >
        {content}
      </button>
    </>
  );
};

export default Button;

// interface btn {
//   content: string;
//   bgcolor: string;
// }
// const Button = ({ content, bgcolor }: btn) => {
//   return (
//     <>
//       <button
//         className={`${bgcolor} rounded-[42px] px-4 py-2 text-sm font-medium ${
//           bgcolor === "bg-black" ? "text-white" : "text-black outline outline-1"
//         }`}
//       >
//         {content}
//       </button>
//     </>
//   );
// };

// export default Button;
