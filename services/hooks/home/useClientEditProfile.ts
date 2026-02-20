import { useState } from "react";

export interface ClientEditProfilePayload {
  id: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  notes: string;
  image: string;
}

export const useClientEditProfile = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const editProfile = async (payload: ClientEditProfilePayload) => {
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSuccessMessage("Client updated successfully.");
    } catch (err: any) {
      setError(err?.message ?? "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return { editProfile, successMessage, error, isLoading };
};
