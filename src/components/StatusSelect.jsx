const possibleStatus = [
  { id: "backlog", label: "Backlog" },
  { id: "todo", label: "To-do" },
  { id: "inProgress", label: "In Progress" },
  { id: "done", label: "Done" },
  { id: "cancelled", label: "Cancelled" },
];
export const StatusSelect = ({ value, onChange, noEmptyOption = false }) => {
  return (
    <select value={value} onChange={onChange} className="status-select">
      {noEmptyOption ? null : <option>Select a status to filter</option>}
      {possibleStatus.map((status) => (
        <option value={status.id} key={status.id}>
          {status.label}
        </option>
      ))}
    </select>
  );
};
