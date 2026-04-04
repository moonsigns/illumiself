import "./drawer.css"; 

export default function Drawer({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`drawer-overlay ${isOpen ? "open" : ""}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`drawer ${isOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <span>Produtos</span>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="drawer-content">
          <p>Fitas LED</p>
          <p>Perfis</p>
          <p>Fontes</p>
          <p>Cabos</p>
          <p>Interruptores</p>
          <p>Tomadas</p>
          <p>Sensores</p>
          <p>Plafons</p>
        </div>
      </div>
    </>
  );
}