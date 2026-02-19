import { useMemo } from "react";

interface Client {
  id: string;
  name: string;
  phoneNumber: string;
  email: string;
  preferences: string;
  image: string;
}

/* Base Array */
const clientProfiles: Client[] = [
  {
    id: "1",
    name: "Isabella Rossi",
    image: "https://i.pravatar.cc/150?u=isabella",
    phoneNumber: "+39 333 123 4567",
    email: "isabella.rossi@email.com",
    preferences: "Prefers warm tones. Sensitive scalp. Always book 2.5hr slot.",
  },
  {
    id: "2",
    name: "Sophia Chen",
    image: "https://i.pravatar.cc/150?u=sophia",
    phoneNumber: "+1 415 234 5678",
    email: "sophia.chen@email.com",
    preferences:
      "Cool ash only. PPD allergy — use PPD-free colour. Prefers mornings.",
  },
  {
    id: "3",
    name: "Marcello V.",
    image: "https://i.pravatar.cc/150?u=marcello",
    phoneNumber: "+39 347 987 6543",
    email: "marcello.v@email.com",
    preferences: "No product. Tight fade, keep length on top. Every 3 weeks.",
  },
  {
    id: "4",
    name: "Isabella Rossi",
    image: "https://i.pravatar.cc/150?u=isabella",
    phoneNumber: "+39 333 123 4567",
    email: "isabella.rossi@email.com",
    preferences: "Prefers warm tones. Sensitive scalp. Always book 2.5hr slot.",
  },
  {
    id: "5",
    name: "Sophia Chen",
    image: "https://i.pravatar.cc/150?u=sophia",
    phoneNumber: "+1 415 234 5678",
    email: "sophia.chen@email.com",
    preferences:
      "Cool ash only. PPD allergy — use PPD-free colour. Prefers mornings.",
  },
  {
    id: "6",
    name: "Marcello V.",
    image: "https://i.pravatar.cc/150?u=marcello",
    phoneNumber: "+39 347 987 6543",
    email: "marcello.v@email.com",
    preferences: "No product. Tight fade, keep length on top. Every 3 weeks.",
  },
  {
    id: "7",
    name: "Isabella Rossi",
    image: "https://i.pravatar.cc/150?u=isabella",
    phoneNumber: "+39 333 123 4567",
    email: "isabella.rossi@email.com",
    preferences: "Prefers warm tones. Sensitive scalp. Always book 2.5hr slot.",
  },
  {
    id: "8",
    name: "Sophia Chen",
    image: "https://i.pravatar.cc/150?u=sophia",
    phoneNumber: "+1 415 234 5678",
    email: "sophia.chen@email.com",
    preferences:
      "Cool ash only. PPD allergy — use PPD-free colour. Prefers mornings.",
  },
  {
    id: "9",
    name: "Marcello V.",
    image: "https://i.pravatar.cc/150?u=marcello",
    phoneNumber: "+39 347 987 6543",
    email: "marcello.v@email.com",
    preferences: "No product. Tight fade, keep length on top. Every 3 weeks.",
  },
  {
    id: "10",
    name: "Isabella Rossi",
    image: "https://i.pravatar.cc/150?u=isabella",
    phoneNumber: "+39 333 123 4567",
    email: "isabella.rossi@email.com",
    preferences: "Prefers warm tones. Sensitive scalp. Always book 2.5hr slot.",
  },
  {
    id: "11",
    name: "Sophia Chen",
    image: "https://i.pravatar.cc/150?u=sophia",
    phoneNumber: "+1 415 234 5678",
    email: "sophia.chen@email.com",
    preferences:
      "Cool ash only. PPD allergy — use PPD-free colour. Prefers mornings.",
  },
  {
    id: "12",
    name: "Marcello V.",
    image: "https://i.pravatar.cc/150?u=marcello",
    phoneNumber: "+39 347 987 6543",
    email: "marcello.v@email.com",
    preferences: "No product. Tight fade, keep length on top. Every 3 weeks.",
  },
];

/* Normalized Map */
const clientMap: Record<string, Client> = clientProfiles.reduce(
  (acc, client) => {
    acc[client.id] = client;
    return acc;
  },
  {} as Record<string, Client>,
);

export interface ClientInfo {
  fullName: string;
  phoneNumber: string;
  email: string;
  notes: string;
  image: string;
}

export const useGetClientInfo = (id: string): ClientInfo => {
  return useMemo(() => {
    const client = clientMap[id];

    if (!client) {
      throw new Error(`Client with id "${id}" not found.`);
    }

    return {
      fullName: client.name,
      image: client.image,
      phoneNumber: client.phoneNumber,
      email: client.email,
      notes: client.preferences,
    };
  }, [id]);
};
