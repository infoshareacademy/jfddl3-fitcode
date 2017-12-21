$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});


window.addEventListener("load", function () {
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
                "background": "#000",
                "text": "#0f0"
            },
            "button": {
                "background": "transparent",
                "text": "#0f0",
                "border": "#0f0"
            }
        },
        "content": {
            "message": "Ta strona korzysta z plików cookie w celu realizacji usług zgodnie z polityką prywatności.",
            "dismiss": "Rozumiem",
            "link": "Dowiedz się więcej.",
            "href": "http://wszystkoociasteczkach.pl/"

        }
    })
});

