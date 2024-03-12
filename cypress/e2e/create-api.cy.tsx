describe("create short url by POST Route API", () => {
  it("existing url should return existing code", () => {
    cy.request({
      method: "POST",
      url: "/api/create",
      body: {
        originalURL: "https://es.react.dev/reference/react/createContext",
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      const { code } = response.body;
      expect(code).to.equal("g6KmWI");
    });
  });

  it("no-valid url should throw error", () => {
    cy.request({
      method: "POST",
      url: "/api/create",
      failOnStatusCode: false,
      body: {
        originalURL: "123asd",
      },
    }).then((response) => {
      expect(response.status).to.equal(500);
      const { error } = response.body;
      expect(error).to.equal("Invalid URL");
    });
  });
});
