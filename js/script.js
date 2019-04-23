$(document).ready(function() {
	var processInput = function(value) {
		var input = value.split('\n');
		var newLine = [];
		var newLines = [];
		var words = [];
		$.each(input, function(index, sentence) {
			if (/[a-zA-Z]+/.test(sentence)) {
				// this means the sentence only contains letters
				words = sentence.split(' ');
				newLine = [];
				$.each(words, function(wordindex, word) {
					newLine.unshift(word);
				});
				newLineString = newLine.join(' ');
				newLines.push('Case #' + (newLines.length+1) + ': ' + newLineString);
			}
		});

		return newLines;
	};

	var clearOutput = function() {
		$('#output').html('');
	};

	var submitClicked = function() {
		clearOutput();
		var result = processInput($('#input').val());
		$.each(result, function(index, lineString) {
			var lineHtml = $('<div>').addClass('line').html(lineString);
			$('#output').append(lineHtml);
		});
	};

	$('#submit').click(function() {
		submitClicked();
	});
});
