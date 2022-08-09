import type { Faker } from '../..';
/**
 * @deprecated Use Sex enum instead.
 */
export declare enum Gender {
    female = "female",
    male = "male"
}
/**
 * @deprecated Use SexType instead.
 */
export declare type GenderType = SexType;
export declare enum Sex {
    Female = "female",
    Male = "male"
}
export declare type SexType = `${Sex}`;
/**
 * Module to generate people's names and titles.
 */
export declare class Name {
    private readonly faker;
    constructor(faker: Faker);
    /**
     * Returns a random first name.
     *
     * @param sex The optional sex to use.
     * Can be either `'female'` or `'male'`.
     *
     * @example
     * faker.name.firstName() // 'Antwan'
     * faker.name.firstName('female') // 'Victoria'
     * faker.name.firstName('male') // 'Tom'
     */
    firstName(sex?: SexType): string;
    /**
     * Returns a random last name.
     *
     * @param sex The optional sex to use.
     * Can be either `'female'` or `'male'`.
     *
     * @example
     * faker.name.lastName() // 'Hauck'
     * faker.name.lastName('female') // 'Grady'
     * faker.name.lastName('male') // 'Barton'
     */
    lastName(sex?: SexType): string;
    /**
     * Returns a random middle name.
     *
     * @param sex The optional sex to use.
     * Can be either `'female'` or `'male'`.
     *
     * @example
     * faker.name.middleName() // 'James'
     * faker.name.middleName('female') // 'Eloise'
     * faker.name.middleName('male') // 'Asher'
     */
    middleName(sex?: SexType): string;
    /**
     * Generates a random full name.
     *
     * @param firstName The optional first name to use. If not specified a random one will be chosen.
     * @param lastName The optional last name to use. If not specified a random one will be chosen.
     * @param sex The optional sex to use. Can be either `'female'` or `'male'`.
     *
     * @see faker.name.fullName()
     *
     * @example
     * faker.name.findName() // 'Allen Brown'
     * faker.name.findName('Joann') // 'Joann Osinski'
     * faker.name.findName('Marcella', '', 'female') // 'Mrs. Marcella Huels'
     * faker.name.findName(undefined, 'Beer') // 'Mr. Alfonso Beer'
     * faker.name.findName(undefined, undefined, 'male') // 'Fernando Schaefer'
     *
     * @deprecated Use faker.name.fullName() instead.
     */
    findName(firstName?: string, lastName?: string, sex?: SexType): string;
    /**
     * Generates a random full name.
     *
     * @param options An options object. Defaults to `{}`.
     * @param options.firstName The optional first name to use. If not specified a random one will be chosen.
     * @param options.lastName The optional last name to use. If not specified a random one will be chosen.
     * @param options.sex The optional sex to use. Can be either `'female'` or `'male'`.
     * @param options.gender Deprecated. Use `sex` instead.
     *
     * @example
     * faker.name.fullName() // 'Allen Brown'
     * faker.name.fullName({ firstName: 'Joann' }) // 'Joann Osinski'
     * faker.name.fullName({ firstName: 'Marcella', sex: 'female' }) // 'Mrs. Marcella Huels'
     * faker.name.fullName({ lastName: 'Beer' }) // 'Mr. Alfonso Beer'
     * faker.name.fullName({ sex: 'male' }) // 'Fernando Schaefer'
     */
    fullName(options?: {
        firstName?: string;
        lastName?: string;
        gender?: GenderType;
        sex?: SexType;
    }): string;
    /**
     * Return a random gender.
     *
     * @param binary Whether to return only binary gender names. Defaults to `false`.
     *
     * @example
     * faker.name.gender() // 'Trans*Man'
     * faker.name.gender(true) // 'Female'
     */
    gender(binary?: boolean): string;
    /**
     * Returns a random name prefix.
     *
     * @param sex The optional sex to use. Can be either `'female'` or `'male'`.
     *
     * @example
     * faker.name.prefix() // 'Miss'
     * faker.name.prefix('female') // 'Ms.'
     * faker.name.prefix('male') // 'Mr.'
     */
    prefix(sex?: SexType): string;
    /**
     * Returns a random name suffix.
     *
     * @example
     * faker.name.suffix() // 'DDS'
     */
    suffix(): string;
    /**
     * Generates a random job title.
     *
     * @example
     * faker.name.jobTitle() // 'Global Accounts Engineer'
     */
    jobTitle(): string;
    /**
     * Generates a random job descriptor.
     *
     * @example
     * faker.name.jobDescriptor() // 'Customer'
     */
    jobDescriptor(): string;
    /**
     * Generates a random job area.
     *
     * @example
     * faker.name.jobArea() // 'Brand'
     */
    jobArea(): string;
    /**
     * Generates a random job type.
     *
     * @example
     * faker.name.jobType() // 'Assistant'
     */
    jobType(): string;
}
