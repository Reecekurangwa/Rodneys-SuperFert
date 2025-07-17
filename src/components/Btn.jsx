// src/components/Btn.jsx
import React from 'react';
import './Btn.scss'; // This imports the BASE styles for the button

/**
 * Simple Button Component
 *
 * A highly reusable button where you control its text and styling via props.
 *
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.children - The content/text displayed inside the button.
 * @param {function} [props.onClick] - Optional click handler function.
 * @param {string} [props.className] - Optional additional CSS class for custom styling (e.g., 'btn-green', 'btn-wide').
 * @param {string} [props.type='button'] - The native button type (e.g., 'submit').
 * @param {boolean} [props.disabled=false] - Whether the native button is disabled.
 */
const Btn = ({ children, onClick, className, type = 'button', disabled = false }) => {
  return (
    <button
      // This is the key line:
      // It always applies 'btn-base'
      // And then it adds whatever you pass in the 'className' prop (like 'btn-green' or 'btn-wide')
      className={`btn-base ${className || ''}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children} {/* This renders the text inside the button */}
    </button>
  );
};

export default Btn;