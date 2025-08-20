import { useState, useEffect } from 'react';

const PunchesTable = () => {
  const [punches, setPunches] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Ajustado para 10 registros por página como no print

  useEffect(() => {
    const savedPunches = JSON.parse(localStorage.getItem('punchRecords') || '[]');
    setPunches(savedPunches);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPunches = punches.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(punches.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="punches-table-container">
      <h2>Últimas Marcações</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Data</th>
            <th>Hora</th>
            <th>Recibo</th>
            <th>Baixar</th>
          </tr>
        </thead>
        <tbody>
          {currentPunches.length > 0 ? (
            currentPunches.map((punch, index) => (
              <tr key={index}>
                <td>{index + 1 + indexOfFirstItem}</td>
                <td>{punch.date}</td>
                <td>{punch.time}</td>
                <td>{punch.receipt}</td>
                <td><button>Baixar</button></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Nenhum registro encontrado</td>
            </tr>
          )}
        </tbody>
      </table>
      {punches.length > itemsPerPage && (
        <div className="pagination">
          <span>
            Mostrando {indexOfFirstItem + 1} a{' '}
            {indexOfLastItem > punches.length ? punches.length : indexOfLastItem} de{' '}
            {punches.length} registros |{' '}
          </span>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              style={{ fontWeight: currentPage === number ? 'bold' : 'normal' }}
            >
              {number}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Próximo
          </button>
        </div>
      )}
    </div>
  );
};

export default PunchesTable;