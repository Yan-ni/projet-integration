import debounce from 'lodash.debounce';
import FilterModal from './FilterModal.jsx';

export default function ControlPanel({ schoolStore }) {
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
      </form>
      <FilterModal />
    </div>
  );
}
