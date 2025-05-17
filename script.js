function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
    closeMenu();
}
function toggleMenu() {
    document.getElementById("sideMenu").classList.toggle("open");
}
function closeMenu() {
    document.getElementById("sideMenu").classList.remove("open");
}

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const strHours = hours.toString().padStart(2, '0');
    const strMinutes = minutes.toString().padStart(2, '0');
    const strSeconds = seconds.toString().padStart(2, '0');
    const timeString = `${strHours}:${strMinutes}:${strSeconds} ${amPm}`;
    document.getElementById('clock').textContent = timeString;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options);
    document.getElementById('date').textContent = dateString;
}
setInterval(updateClock, 1000);
window.onload = function() {
    showSection('home');
    updateClock();
}










function copyText() {
    const text = document.getElementById("myText");
    text.select();
    text.setSelectionRange(0, 99999); // For mobile
    navigator.clipboard.writeText(text.value)
      .then(() => alert("Text copied!"))
      .catch(err => alert("Failed to copy: " + err));
  }
