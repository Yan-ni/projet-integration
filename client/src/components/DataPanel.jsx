export default function DataPanel({ displayedSchools, map }) {
  return (
    <div className="panel-data">
      <ul>
        {displayedSchools.map((school) => (
          // TODO: improve accessibility
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
          <li
            key={school.etablissement_id_paysage}
            onClick={() => map?.setView(school.coordonnees, 16)}
          >
            {school.sigle} - {school.uo_lib}
          </li>
        ))}
      </ul>
    </div>
  );
}
