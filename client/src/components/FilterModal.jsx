export default function FilterModal({ setIsOpen }) {
  return (
    <div className="modal-overlay">
      <form className="modal-content" onSubmit={(e) => e.preventDefault()}>
        <button type="button" onClick={() => setIsOpen(false)}>
          X
        </button>
        <div className="inputs" />
        <div className="button-group">
          <button type="button" onClick={() => setIsOpen(false)}>
            Annuler
          </button>
          <button type="submit">Enregistrer</button>
        </div>
      </form>
    </div>
  );
}
