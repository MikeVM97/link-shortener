import LinkModel from "@/app/models/links";
import connectDB from "@/app/lib/connect-db";
import { generateRandomKey, validateURL, validateSubPage } from "@/app/utils";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { input, output } = await req.json();

    if (output.length > 0) {
      validateSubPage(output);

      const codeExists = await LinkModel.findOne({ short: output });

      if (codeExists) {
        return Response.json({ error: "subPageExists" }, { status: 400 });
      }
    }

    validateURL(input);

    const urlExists = await LinkModel.findOne({ origin: input });

    if (urlExists && output.length === 0) {
      return Response.json({ code: urlExists.short }, { status: 200 });
    }

    const randomCode = await generateRandomCode();

    const newItem = new LinkModel({
      origin: input,
      short: (output.length > 0 && output) || randomCode,
    });

    await newItem.save();

    return Response.json(
      { code: (output.length > 0 && output) || randomCode },
      { status: 200 }
    );
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
