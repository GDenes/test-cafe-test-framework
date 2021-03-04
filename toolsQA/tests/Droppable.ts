import { Selector } from 'testcafe';

fixture`Drag and drop`.page`https://demoqa.com/droppable`;

test('Dropabble', async (t) => {
	const droppableText = 'Dropped!';

	const draggable = Selector('#draggable', { timeout: 30000 });
	const droppable = Selector('#droppable.ui-state-highlight > p');

	await t.maximizeWindow().drag(draggable, 360, 0, { offsetX: 10, offsetY: 10 });

	await t.expect(droppable.innerText).eql(droppableText);
});
