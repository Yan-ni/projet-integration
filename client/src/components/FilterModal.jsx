import React, { useState } from 'react';
import { observer } from 'mobx-react';

function FilterModal({ setIsOpen, filterStore }) {
  const secteurs = ['public', 'privé'];
  const type = ['université','école','autre établisement'];
  const [secteurChoice, setSecteurChoice] = useState(filterStore.secteur);
  const [typeChoice, setTypeChoice] = useState(filterStore.type);


  return (
    <div className="modal-overlay">
      <form className="modal-content" onSubmit={(e) => e.preventDefault()}>
        <button type="button" onClick={() => setIsOpen(false)}>
          X
        </button>
        <div className="inputs">
          <pre>Secteur : {secteurChoice}</pre>
          <select id="secteur" value={filterStore.secteur} onChange={e => setSecteurChoice(e.target.value)}>
            <option value="">--secteur--</option>
            {secteurs.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <pre>Type : {typeChoice}</pre>
          <select id="type" value={filterStore.type} onChange={e => setTypeChoice(e.target.value)}>
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
          <button type="submit" onClick={() => {
            filterStore.setSecteur(secteurChoice) 
            filterStore.setType(typeChoice)
            setIsOpen(false)}}>Enregistrer</button>
        </div>
      </form>
    </div>
  );
}


export default observer(FilterModal);