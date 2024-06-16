import LinkModel from "@/app/models/links";
import { generateRandomKey, validateURL, validateSubPage } from "@/app/utils";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { input, output } = await req.json();

    if (output.length > 0) {
      validateSubPage(output);

      const codeExists = await LinkModel.findOne({ short: output });

      if (codeExists) {
        return NextResponse.json({ error: "subPageExists" }, { status: 400 });
      }
    }

    validateURL(input);

    const urlExists = await LinkModel.findOne({ origin: input });

    if (urlExists && output.length === 0) {
      return NextResponse.json({ code: urlExists.short }, { status: 200 });
    }

    const randomCode = await generateRandomCode();

    const newItem = new LinkModel({
      origin: input,
      short: (output.length > 0 && output) || randomCode,
    });

    await newItem.save();

    return NextResponse.json(
      { code: (output.length > 0 && output) || randomCode },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in POST /api/create:", error); // Log error details
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}

async function generateRandomCode() {
  let code = generateRandomKey(6);

  const codeExists = await LinkModel.findOne({ short: code });

  if (codeExists) generateRandomCode();

  return code;
}
