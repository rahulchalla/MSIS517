var $select = $('#RoC');

$.getJSON('data.JSON', function(data) {
	$select.php('');

	for (var i = 0; i < data['RoC'].length; i++) {
		$select.append('<option id="' + data['RoC'][i]['id'] + '">' + data['RoC'][i]['name'] + '</option>');
	}
});