import { Selector } from 'testcafe';

fixture`Form`.page`https://demoqa.com/automation-practice-form`;

test('Fill form', async (t) => {
	const firstName = 'First';
	const lastName = 'Last';
	const email = 'example@email.com';
	const mobilNumber = '123456789';
	const subject = 'MATH';
	const address = 'test address';
	const state = 'Haryana';
	const city = 'Karnal';

	await t
		.maximizeWindow()
		.typeText(Selector('#firstName'), firstName)
		.typeText(Selector('#lastName'), lastName)
		.typeText(Selector('#userEmail'), email)
		.click(Selector("[for='gender-radio-1']"))
		.typeText(Selector('#userNumber'), mobilNumber)
		.click(Selector('#dateOfBirthInput'))
		.click(Selector('.react-datepicker__day--020'))
		.typeText(Selector('.subjects-auto-complete__value-container'), subject)
		.pressKey('enter')
		.click(Selector("[for='hobbies-checkbox-3']"))
		.typeText(Selector('#currentAddress'), address)
		.typeText(Selector('div#state .css-1hwfws3'), state)
		.pressKey('enter')
		.typeText(Selector('div#city .css-1hwfws3'), city)
		.pressKey('enter')
		.click(Selector('#submit'));

	await t
		.expect(Selector('tbody > tr:nth-of-type(1) > td:nth-of-type(2)').innerText)
		.eql(firstName + ' ' + lastName)
		.expect(Selector('tbody > tr:nth-of-type(2) > td:nth-of-type(2)').innerText)
		.eql(email)
		.expect(Selector('tbody > tr:nth-of-type(3) > td:nth-of-type(2)').innerText)
		.eql('Male')
		.expect(Selector('tbody > tr:nth-of-type(4) > td:nth-of-type(2)').innerText)
		.eql(mobilNumber)
		.expect(Selector('tbody > tr:nth-of-type(6) > td:nth-of-type(2)').innerText)
		.eql('Maths')
		.expect(Selector('tbody > tr:nth-of-type(7) > td:nth-of-type(2)').innerText)
		.eql('Music')
		.expect(Selector('tbody > tr:nth-of-type(9) > td:nth-of-type(2)').innerText)
		.eql(address)
		.expect(Selector('tbody > tr:nth-of-type(10) > td:nth-of-type(2)').innerText)
		.eql(state + ' ' + city);
});
