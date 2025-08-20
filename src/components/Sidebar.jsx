const Sidebar = () => {
  const menuItems = [
    { name: 'Registrar Ponto', active: true },
    { name: 'Pré-ausência', active: false },
    { name: 'Meus registros', active: false },
    { name: 'Banco de Horas', active: false },
    { name: 'Documentos', active: false },
    { name: 'Relatórios', active: false },
  ];

  return (
    <nav className="sidebar">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className={item.active ? 'active' : ''}>
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;