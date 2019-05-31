$(document).ready(function(){
    $('#btn_send').click(function(){

        var errores = ''; 

        // validando Datos de entrada

        if( $('#names').val() == '' ) {
             errores += '<p>❌ Escriba un nombre</p>'
             $('#names').css("border-bottom-color", "#F14B4B")
        } else{
            $('#names').css("border-bottom-color", "#1d1d1d")
        }

        if( $('#phone').val() == '' ) {
             errores += '<p>❌ Escriba un telefono</p>'
             $('#phone').css("border-bottom-color", "#F14B4B")
        } else{
            $('#phone').css("border-bottom-color", "#1d1d1d")
        }

        if( $('#email').val() == '' ) {
             errores += '<p>❌ Escriba un email</p>'
             $('#email').css("border-bottom-color", "#F14B4B")
        } else{
            $('#email').css("border-bottom-color", "#1d1d1d")
        }
        
        if( $('#mensaje').val() == '' ) {
             errores += '<p>❌ Escriba un mensaje</p>'
             $('#mensaje').css("border-bottom-color", "#F14B4B")
        } else{
            $('#mensaje').css("border-bottom-color", "#1d1d1d")
        }

        // ENVIANDO MENSAJE
        if ( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">' + 
                                    '<div class="mensaje_modal">'+
                                        ' <h3>Para procesar tu sueño, falta: </h3>'+
                                            errores+ '<span id="btnClose">Cerrar</span>'+
                                    '</div>' +
                                '</div>'

            $('body').append(mensajeModal);
        }

        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        })

    });
});