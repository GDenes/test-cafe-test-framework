import { Selector } from 'testcafe';

fixture`Tool tips`.page`https://demoqa.com/tool-tips`;

test('Check tool tips', async (t) => {
	const buttonHoverMessage = 'You hovered over the Button';
	const textFieldHoverMessage = 'You hovered over the text field';
	const textHoverMessage = 'You hovered over the Contrary';

	const toolTipButton = Selector('#toolTipButton');

	await t
		.hover(Selector(Selector('#toolTipButton')))
		.expect(Selector('.tooltip-inner').innerText)
		.eql(buttonHoverMessage);

	await t
		.hover(Selector(Selector('#toolTipTextField')))
		.expect(Selector('.tooltip-inner').innerText)
		.eql(textFieldHoverMessage);

	await t
		.hover(Selector(Selector('div#texToolTopContainer > a:nth-of-type(1)')))
		.expect(Selector('.tooltip-inner').innerText)
		.eql(textHoverMessage);
});
