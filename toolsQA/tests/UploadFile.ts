import { Selector } from 'testcafe';

fixture`Files`.page`https://demoqa.com/upload-download`;

test('Upload File', async (t) => {
	const yourFixturePath = '../upload/sampleFile.jpeg';
	const uploadedFilePath = 'C:\\fakepath\\sampleFile.jpeg';

	await t.setFilesToUpload(Selector('#uploadFile'), yourFixturePath);
	await t.expect(Selector('#uploadedFilePath').innerText).eql(uploadedFilePath);
});
