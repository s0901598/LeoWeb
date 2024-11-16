function createStars() {
    const container = document.querySelector('.loader-container');
    for (let i = 0; i < 40; i++) { // Reduced number of stars
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 2.5}s`;
        container.appendChild(star);
    }
}

function createPlanets() {
    const container = document.querySelector('.loader-container');
    const colors = ['#ff9999', '#99ff99', '#9999ff'];
    for (let i = 0; i < 3; i++) {
        const planet = document.createElement('div');
        planet.className = 'planet';
        planet.style.backgroundColor = colors[i];
        planet.style.animationDelay = `${i * -2.5}s`;
        container.appendChild(planet);
    }
}


function startLoading(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('start loading')
    createStars();
    createPlanets();
    const loadingContainer = document.getElementById('loadingContainer');
    const main = document.getElementById('main');
    document.getElementById('loading-panel').style.opacity = '1';
    main.style.display = 'none'
  
    // Simulate loading time (replace with actual loading if needed)
    setTimeout(() => {
        // Hide loading animation
        loadingContainer.classList.add('fade-out');
        // document.getElementById('loading-panel').style.opacity = '0';
        
        setTimeout(()=>{
            document.body.style.overflow = ''
            document.getElementById('loading-panel').style.display = 'none'
            main.style.display = ''
            document.getElementById('mainContainer').style.opacity = '1'
        },1000)        

    }, 2000); // Adjust this time as needed
}