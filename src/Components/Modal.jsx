import React from "react";

const Modal = ({ show, message, onHide }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex flex-col justify-center items-center">
      <div className="modal-info bg-gray-700 rounded-lg shadow-lg text-center py-20 px-6">
        <h2 className="text-3xl text-white font-extrabold mb-6">{message}</h2>
        <button
          onClick={onHide}
          className="bg-red-500 hover:scale-95 text-2xl font-semibold rounded-lg text-white px-4 py-2"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
