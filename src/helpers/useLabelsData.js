import { useQuery } from "react-query";

export function useLabelsData() {
  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: () => fetch("/api/labels").then((res) => res.json()),
  });

  return labelsQuery;
}
