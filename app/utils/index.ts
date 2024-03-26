export async function handleCopy(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
    }
  }
}

export function generateRandomKey(length: number) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let key = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    key += characters.charAt(randomIndex);
  }

  return key;
}

export function validateURL(url: string) {
  if (new URL(url)) {
    return true;
  } else {
    throw new Error("invalidURL");
  }
}

export function validateSubPage(code: string) {
  const regex = /^[a-z0-9-]+$/;
  const test = regex.test(code);
  if (test) {
    return true;
  } else {
    throw new Error("invalidSubPage");
  }
}
