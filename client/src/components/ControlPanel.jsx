import debounce from 'lodash.debounce';

export default function ControlPanel({ schools, setDisplayedSchools }) {
  const search = (searchPhrase) => {
    if (searchPhrase.trim().length === 0) return setDisplayedSchools(schools);

    return setDisplayedSchools(
      schools.filter((school) => {
        if (
          school.sigle &&
          school.sigle.toLowerCase().search(searchPhrase.toLowerCase()) !== -1
        )
          return true;
        if (
          school.uo_lib &&
          school.uo_lib.toLowerCase().search(searchPhrase.toLowerCase()) !== -1
        )
          return true;
        return false;
      })
    );
  };

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
          onChange={debounce((e) => search(e.target.value), 500)}
        />
      </form>
    </div>
  );
}
