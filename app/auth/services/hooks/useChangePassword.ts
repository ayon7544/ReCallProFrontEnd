import { useState } from "react";

const useChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChangePassword = async () => {
    try {
      setLoading(true);
      setError(null);
      setSuccessMessage(null);

      // Validation
      if (!newPassword || !confirmPassword) {
        throw new Error("Please fill in all fields");
      }

      if (newPassword.length < 8) {
        throw new Error("Password must be at least 8 characters long");
      }

      if (newPassword !== confirmPassword) {
        throw new Error("Passwords do not match");
      }

      // TODO: Add your API call here
      // await changePasswordAPI(newPassword);

      // Show success message
      setSuccessMessage("Password changed successfully!");

      // Clear form
      setNewPassword("");
      setConfirmPassword("");

      // Reset success message after delay
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
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    loading,
    error,
    successMessage,
    handleChangePassword,
  };
};

export default useChangePassword;
