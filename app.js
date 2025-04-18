
document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector("#container-proyectos article .container-tag");
    const tags = container.querySelectorAll("p");
    function adjustTags() {
        const containerWidth = container.clientWidth;
        let usedWidth = 0;

        tags.forEach(tag => {
            tag.style.display = "block"; 
            const tagWidth = tag.offsetWidth + 3;
            if (usedWidth + tagWidth <= containerWidth) {
                usedWidth += tagWidth;
            } else {
                tag.style.display = "none";
            }
        });
    }
    adjustTags();
    window.addEventListener("resize", adjustTags);
});


const btn1 = document.getElementById("btnAppTasaDeCambios");

btn1.addEventListener("click", function(){
    window.open("https://github.com/AnthonyBVivenes/Convertidor-de-Bolivares", "_blank");
});





setInterval(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    alert(`Resolución de la ventana: ${width}x${height}`);
}, 5000); // 10000 milisegundos = 10 segundos


alert("dddd")