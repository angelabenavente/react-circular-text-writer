import React from 'react';
import {
  CircularTextWriterProps,
  ReactCircularTextWriterOptions,
  MonospacedFont
} from './interfaces';

const CircularTextWriter: React.FC<CircularTextWriterProps> = ({
  text,
  radius,
  id,
  options = {}
}) => {
  // List of allowed monospaced font families
  const monospacedFonts = [
    'Menlo',
    'Courier New',
    'Consolas',
    'Lucida Console',
    'Monaco',
    'monospace'
  ];

  // Determine the font family based on the provided options
  // If a custom font is provided, use it

  let fontFamily = 'Menlo, monospace';
  if (options.fontFamily === 'customFont' && options.customFont) {
    fontFamily = options.customFont;
  } else if (monospacedFonts.includes(options.fontFamily || '')) {
    fontFamily = options.fontFamily || 'Menlo';
  }

  // Split the text into individual letters for the circular arrangement
  const letters = text?.split('');
  // Calculate the rotation between each letter based on the number of letters
  const rotationBetweenLetters = 360 / letters.length;

  return (
    <div
      id={id}
      aria-label={text}
      style={{
        height: `${radius * 2}px`,
        width: `${radius * 2}px`,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      {letters?.map((letter, index) => {
        const rotation = index * rotationBetweenLetters;
        return (
          <p
            key={index}
            style={{
              height: `${radius}px`,
              position: 'absolute',
              transform: `rotate(${rotation}deg)`,
              transformOrigin: '0 100%',
              color: options.color || '#000000',
              fontFamily: fontFamily,
              fontWeight: options.fontWeight || 400,
              lineHeight: 'normal',
              fontSize: options.fontSize || 16
            }}
          >
            {letter}
          </p>
        );
      })}
    </div>
  );
};

export default CircularTextWriter;
