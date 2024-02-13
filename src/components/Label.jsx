import { useLabelsData } from "../helpers/useLabelsData";

export function Label({ label }) {
  const { isLoading, data } = useLabelsData();
  if (isLoading) return null;

  const { color, name } = data.find((queryLabel) => queryLabel.id === label);
  if (!name) return null;
  return (
    <span key={label} className={`label ${color}`}>
      {name}
    </span>
  );
}
