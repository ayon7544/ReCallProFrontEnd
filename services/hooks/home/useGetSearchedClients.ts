import { useState } from "react";

interface Client {
  id: string;
  name: string;
  email: string;
  // add more fields as needed
}

const useGetSearchedClients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const searchClients = async (query: string) => {
    try {
      setLoading(true);
      setError(null);
      setSuccessMessage(null);

      // Replace this with your actual API call
      // const response = await api.get(`/clients?search=${query}`);
      // setClients(response.data);

      // Placeholder until API is ready
      setClients([]);

      setSuccessMessage("Clients fetched successfully!");
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3500);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred";

      setError(errorMessage);
      setTimeout(() => {
        setError(null);
      }, 3500);
    } finally {
      setLoading(false);
    }
  };

  return {
    clients,
    loading,
    error,
    successMessage,
    searchClients,
  };
};

export default useGetSearchedClients;
