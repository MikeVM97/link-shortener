import { getDB, insertLink } from "./link-db";
import { revalidatePath } from "next/cache";

export async function getDbAction({ path }: { path: string }) {
  const db = await getDB();
  revalidatePath(path);
  return db;
}

// export async function insertLinkAction({
//   url,
//   path,
// }: {
//   url: string;
//   path: string;
// }) {
//   const key = await insertLink();
//   revalidatePath(path);
//   return key;
// }
