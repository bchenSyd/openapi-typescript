/**
 * This type definition file was auto-generated for ARP frontend to consume.
 * Do not make direct changes to the file, as it will be overridden in the next run
 */
namespace Mars {
  type Order = {
    id?: number;
    petId?: number;
    quantity?: number;
    shipDate?: string;
    /** Order Status */
    status?: "placed" | "approved" | "delivered";
    complete?: boolean;
  };
  type Category = {
    id?: number;
    name?: string;
  };
  type User = {
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
  type Tag = {
    id?: number;
    name?: string;
  };
  type Pet = {
    id?: number;
    category?: Category;
    name: string;
    photoUrls: string[];
    tags?: Tag[];
    /** pet status in the store */
    status?: "available" | "pending" | "sold";
  };
  type ApiResponse = {
    code?: number;
    type?: string;
    message?: string;
  };
}
