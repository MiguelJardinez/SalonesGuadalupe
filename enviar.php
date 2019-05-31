<?php 
    //Llamando a los campos 
    $nombre = $_POST['nombre']; 
    $telefono = $_POST['telefono']; 
    $correo = $_POST['correo']; 
    $mensaje = $_POST['mensaje']; 

    //Datos para el correo
    $destinatario = "guadalupesalones@gmail.com";
    $asunto = "Cotización de envento ";

    $carta = "De: $nombre \n";
    $carta = "Correo: $correo \n";
    $carta = "Telefono: $telefono \n";
    $carta = "Mensaje: $mensaje";

    //Enviando mensaje
    mail($destinatario, $asunto, $carta);
    header('Location:./contacto/enviado.html')
?>