module.exports = function toReadable(number) {
    const lessTwenty = [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ]
    const multiplesTen = [
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ]
    
    let thousand = Math.floor(number / 1000)
    let hundred = Math.floor((number % 1000) / 100)
    let ten = Math.floor(((number % 1000) % 100) / 10)
    let unit = (((number % 1000) % 100) % 10)
    
    let result = ''
    
    if (number === 0) return 'zero'
    
    if (thousand > 0) result += toReadable(thousand) + ' thousand '
    
    if (hundred > 0) result += lessTwenty[hundred - 1] + ' hundred '
    
    if (ten > 1) result += multiplesTen[ten - 2] + ' '
    else unit += 10 * ten
    
    if (unit > 0) result += lessTwenty[unit - 1]
    
    return result.trim()
}
