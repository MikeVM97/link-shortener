import LinkModel from "@/app/models/links";

export const maxDuration = 30;

export async function GET(req: Request) {
  try {
    const id = req.url.slice(req.url.lastIndexOf("/") + 1);
    const linkFound = await LinkModel.findOne({ short: id });
    if (!linkFound) {
      return new Response(NOT_FOUND_HTML, {
        headers: { "Content-Type": "text/html" },
        status: 404,
      });
    }
    return Response.redirect(linkFound.origin);
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
}

const NOT_FOUND_HTML = `<div style="width: 100%; height: 100%; display: grid; place-content: center; text-align: center;">
    <p>
      This shortened link does not yet exist in our database
    </p>
    <p>
      You can get this or any other custom link by visiting <a href="/">Link Shortener</a>
    </p>
  </div>`;
