import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { BiSolidErrorCircle } from "react-icons/bi";

type Props = {
  message: string;
  onClose: () => void;
  duration: number;
  type?: "success" | "error";
};

const Toast: React.FC<Props> = ({
  message,
  onClose,
  duration = 3000,
  type = "success",
}) => {
  const color = type === "success" ? "green" : "red";
  // Auto-hide after the duration
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="fixed top-10 right-6 z-50">
      <div
        className="flex items-center w-64 p-4 pb-5 text-background bg-white rounded-sm"
        role="alert"
      >
        {type === "success" ? (
          <FaCheckCircle size={20} color={color} />
        ) : (
          <BiSolidErrorCircle size={20} color={color} />
        )}
        <p className="ms-3 text-sm font-medium">{message}</p>

        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute cursor-pointer top-0 right-0 bg-transparent text-background rounded-lg inline-flex items-center justify-center h-8 w-8"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <CgClose size={18} />
        </button>
        <div
          className="absolute bottom-0 left-0 w-full h-1 transition-all"
          style={{
            backgroundColor: color,
            animation: `shrink ${duration}ms linear forwards`,
          }}
        />
      </div>
    </div>
  );
};

export default Toast;
