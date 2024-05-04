const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
let data = new FormData();
data.append('pdfs', fs.createReadStream('/Users/maag/Downloads/Profile-6.pdf'));
data.append('pdfs', fs.createReadStream('/Users/maag/Downloads/Profile-2.pdf'));
data.append('pdfs', fs.createReadStream('/Users/maag/Downloads/Profile.pdf'));
data.append('pdfs', fs.createReadStream('/Users/maag/Downloads/Lizbeth-Zatarain-CV.pdf'));
data.append('pdfs', fs.createReadStream('/Users/maag/Downloads/CV - EN Kotlin Mobile Engineer.pdf'));
data.append('pdfs', fs.createReadStream('/Users/maag/Downloads/AsaelAmaroCV_ES.pdf.pdf'));
data.append('position', fs.createReadStream('/Users/maag/Downloads/vacante.txt'));

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://maxister.onrender.com/ai/upload-cv',
  headers: {
    ...data.getHeaders()
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
