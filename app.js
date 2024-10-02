
const likeButton = document.getElementById('likeButton');

likeButton.addEventListener('click', function() {
    this.classList.toggle('liked');
    
    if (this.classList.contains('liked')) {
        this.querySelector('img').src = '/img/avif/heart-red.avif';
    } else {
        this.querySelector('img').src = '/img/avif/heart.avif';
    }
});

$(document).ready(function() {
    // Función para cargar contenido en el div #dynamic-content
    function loadContent(page) {
        $("#dynamic-content").load(page + ".html");
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


// JavaScript para manejo de AJAX 
$(document).ready(function() {
    // Función para cargar contenido en el div #dynamic-content
    function loadContent(page) {
        if (page === "feed") {
            // Restaurar el contenido del feed original si se hace clic en "Feed"
            $("#dynamic-content").html(`
                <section class="wrap-post">
            <div class="post">
                <div class="post-header">
                    <img src="./img/avif/logo-camilo.avif" alt="Avatar" class="avatar">
                    <div class="user-info">
                        <span class="username">Cuspián</span>
                        <span class="post-date">26 de septiembre de 2024</span>
                    </div>
                </div>
                <div class="post-content">
                    <strong>¡Hola Mundo!</strong>
                    <p>Bienvenido a mi espacio creativo, donde comparto mis proyectos y aprendizajes en el mundo del desarrollo web. Si deseas seguir mis avances, no dudes en hacerlo a través de mi perfil de GitHub, ¡solo haz clic en el botón "Seguir" arriba!</p>

                </div>
                <img src="./img/avif/Snapchat.avif" alt="Imagen del post" class="post-image">
                <div class="post-actions">
                    <button id="likeButton" class="action-button">
                        <img src="./img/avif/heart.avif" alt="Like">
                    </button>
                    <button class="action-button">
                        <a href="https://www.linkedin.com/in/juan-camilo-cuspian/"><img src="./img/avif/link.avif" alt="Comment"></a>
                    </button>
                </div>
            </div>
        </section>
        <section class="wrap-post">
            <div class="post">
                <div class="post-header">
                    <img src="./img/avif/logo-camilo.avif" alt="Avatar" class="avatar">
                    <div class="user-info">
                        <span class="username">Cuspián</span>
                        <span class="post-date">26 de septiembre de 2024</span>
                    </div>
                </div>
                <div class="post-content">
                    <strong>¡Hey!</strong>
                    <p>Te presento Alura Play, una aplicación web desarrollada con HTML y CSS que simula la experiencia de YouTube. Este proyecto permite explorar contenido multimedia de manera intuitiva y atractiva, destacando mis habilidades en diseño web y desarrollo front-end. ¡Gracias Alura Latam!</p> <br>
                    <h4>😉 Por aca te dejo el repositorio de github y la pagina en vercel</h4> <br>
                    <ul class="link-list">
                        <li><a href="https://github.com/CamiloCuspian/challenge-alura-play" target="_blank">GitHub</a></li>
                        <li><a href="https://challenge-alura-play.vercel.app/" target="_blank">Vercel</a></li>
                    </ul>
                </div>
                <img src="./img/avif/alura.avif" alt="Imagen del post" class="post-image">
                <div class="post-actions">
                    <button id="likeButton" class="action-button">
                        <img src="./img/avif/heart.avif" alt="Like">
                    </button>
                    <button class="action-button">
                        <a href="https://www.linkedin.com/in/juan-camilo-cuspian/" target="_blank" aria-label="Perfil de LinkedIn">
                            <img src="./img/avif/link.avif" alt="Enlace a mi perfil de LinkedIn">
                        </a>
                        
                    </button>
                </div>
            </div>
        </section>
            `);
        } else {
            // Cargar el contenido desde un archivo externo para las otras páginas
            $("#dynamic-content").load(page + ".html");
        }
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

//contact

$(document).ready(function() {
    // Función para cargar contenido en el div #dynamic-content
    function loadContent(page) {
        $("#dynamic-content").load(page + ".html", function() {
            if (page === "content") {
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
        loadContent("feed"); // Cargar contenido del archivo feed.html
    });

    $("#aboutLink").click(function(e) {
        e.preventDefault(); // Prevenir recarga completa
        loadContent("about"); // Cargar contenido del archivo about.html
    });

    $("#contentLink").click(function(e) {
        e.preventDefault(); // Prevenir recarga completa
        loadContent("contact"); // Cargar contenido del archivo content.html
    });

    $("#guestbookLink").click(function(e) {
        e.preventDefault();
        loadContent("guestbook"); // Cargar contenido del archivo guestbook.html
    });
});


