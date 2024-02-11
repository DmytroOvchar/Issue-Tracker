import { useQuery } from "react-query";
import { IssueItem } from "./IssueItem";

export default function IssuesList() {
  const { data, isLoading } = useQuery({
    queryKey: ["issues"],
    queryFn: async () => {
      const response = await fetch("/api/issues");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  return (
    <div>
      <h1>Issues List</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="issues-list">
          {data.map((issue) => (
            <IssueItem
              key={issue.id}
              title={issue.title}
              number={issue.number}
              assignee={issue.assignee}
              commentCount={issue.comments.length}
              createdBy={issue.createdBy}
              createdDate={issue.createdDate}
              labels={issue.labels}
              status={issue.status}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
