const input = document.getElementById('text-input');
const btn = document.getElementById('check-btn');
const result = document.getElementById('result');

const checkForPalindrome = (input) => {
	const originalInput = input; // Store for later output

	if (input === '') {
		result.textContent = 'Please input a value';
		return;
	}

	result.replaceChildren();

	const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
	let resultMsg = `<strong>${originalInput}</strong> ${
		lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
	} a palindrome.`;

	result.innerHTML = resultMsg;
};

btn.addEventListener('click', () => {
	checkForPalindrome(input.value);
	input.value = '';
});

input.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		checkForPalindrome(input.value);
		input.value = '';
	}
});
