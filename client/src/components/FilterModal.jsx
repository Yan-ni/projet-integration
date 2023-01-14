
import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function FilterModal() {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = (event) => {
        if (event.target.className === 'modal-overlay') {
            setIsOpen(false);
        }
    }
    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Filtre</button>
            {isOpen && (
                <div className="modal-overlay" onClick={(e) => closeModal(e)}>
                    <div className="modal-content">
                        <button onClick={() => setIsOpen(false)}>X</button>
                        <form>
                            <label for="filtre1">Filtre1</label>
                            <input name="filtre1" id="filtre1" type="radio"/>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};