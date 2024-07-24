import getColorWithNewOpacity from "./getColorWithNewOpacity";

describe(getColorWithNewOpacity, () => {
   it('returns the expected color with the new opacity', () => {
    const originalColor = 'rgb(255,0,0)'
    const opacity = 10
    const newColor = getColorWithNewOpacity(originalColor, opacity)
    expect(newColor).toBe('rgba(255,0,0,0.1)')
   })
})