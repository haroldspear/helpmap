$("#entrar").click(function(e){
	e.preventDefault();
	var user=$("#id_username").val();
	var pass=$("#id_password").val();

	$.ajax({
		type: "get",
		url: "https://haroldspear.github.io/helpmapp/data/usuarios.json",
		dataType: "json",
		cahe: false,
		success:function(resp){
			$(resp.usaurios).each(function(index,value){
				if(user==value.usuario){
					if(pass==value.contrasena){
						window.location="../helpmapper/index.html";
					}else{
						alert("Contraseña incorrecta");
						$("#id_password").val("");
					}
				}else{
					alert("No existe el usuario");
					$("#id_username").val("");
					$("#id_password").val("");
				}
			});
		} 
	});

});