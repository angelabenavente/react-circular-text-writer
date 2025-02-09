import * as React from 'react';
import {
  CircularTextWriterProps,
  ReactCircularTextWriterOptions,
  MonospacedFont
} from './interfaces';

/**
 * CircularTextWriter component that renders the provided text in a circular format.
 *
 * @param text - The text to display in a circular arrangement.
 * @param radius - The radius of the circle.
 * @param id - The optional ID of the container element.
 * @param options - Optional configuration for color, font, and other styles.
 *
 * @returns JSX.Element - The JSX that represents the circular text.
 */
declare const CircularTextWriter: React.FC<CircularTextWriterProps>;

export default CircularTextWriter;
