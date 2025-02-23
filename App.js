
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload } from 'lucide-react';

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
    <div className="p-6 flex flex-col items-center">
      <Card className="w-full max-w-md">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Rellenador Automàtic de Documents</h2>
          <Input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="mb-4" />
          <Button onClick={handleProcessDocument} className="w-full" size="lg">
            <Upload className="mr-2" />Processar Document
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
