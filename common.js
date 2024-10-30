const getCSS = (variavel) =>{
    const bodyStyles = getComputedStyle(document.body)
    return bodyStyles.getPropartyValue (variavel)
}
const tickConfig = {
    family: getCSS('--font'),
    size:16,
    color: getCSS('--primary-color')
}
export {getCSS, tickConfig}