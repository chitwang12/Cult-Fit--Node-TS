export type createUserDTO = {
    userName: string; // Use camelCase for consistency if following a JS/TS convention.
    email: string; // Must be validated for a proper email format.
    password: string; // Should be hashed before storing.
    phone: string; // Should follow E.164 format.
    address: string; // Optional, if not mandatory.
    role: "user" | "admin"; // Use a string literal type instead of `enum` for simplicity.
    createdAt?: number; // Optional. Will be set automatically by the database if not provided.
    updatedAt?: number; // Optional. Same as above.
  };
  