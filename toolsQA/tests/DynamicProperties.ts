import { Selector } from 'testcafe';

fixture`Dynamic Properies`.page`https://demoqa.com/dynamic-properties`;

test('Check dynamic elements', async (t) => {
	await t.maximizeWindow();
	const enableAfter = Selector('#enableAfter');
	await t.wait(5000).expect(enableAfter.getStyleProperty('margin-top')).contains('24px');
	await t.expect(enableAfter.hasAttribute('disabled')).notOk();
	const colorChange = Selector('#colorChange');
	await t.expect(colorChange.getStyleProperty('color')).eql('rgb(220, 53, 69)');
	const visibleAfte = Selector('#visibleAfter');
	await t.expect(Selector('#visibleAfter', { visibilityCheck: true }).value).eql('');
});
