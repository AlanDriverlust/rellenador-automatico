import React, { useState } from 'react';

const predefinedData = {
  companyName: 'GLOBAL GRAFICA 2014 SL',
  cif: 'B75599761',
  address: 'Sicilia 265 Local, Barcelona (08025)',
  responsiblePerson: 'Sergi Aymerich',
  phone: '932381931',
};

export default function RellenadorAutomatico() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleProcessDocument = () => {
    if (file) {
      alert('Document processat correctament!');
    } else {
      alert('Si us plau, puja un document primer.');
    }
  };

  return (
    <div>
      <h2>Rellenador Automàtic de Documents</h2>
      <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
      <button onClick={handleProcessDocument}>Processar Document</button>
    </div>
  );
}
