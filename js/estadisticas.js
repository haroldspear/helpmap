
$(document).ready(function() {
  $('table.highchart').highchartTable();
});


$('#cont1').highcharts({
    xAxis: {
        categories: ["Santa Elena", "Cuenca", "Loja", 
                     "Manabí", "Quito", "Guayauil"]
    },
    series: [{
        data: [80, 100, 150, 180, 200, 300]
    }]
});

