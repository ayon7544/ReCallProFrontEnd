import { useState } from "react";

export const useDeleteProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteProfile = async (id: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // 🔁 Replace with your real API call e.g. await api.delete(`/clients/${id}`)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return { success: true };
    } catch (err: any) {
      const message =
        err?.message ?? "Failed to delete client. Please try again.";
      setError(message);
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  return { deleteProfile, isLoading, error };
};
