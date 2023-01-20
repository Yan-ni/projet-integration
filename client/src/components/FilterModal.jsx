import React, { useState } from 'react';
import { observer } from 'mobx-react';

function FilterModal({ setIsOpen, filterStore }) {
  const secteurs = ['public', 'privé'];
  const type = ['université','école','autre établisement']

  return (
    <div className="modal-overlay">
      <form className="modal-content" onSubmit={(e) => e.preventDefault()}>
        <button type="button" onClick={() => setIsOpen(false)}>
          X
        </button>
        <div className="inputs">
          <pre>Secteur : {filterStore.secteur}</pre>
          <select value={filterStore.secteur} onChange={e => filterStore.setSecteur(e.target.value)}>
            <option value="">--secteur--</option>
            {secteurs.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <pre>Type : {filterStore.type}</pre>
          <select value={filterStore.type} onChange={e => filterStore.setType(e.target.value)}>
            <option value="">--type--</option>
            {type.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
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


export default observer(FilterModal);