import LinkModel from "@/app/models/links";
import connectDB from "@/app/lib/connect-db";
import { generateRandomKey, isValidUrl } from "@/app/utils";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { originalURL } = await req.json();

    isValidUrl(originalURL);

    const urlExists = await LinkModel.findOne({ origin: originalURL });

    if (urlExists)
      return Response.json({ code: urlExists.short }, { status: 200 });

    const randomCode = await generateRandomCode();

    const newItem = new LinkModel({
      origin: originalURL,
      short: randomCode,
    });

    await newItem.save();

    return Response.json({ code: randomCode }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ error: error.message }, { status: 500 });
    }
  }
}

async function generateRandomCode() {
  let code = generateRandomKey(6);

  const codeExists = await LinkModel.findOne({ short: code });

  if (codeExists) generateRandomCode();

  return code;
}
