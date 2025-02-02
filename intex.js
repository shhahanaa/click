// script.js

// Sample doctor data
const doctors = [
    {
        id: 1,
        name: "Dr. Arun Kumar",
        speciality: "cardiology",
        hospital: "kims",
        experience: "15 years",
        qualification: "MD, DM Cardiology",
        image: "/api/placeholder/300/200",
        availability: ["Monday", "Wednesday", "Friday"]
    },
    {
        id: 2,
        name: "Dr. Fathima",
        speciality: "pediatrics",
        hospital: "aster",
        experience: "10 years",
        qualification: "MD Pediatrics",
        image: "/api/placeholder/300/200",
        availability: ["Tuesday", "Thursday", "Saturday"]
    },
    {
        id: 3,
        name: "Dr. Mohammed",
        speciality: "orthopedics",
        hospital: "govt",
        experience: "12 years",
        qualification: "MS Orthopedics",
        image: "/api/placeholder/300/200",
        availability: ["Monday", "Tuesday", "Friday"]
    },
    {
        id: 4,
        name: "Dr. Priya Singh",
        speciality: "general",
        hospital: "kims",
        experience: "8 years",
        qualification: "MBBS, MD",
        image: "/api/placeholder/300/200",
        availability: ["Wednesday", "Thursday", "Saturday"]
    }
];


// Function to search doctors
function searchDoctors() {
    const hospital = document.getElementById('hospitalSelect').value;
    const speciality = document.getElementById('specialitySelect').value;
    const date = document.getElementById('dateSelect').value;

    const filteredDoctors = doctors.filter(doctor => {
        return (!hospital || doctor.hospital === hospital) &&
               (!speciality || doctor.speciality === speciality);
    });

    displayDoctors(filteredDoctors);
}
var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide(){

  if(index<0){
    index = slides.length-1;
  }
  
  if(index>slides.length-1){
    index = 0;
  }
  
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
    dot[i].classList.remove("active");
  }
  
  slides[index].style.display= "block";
  dot[index].classList.add("active");
  
  index++;
  
  setTimeout(changeSlide,2000);
  
}

changeSlide();
