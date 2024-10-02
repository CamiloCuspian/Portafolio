const likeButtons = document.querySelectorAll('.likeButton');

likeButtons.forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('liked');
        
        if (this.classList.contains('liked')) {
            this.querySelector('img').src = '/img/avif/heart-red.avif';
        } else {
            this.querySelector('img').src = '/img/avif/heart.avif';
        }
    });
});

$(document).ready(function() {
    // Función para cargar contenido en el div #dynamic-content
    function loadContent(page) {
        // Cargar el contenido desde la carpeta 'pages' para todas las páginas
        $("#dynamic-content").load("pages/" + page + ".html"); 
    }

    // Enlaces con eventos AJAX
    $(".brr-nav a").click(function(e) {
        e.preventDefault(); // Prevenir recarga completa

        // Remover la clase 'active' de todos los enlaces
        $(".brr-nav a").removeClass("active");

        // Añadir la clase 'active' al enlace clicado
        $(this).addClass("active");

        // Cargar el contenido de la página correspondiente
        const page = $(this).attr("id").replace("Link", "").toLowerCase();
        loadContent(page);
    });
});

// Contact form
$(document).ready(function() {
    // Función para cargar contenido en el div #dynamic-content
    function loadContent(page) {
        // Cargar el contenido desde la carpeta 'pages'
        $("#dynamic-content").load("pages/" + page + ".html", function() {
            if (page === "contact") {
                // Si se carga el contenido del formulario, agrega el evento submit
                $('#contactForm').on('submit', function(e) {
                    e.preventDefault(); // Prevenir el envío del formulario

                    // Obtener los valores del formulario
                    const nombre = $('#nombre').val();
                    const email = $('#email').val();
                    const mensaje = $('#mensaje').val();

                    // Mostrar un mensaje de éxito
                    const responseMessage = $('#responseMessage');
                    responseMessage.show().text(`Gracias, ${nombre}! Tu mensaje ha sido recibido.`);

                    // Limpiar el formulario
                    this.reset();
                });
            }
        });
    }

    // Enlaces con eventos AJAX
    $("#feedLink").click(function(e) {
        e.preventDefault(); // Prevenir recarga completa
        loadContent("feed"); // Cargar contenido del archivo feed.html desde la carpeta pages
    });

    $("#aboutLink").click(function(e) {
        e.preventDefault(); // Prevenir recarga completa
        loadContent("about"); // Cargar contenido del archivo about.html desde la carpeta pages
    });

    $("#contentLink").click(function(e) {
        e.preventDefault(); // Prevenir recarga completa
        loadContent("contact"); // Cargar contenido del archivo contact.html desde la carpeta pages
    });

    $("#guestbookLink").click(function(e) {
        e.preventDefault();
        loadContent("guestbook"); // Cargar contenido del archivo guestbook.html desde la carpeta pages
    });
});
