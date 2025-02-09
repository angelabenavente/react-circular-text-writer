// Enum to define valid monospaced fonts
export enum MonospacedFont {
  Menlo = 'Menlo',
  CourierNew = 'Courier New',
  Consolas = 'Consolas',
  LucidaConsole = 'Lucida Console',
  Monaco = 'Monaco',
  Monospace = 'monospace'
}

// Interface for the optional configuration options for the CircularTextWriter component
export interface ReactCircularTextWriterOptions {
  color?: string; // Optional text color
  fontFamily?: MonospacedFont | 'customFont'; // Optional font family, can be one of the monospaced fonts or 'customFont'
  customFont?: string; // Optional custom font name if fontFamily is set to 'customFont'
  fontWeight?: number; // Optional font weight
  fontSize?: number; // Optional font size
}

// Interface for the props accepted by the CircularTextWriter component
export interface CircularTextWriterProps {
  text: string; // The text to be displayed in a circular layout
  radius: number; // The radius of the circle to arrange the text
  id?: string; // Optional ID for the container element
  options?: ReactCircularTextWriterOptions; // Optional configuration options for styling
}
