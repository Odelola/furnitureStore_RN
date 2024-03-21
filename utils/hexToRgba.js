export const _hexToRgba = (hex, opacity) => {
    const hexValues = hex.match(/\w\w/g);
     let [red, green, blue]= hexValues.map(value => parseInt(value, 16));
     let rgba = `rgba(${red}, ${green}, ${blue}, ${opacity})`
     return rgba
}