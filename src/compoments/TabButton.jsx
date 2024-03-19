// import { useTransition } from 'react';

// eslint-disable-next-line react/prop-types
export default function TabButton({ children, isActive, onClick }) {
  if (isActive) {
    return <button className="button_about button_about_active">{children}</button>
    
  }
  return (
    <button 
      onClick={() => {onClick();}}
      className="button_about"
    >
      {children}
    </button>
  )
}
