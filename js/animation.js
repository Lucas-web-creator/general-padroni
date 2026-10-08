/* ============================================================
   GERAL PADRONI
   ANIMATION.JS
   ============================================================ */


/* ============================================================
   01. DOM READY
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    const introContent = document.querySelector(".intro-content");
    const accessButton = document.querySelector("#accessButton");

    const orbBlue = document.querySelector(".orb-blue");
    const orbYellow = document.querySelector(".orb-yellow");
    const orbGreen = document.querySelector(".orb-green");
    const orbWhite = document.querySelector(".orb-white");


    /* ========================================================
       02. INTRO ENTRY
       ======================================================== */

    setTimeout(() => {

        if (introContent) {
            introContent.classList.add("loaded");
        }

    }, 250);


    /* ========================================================
       03. ORB ANIMATION
       ======================================================== */

    let time = 0;

    function animateOrbs() {

        time += 0.006;


        if (orbBlue) {

            const x =
                Math.sin(time * 0.8) * 35;

            const y =
                Math.cos(time * 0.7) * 28;

            orbBlue.style.transform =
                `translate(${x}px, ${y}px)`;
        }


        if (orbYellow) {

            const x =
                Math.cos(time * 0.7) * 40;

            const y =
                Math.sin(time * 0.9) * 32;

            orbYellow.style.transform =
                `translate(${x}px, ${y}px)`;
        }


        if (orbGreen) {

            const x =
                Math.sin(time * 0.6) * 32;

            const y =
                Math.cos(time * 0.8) * 38;

            orbGreen.style.transform =
                `translate(${x}px, ${y}px)`;
        }


        if (orbWhite) {

            const x =
                Math.cos(time * 0.9) * 30;

            const y =
                Math.sin(time * 0.6) * 35;

            orbWhite.style.transform =
                `translate(${x}px, ${y}px)`;
        }


        requestAnimationFrame(animateOrbs);
    }


    animateOrbs();


    /* ========================================================
       04. MOUSE PARALLAX
       ======================================================== */

    document.addEventListener("mousemove", (event) => {

        const mouseX =
            (event.clientX / window.innerWidth) - 0.5;

        const mouseY =
            (event.clientY / window.innerHeight) - 0.5;


        if (orbBlue) {

            orbBlue.style.marginLeft =
                `${mouseX * 25}px`;

            orbBlue.style.marginTop =
                `${mouseY * 25}px`;
        }


        if (orbYellow) {

            orbYellow.style.marginLeft =
                `${mouseX * -20}px`;

            orbYellow.style.marginTop =
                `${mouseY * 20}px`;
        }


        if (orbGreen) {

            orbGreen.style.marginLeft =
                `${mouseX * 20}px`;

            orbGreen.style.marginTop =
                `${mouseY * -20}px`;
        }


        if (orbWhite) {

            orbWhite.style.marginLeft =
                `${mouseX * -25}px`;

            orbWhite.style.marginTop =
                `${mouseY * -25}px`;
        }

    });


    /* ========================================================
       05. ACCESS BUTTON
    ======================================================== */

    if (accessButton) {

        accessButton.addEventListener("click", () => {

            accessButton.classList.add("clicked");

            setTimeout(() => {

                accessButton.classList.remove("clicked");

            }, 350);

        });

    }

});
