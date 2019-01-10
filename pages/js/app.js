
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/final-urlshort/pages/data.php",
		method: "GET",
		success: function(data) {
			console.log(data);
			var code = [];
			var count = [];
			var newData = JSON.parse(data);
			console.log(newData);
			for(var i in newData) {
				code.push("Link code:" + newData[i].code);
				count.push(newData[i].count);
			}

			var chartdata = {
				labels: code,
				datasets: [
							{
								label: "Data analysis",
								backgroundColor: "rgba(255,99,132,0.2)",
								borderColor: "rgba(255,99,132,1)",
								borderWidth: 1,
								hoverBackgroundColor: "rgba(255,99,132,0.4)",
								hoverBorderColor: "rgba(255,99,132,1)",
								data: count,
							}
						]
			};

			var ctx = $("#mycanvas");

			var barGraph = new Chart(ctx, {
				type: 'bar',
				data: chartdata
			});
		},
		error: function(newData) {
			console.log(newData);
		}
	});
});