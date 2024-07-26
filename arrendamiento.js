document.addEventListener('DOMContentLoaded', () => {

    // Navbar
    const toggleButton = document.querySelector('.navbar-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    toggleButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('mobile-menu-active');
    })
    // End Navbar

    // Simulator
    const cars = document.querySelectorAll('.car');
    cars.forEach(car => {
        car.addEventListener('click', function () {
            // Deseleccionar todos los carros
            cars.forEach(c => {
                c.classList.remove('selected');
            });

            // Seleccionar el carro clickeado
            this.classList.add('selected');

            // Obtener el ID del carro seleccionado
            const selectedCarId = this.id;
        });
    });

    // Obtener el formulario por su ID
    const form = document.getElementById('formularioPrestamo');

    // Agregar un evento de submit al formulario
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtener los valores seleccionados
        const selectedCarId = document.querySelector('.car.selected').id;
        const mensualidades = document.getElementById('mensualidades').value;
        const enganche = document.getElementById('enganche').value;

        let carPrice;
        let carPrice2;
        let carPrice3;
        let carPrice4;
        const tasaAnual = 0.015;

        function pv(carPrice, enganche) {
            return carPrice * (1 - enganche / 100);
        }

        function fv(carPrice) {
            return carPrice * 0.50
        }

        function calcularPagoMensual(pv, fv, tasaAnual, mensualidades) {
            const r = tasaAnual;

            const denominador = (1 - Math.pow(1 + r, -mensualidades)) / r;

            const numeradorAjustado = pv - fv / Math.pow(1 + r, mensualidades);

            const P = (numeradorAjustado / denominador) * 1.16;

            return P
        }

        function agregarComa(numero) {
            return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        if (selectedCarId === 'car-gs8') {
            carPrice = 699900;
            carPrice2 = 759900;
            carPrice3 = 819900;
            carPrice4 = 869900;

            const pv1 = pv(carPrice, enganche)
            const pv2 = pv(carPrice2, enganche)
            const pv3 = pv(carPrice3, enganche)
            const pv4 = pv(carPrice4, enganche)

            const fv1 = fv(carPrice)
            const fv2 = fv(carPrice2)
            const fv3 = fv(carPrice3)
            const fv4 = fv(carPrice4)

            const pagoMensual1 = calcularPagoMensual(pv1, fv1, tasaAnual, mensualidades)
            const pagoMensual2 = calcularPagoMensual(pv2, fv2, tasaAnual, mensualidades)
            const pagoMensual3 = calcularPagoMensual(pv3, fv3, tasaAnual, mensualidades)
            const pagoMensual4 = calcularPagoMensual(pv4, fv4, tasaAnual, mensualidades)

            let numeroFormateado1 = agregarComa(Math.round(pagoMensual1));
            let numeroFormateado2 = agregarComa(Math.round(pagoMensual2));
            let numeroFormateado3 = agregarComa(Math.round(pagoMensual3));
            let numeroFormateado4 = agregarComa(Math.round(pagoMensual4));

            let result1 = document.getElementById('one')
            result1.innerHTML = `
                <p><strong>$${numeroFormateado1}</strong></p>`;

            let result2 = document.getElementById('two')
            result2.innerHTML = `
                <p><strong>$${numeroFormateado2}</strong></p>`;

            let result3 = document.getElementById('three')
            result3.innerHTML = `
                <p><strong>$${numeroFormateado3}</strong></p>`;

            let result4 = document.getElementById('four')
            result4.innerHTML = `
                <p><strong>$${numeroFormateado4}</strong></p>`


            let type1 = document.getElementById('carTypeOne')
            type1.innerHTML = `
                <p><strong>GL FWD</strong></p>`;

            let type2 = document.getElementById('carTypeTwo')
            type2.innerHTML = `
                <p><strong>GT FWD</strong></p>`;

            let type3 = document.getElementById('carTypeThree')
            type3.innerHTML = `
                <p><strong>GT AWD</strong></p>`;

            let type4 = document.getElementById('carTypeFour')
            type4.innerHTML = `
                <p><strong>GX AWD</strong></p>`;

        } else if (selectedCarId === 'car-emzoom') {
            carPrice = 468900;
            carPrice2 = 479900;
            carPrice3 = 489200;

            const pv1 = pv(carPrice, enganche)
            const pv2 = pv(carPrice2, enganche)
            const pv3 = pv(carPrice3, enganche)

            const fv1 = fv(carPrice)
            const fv2 = fv(carPrice2)
            const fv3 = fv(carPrice3)

            const pagoMensual1 = calcularPagoMensual(pv1, fv1, tasaAnual, mensualidades)
            const pagoMensual2 = calcularPagoMensual(pv2, fv2, tasaAnual, mensualidades)
            const pagoMensual3 = calcularPagoMensual(pv3, fv3, tasaAnual, mensualidades)

            let numeroFormateado1 = agregarComa(Math.round(pagoMensual1));
            let numeroFormateado2 = agregarComa(Math.round(pagoMensual2));
            let numeroFormateado3 = agregarComa(Math.round(pagoMensual3));

            let result1 = document.getElementById('one')
            result1.innerHTML = `
                <p><strong>$${numeroFormateado1}</strong></p>`;

            let result2 = document.getElementById('two')
            result2.innerHTML = `
                <p><strong>$${numeroFormateado2}</strong></p>`;

            let result3 = document.getElementById('three')
            result3.innerHTML = `
                <p><strong>$${numeroFormateado3}</strong></p>`;

            let result4 = document.getElementById('four')
            result4.innerHTML = `
                <p></p>`;


            let type1 = document.getElementById('carTypeOne')
            type1.innerHTML = `<p><strong>GL</strong></p>`;

            let type2 = document.getElementById('carTypeTwo')
            type2.innerHTML = `<p><strong>GL+</strong></p>`;

            let type3 = document.getElementById('carTypeThree')
            type3.innerHTML = `<p><strong>GL Lux</strong></p>`;

            let type4 = document.getElementById('carTypeFour')
            type4.innerHTML = `
                <p></p>`;

        } else if (selectedCarId === 'car-gn8') {
            carPrice = 888800;
            carPrice2 = 1028800;

            const pv1 = pv(carPrice, enganche)
            const pv2 = pv(carPrice2, enganche)

            const fv1 = fv(carPrice)
            const fv2 = fv(carPrice2)

            const pagoMensual1 = calcularPagoMensual(pv1, fv1, tasaAnual, mensualidades)
            const pagoMensual2 = calcularPagoMensual(pv2, fv2, tasaAnual, mensualidades)

            let numeroFormateado1 = agregarComa(Math.round(pagoMensual1));
            let numeroFormateado2 = agregarComa(Math.round(pagoMensual2));

            let result1 = document.getElementById('one')
            result1.innerHTML = `
                <p><strong>$${numeroFormateado1}</strong></p>`;

            let result2 = document.getElementById('two')
            result2.innerHTML = `
                <p><strong>$${numeroFormateado2}</strong></p>`;

            let result3 = document.getElementById('three')
            result3.innerHTML = `
                <p></p>`;

            let result4 = document.getElementById('four')
            result4.innerHTML = `
                <p></p>`

            let type1 = document.getElementById('carTypeOne')
            type1.innerHTML = `
                <p><strong>GT</strong></p>`;

            let type2 = document.getElementById('carTypeTwo')
            type2.innerHTML = `
                <p><strong>GT Lux</strong></p>`;

            let type3 = document.getElementById('carTypeThree')
            type3.innerHTML = `
                <p></p>`;

            let type4 = document.getElementById('carTypeFour')
            type4.innerHTML = `
                <p></p>`;

        }

        const inputPlazos = document.getElementById('plazos')
        inputPlazos.value = mensualidades;

        const inputEnganche = document.getElementById('pagoInicial')
        inputEnganche.value = enganche;

    })
    // End Simulator
})

// Map
function initMap() {
    const torreQuadrata = { lat: 19.393124, lng: -99.239168 };

    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 15, center: torreQuadrata });

    var marker = new google.maps.Marker({ position: torreQuadrata, map: map });
}
// End Map