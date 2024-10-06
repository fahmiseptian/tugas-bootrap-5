$('.nav-link').on('click', function (event) {
    event.preventDefault(); // Prevent default anchor click behavior
    var data = $(this).data('link');
    var target = $(this).attr('href'); // Get the target section


    if (data === 'yes') {
        var target = $(this).attr('href');
        window.location.href = target;
        return
    }

    $('html, body').animate({

        scrollTop: $(target).offset().top // Scroll to the target section
    }, 800); // Duration in milliseconds
});
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.navbar').removeClass('bg-transparent').addClass('bg-dark');
    } else {
        $('.navbar').removeClass('bg-dark').addClass('bg-transparent');
    }
});

let teksDeskriptif = [
    "Web Developer",
    "UI/UX Designer",
    "Software Development Engineer",
    "Programmer "
];

let indexTeks = 0;  // Index untuk kalimat
let typingSpeed = 100;  // Kecepatan mengetik per huruf (ms)
let pauseDuration = 3000;  // Waktu jeda antar kalimat (ms)

function ketikTeks(teks, elementId, callback) {
    let i = 0;
    let interval = setInterval(function () {
        document.getElementById(elementId).innerHTML = teks.substring(0, i + 1);
        i++;
        if (i === teks.length) {
            clearInterval(interval);
            setTimeout(callback, pauseDuration);  // Tunggu sebelum pindah ke teks berikutnya
        }
    }, typingSpeed);
}

function mulaiAnimasiTeks() {
    ketikTeks(teksDeskriptif[indexTeks], "teks-deskriptif", function () {
        indexTeks = (indexTeks + 1) % teksDeskriptif.length;
        mulaiAnimasiTeks();  // Pindah ke teks berikutnya setelah selesai mengetik
    });
}

mulaiAnimasiTeks();  // Memulai animasi

$('.navbar-toggler').on('click', function () {
    $('.navbar-collapse').toggleClass('show');
});

// Validasi form
(function () {
    'use strict';

    const form = document.getElementById('registration-form');
    form.addEventListener('submit', function (event) {
        // Jika form tidak valid
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        // Validasi konfirmasi password
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm-password');
        if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity('Passwords do not match');
            event.preventDefault();
            event.stopPropagation();
        } else {
            confirmPassword.setCustomValidity('');
        }

        form.classList.add('was-validated');
    }, false);
})();

 // Inisialisasi datepicker untuk input tanggal
$('#tanggal').datepicker({
    format: 'mm/dd/yyyy',
    autoclose: true,
    todayHighlight: true
});