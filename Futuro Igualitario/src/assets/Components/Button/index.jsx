import React from "react";
import { Toaster, toast } from "sonner";

const CustomButton = ({ onClick, successMessage, errorMessage, ...props }) => {
  const handleClick = () => {
    toast.promise(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (onClick()) {
            resolve(successMessage);
          } else {
            reject(errorMessage);
          }
        }, 2000);
      }),
      {
        loading: "Processing...",
        success: (message) => message,
        error: (message) => message,
      }
    );
  };

  return (
    <>
      <button onClick={handleClick} className="custom-button" {...props}>
        {props.children}
      </button>
      <Toaster position="top-center" />
    </>
  );
};

export default CustomButton;
