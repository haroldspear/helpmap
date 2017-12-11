window.onload=function(){
	$.ajax({
		type: "get",
		url: "https://haroldspear.github.io/helpmapp/data/usuarios.json",
		dataType: "json",
		cache: false,
		success:function(resp){
			$(resp.usaurios).each(function(index,value){
					if(value.usuario=="haragon"){
						$("#h3").text(value.nombres+" "+value.apellidos);
						$("#h4").text(value.usuario);

						$("#p1").text("Es una persona de sexo "+value.sexo+", y con tipo de sangre "+value.tiposangre);

						$("#hab1").text(value.habilidad);
					}
			});
		} 
	});
};