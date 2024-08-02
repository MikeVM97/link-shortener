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
    // await LinkModel.deleteMany({});
    // return;

    const urlExists = await LinkModel.find({ origin: url });
    const itemExists = urlExists.find((item) => {
      if (code.length === 0) {
        const input = {
          origin: url,
          code: code.length > 0,
        };
        const x = {
          origin: item.origin,
          code: item.code,
        };
        if (areObjectsEqual(input, x)) return item;
      } else {
        const input = {
          origin: url,
          short: code,
          code: code.length > 0,
        };
        const x = {
          origin: item.origin,
          short: item.short,
          code: item.code,
        };
        if (areObjectsEqual(input, x)) return item;
      }
    });
    if (itemExists) {
      return {
        code: itemExists.short,
      };
    }
    const randomCode = await generateRandomCode();
    const validCode = (code.length > 0 && code) || null;
    const newItem = new LinkModel({
      origin: url,
      short: validCode ?? randomCode,
      code: code.length > 0,
    });
    newItem.save();
    if (code.length === 0) {
      return {
        code: newItem.short,
      };
    }
    if (code.length > 0) {
      return {
        code,
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

function areObjectsEqual(obj1: object, obj2: object) {
  let values1 = Object.values(obj1);
  let values2 = Object.values(obj2);

  if (values1.length !== values2.length) {
    return false;
  }

  for (let i = 0; i < values1.length; i++) {
    if (values1[i] !== values2[i]) {
      return false;
    }
  }

  return true;
}
