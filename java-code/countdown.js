//Inicio de documentación de modificación de contador
    simplyCountdown('#count', {
        year: 2029, 
        month: 1,
        day: 9,
        hours: 0, 
        minutes: 0, 
        seconds: 0,
        words: {
            days: { singular: ' Día', plural: ' Días' },
            hours: { singular: ' Hora', plural: ' Horas' },
            minutes: { singular: ' Minutos', plural: ' Minutos' },
            seconds: { singular: ' Segundos', plural: ' Segundos' }
        },
        plural: true, 
        inline: false, 
        inlineClass: 'simply-countdown-inline',
        
        enableUtc: false, 
        onEnd: function() { return; }, 
        refresh: 1000, 
        sectionClass: 'simply-section', 
        amountClass: 'simply-amount',
        wordClass: 'simply-word', 
        zeroPad: false,
        countUp: false
});
