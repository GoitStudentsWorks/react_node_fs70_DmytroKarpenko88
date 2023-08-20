import React from 'react';
import { SVGStyledStroke } from './SVG.styled';

export const Plus = () => {
  return (
    <SVGStyledStroke
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 20V12M12 12V4M12 12H20M12 12H4"
        stroke=""
        stroke-width="2"
        stroke-linecap="round"
      />
    </SVGStyledStroke>
  );
};
