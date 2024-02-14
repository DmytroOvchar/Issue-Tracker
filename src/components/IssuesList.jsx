import { useQuery } from "react-query";
import { IssueItem } from "./IssueItem";

export default function IssuesList({ labels, status }) {
  const { data, isLoading } = useQuery({
    queryKey: ["issues", { labels, status }],
    queryFn: async () => {
      const labelsString = labels.map((label) => `labels[]=${label}`).join("&");
      const statusString = status ? `&status=${status}` : "";
      const response = await fetch(
        `/api/issues?${labelsString}${statusString}`
      );
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
