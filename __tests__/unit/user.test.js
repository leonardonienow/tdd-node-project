const bcrypt = require("bcryptjs");
const { User } = require("../../src/app/models");
const truncate = require("../utils/truncate");

describe("User", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should encrypt user password", async () => {
    const user = await User.create({
      nome: "John Doe",
      email: "john@doe.com.br",
      password: "123123",
    });

    const hash = await bcrypt.hash("123123", 8);

    expect(await bcrypt.compare('123123', user.password_hash)).toBe(true);
  });
});
