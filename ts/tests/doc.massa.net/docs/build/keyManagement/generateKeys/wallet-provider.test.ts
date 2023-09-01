import { providers } from "@massalabs/wallet-provider";
import { expect } from "@jest/globals";

(async () => {
  const availableProviders = await providers();
  const massaStationProvider = availableProviders.find(p => p.name() === "MASSASTATION");

  if (!massaStationProvider) throw new Error("Massa Station provider not found");

  const newAccount = await massaStationProvider.generateNewAccount("my-massa-wallet");

  expect(newAccount).toHaveProperty('name');
  expect(newAccount).toHaveProperty('address');

  console.log(
    "Account Name:", newAccount.name || "no name",
    "Account Address:", newAccount.address
  );
})();
