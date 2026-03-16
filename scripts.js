document.addEventListener('DOMContentLoaded', function() {
    const randomBtn = document.getElementById('randomAlbum');
    const albumLinks = document.querySelectorAll('.btn-primary');

    randomBtn.addEventListener('click', function() {
        // Pick random album
        const randomIndex = Math.floor(Math.random() * albumLinks.length);
        const randomAlbum = albumLinks[randomIndex];

        // Get album link and navigate to the album page
        const albumLink = randomAlbum.getAttribute('href');
        window.location.href = albumLink;
    });
});