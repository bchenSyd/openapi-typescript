/**
 * This type definition file was auto-generated for ARP frontend to consume.
 * Do not make direct changes to the file, as it will be overridden in the next run
 */
interface definitions {
  Order: {
    id?: number;
    petId?: number;
    quantity?: number;
    shipDate?: string;
    /** Order Status */
    status?: "placed" | "approved" | "delivered";
    complete?: boolean;
  };
  Category: {
    id?: number;
    name?: string;
  };
  User: {
    id?: number;
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    phone?: string;
    /** User Status */
    userStatus?: number;
  };
  Tag: {
    id?: number;
    name?: string;
  };
  Pet: {
    id?: number;
    category?: definitions["Category"];
    name: string;
    photoUrls: string[];
    tags?: definitions["Tag"][];
    /** pet status in the store */
    status?: "available" | "pending" | "sold";
  };
  ApiResponse: {
    code?: number;
    type?: string;
    message?: string;
  };
}
