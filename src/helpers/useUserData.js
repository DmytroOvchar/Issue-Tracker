import { useQuery } from "react-query";

export const useUserData = (userId) => {
  const userData = useQuery({
    queryKey: ["users", userId],
    queryFn: async () => {
      const res = await fetch(`/api/users/${userId}`);
      return res.json();
    },
    staleTime: 1000 * 60 * 5,
  });

  return userData;
};
