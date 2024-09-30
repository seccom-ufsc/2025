const speakers = {
  "John Doe": {
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJybAolHwkjt556GvzligLSyZZ3D0ugNHkiw&s",
    title: "Palestrante",

    abstract: "A short description about John Doe.",
    events: [{ title: "Palestra 1" }, { title: "Palestra 2" }],
    contact: {
      github: "https://github.com/seccom-ufsc",
      email: "",
    },
  },
  "Jane Doe": {
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJybAolHwkjt556GvzligLSyZZ3D0ugNHkiw&s",
    title: "Palestrante",

    abstract: "A short description about John Doe.",
    events: [{ title: "Palestra 1" }, { title: "Palestra 2" }],
    contact: {
      github: "https://github.com/seccom-ufsc",
      email: "",
    },
  },
  "Jane Doe 2": {
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJybAolHwkjt556GvzligLSyZZ3D0ugNHkiw&s",
    title: "Palestrante",

    abstract: "A short description about John Doe.",
    events: [{ title: "Palestra 1" }, { title: "Palestra 2" }],
    contact: {
      github: "https://github.com/seccom-ufsc",
      email: "",
    },
  },
  "Jane Doe 3": {
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJybAolHwkjt556GvzligLSyZZ3D0ugNHkiw&s",
    title: "Palestrante",

    abstract: "A short description about John Doe.",
    events: [{ title: "Palestra 1" }, { title: "Palestra 2" }],
    contact: {
      github: "https://github.com/seccom-ufsc",
      email: "",
    },
  },
  "Jane Doe 4": {
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJybAolHwkjt556GvzligLSyZZ3D0ugNHkiw&s",
    title: "Palestrante",

    abstract: "A short description about John Doe.",
    events: [{ title: "Palestra 1" }, { title: "Palestra 2" }],
    contact: {
      github: "https://github.com/seccom-ufsc",
      email: "",
    },
  },
};

/**
 * This event is called when the page is loaded.
 * It will populate the carousel with the speakers, initialize the slick
 * carousel and set up the modal to show the speaker information.
 */
document.addEventListener("DOMContentLoaded", function () {
  console.log("HERE!");

  const carosel = document.getElementById("carrossel");
  Object.entries(speakers).forEach(([name, info]) => {
    console.log(name, info);
    addSpeakerToCarousel(carosel, name, info);
  });

  initSlick();
  setUpSpeakerModal();
});

/**
 * Sets up the modal to show the speaker information.
 */
function setUpSpeakerModal() {
  const modal = document.getElementById("speakerModal");

  modal.addEventListener("show.bs.modal", function (event) {
    const name = event.relatedTarget.getAttribute("data-person");
    const info = speakers[name];
    console.log(name);
    console.log(info);

    if (info) {
      /* Header */
      modal.querySelector(".modal-title").textContent = name;
      modal.querySelector("#modal-speaker-photo").src = info.photo;
      modal.querySelector("#speaker-abstract").textContent = info.abstract;

      /* Events */
      const eventsElement = modal.querySelector("#speaker-events");
      eventsElement.innerHTML = ""; // Clear previous content
      info.events.forEach((event) => {
        const li = document.createElement("li");
        li.innerHTML = `<b>${event.title}</b>`;
        eventsElement.appendChild(li);
      });

      /* Contact list */
      const contactList = document.getElementById("contact-list");
      contactList.innerHTML = ""; // Clear previous content

      Object.entries(info.contact).forEach(([name, link]) => {
        const contact = document.createElement("a");
        contact.target = "_blank";

        const contactCard = document.createElement("div");
        contactCard.classList.add("speaker-contact-card");
        contact.appendChild(contactCard);

        switch (name) {
          case "email":
            contact.href = `mailto:${link}`;
            contactCard.innerHTML = `<i class="bi bi-envelope"></i>`;
            break;
          default:
            contact.href = link;
            contactCard.innerHTML = `<i class="bi bi-${name}"></i>`;
        }

        if (!link) {
          contact.classList.add("disabled");
        }

        contactList.appendChild(contact);
      });
    }
  });
}

/**
 * Adds a speaker to the carousel.
 */
function addSpeakerToCarousel(carosel, speakerName, speakerInfo) {
  const card = document.createElement("div");
  card.classList.add("card", "carrossel-item");
  card.innerHTML = `
    <img src="${speakerInfo.photo}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${speakerName}</h5>
      <p class="card-text">${speakerInfo.title}</p>
      <button type="button" class="btn main-bg-color main-border-color"
      data-bs-toggle="modal" data-bs-target="#speakerModal" 
      data-person="${speakerName}">
        Saiba +
      </button>
    </div>
  `;
  carosel.appendChild(card);
}

/**
 * Initializes the slick carousel.
 */
function initSlick() {
  $(".carrossel").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
}
