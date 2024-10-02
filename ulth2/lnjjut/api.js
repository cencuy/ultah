const candles = document.querySelectorAll('.candle');
const flames = document.querySelectorAll('.flame');

candles.forEach((candle, index) => {
    candle.addEventListener('click', () => {
        const flame = flames[index];
        if (flame.style.opacity === '1') {
            flame.style.opacity = '0'; // Matikan api
        } else {
            flame.style.opacity = '1'; // Nyalakan api
        }
    });
});
