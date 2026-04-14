// ১. অটোমেটিক স্লাইডার লজিক
let currentSlide = 0;
const slides = document.querySelectorAll('.slide-img');

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// প্রতি ৩ সেকেন্ড পর পর ছবি পরিবর্তন হবে
setInterval(showNextSlide, 3000);


// ২. অ্যাডমিন প্যানেল প্রটেকশন (সিম্পল কনসেপ্ট)
// ইউজাররা যাতে ভুল করেও অ্যাডমিন পেজে না যায়
function checkAdmin() {
    const isAdmin = localStorage.getItem('isAnirbanAdmin');
    if (!isAdmin) {
        console.log("আপনি শুধু তথ্য দেখতে পারবেন।");
        // এখানে আপনি চাইলে অ্যাডমিন বাটন হাইড করে রাখতে পারেন
    }
}

window.onload = checkAdmin;