// it("should get database", () => {
//   cy.request("GET", "/api/getdb").then((response) => {
//     expect(response).property("status").to.equal(200);
//     const apiResponse: Link[] = response.body;
//     expect(Array.isArray(apiResponse)).to.be.true;
//     apiResponse.forEach((element) => {
//       expect(typeof element === "object").to.be.true;
//       expect(Object.keys(element).length).to.equal(2);
//       expect(element).to.have.property("origin");
//       expect(element).to.have.property("short");
//       expect(element).not.to.have.property("_id");
//       expect(element).not.to.have.property("__v");
//       expect(element).not.to.have.property("createadAt");
//       expect(element).not.to.have.property("updatedAt");
//       expect(typeof element.origin === "string").to.be.true;
//       expect(typeof element.short === "string").to.be.true;
//     });
//   });
// });

describe("get original url by GET Route API", () => {
  it("should redirect to the original URL for a valid short link", () => {
    cy.request({ method: "GET", url: "/1x6d8c" }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.headers).to.exist;
    });
  });

  it("should return a 404 status code for a non-existent short link", () => {
    cy.request({
      method: "GET",
      url: "/1asd2xcd",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(404);
      expect(response.body).to.include("Este enlace acortado aun no existe");
    });
  });
});
