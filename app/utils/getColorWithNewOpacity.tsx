const getColorWithNewOpacity = (color: string, percentageOpacity: number): string => {
    const opacityPercentage = percentageOpacity/100;
    const foundColorNumbers = color.match(/\(([^)]+)\)/);
    const colorNumbers = foundColorNumbers ? foundColorNumbers[1].split(',').map(Number) : [0,0,0];
    colorNumbers[3] = opacityPercentage
    const newColor = `rgba(${colorNumbers})`;
    return newColor;
}

export default getColorWithNewOpacity