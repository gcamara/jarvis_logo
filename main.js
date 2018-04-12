;(function() {
	$(document).ready(function() {
		var select = $('select')
		var counter = 0
		for (var i = 0; i < 3; i++)
			for (var j = 0; j < 5; j++) {
				if (i > 0 && i < 3 && j == 4)
					continue;
				
				counter = select.children().length
				var value = 'img-'+i+'-'+j
				var children = $('<option value="'+value+'">Opção '+ (counter + 1) +"</option>")
				select.append(children)
				var logo = $('.logo-picker .logo')

				select.on('change', function() {
					logo.removeAttr('class')
					logo.addClass('logo '+$(this).val())
				})
			}
	})
})()