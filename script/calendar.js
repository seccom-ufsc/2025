document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        locale: 'pt-br',
        timeFormat: 'HH:mm',
        themeSystem: 'bootstrap5',
        initialView: 'timeGridWeek',
        validRange: {
            start: '2024-08-12',
            end: '2024-08-17'
        },
        slotMinTime: '10:00:00',
        slotMaxTime: '22:00:00',
        googleCalendarApiKey: 'AIzaSyAo0eHM7AxQS0v4HZ01CwXdvbq4h-_ZCS4',
        events: {
            googleCalendarId: '28516cb404c13f958c1b24a3e914b13efa359c71f39400b5ae457b0978b45838@group.calendar.google.com'
        },
        headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: 'timeGridWeek,timeGridDay' // user can switch between the two
        },
        hiddenDays: [ 0, 6 ],
        buttonText: {
            today: 'Hoje',
            month: 'Mês',
            week: 'Semana',
            day: 'Dia',
            list: 'Lista'
        },
        allDayText: 'Dia inteiro',
        allDaySlot: false
    });

    calendar.render();
});