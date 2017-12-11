$("#quiero-ser-voluntario").submit(function(e){
	e.preventDefault();
	
	var nombre= $("#nombre").val();
	var apellido= $("#apellido").val();
	var usuario= $("#nombre_usuario").val();
	var contra= $("#contrasena").val();
	var sexo= $("#sexo").val();
	var cedula= $("#cedula").val();
	var tipo_sangre= $("#tipo_sangre").val();
	var correo= $("#correo").val();
	var habilidad= $("#habilidad").val();

	var json={}
	json.nombres=nombre;
	json.apellidos=apellido;
	json.usuario=usuario;
	json.contrasena=contra;
	json.sexo=sexo;
	json.tipo_sangre=tipo_sangre;
	json.correo=correo;
	json.habilidad=habilidad;

	JSON.stringify(json);
	
	
	/*
	$.getJSON("https://haroldspear.github.io/helpmapp/data/usuarios.json", function(data){

			
	});
	*/

	$.ajax({
		type: "get",
		url: "https://haroldspear.github.io/helpmapp/data/usuarios.json",
		dataType: "json",
		cahe: false,
		success:function(resp){
			$(resp.usaurios).each(function(index,value){
				if(json.usuario==value.usuario){
					alert("Ya existe este usuario, porfavor elija otro nombre de usuario.");
				}else{
					$.ajax({
						type: "post",
						url: "https://haroldspear.github.io/helpmapp/data/usuarios.json",
						dataType: "json",
						cahe: false,
						success:function(resp){
							$(resp.usaurios).append(json);
						}
					});
				}
			});
		} 
	});


	/*
	$.ajax({
		type: "POST",
		url: "volutario.html",
		data: json,
		success:function(resp){
			
		} 
	})
	*/


});