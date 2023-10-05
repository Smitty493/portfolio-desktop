import React from 'react';

function Icon({ name, onClick }) {
  return (
    <div className="icon" onClick={onClick}>
      {name}
      {/* Here, you can add image or style for the icon */}
    </div>
  );
}

export default Icon;
