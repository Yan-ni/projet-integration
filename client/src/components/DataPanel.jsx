export default function DataPanel({ displayedSchools }) {
  return (
    <div className="panel-data">
      <ul>
        {displayedSchools.map((school) => (
          <li key={school.etablissement_id_paysage}>
            {school.sigle} - {school.uo_lib}
          </li>
        ))}
      </ul>
    </div>
  );
}
