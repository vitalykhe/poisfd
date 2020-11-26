export default function convertCurrency (value, rate, swap) {
    if(value !== 0){
        return swap ?  Math.fround(value/rate) : Math.fround(value*rate);
    } else {
        return 0;
    }
}
