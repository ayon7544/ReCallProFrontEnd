import { useState } from "react";
import { useRouter } from "expo-router";

const useEditUserProfile = () => {
  const router = useRouter();

  const [name, setName] = useState("Nick");
  const [phone, setPhone] = useState("02-8312024");
  const [email, setEmail] = useState("nick@example.com");
  const [location, setLocation] = useState("123 Main St, New York");
  const [avatarUri, setAvatarUri] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const saveProfile = async () => {
    try {
      setLoading(true);

      // TODO: Replace with your API call
      // e.g. await updateUserProfile({ name, phone, email, location, avatarUri });

      setSuccessMessage("Profile updated successfully!");

   setTimeout(() => {
     setSuccessMessage(null);
     setTimeout(() => {
       router.back();
     },700); 
   }, 1000);;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred";

      setError(errorMessage);

      setTimeout(() => {
        setError(null);
      }, 1000);
    } finally {
      setLoading(false);
    }
  };

  return {
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    location,
    setLocation,
    avatarUri,
    setAvatarUri,
    loading,
    error,
    successMessage,
    saveProfile,
  };
};

export default useEditUserProfile;
