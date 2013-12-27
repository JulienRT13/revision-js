$(document).ready(function(){
	$('#next').click(function(e) {
		testAjax($('[name=nom]').val(), $('[name=prenom]').val(), $('[name=age]').val());
	});
});

function testAjax(nom, prenom, age)
{
	$.ajax({
		type: 'POST',
		url: 'process.php',
		dataType: "json",
		data: {
			nom: nom,
			prenom: prenom,
			age: age
		}, 
		success: function(data, textStatus, jqXHR) {
			$('#result').html(data.message);
		},
		error: function(jqXHR, textStatus, errorThrown) {
			alert('Erreur ajax !!');
		}
	});
}