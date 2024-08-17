$('.carrossel').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


const peopleInfo = {
  "John Doe": {
    name: "John Doe",
    abstract: "A short description about John Doe.",
    events: [
      { title: "Palestra1", date: "22/09", start: "12:00", end: "14:00"},
      { title: "Palestra2", date: "22/09", start: "12:00", end: "14:00"}
    ]
  }
};



document.addEventListener('DOMContentLoaded', function () {
  const palestModal = document.getElementById('palestModal');
  
  palestModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    const personName = button.getAttribute('data-person');
    const personPhoto = button.getAttribute('data-img-src');
    
    const personInfo = peopleInfo[personName];

    
    if (personInfo) {
      palestModal.querySelector("#modal-palest-photo").src = `${personPhoto}`
      // Update the modal content
      palestModal.querySelector('.modal-title').innerHTML = `${personInfo.name}`;
      palestModal.querySelector('#palest-abstract').innerHTML = `${personInfo.abstract}`;

      // Populate the list with JSON objects
      const palestElement = palestModal.querySelector('#palest-events');
      palestElement.innerHTML = '';  // Clear previous content
      personInfo.events.forEach(event => {
        const li = document.createElement('li');
        li.innerHTML = `<b>${event.title}</b> - ${event.date} (${event.start} até ${event.end})`;
        palestElement.appendChild(li);
      });
    }
  });
});