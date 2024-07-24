'use client'

import { useState } from "react";

const colorTypes = {
  hex: 'hex',
  rgb: 'rgb',
} as const;

type ColorType = keyof typeof colorTypes

const changeColorOpacity = (color: string, percentageOpacity: number, colorType: ColorType): string => {
  switch (colorType) {
    case colorTypes.hex: 
      // For hex colors, just add the percentage opacity to the end
      return `${color}${percentageOpacity}`;
    case colorTypes.rgb:
      // For RGB colors, calculate the percentage opacity and put inside the parentheses
      const opacityPercentage = percentageOpacity/100;
      const foundColorNumbers = color.match(/\(([^)]+)\)/);
      const colorNumbers = foundColorNumbers ? foundColorNumbers[1].split(',').map(Number) : [0,0,0];
      colorNumbers[3] = opacityPercentage
      const newColor = `rgba(${colorNumbers})`;
      return newColor;
    default:
      return color;
  }
}

export default function Home() {
  const [currentColor, setCurrentColor] = useState('rgb(255,0,0)')
  const [currentOpacity, setCurrentOpacity] = useState(90)

  const onClickHandlerLighten = () => {
    setCurrentOpacity(currentOpacity - 10)
    const newColor = changeColorOpacity(currentColor, currentOpacity, 'rgb')
    setCurrentColor(newColor)
  }

  const onClickHandlerDarken = () => {
    setCurrentOpacity(currentOpacity + 10)
    const newColor = changeColorOpacity(currentColor, currentOpacity, 'rgb')
    setCurrentColor(newColor)
  }

  const onClickHandlerInvert = () => {
    const foundColorNumbers = currentColor.match(/\(([^)]+)\)/);
    const colorNumbers = foundColorNumbers ? foundColorNumbers[1].split(',').map(Number) : [0,0,0];
    const newColorNumbers = colorNumbers.map((number) => 255 - number)
    setCurrentColor(`rgb(${newColorNumbers})`)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={() => onClickHandlerLighten()}>Lighten the color</button>
      <button onClick={() => onClickHandlerDarken()}>Darken the color</button>
      <button onClick={() => onClickHandlerInvert()}>Invert the color</button>
      <p style={{color: currentColor}}>The text is {currentColor}</p>
    </main>
  );
}
