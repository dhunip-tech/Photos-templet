const message = "To the Best Friend ever...";
let charIndex = 0;
const song = document.getElementById('birthdaySong');

function startSequence() {
    const lid = document.querySelector('.lid');
    const setupArea = document.getElementById('setup-area');
    const messageScreen = document.getElementById('messageScreen');

    lid.style.transform = "translateY(-150px) rotate(-20deg)";
    lid.style.opacity = "0";

    setTimeout(() => {
        setupArea.style.display = "none";
        messageScreen.style.setProperty("display", "block", "important");
        
        setTimeout(() => { 
            messageScreen.style.opacity = "1"; 
            document.body.style.background = "#6c5ce7";
            typeWriter();
        }, 50);
    }, 600);
}

function typeWriter() {
    const textElement = document.getElementById("typewriterText");
    if (charIndex < message.length) {
        textElement.innerHTML += message.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
    } else {
        textElement.style.borderRight = "none";
        document.querySelector('.fade-in-text').classList.add('show-text');
        setTimeout(() => { 
            document.getElementById('galleryBtn').style.display = "inline-block"; 
        }, 1000);
    }
}

function showGallery() {
    const messageScreen = document.getElementById('messageScreen');
    const wrapper = document.getElementById('galleryWrapper');

    song.play().catch(() => console.log("Audio play blocked."));

    messageScreen.style.opacity = "0";
    
    setTimeout(() => {
        messageScreen.style.display = "none";
        wrapper.style.setProperty("display", "block", "important");
        document.body.style.background = "#fd79a8";
        
        setTimeout(() => { wrapper.style.opacity = "1"; }, 50);

        const photos = document.querySelectorAll('.photo');
        photos.forEach((img, index) => {
            setTimeout(() => {
                img.style.transform = "scale(1)";
                img.style.opacity = "1";
            }, index * 100);
        });
    }, 600);
}