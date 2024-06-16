import LinkModel from "../models/links";
import connectDB from "./connect-db";
import { generateRandomKey, validateURL } from "../utils";

export async function getDB() {
  try {
    await connectDB();
    const db: LinkDB[] = await LinkModel.find({}).lean();
    if (!db) return { error: "Could not get DB" };
    const newDB: Link[] = db.map((item) => {
      const { _id, __v, createdAt, updatedAt, ...restOfItem } = item;
      return restOfItem;
    });
    return newDB;
  } catch (error) {
    return { error };
  }
}

export async function insertLink(prevState: any, queryData: FormData) {
  // "use server";
  try {
    await connectDB();
    const url = queryData.get("url-origin") as string;
    console.log(url, typeof url);
    // isValidUrl(url);
    const urlExists = await LinkModel.findOne({ origin: url });
    if (urlExists) console.log(urlExists);
    // if (urlExists) {
    //   return { success: true, code: urlExists.short, error: false };
    // }
    // const randomCode = await generateRandomKey(6);
    // const newItem = new LinkModel({
    //   origin: url,
    //   short: randomCode,
    // });
    // await newItem.save();
    // // return randomCode;
    // return { success: true, code: randomCode, error: false };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, code: error.message, error: true };
    }
  }
}
