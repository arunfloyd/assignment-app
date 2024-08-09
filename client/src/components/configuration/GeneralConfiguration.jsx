

import React from "react";

const InputField = ({ id, label, placeholder, helperText }) => (
  <div className="mb-4 max-w-full">
    <label htmlFor={id} className="block font-bold text-md mb-2">
      {label}
    </label>
    <input
      type="text"
      id={id}
      className="w-full px-3 py-2 border rounded-md text-md focus:outline-none focus:border-blue-500"
      placeholder={placeholder}
    />
    <span className="text-gray-500 text-xs">{helperText}</span>
  </div>
);

const GeneralConfiguration = () => {
  const fields = [
    {
      id: "chatbot-name",
      label: "Chatbot Name",
      placeholder: "Enter Chatbot Name",
      helperText: "Lorem ipsuim dolor sit Lorem ipsuim dolor sit",
    },
    {
      id: "welcome-message",
      label: "Welcome Message",
      placeholder: "Enter Welcome Message",
      helperText: "Lorem ipsuim dolor sit Lorem ipsuim dolor sit",
    },
    {
      id: "input-placeholder",
      label: "Input Placeholder",
      placeholder: "Enter Input Placeholder",
      helperText: "Lorem ipsuim dolor sit Lorem ipsuim dolor sit",
    },
  ];

  return (
    <div className="mx-auto max-w-full py-4">
      {fields.map((field) => (
        <InputField key={field.id} {...field} />
      ))}
    </div>
  );
};

export default GeneralConfiguration;

// import React from "react";

// function GeneralConfiguration() {
//   const renderInputField = (id, label, placeholder, helperText) => (
//     <div className="mb-4 max-w-full">
//       <label htmlFor={id} className="block font-bold text-md  mb-2">
//         {label}
//       </label>
//       <input
//         type="text"
//         id={id}
//         className="w-full px-3 py-2 border rounded-md text-md focus:outline-none focus:border-blue-500"
//         placeholder={placeholder}
//       />
//       <span className="text-gray-500 text-xs">{helperText}</span>
//     </div>
//   );

//   return (
//     <div className="mx-auto max-w-full py-4">
//       {renderInputField(
//         "chatbot-name",
//         "Chatbot Name",
//         "Enter Chatbot Name",
//         "Lorem ipsuim dolor sit Lorem ipsuim dolor sit"
//       )}
//       {renderInputField(
//         "welcome-message",
//         "Welcome Message",
//         "Enter Welcome Message",
//         "Lorem ipsuim dolor sit Lorem ipsuim dolor sit"
//       )}
//       {renderInputField(
//         "input-placeholder",
//         "Input Placeholder",
//         "Enter Input Placeholder",
//         "Lorem ipsuim dolor sit Lorem ipsuim dolor sit"
//       )} 
//     </div>
//   );
// }

// export default GeneralConfiguration;
