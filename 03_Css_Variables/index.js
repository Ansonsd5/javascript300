const inputs = document.querySelectorAll(".input-container input");

function handleChanage(e){
    const suffix = this.dataset.sizing || '';
    console.log(this.name);

    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}

inputs.forEach((input) => input.addEventListener('change',handleChanage));
inputs.forEach(input => input.addEventListener('mousemove',handleChanage));

