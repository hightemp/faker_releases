import type { Faker } from '../..';
/**
 * Module to generate finance related entries.
 */
export declare class Finance {
    private readonly faker;
    constructor(faker: Faker);
    /**
     * Generates a random account number.
     *
     * @param length The length of the account number. Defaults to `8`.
     *
     * @example
     * faker.finance.account() // 92842238
     * faker.finance.account(5) // 32564
     */
    account(length?: number): string;
    /**
     * Generates a random account name.
     *
     * @example
     * faker.finance.accountName() // 'Personal Loan Account'
     */
    accountName(): string;
    /**
     * Generates a random routing number.
     *
     * @example
     * faker.finance.routingNumber() // '522814402'
     */
    routingNumber(): string;
    /**
     * Generates a random masked number.
     *
     * @param length The length of the unmasked number. Defaults to `4`.
     * @param parens Whether to use surrounding parenthesis. Defaults to `true`.
     * @param ellipsis Whether to prefix the numbers with an ellipsis. Defaults to `true`.
     *
     * @example
     * faker.finance.mask() // '(...9711)'
     * faker.finance.mask(3) // '(...342)'
     * faker.finance.mask(3, false) // '...236'
     * faker.finance.mask(3, false, false) // '298'
     */
    mask(length?: number, parens?: boolean, ellipsis?: boolean): string;
    /**
     * Generates a random amount between the given bounds (inclusive).
     *
     * @param min The lower bound for the amount. Defaults to `0`.
     * @param max The upper bound for the amount. Defaults to `1000`.
     * @param dec The number of decimal places for the amount. Defaults to `2`.
     * @param symbol The symbol used to prefix the amount. Defaults to `''`.
     * @param autoFormat If true this method will use `Number.toLocaleString()`. Otherwise it will use `Number.toFixed()`.
     *
     * @example
     * faker.finance.amount() // '617.87'
     * faker.finance.amount(5, 10) // '5.53'
     * faker.finance.amount(5, 10, 0) // '8'
     * faker.finance.amount(5, 10, 2, '$') // '$5.85'
     * faker.finance.amount(5, 10, 5, '', true) // '9,75067'
     */
    amount(min?: number, max?: number, dec?: number, symbol?: string, autoFormat?: boolean): string;
    /**
     * Returns a random transaction type.
     *
     * @example
     * faker.finance.transactionType() // 'payment'
     */
    transactionType(): string;
    /**
     * Returns a random currency code.
     * (The short text/abbreviation for the currency (e.g. `US Dollar` -> `USD`))
     *
     * @example
     * faker.finance.currencyCode() // 'USD'
     */
    currencyCode(): string;
    /**
     * Returns a random currency name.
     *
     * @example
     * faker.finance.currencyName() // 'US Dollar'
     */
    currencyName(): string;
    /**
     * Returns a random currency symbol.
     *
     * @example
     * faker.finance.currencySymbol() // '$'
     */
    currencySymbol(): string;
    /**
     * Generates a random Bitcoin address.
     *
     * @example
     * faker.finance.bitcoinAddress() // '3ySdvCkTLVy7gKD4j6JfSaf5d'
     */
    bitcoinAddress(): string;
    /**
     * Generates a random Litecoin address.
     *
     * @example
     * faker.finance.litecoinAddress() // 'MoQaSTGWBRXkWfyxKbNKuPrAWGELzcW'
     */
    litecoinAddress(): string;
    /**
     * Generates a random credit card number.
     *
     * @param issuer The name of the issuer (case insensitive) or the format used to generate one.
     *
     * @example
     * faker.finance.creditCardNumber() // '4427163488662'
     * faker.finance.creditCardNumber('visa') // '4882664999007'
     * faker.finance.creditCardNumber('63[7-9]#-####-####-###L') // '6375-3265-4676-6646'
     */
    creditCardNumber(issuer?: string): string;
    /**
     * Generates a random credit card CVV.
     *
     * @example
     * faker.finance.creditCardCVV() // '506'
     */
    creditCardCVV(): string;
    /**
     * Returns a random credit card issuer.
     *
     * @example
     * faker.finance.creditCardIssuer() // 'discover'
     */
    creditCardIssuer(): string;
    /**
     * Generates a random PIN number.
     *
     * @param length The length of the PIN to generate. Defaults to `4`.
     * @throws Will throw an error if length is less than 1.
     *
     * @example
     * faker.finance.pin() // '5067'
     * faker.finance.pin(6) // '213789'
     */
    pin(length?: number): string;
    /**
     * Generates a random Ethereum address.
     *
     * @example
     * faker.finance.ethereumAddress() // '0xf03dfeecbafc5147241cc4c4ca20b3c9dfd04c4a'
     */
    ethereumAddress(): string;
    /**
     * Generates a random iban.
     *
     * @param formatted Return a formatted version of the generated IBAN. Defaults to `false`.
     * @param countryCode The country code from which you want to generate an IBAN, if none is provided a random country will be used.
     * @throws Will throw an error if the passed country code is not supported.
     *
     * @example
     * faker.finance.iban() // 'TR736918640040966092800056'
     * faker.finance.iban(true) // 'FR20 8008 2330 8984 74S3 Z620 224'
     * faker.finance.iban(true, 'DE') // 'DE84 1022 7075 0900 1170 01'
     */
    iban(formatted?: boolean, countryCode?: string): string;
    /**
     * Generates a random SWIFT/BIC code based on the [ISO-9362](https://en.wikipedia.org/wiki/ISO_9362) format.
     *
     * @example
     * faker.finance.bic() // 'WYAUPGX1432'
     */
    bic(): string;
    /**
     * Generates a random transaction description.
     *
     * @example
     * faker.finance.transactionDescription()
     * // 'invoice transaction at Kilback - Durgan using card ending with ***(...4316) for UAH 783.82 in account ***16168663'
     */
    transactionDescription(): string;
}
