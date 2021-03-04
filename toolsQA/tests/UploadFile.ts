import { Selector } from 'testcafe';

fixture`Files`.page`https://demoqa.com/upload-download`;

test('Upload File', async (t) => {
	const yourFixturePath = '../upload/sampleFile.jpeg';
	const uploadedFilePath = 'C:\\fakepath\\sampleFile.jpeg';

	await t.setFilesToUpload(Selector('#uploadFile'), yourFixturePath);
	await t.expect(Selector('#uploadedFilePath').innerText).eql(uploadedFilePath);
});

/* import 'cypress-file-upload'

describe ('', function() {
 
    it('Upload file', function() {   
       cy.visit('/upload-download', {failOnStatusCode: false})
      
       const yourFixturePath = '../upload/sampleFile'
       cy.get('#uploadFile').attachFile(yourFixturePath)
       
       cy.get('#uploadedFilePath').should('have.text', 'C:\\fakepath\\sampleFile')
   })  
}) */
