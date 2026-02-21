import { useState } from "react";

const useOtp = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const sendOtp = async () => {
    try {
      if (!email) throw new Error("Please enter your email");
      setLoading(true);
      setSuccessMessage("OTP sent to your email!");
      setTimeout(() => setSuccessMessage(null), 3500);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to send OTP";
      setError(errorMessage);
      setTimeout(() => setError(null), 3500);
    } finally {
      setLoading(false);
    }
  };

  // Function to verify OTP
  const verifyOtp = async (expectedOtp: string) => {
    try {
      setLoading(true);
      if (otp) {
        setSuccessMessage("OTP verified successfully!");
        setTimeout(() => setSuccessMessage(null), 3500);
      } else {
        throw new Error("Invalid OTP");
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to verify OTP";
      setError(errorMessage);
      setTimeout(() => setError(null), 3500);
    } finally {
      setLoading(false);
    }
  };

  // Reset inputs
  const reset = () => {
    setOtp("");
    setEmail("");
  };

  return {
    email,
    setEmail,
    otp,
    setOtp,
    loading,
    error,
    successMessage,
    sendOtp,
    verifyOtp,
    reset,
  };
};

export default useOtp;
