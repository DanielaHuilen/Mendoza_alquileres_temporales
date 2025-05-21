

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST["nombre"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $huespedes=htmlspecialchars($_POST["huespedes"], FILTER_VALIDATE_INT);
    $pais=filter_var($_POST["pais"], FILTER_SANITIZE_STRING);
    $fecha_ingreso=htmlspecialchars($_POST["fecha_ingreso"]);
    $fecha_egreso=htmlspecialchars($_POST["fecha_egreso"]);
    $mensaje = htmlspecialchars($_POST["mensaje"]);


    if (!$nombre || !$email || !$huespedes || !$mensaje ) {
        echo "Error: Todos los campos obligatorios deben estar completos.";
        exit;
    }

    // Dirección a la que se enviará el correo (debe estar configurada en Hostinger)
    $para = "emaildelalalara@ksdal.com";
    $asunto = "Nuevo mensaje de $nombre";
    
    $contenido = "Nombre: $nombre\n";
    $contenido .="Email: $email\n";
    $contenido .="Cantidad de Huéspedes: $huespedes\n";
    $contenido .="País: $pais\n";
    $contenido .="Fecha de ingreso: $fecha_ingreso\n";
    $contenido .="Fecha de egreso: $fecha_egreso\n";
    $contenido .="Mensaje:\n$mensaje \n";

    $cabeceras = "From: $email\r\n";
    $cabeceras.="Reply-To: $email\r\n";
    $cabeceras.="MIME-Version: 1.0\r\n";
    $cabeceras.="Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($para, $asunto, $contenido, $cabeceras)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Error al enviar el mensaje.";
    }
}
?>
