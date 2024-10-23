const getCSS = (vvariavel) =>{
    const bodyStyles = getComputedStyledStyle(document.body)
    return bodyStyles.getPropartyValue (variavel)
}
const tickConfig = {
    family: getCSS('--font'),
    size:16,
    color: getCSS('--primary-color')
}
export {getCSS, tickConfig}