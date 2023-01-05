export default function DataPanel({ schoolStore, map }) {
  return (
    <div className="panel-data">
      <ul>
        {schoolStore.schools.map((school) => (
          // TODO: improve accessibility
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
          <li
            key={school.id}
            onClick={() => {
              map?.setView([school.latitude, school.longitude], 16);
              schoolStore.setSelectedSchool(school.id);
            }}
          >
            {school.sigle} - {school.uo_lib}
          </li>
        ))}
      </ul>
    </div>
  );
}
