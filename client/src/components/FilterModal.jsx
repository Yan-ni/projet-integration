import React, { useState } from 'react';
import { observer } from 'mobx-react';
import axios from 'axios';

function FilterModal({ schoolStore, setIsOpen, filterStore }) {
  const secteurs = ['public', 'privé'];
  const type = ['université','école','autre établisement'];
  const [secteurChoice, setSecteurChoice] = useState(filterStore.secteur);
  const [typeChoice, setTypeChoice] = useState(filterStore.type);
  const objetSearch = {};


  return (
    <div className="modal-overlay">
      <form className="modal-content" onSubmit={(e) => e.preventDefault()}>
        <button type="button" onClick={() => setIsOpen(false)}>
          X
        </button>
        <div className="inputs">
          <pre>Secteur : {secteurChoice}</pre>
          <select id="secteur" value={secteurChoice} onChange={e => setSecteurChoice(e.target.value)}>
            <option value="">--secteur--</option>
            {secteurs.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <pre>Type : {typeChoice}</pre>
          <select id="type" value={typeChoice} onChange={e => setTypeChoice(e.target.value)}>
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
            if (filterStore.secteur && filterStore.type) {
              schoolStore.fetchData({ secteur: filterStore.secteur, type: filterStore.type });
            } else if (filterStore.secteur) {
              schoolStore.fetchData({ secteur: filterStore.secteur });
            } else if (filterStore.type) {
              schoolStore.fetchData({ type: filterStore.type });
            } else {
              schoolStore.fetchData();
            }
            setIsOpen(false)
            }}>Enregistrer</button>
        </div>
      </form>
    </div>
  );
}


export default observer(FilterModal);