import React, { useState } from 'react';

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
