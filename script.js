document.addEventListener("DOMContentLoaded", function() {
    // Selecting all planet elements
    const planets = document.querySelectorAll('.planet');
    const sun = document.querySelector('.sun');
    const solarSystem = document.querySelector('.solar-system');
    
    // Set a default zoom scale for solar system
    let zoomLevel = 1;
    
    // Add click event to each planet
    planets.forEach(planet => {
        planet.addEventListener('click', function(event) {
            event.stopPropagation();  // Prevent the Sun's click event from firing
            
            // Toggle the planet's speed (change animation duration)
            togglePlanetSpeed(planet);

            // Toggle the planet's color on click
            togglePlanetColor(planet);
            
            // Toggle planet's glow effect
            togglePlanetGlow(planet);
        });
    });

    // Add click event to the Sun to zoom in/out the solar system
    sun.addEventListener('click', function() {
        zoomInOut();
    });

    // Function to toggle speed
    function togglePlanetSpeed(planet) {
        // If the planet is paused (animation duration is '0s')
        if (planet.style.animationDuration === '0s' || !planet.style.animationDuration) {
            // Set the planet's orbit speed to a random slower pace
            planet.style.animationDuration = getRandomSpeed() + 's';
        } else {
            // Pause the planet's orbit
            planet.style.animationDuration = '0s';
        }
    }

    // Function to toggle color of the planet
    function togglePlanetColor(planet) {
        const randomColor = getRandomColor();
        planet.style.backgroundColor = randomColor;
    }

    // Function to toggle glow effect on planet
    function togglePlanetGlow(planet) {
        planet.classList.toggle('glowing');
    }

    // Function to generate a random speed between 5 and 20 seconds
    function getRandomSpeed() {
        return (Math.random() * 15 + 5).toFixed(2); // Random speed between 5s and 20s
    }

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Zoom In/Out function for the solar system
    function zoomInOut() {
        if (zoomLevel === 1) {
            zoomLevel = 1.5; // Zoom in
        } else {
            zoomLevel = 1; // Zoom out
        }

        // Apply the zoom effect by scaling the solar system
        solarSystem.style.transform = `scale(${zoomLevel})`;
    }
});
