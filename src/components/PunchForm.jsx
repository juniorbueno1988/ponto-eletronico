import { useState } from 'react';

const PunchForm = () => {
  const [name, setName] = useState('');
  const [observation, setObservation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date();
    const punch = {
      date: now.toLocaleDateString('pt-BR'),
      time: now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
      receipt: `${name} - ${observation || 'Sem observação'}`,
    };
    const punches = JSON.parse(localStorage.getItem('punchRecords') || '[]');
    punches.push(punch);
    localStorage.setItem('punchRecords', JSON.stringify(punches));
    setName('');
    setObservation('');
    alert('Ponto registrado!');
  };

  return (
    <form className="punch-form" onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Observação:
        <textarea value={observation} onChange={(e) => setObservation(e.target.value)} />
      </label>
      <button type="submit">Registrar Ponto</button>
    </form>
  );
};

export default PunchForm;