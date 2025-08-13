
    document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            // Remove active class from all
            links.forEach(l => l.classList.remove('active'));
            // Add to the clicked one
            this.classList.add('active');
        });
    });
});
