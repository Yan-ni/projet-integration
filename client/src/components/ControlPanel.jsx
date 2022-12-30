import debounce from 'lodash.debounce';

export default function ControlPanel() {
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
          onChange={debounce(() => () => {}, 500)}
        />
      </form>
    </div>
  );
}
