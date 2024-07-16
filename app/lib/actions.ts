"use server";
import connectDB from "./connect-db";
import LinkModel from "../models/links";

import { revalidatePath } from "next/cache";

import { generateRandomKey, validateURL } from "../utils";

export async function createShortLink(form: FormData) {
  await connectDB();

  const url = form.get("url") as string;
  const code = form.get("code") as string;

  if (!url) throw new Error("Missing url");

  try {
    validateURL(url);
    const urlExists = await LinkModel.findOne({ origin: url });
    if (urlExists && code.length === 0) {
      return {
        originalURL: urlExists.origin,
        code: urlExists.short,
      };
    }
    if (urlExists && code.length > 0) {
      return {
        originalURL: urlExists.origin,
        code,
      };
    }
    const randomCode = await generateRandomCode();
    const validCode = (code.length > 0 && code) || null;
    const newItem = new LinkModel({
      origin: url,
      short: validCode ?? randomCode,
    });
    newItem.save();

    if (!urlExists && code.length > 0) {
      return {
        originalURL: newItem.origin,
        code,
      };
    }
    if (!urlExists && code.length === 0) {
      return {
        originalURL: newItem.origin,
        code: newItem.short,
      };
    }
    revalidatePath("/");
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    }
  }
}

async function generateRandomCode() {
  let code = generateRandomKey(6);
  const codeExists = await LinkModel.findOne({ short: code });
  if (codeExists) generateRandomCode();
  return code;
}
