function clearPersianDiacritics(word) {

		// Define the Persian letters with diacritics and their corresponding non-diacritic letters
		const diacritics = ['\u064B', '\u064C', '\u064D', '\u064E', '\u064F', '\u0650', '\u0651', '\u0652,\u064E', '\u064F', '\u0650', '\u064B', '\u064C', '\u064D', '\u0651', '\u0652', '\u0622' ];
		const nonDiacritics = ['', '','','','','','','','','','','','','','','',''];

		// Replace each Persian letter with diacritics with its corresponding non-diacritic letter
		let processedWord = '';
                var field = Xrm.Page.getAttribute(word).getValue();
		for (let i = 0; i < field.length; i++) {
			const letter = field.charAt(i);
			const index = diacritics.indexOf(letter);
			if (index !== -1) {
				processedWord += nonDiacritics[index];
			} else {
				processedWord += letter;
			}
		}
Xrm.Page.getAttribute(word).setValue(processedWord);
}
