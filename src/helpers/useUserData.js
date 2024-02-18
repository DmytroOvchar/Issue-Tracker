import { useQuery } from "react-query";

export const useUserData = (userId) => {
  const userData = useQuery({
    queryKey: ["users", userId],
    queryFn: async ({ signal }) => {
      const res = await fetch(`/api/users/${userId}`, { signal });
      return res.json();
    },
    staleTime: 1000 * 60 * 5,
  });

  return userData;
};
