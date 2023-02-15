import { useState } from 'react';
import debounce from 'lodash.debounce';
import FilterModal from './FilterModal';
import filterIcon from '../assets/filter.svg';

export default function ControlPanel({ schoolStore, filterStore }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="panel-control">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Rechercher"
          onChange={debounce((e) => {
            const search = e.target.value;
            schoolStore.fetchData({ search });
          }, 500)}
        />
        <button type="button" onClick={() => setIsOpen(true)}>
          <img src={filterIcon} alt="" />
        </button>
      </form>
      {isOpen && (
        <FilterModal schoolStore={schoolStore} filterStore={filterStore} setIsOpen={setIsOpen} />
      )}
    </div>
  );
}
