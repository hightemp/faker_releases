import type { Faker } from '../..';
declare const commonInterfaceTypes: readonly ["en", "wl", "ww"];
declare const commonInterfaceSchemas: {
    readonly index: "o";
    readonly slot: "s";
    readonly mac: "x";
    readonly pci: "p";
};
/**
 * Generates fake data for many computer systems properties.
 */
export declare class System {
    private readonly faker;
    constructor(faker: Faker);
    /**
     * Returns a random file name with extension.
     *
     * @param options An options object.
     * @param options.extensionCount Define how many extensions the file name should have. A negative number will be treated as `0`. Defaults to `1`.
     *
     * @example
     * faker.system.fileName() // 'self_enabling_accountability_toys.kpt'
     * faker.system.fileName({ extensionCount: 2 }) // 'bike_table.res.vcs'
     */
    fileName(options?: {
        /**
         * Define how many extensions the file name should have. A negative number will be treated as `0`. Defaults to `1`.
         */
        extensionCount?: number;
    }): string;
    /**
     * Returns a random file name with a given extension or a commonly used extension.
     *
     * @param ext Extension. Empty string is considered to be not set.
     * @example
     * faker.system.commonFileName() // 'dollar.jpg'
     * faker.system.commonFileName('txt') // 'global_borders_wyoming.txt'
     */
    commonFileName(ext?: string): string;
    /**
     * Returns a mime-type.
     *
     * @example
     * faker.system.mimeType() // 'video/vnd.vivo'
     */
    mimeType(): string;
    /**
     * Returns a commonly used file type.
     *
     * @example
     * faker.system.commonFileType() // 'audio'
     */
    commonFileType(): string;
    /**
     * Returns a commonly used file extension.
     *
     * @example
     * faker.system.commonFileExt() // 'gif'
     */
    commonFileExt(): string;
    /**
     * Returns a file type.
     *
     * @example
     * faker.system.fileType() // 'message'
     */
    fileType(): string;
    /**
     * Returns a file extension.
     *
     * @param mimeType Valid [mime-type](https://github.com/jshttp/mime-db/blob/master/db.json)
     *
     * @example
     * faker.system.fileExt() // 'emf'
     * faker.system.fileExt('application/json') // 'json'
     */
    fileExt(mimeType?: string): string;
    /**
     * Returns a directory path.
     *
     * @example
     * faker.system.directoryPath() // '/etc/mail'
     */
    directoryPath(): string;
    /**
     * Returns a file path.
     *
     * @example
     * faker.system.filePath() // '/usr/local/src/money.dotx'
     */
    filePath(): string;
    /**
     * Returns a [semantic version](https://semver.org).
     *
     * @example
     * faker.system.semver() // '1.1.2'
     */
    semver(): string;
    /**
     * Returns a random [network interface](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/networking_guide/sec-understanding_the_predictable_network_interface_device_names).
     *
     * @param options The options to use. Defaults to `{}`.
     * @param options.interfaceType The interface type. Can be one of `en`, `wl`, `ww`.
     * @param options.interfaceSchema The interface schema. Can be one of `index`, `slot`, `mac`, `pci`.
     *
     * @example
     * faker.system.networkInterface() // 'enp0s3'
     * faker.system.networkInterface({ interfaceType: 'wl' }) // 'wlo1'
     * faker.system.networkInterface({ interfaceSchema: 'mac' }) // 'enx000c29c00000'
     * faker.system.networkInterface({ interfaceType: 'en', interfaceSchema: 'pci' }) // 'enp5s0f1d0'
     */
    networkInterface(options?: {
        interfaceType?: typeof commonInterfaceTypes[number];
        interfaceSchema?: keyof typeof commonInterfaceSchemas;
    }): string;
}
export {};
