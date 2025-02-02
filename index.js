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

// Function to display doctors
function displayDoctors(doctorsList) {
    const grid = document.getElementById('doctorsGrid');
    grid.innerHTML = '';

    doctorsList.forEach doctor =>} {
        const card = document.createElement('div');
        card.className = }