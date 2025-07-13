
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model admins
 * 
 */
export type admins = $Result.DefaultSelection<Prisma.$adminsPayload>
/**
 * Model appointments
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type appointments = $Result.DefaultSelection<Prisma.$appointmentsPayload>
/**
 * Model bloodcenters
 * 
 */
export type bloodcenters = $Result.DefaultSelection<Prisma.$bloodcentersPayload>
/**
 * Model bloodrequests
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type bloodrequests = $Result.DefaultSelection<Prisma.$bloodrequestsPayload>
/**
 * Model bloodstock
 * 
 */
export type bloodstock = $Result.DefaultSelection<Prisma.$bloodstockPayload>
/**
 * Model donationhistory
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type donationhistory = $Result.DefaultSelection<Prisma.$donationhistoryPayload>
/**
 * Model donors
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type donors = $Result.DefaultSelection<Prisma.$donorsPayload>
/**
 * Model hospitalstaff
 * 
 */
export type hospitalstaff = $Result.DefaultSelection<Prisma.$hospitalstaffPayload>
/**
 * Model subadmins
 * 
 */
export type subadmins = $Result.DefaultSelection<Prisma.$subadminsPayload>
/**
 * Model users
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admins.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admins.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admins`: Exposes CRUD operations for the **admins** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admins.findMany()
    * ```
    */
  get admins(): Prisma.adminsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointments`: Exposes CRUD operations for the **appointments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointments.findMany()
    * ```
    */
  get appointments(): Prisma.appointmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bloodcenters`: Exposes CRUD operations for the **bloodcenters** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bloodcenters
    * const bloodcenters = await prisma.bloodcenters.findMany()
    * ```
    */
  get bloodcenters(): Prisma.bloodcentersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bloodrequests`: Exposes CRUD operations for the **bloodrequests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bloodrequests
    * const bloodrequests = await prisma.bloodrequests.findMany()
    * ```
    */
  get bloodrequests(): Prisma.bloodrequestsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bloodstock`: Exposes CRUD operations for the **bloodstock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bloodstocks
    * const bloodstocks = await prisma.bloodstock.findMany()
    * ```
    */
  get bloodstock(): Prisma.bloodstockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donationhistory`: Exposes CRUD operations for the **donationhistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Donationhistories
    * const donationhistories = await prisma.donationhistory.findMany()
    * ```
    */
  get donationhistory(): Prisma.donationhistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donors`: Exposes CRUD operations for the **donors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Donors
    * const donors = await prisma.donors.findMany()
    * ```
    */
  get donors(): Prisma.donorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hospitalstaff`: Exposes CRUD operations for the **hospitalstaff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hospitalstaffs
    * const hospitalstaffs = await prisma.hospitalstaff.findMany()
    * ```
    */
  get hospitalstaff(): Prisma.hospitalstaffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subadmins`: Exposes CRUD operations for the **subadmins** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subadmins
    * const subadmins = await prisma.subadmins.findMany()
    * ```
    */
  get subadmins(): Prisma.subadminsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    admins: 'admins',
    appointments: 'appointments',
    bloodcenters: 'bloodcenters',
    bloodrequests: 'bloodrequests',
    bloodstock: 'bloodstock',
    donationhistory: 'donationhistory',
    donors: 'donors',
    hospitalstaff: 'hospitalstaff',
    subadmins: 'subadmins',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admins" | "appointments" | "bloodcenters" | "bloodrequests" | "bloodstock" | "donationhistory" | "donors" | "hospitalstaff" | "subadmins" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      admins: {
        payload: Prisma.$adminsPayload<ExtArgs>
        fields: Prisma.adminsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          findFirst: {
            args: Prisma.adminsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          findMany: {
            args: Prisma.adminsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>[]
          }
          create: {
            args: Prisma.adminsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          createMany: {
            args: Prisma.adminsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.adminsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>[]
          }
          delete: {
            args: Prisma.adminsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          update: {
            args: Prisma.adminsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          deleteMany: {
            args: Prisma.adminsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.adminsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>[]
          }
          upsert: {
            args: Prisma.adminsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          aggregate: {
            args: Prisma.AdminsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmins>
          }
          groupBy: {
            args: Prisma.adminsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminsGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminsCountArgs<ExtArgs>
            result: $Utils.Optional<AdminsCountAggregateOutputType> | number
          }
        }
      }
      appointments: {
        payload: Prisma.$appointmentsPayload<ExtArgs>
        fields: Prisma.appointmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.appointmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.appointmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>
          }
          findFirst: {
            args: Prisma.appointmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.appointmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>
          }
          findMany: {
            args: Prisma.appointmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>[]
          }
          create: {
            args: Prisma.appointmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>
          }
          createMany: {
            args: Prisma.appointmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.appointmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>[]
          }
          delete: {
            args: Prisma.appointmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>
          }
          update: {
            args: Prisma.appointmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>
          }
          deleteMany: {
            args: Prisma.appointmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.appointmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.appointmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>[]
          }
          upsert: {
            args: Prisma.appointmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentsPayload>
          }
          aggregate: {
            args: Prisma.AppointmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointments>
          }
          groupBy: {
            args: Prisma.appointmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.appointmentsCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentsCountAggregateOutputType> | number
          }
        }
      }
      bloodcenters: {
        payload: Prisma.$bloodcentersPayload<ExtArgs>
        fields: Prisma.bloodcentersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bloodcentersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodcentersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bloodcentersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodcentersPayload>
          }
          findFirst: {
            args: Prisma.bloodcentersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodcentersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bloodcentersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodcentersPayload>
          }
          findMany: {
            args: Prisma.bloodcentersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodcentersPayload>[]
          }
          create: {
            args: Prisma.bloodcentersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodcentersPayload>
          }
          createMany: {
            args: Prisma.bloodcentersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bloodcentersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodcentersPayload>[]
          }
          delete: {
            args: Prisma.bloodcentersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodcentersPayload>
          }
          update: {
            args: Prisma.bloodcentersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodcentersPayload>
          }
          deleteMany: {
            args: Prisma.bloodcentersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bloodcentersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bloodcentersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodcentersPayload>[]
          }
          upsert: {
            args: Prisma.bloodcentersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodcentersPayload>
          }
          aggregate: {
            args: Prisma.BloodcentersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBloodcenters>
          }
          groupBy: {
            args: Prisma.bloodcentersGroupByArgs<ExtArgs>
            result: $Utils.Optional<BloodcentersGroupByOutputType>[]
          }
          count: {
            args: Prisma.bloodcentersCountArgs<ExtArgs>
            result: $Utils.Optional<BloodcentersCountAggregateOutputType> | number
          }
        }
      }
      bloodrequests: {
        payload: Prisma.$bloodrequestsPayload<ExtArgs>
        fields: Prisma.bloodrequestsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bloodrequestsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodrequestsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bloodrequestsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodrequestsPayload>
          }
          findFirst: {
            args: Prisma.bloodrequestsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodrequestsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bloodrequestsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodrequestsPayload>
          }
          findMany: {
            args: Prisma.bloodrequestsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodrequestsPayload>[]
          }
          create: {
            args: Prisma.bloodrequestsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodrequestsPayload>
          }
          createMany: {
            args: Prisma.bloodrequestsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bloodrequestsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodrequestsPayload>[]
          }
          delete: {
            args: Prisma.bloodrequestsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodrequestsPayload>
          }
          update: {
            args: Prisma.bloodrequestsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodrequestsPayload>
          }
          deleteMany: {
            args: Prisma.bloodrequestsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bloodrequestsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bloodrequestsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodrequestsPayload>[]
          }
          upsert: {
            args: Prisma.bloodrequestsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodrequestsPayload>
          }
          aggregate: {
            args: Prisma.BloodrequestsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBloodrequests>
          }
          groupBy: {
            args: Prisma.bloodrequestsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BloodrequestsGroupByOutputType>[]
          }
          count: {
            args: Prisma.bloodrequestsCountArgs<ExtArgs>
            result: $Utils.Optional<BloodrequestsCountAggregateOutputType> | number
          }
        }
      }
      bloodstock: {
        payload: Prisma.$bloodstockPayload<ExtArgs>
        fields: Prisma.bloodstockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bloodstockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodstockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bloodstockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodstockPayload>
          }
          findFirst: {
            args: Prisma.bloodstockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodstockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bloodstockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodstockPayload>
          }
          findMany: {
            args: Prisma.bloodstockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodstockPayload>[]
          }
          create: {
            args: Prisma.bloodstockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodstockPayload>
          }
          createMany: {
            args: Prisma.bloodstockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bloodstockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodstockPayload>[]
          }
          delete: {
            args: Prisma.bloodstockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodstockPayload>
          }
          update: {
            args: Prisma.bloodstockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodstockPayload>
          }
          deleteMany: {
            args: Prisma.bloodstockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bloodstockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bloodstockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodstockPayload>[]
          }
          upsert: {
            args: Prisma.bloodstockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bloodstockPayload>
          }
          aggregate: {
            args: Prisma.BloodstockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBloodstock>
          }
          groupBy: {
            args: Prisma.bloodstockGroupByArgs<ExtArgs>
            result: $Utils.Optional<BloodstockGroupByOutputType>[]
          }
          count: {
            args: Prisma.bloodstockCountArgs<ExtArgs>
            result: $Utils.Optional<BloodstockCountAggregateOutputType> | number
          }
        }
      }
      donationhistory: {
        payload: Prisma.$donationhistoryPayload<ExtArgs>
        fields: Prisma.donationhistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.donationhistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationhistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.donationhistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationhistoryPayload>
          }
          findFirst: {
            args: Prisma.donationhistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationhistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.donationhistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationhistoryPayload>
          }
          findMany: {
            args: Prisma.donationhistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationhistoryPayload>[]
          }
          create: {
            args: Prisma.donationhistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationhistoryPayload>
          }
          createMany: {
            args: Prisma.donationhistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.donationhistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationhistoryPayload>[]
          }
          delete: {
            args: Prisma.donationhistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationhistoryPayload>
          }
          update: {
            args: Prisma.donationhistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationhistoryPayload>
          }
          deleteMany: {
            args: Prisma.donationhistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.donationhistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.donationhistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationhistoryPayload>[]
          }
          upsert: {
            args: Prisma.donationhistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationhistoryPayload>
          }
          aggregate: {
            args: Prisma.DonationhistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonationhistory>
          }
          groupBy: {
            args: Prisma.donationhistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonationhistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.donationhistoryCountArgs<ExtArgs>
            result: $Utils.Optional<DonationhistoryCountAggregateOutputType> | number
          }
        }
      }
      donors: {
        payload: Prisma.$donorsPayload<ExtArgs>
        fields: Prisma.donorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.donorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.donorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donorsPayload>
          }
          findFirst: {
            args: Prisma.donorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.donorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donorsPayload>
          }
          findMany: {
            args: Prisma.donorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donorsPayload>[]
          }
          create: {
            args: Prisma.donorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donorsPayload>
          }
          createMany: {
            args: Prisma.donorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.donorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donorsPayload>[]
          }
          delete: {
            args: Prisma.donorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donorsPayload>
          }
          update: {
            args: Prisma.donorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donorsPayload>
          }
          deleteMany: {
            args: Prisma.donorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.donorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.donorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donorsPayload>[]
          }
          upsert: {
            args: Prisma.donorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donorsPayload>
          }
          aggregate: {
            args: Prisma.DonorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonors>
          }
          groupBy: {
            args: Prisma.donorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.donorsCountArgs<ExtArgs>
            result: $Utils.Optional<DonorsCountAggregateOutputType> | number
          }
        }
      }
      hospitalstaff: {
        payload: Prisma.$hospitalstaffPayload<ExtArgs>
        fields: Prisma.hospitalstaffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hospitalstaffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalstaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hospitalstaffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalstaffPayload>
          }
          findFirst: {
            args: Prisma.hospitalstaffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalstaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hospitalstaffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalstaffPayload>
          }
          findMany: {
            args: Prisma.hospitalstaffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalstaffPayload>[]
          }
          create: {
            args: Prisma.hospitalstaffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalstaffPayload>
          }
          createMany: {
            args: Prisma.hospitalstaffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hospitalstaffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalstaffPayload>[]
          }
          delete: {
            args: Prisma.hospitalstaffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalstaffPayload>
          }
          update: {
            args: Prisma.hospitalstaffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalstaffPayload>
          }
          deleteMany: {
            args: Prisma.hospitalstaffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hospitalstaffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.hospitalstaffUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalstaffPayload>[]
          }
          upsert: {
            args: Prisma.hospitalstaffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hospitalstaffPayload>
          }
          aggregate: {
            args: Prisma.HospitalstaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHospitalstaff>
          }
          groupBy: {
            args: Prisma.hospitalstaffGroupByArgs<ExtArgs>
            result: $Utils.Optional<HospitalstaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.hospitalstaffCountArgs<ExtArgs>
            result: $Utils.Optional<HospitalstaffCountAggregateOutputType> | number
          }
        }
      }
      subadmins: {
        payload: Prisma.$subadminsPayload<ExtArgs>
        fields: Prisma.subadminsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subadminsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subadminsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subadminsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subadminsPayload>
          }
          findFirst: {
            args: Prisma.subadminsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subadminsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subadminsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subadminsPayload>
          }
          findMany: {
            args: Prisma.subadminsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subadminsPayload>[]
          }
          create: {
            args: Prisma.subadminsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subadminsPayload>
          }
          createMany: {
            args: Prisma.subadminsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.subadminsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subadminsPayload>[]
          }
          delete: {
            args: Prisma.subadminsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subadminsPayload>
          }
          update: {
            args: Prisma.subadminsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subadminsPayload>
          }
          deleteMany: {
            args: Prisma.subadminsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.subadminsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.subadminsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subadminsPayload>[]
          }
          upsert: {
            args: Prisma.subadminsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subadminsPayload>
          }
          aggregate: {
            args: Prisma.SubadminsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubadmins>
          }
          groupBy: {
            args: Prisma.subadminsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubadminsGroupByOutputType>[]
          }
          count: {
            args: Prisma.subadminsCountArgs<ExtArgs>
            result: $Utils.Optional<SubadminsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    admins?: adminsOmit
    appointments?: appointmentsOmit
    bloodcenters?: bloodcentersOmit
    bloodrequests?: bloodrequestsOmit
    bloodstock?: bloodstockOmit
    donationhistory?: donationhistoryOmit
    donors?: donorsOmit
    hospitalstaff?: hospitalstaffOmit
    subadmins?: subadminsOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BloodcentersCountOutputType
   */

  export type BloodcentersCountOutputType = {
    appointments: number
    bloodstock: number
    donationhistory: number
    subadmins: number
  }

  export type BloodcentersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | BloodcentersCountOutputTypeCountAppointmentsArgs
    bloodstock?: boolean | BloodcentersCountOutputTypeCountBloodstockArgs
    donationhistory?: boolean | BloodcentersCountOutputTypeCountDonationhistoryArgs
    subadmins?: boolean | BloodcentersCountOutputTypeCountSubadminsArgs
  }

  // Custom InputTypes
  /**
   * BloodcentersCountOutputType without action
   */
  export type BloodcentersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodcentersCountOutputType
     */
    select?: BloodcentersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BloodcentersCountOutputType without action
   */
  export type BloodcentersCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appointmentsWhereInput
  }

  /**
   * BloodcentersCountOutputType without action
   */
  export type BloodcentersCountOutputTypeCountBloodstockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bloodstockWhereInput
  }

  /**
   * BloodcentersCountOutputType without action
   */
  export type BloodcentersCountOutputTypeCountDonationhistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: donationhistoryWhereInput
  }

  /**
   * BloodcentersCountOutputType without action
   */
  export type BloodcentersCountOutputTypeCountSubadminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subadminsWhereInput
  }


  /**
   * Count Type DonorsCountOutputType
   */

  export type DonorsCountOutputType = {
    appointments: number
    donationhistory: number
  }

  export type DonorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | DonorsCountOutputTypeCountAppointmentsArgs
    donationhistory?: boolean | DonorsCountOutputTypeCountDonationhistoryArgs
  }

  // Custom InputTypes
  /**
   * DonorsCountOutputType without action
   */
  export type DonorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonorsCountOutputType
     */
    select?: DonorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DonorsCountOutputType without action
   */
  export type DonorsCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appointmentsWhereInput
  }

  /**
   * DonorsCountOutputType without action
   */
  export type DonorsCountOutputTypeCountDonationhistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: donationhistoryWhereInput
  }


  /**
   * Count Type HospitalstaffCountOutputType
   */

  export type HospitalstaffCountOutputType = {
    bloodrequests: number
  }

  export type HospitalstaffCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bloodrequests?: boolean | HospitalstaffCountOutputTypeCountBloodrequestsArgs
  }

  // Custom InputTypes
  /**
   * HospitalstaffCountOutputType without action
   */
  export type HospitalstaffCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalstaffCountOutputType
     */
    select?: HospitalstaffCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HospitalstaffCountOutputType without action
   */
  export type HospitalstaffCountOutputTypeCountBloodrequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bloodrequestsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model admins
   */

  export type AggregateAdmins = {
    _count: AdminsCountAggregateOutputType | null
    _avg: AdminsAvgAggregateOutputType | null
    _sum: AdminsSumAggregateOutputType | null
    _min: AdminsMinAggregateOutputType | null
    _max: AdminsMaxAggregateOutputType | null
  }

  export type AdminsAvgAggregateOutputType = {
    admin_id: number | null
    user_id: number | null
  }

  export type AdminsSumAggregateOutputType = {
    admin_id: number | null
    user_id: number | null
  }

  export type AdminsMinAggregateOutputType = {
    admin_id: number | null
    user_id: number | null
    created_at: Date | null
  }

  export type AdminsMaxAggregateOutputType = {
    admin_id: number | null
    user_id: number | null
    created_at: Date | null
  }

  export type AdminsCountAggregateOutputType = {
    admin_id: number
    user_id: number
    created_at: number
    _all: number
  }


  export type AdminsAvgAggregateInputType = {
    admin_id?: true
    user_id?: true
  }

  export type AdminsSumAggregateInputType = {
    admin_id?: true
    user_id?: true
  }

  export type AdminsMinAggregateInputType = {
    admin_id?: true
    user_id?: true
    created_at?: true
  }

  export type AdminsMaxAggregateInputType = {
    admin_id?: true
    user_id?: true
    created_at?: true
  }

  export type AdminsCountAggregateInputType = {
    admin_id?: true
    user_id?: true
    created_at?: true
    _all?: true
  }

  export type AdminsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to aggregate.
     */
    where?: adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminsMaxAggregateInputType
  }

  export type GetAdminsAggregateType<T extends AdminsAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmins]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmins[P]>
      : GetScalarType<T[P], AggregateAdmins[P]>
  }




  export type adminsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminsWhereInput
    orderBy?: adminsOrderByWithAggregationInput | adminsOrderByWithAggregationInput[]
    by: AdminsScalarFieldEnum[] | AdminsScalarFieldEnum
    having?: adminsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminsCountAggregateInputType | true
    _avg?: AdminsAvgAggregateInputType
    _sum?: AdminsSumAggregateInputType
    _min?: AdminsMinAggregateInputType
    _max?: AdminsMaxAggregateInputType
  }

  export type AdminsGroupByOutputType = {
    admin_id: number
    user_id: number
    created_at: Date | null
    _count: AdminsCountAggregateOutputType | null
    _avg: AdminsAvgAggregateOutputType | null
    _sum: AdminsSumAggregateOutputType | null
    _min: AdminsMinAggregateOutputType | null
    _max: AdminsMaxAggregateOutputType | null
  }

  type GetAdminsGroupByPayload<T extends adminsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminsGroupByOutputType[P]>
            : GetScalarType<T[P], AdminsGroupByOutputType[P]>
        }
      >
    >


  export type adminsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    admin_id?: boolean
    user_id?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admins"]>

  export type adminsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    admin_id?: boolean
    user_id?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admins"]>

  export type adminsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    admin_id?: boolean
    user_id?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admins"]>

  export type adminsSelectScalar = {
    admin_id?: boolean
    user_id?: boolean
    created_at?: boolean
  }

  export type adminsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"admin_id" | "user_id" | "created_at", ExtArgs["result"]["admins"]>
  export type adminsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type adminsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type adminsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $adminsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admins"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      admin_id: number
      user_id: number
      created_at: Date | null
    }, ExtArgs["result"]["admins"]>
    composites: {}
  }

  type adminsGetPayload<S extends boolean | null | undefined | adminsDefaultArgs> = $Result.GetResult<Prisma.$adminsPayload, S>

  type adminsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adminsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminsCountAggregateInputType | true
    }

  export interface adminsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admins'], meta: { name: 'admins' } }
    /**
     * Find zero or one Admins that matches the filter.
     * @param {adminsFindUniqueArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminsFindUniqueArgs>(args: SelectSubset<T, adminsFindUniqueArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admins that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminsFindUniqueOrThrowArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminsFindUniqueOrThrowArgs>(args: SelectSubset<T, adminsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsFindFirstArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminsFindFirstArgs>(args?: SelectSubset<T, adminsFindFirstArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admins that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsFindFirstOrThrowArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminsFindFirstOrThrowArgs>(args?: SelectSubset<T, adminsFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admins.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admins.findMany({ take: 10 })
     * 
     * // Only select the `admin_id`
     * const adminsWithAdmin_idOnly = await prisma.admins.findMany({ select: { admin_id: true } })
     * 
     */
    findMany<T extends adminsFindManyArgs>(args?: SelectSubset<T, adminsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admins.
     * @param {adminsCreateArgs} args - Arguments to create a Admins.
     * @example
     * // Create one Admins
     * const Admins = await prisma.admins.create({
     *   data: {
     *     // ... data to create a Admins
     *   }
     * })
     * 
     */
    create<T extends adminsCreateArgs>(args: SelectSubset<T, adminsCreateArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {adminsCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admins = await prisma.admins.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminsCreateManyArgs>(args?: SelectSubset<T, adminsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {adminsCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admins = await prisma.admins.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `admin_id`
     * const adminsWithAdmin_idOnly = await prisma.admins.createManyAndReturn({
     *   select: { admin_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends adminsCreateManyAndReturnArgs>(args?: SelectSubset<T, adminsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admins.
     * @param {adminsDeleteArgs} args - Arguments to delete one Admins.
     * @example
     * // Delete one Admins
     * const Admins = await prisma.admins.delete({
     *   where: {
     *     // ... filter to delete one Admins
     *   }
     * })
     * 
     */
    delete<T extends adminsDeleteArgs>(args: SelectSubset<T, adminsDeleteArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admins.
     * @param {adminsUpdateArgs} args - Arguments to update one Admins.
     * @example
     * // Update one Admins
     * const admins = await prisma.admins.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminsUpdateArgs>(args: SelectSubset<T, adminsUpdateArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {adminsDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admins.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminsDeleteManyArgs>(args?: SelectSubset<T, adminsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admins = await prisma.admins.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminsUpdateManyArgs>(args: SelectSubset<T, adminsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {adminsUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admins = await prisma.admins.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `admin_id`
     * const adminsWithAdmin_idOnly = await prisma.admins.updateManyAndReturn({
     *   select: { admin_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends adminsUpdateManyAndReturnArgs>(args: SelectSubset<T, adminsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admins.
     * @param {adminsUpsertArgs} args - Arguments to update or create a Admins.
     * @example
     * // Update or create a Admins
     * const admins = await prisma.admins.upsert({
     *   create: {
     *     // ... data to create a Admins
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admins we want to update
     *   }
     * })
     */
    upsert<T extends adminsUpsertArgs>(args: SelectSubset<T, adminsUpsertArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admins.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminsCountArgs>(
      args?: Subset<T, adminsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminsAggregateArgs>(args: Subset<T, AdminsAggregateArgs>): Prisma.PrismaPromise<GetAdminsAggregateType<T>>

    /**
     * Group by Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends adminsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminsGroupByArgs['orderBy'] }
        : { orderBy?: adminsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, adminsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admins model
   */
  readonly fields: adminsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admins.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the admins model
   */
  interface adminsFieldRefs {
    readonly admin_id: FieldRef<"admins", 'Int'>
    readonly user_id: FieldRef<"admins", 'Int'>
    readonly created_at: FieldRef<"admins", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * admins findUnique
   */
  export type adminsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where: adminsWhereUniqueInput
  }

  /**
   * admins findUniqueOrThrow
   */
  export type adminsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where: adminsWhereUniqueInput
  }

  /**
   * admins findFirst
   */
  export type adminsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * admins findFirstOrThrow
   */
  export type adminsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * admins findMany
   */
  export type adminsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * admins create
   */
  export type adminsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * The data needed to create a admins.
     */
    data: XOR<adminsCreateInput, adminsUncheckedCreateInput>
  }

  /**
   * admins createMany
   */
  export type adminsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminsCreateManyInput | adminsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admins createManyAndReturn
   */
  export type adminsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * The data used to create many admins.
     */
    data: adminsCreateManyInput | adminsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * admins update
   */
  export type adminsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * The data needed to update a admins.
     */
    data: XOR<adminsUpdateInput, adminsUncheckedUpdateInput>
    /**
     * Choose, which admins to update.
     */
    where: adminsWhereUniqueInput
  }

  /**
   * admins updateMany
   */
  export type adminsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminsUpdateManyMutationInput, adminsUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminsWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admins updateManyAndReturn
   */
  export type adminsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * The data used to update admins.
     */
    data: XOR<adminsUpdateManyMutationInput, adminsUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminsWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * admins upsert
   */
  export type adminsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * The filter to search for the admins to update in case it exists.
     */
    where: adminsWhereUniqueInput
    /**
     * In case the admins found by the `where` argument doesn't exist, create a new admins with this data.
     */
    create: XOR<adminsCreateInput, adminsUncheckedCreateInput>
    /**
     * In case the admins was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminsUpdateInput, adminsUncheckedUpdateInput>
  }

  /**
   * admins delete
   */
  export type adminsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * Filter which admins to delete.
     */
    where: adminsWhereUniqueInput
  }

  /**
   * admins deleteMany
   */
  export type adminsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminsWhereInput
    /**
     * Limit how many admins to delete.
     */
    limit?: number
  }

  /**
   * admins without action
   */
  export type adminsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
  }


  /**
   * Model appointments
   */

  export type AggregateAppointments = {
    _count: AppointmentsCountAggregateOutputType | null
    _avg: AppointmentsAvgAggregateOutputType | null
    _sum: AppointmentsSumAggregateOutputType | null
    _min: AppointmentsMinAggregateOutputType | null
    _max: AppointmentsMaxAggregateOutputType | null
  }

  export type AppointmentsAvgAggregateOutputType = {
    appointment_id: number | null
    donor_id: number | null
    center_id: number | null
  }

  export type AppointmentsSumAggregateOutputType = {
    appointment_id: number | null
    donor_id: number | null
    center_id: number | null
  }

  export type AppointmentsMinAggregateOutputType = {
    appointment_id: number | null
    donor_id: number | null
    center_id: number | null
    appointment_date: Date | null
    description: string | null
    status: string | null
  }

  export type AppointmentsMaxAggregateOutputType = {
    appointment_id: number | null
    donor_id: number | null
    center_id: number | null
    appointment_date: Date | null
    description: string | null
    status: string | null
  }

  export type AppointmentsCountAggregateOutputType = {
    appointment_id: number
    donor_id: number
    center_id: number
    appointment_date: number
    description: number
    status: number
    _all: number
  }


  export type AppointmentsAvgAggregateInputType = {
    appointment_id?: true
    donor_id?: true
    center_id?: true
  }

  export type AppointmentsSumAggregateInputType = {
    appointment_id?: true
    donor_id?: true
    center_id?: true
  }

  export type AppointmentsMinAggregateInputType = {
    appointment_id?: true
    donor_id?: true
    center_id?: true
    appointment_date?: true
    description?: true
    status?: true
  }

  export type AppointmentsMaxAggregateInputType = {
    appointment_id?: true
    donor_id?: true
    center_id?: true
    appointment_date?: true
    description?: true
    status?: true
  }

  export type AppointmentsCountAggregateInputType = {
    appointment_id?: true
    donor_id?: true
    center_id?: true
    appointment_date?: true
    description?: true
    status?: true
    _all?: true
  }

  export type AppointmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appointments to aggregate.
     */
    where?: appointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentsOrderByWithRelationInput | appointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: appointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned appointments
    **/
    _count?: true | AppointmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentsMaxAggregateInputType
  }

  export type GetAppointmentsAggregateType<T extends AppointmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointments[P]>
      : GetScalarType<T[P], AggregateAppointments[P]>
  }




  export type appointmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appointmentsWhereInput
    orderBy?: appointmentsOrderByWithAggregationInput | appointmentsOrderByWithAggregationInput[]
    by: AppointmentsScalarFieldEnum[] | AppointmentsScalarFieldEnum
    having?: appointmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentsCountAggregateInputType | true
    _avg?: AppointmentsAvgAggregateInputType
    _sum?: AppointmentsSumAggregateInputType
    _min?: AppointmentsMinAggregateInputType
    _max?: AppointmentsMaxAggregateInputType
  }

  export type AppointmentsGroupByOutputType = {
    appointment_id: number
    donor_id: number
    center_id: number
    appointment_date: Date
    description: string | null
    status: string | null
    _count: AppointmentsCountAggregateOutputType | null
    _avg: AppointmentsAvgAggregateOutputType | null
    _sum: AppointmentsSumAggregateOutputType | null
    _min: AppointmentsMinAggregateOutputType | null
    _max: AppointmentsMaxAggregateOutputType | null
  }

  type GetAppointmentsGroupByPayload<T extends appointmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentsGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentsGroupByOutputType[P]>
        }
      >
    >


  export type appointmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    appointment_id?: boolean
    donor_id?: boolean
    center_id?: boolean
    appointment_date?: boolean
    description?: boolean
    status?: boolean
    bloodcenters?: boolean | bloodcentersDefaultArgs<ExtArgs>
    donors?: boolean | donorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointments"]>

  export type appointmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    appointment_id?: boolean
    donor_id?: boolean
    center_id?: boolean
    appointment_date?: boolean
    description?: boolean
    status?: boolean
    bloodcenters?: boolean | bloodcentersDefaultArgs<ExtArgs>
    donors?: boolean | donorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointments"]>

  export type appointmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    appointment_id?: boolean
    donor_id?: boolean
    center_id?: boolean
    appointment_date?: boolean
    description?: boolean
    status?: boolean
    bloodcenters?: boolean | bloodcentersDefaultArgs<ExtArgs>
    donors?: boolean | donorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointments"]>

  export type appointmentsSelectScalar = {
    appointment_id?: boolean
    donor_id?: boolean
    center_id?: boolean
    appointment_date?: boolean
    description?: boolean
    status?: boolean
  }

  export type appointmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"appointment_id" | "donor_id" | "center_id" | "appointment_date" | "description" | "status", ExtArgs["result"]["appointments"]>
  export type appointmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bloodcenters?: boolean | bloodcentersDefaultArgs<ExtArgs>
    donors?: boolean | donorsDefaultArgs<ExtArgs>
  }
  export type appointmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bloodcenters?: boolean | bloodcentersDefaultArgs<ExtArgs>
    donors?: boolean | donorsDefaultArgs<ExtArgs>
  }
  export type appointmentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bloodcenters?: boolean | bloodcentersDefaultArgs<ExtArgs>
    donors?: boolean | donorsDefaultArgs<ExtArgs>
  }

  export type $appointmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "appointments"
    objects: {
      bloodcenters: Prisma.$bloodcentersPayload<ExtArgs>
      donors: Prisma.$donorsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      appointment_id: number
      donor_id: number
      center_id: number
      appointment_date: Date
      description: string | null
      status: string | null
    }, ExtArgs["result"]["appointments"]>
    composites: {}
  }

  type appointmentsGetPayload<S extends boolean | null | undefined | appointmentsDefaultArgs> = $Result.GetResult<Prisma.$appointmentsPayload, S>

  type appointmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<appointmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentsCountAggregateInputType | true
    }

  export interface appointmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['appointments'], meta: { name: 'appointments' } }
    /**
     * Find zero or one Appointments that matches the filter.
     * @param {appointmentsFindUniqueArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends appointmentsFindUniqueArgs>(args: SelectSubset<T, appointmentsFindUniqueArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {appointmentsFindUniqueOrThrowArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends appointmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, appointmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentsFindFirstArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends appointmentsFindFirstArgs>(args?: SelectSubset<T, appointmentsFindFirstArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentsFindFirstOrThrowArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends appointmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, appointmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointments.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointments.findMany({ take: 10 })
     * 
     * // Only select the `appointment_id`
     * const appointmentsWithAppointment_idOnly = await prisma.appointments.findMany({ select: { appointment_id: true } })
     * 
     */
    findMany<T extends appointmentsFindManyArgs>(args?: SelectSubset<T, appointmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointments.
     * @param {appointmentsCreateArgs} args - Arguments to create a Appointments.
     * @example
     * // Create one Appointments
     * const Appointments = await prisma.appointments.create({
     *   data: {
     *     // ... data to create a Appointments
     *   }
     * })
     * 
     */
    create<T extends appointmentsCreateArgs>(args: SelectSubset<T, appointmentsCreateArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {appointmentsCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointments = await prisma.appointments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends appointmentsCreateManyArgs>(args?: SelectSubset<T, appointmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {appointmentsCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointments = await prisma.appointments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `appointment_id`
     * const appointmentsWithAppointment_idOnly = await prisma.appointments.createManyAndReturn({
     *   select: { appointment_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends appointmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, appointmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointments.
     * @param {appointmentsDeleteArgs} args - Arguments to delete one Appointments.
     * @example
     * // Delete one Appointments
     * const Appointments = await prisma.appointments.delete({
     *   where: {
     *     // ... filter to delete one Appointments
     *   }
     * })
     * 
     */
    delete<T extends appointmentsDeleteArgs>(args: SelectSubset<T, appointmentsDeleteArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointments.
     * @param {appointmentsUpdateArgs} args - Arguments to update one Appointments.
     * @example
     * // Update one Appointments
     * const appointments = await prisma.appointments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends appointmentsUpdateArgs>(args: SelectSubset<T, appointmentsUpdateArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {appointmentsDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends appointmentsDeleteManyArgs>(args?: SelectSubset<T, appointmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointments = await prisma.appointments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends appointmentsUpdateManyArgs>(args: SelectSubset<T, appointmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {appointmentsUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointments = await prisma.appointments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `appointment_id`
     * const appointmentsWithAppointment_idOnly = await prisma.appointments.updateManyAndReturn({
     *   select: { appointment_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends appointmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, appointmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointments.
     * @param {appointmentsUpsertArgs} args - Arguments to update or create a Appointments.
     * @example
     * // Update or create a Appointments
     * const appointments = await prisma.appointments.upsert({
     *   create: {
     *     // ... data to create a Appointments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointments we want to update
     *   }
     * })
     */
    upsert<T extends appointmentsUpsertArgs>(args: SelectSubset<T, appointmentsUpsertArgs<ExtArgs>>): Prisma__appointmentsClient<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentsCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointments.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends appointmentsCountArgs>(
      args?: Subset<T, appointmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentsAggregateArgs>(args: Subset<T, AppointmentsAggregateArgs>): Prisma.PrismaPromise<GetAppointmentsAggregateType<T>>

    /**
     * Group by Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends appointmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: appointmentsGroupByArgs['orderBy'] }
        : { orderBy?: appointmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, appointmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the appointments model
   */
  readonly fields: appointmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for appointments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__appointmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bloodcenters<T extends bloodcentersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bloodcentersDefaultArgs<ExtArgs>>): Prisma__bloodcentersClient<$Result.GetResult<Prisma.$bloodcentersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    donors<T extends donorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, donorsDefaultArgs<ExtArgs>>): Prisma__donorsClient<$Result.GetResult<Prisma.$donorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the appointments model
   */
  interface appointmentsFieldRefs {
    readonly appointment_id: FieldRef<"appointments", 'Int'>
    readonly donor_id: FieldRef<"appointments", 'Int'>
    readonly center_id: FieldRef<"appointments", 'Int'>
    readonly appointment_date: FieldRef<"appointments", 'DateTime'>
    readonly description: FieldRef<"appointments", 'String'>
    readonly status: FieldRef<"appointments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * appointments findUnique
   */
  export type appointmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    /**
     * Filter, which appointments to fetch.
     */
    where: appointmentsWhereUniqueInput
  }

  /**
   * appointments findUniqueOrThrow
   */
  export type appointmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    /**
     * Filter, which appointments to fetch.
     */
    where: appointmentsWhereUniqueInput
  }

  /**
   * appointments findFirst
   */
  export type appointmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    /**
     * Filter, which appointments to fetch.
     */
    where?: appointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentsOrderByWithRelationInput | appointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for appointments.
     */
    cursor?: appointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of appointments.
     */
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * appointments findFirstOrThrow
   */
  export type appointmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    /**
     * Filter, which appointments to fetch.
     */
    where?: appointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentsOrderByWithRelationInput | appointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for appointments.
     */
    cursor?: appointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of appointments.
     */
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * appointments findMany
   */
  export type appointmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    /**
     * Filter, which appointments to fetch.
     */
    where?: appointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentsOrderByWithRelationInput | appointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing appointments.
     */
    cursor?: appointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointments.
     */
    skip?: number
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * appointments create
   */
  export type appointmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a appointments.
     */
    data: XOR<appointmentsCreateInput, appointmentsUncheckedCreateInput>
  }

  /**
   * appointments createMany
   */
  export type appointmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many appointments.
     */
    data: appointmentsCreateManyInput | appointmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * appointments createManyAndReturn
   */
  export type appointmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * The data used to create many appointments.
     */
    data: appointmentsCreateManyInput | appointmentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * appointments update
   */
  export type appointmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a appointments.
     */
    data: XOR<appointmentsUpdateInput, appointmentsUncheckedUpdateInput>
    /**
     * Choose, which appointments to update.
     */
    where: appointmentsWhereUniqueInput
  }

  /**
   * appointments updateMany
   */
  export type appointmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update appointments.
     */
    data: XOR<appointmentsUpdateManyMutationInput, appointmentsUncheckedUpdateManyInput>
    /**
     * Filter which appointments to update
     */
    where?: appointmentsWhereInput
    /**
     * Limit how many appointments to update.
     */
    limit?: number
  }

  /**
   * appointments updateManyAndReturn
   */
  export type appointmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * The data used to update appointments.
     */
    data: XOR<appointmentsUpdateManyMutationInput, appointmentsUncheckedUpdateManyInput>
    /**
     * Filter which appointments to update
     */
    where?: appointmentsWhereInput
    /**
     * Limit how many appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * appointments upsert
   */
  export type appointmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the appointments to update in case it exists.
     */
    where: appointmentsWhereUniqueInput
    /**
     * In case the appointments found by the `where` argument doesn't exist, create a new appointments with this data.
     */
    create: XOR<appointmentsCreateInput, appointmentsUncheckedCreateInput>
    /**
     * In case the appointments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<appointmentsUpdateInput, appointmentsUncheckedUpdateInput>
  }

  /**
   * appointments delete
   */
  export type appointmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    /**
     * Filter which appointments to delete.
     */
    where: appointmentsWhereUniqueInput
  }

  /**
   * appointments deleteMany
   */
  export type appointmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appointments to delete
     */
    where?: appointmentsWhereInput
    /**
     * Limit how many appointments to delete.
     */
    limit?: number
  }

  /**
   * appointments without action
   */
  export type appointmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
  }


  /**
   * Model bloodcenters
   */

  export type AggregateBloodcenters = {
    _count: BloodcentersCountAggregateOutputType | null
    _avg: BloodcentersAvgAggregateOutputType | null
    _sum: BloodcentersSumAggregateOutputType | null
    _min: BloodcentersMinAggregateOutputType | null
    _max: BloodcentersMaxAggregateOutputType | null
  }

  export type BloodcentersAvgAggregateOutputType = {
    center_id: number | null
  }

  export type BloodcentersSumAggregateOutputType = {
    center_id: number | null
  }

  export type BloodcentersMinAggregateOutputType = {
    center_id: number | null
    center_name: string | null
    address: string | null
    contact_info: string | null
  }

  export type BloodcentersMaxAggregateOutputType = {
    center_id: number | null
    center_name: string | null
    address: string | null
    contact_info: string | null
  }

  export type BloodcentersCountAggregateOutputType = {
    center_id: number
    center_name: number
    address: number
    contact_info: number
    _all: number
  }


  export type BloodcentersAvgAggregateInputType = {
    center_id?: true
  }

  export type BloodcentersSumAggregateInputType = {
    center_id?: true
  }

  export type BloodcentersMinAggregateInputType = {
    center_id?: true
    center_name?: true
    address?: true
    contact_info?: true
  }

  export type BloodcentersMaxAggregateInputType = {
    center_id?: true
    center_name?: true
    address?: true
    contact_info?: true
  }

  export type BloodcentersCountAggregateInputType = {
    center_id?: true
    center_name?: true
    address?: true
    contact_info?: true
    _all?: true
  }

  export type BloodcentersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bloodcenters to aggregate.
     */
    where?: bloodcentersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bloodcenters to fetch.
     */
    orderBy?: bloodcentersOrderByWithRelationInput | bloodcentersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bloodcentersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bloodcenters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bloodcenters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bloodcenters
    **/
    _count?: true | BloodcentersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BloodcentersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BloodcentersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BloodcentersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BloodcentersMaxAggregateInputType
  }

  export type GetBloodcentersAggregateType<T extends BloodcentersAggregateArgs> = {
        [P in keyof T & keyof AggregateBloodcenters]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBloodcenters[P]>
      : GetScalarType<T[P], AggregateBloodcenters[P]>
  }




  export type bloodcentersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bloodcentersWhereInput
    orderBy?: bloodcentersOrderByWithAggregationInput | bloodcentersOrderByWithAggregationInput[]
    by: BloodcentersScalarFieldEnum[] | BloodcentersScalarFieldEnum
    having?: bloodcentersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BloodcentersCountAggregateInputType | true
    _avg?: BloodcentersAvgAggregateInputType
    _sum?: BloodcentersSumAggregateInputType
    _min?: BloodcentersMinAggregateInputType
    _max?: BloodcentersMaxAggregateInputType
  }

  export type BloodcentersGroupByOutputType = {
    center_id: number
    center_name: string
    address: string
    contact_info: string
    _count: BloodcentersCountAggregateOutputType | null
    _avg: BloodcentersAvgAggregateOutputType | null
    _sum: BloodcentersSumAggregateOutputType | null
    _min: BloodcentersMinAggregateOutputType | null
    _max: BloodcentersMaxAggregateOutputType | null
  }

  type GetBloodcentersGroupByPayload<T extends bloodcentersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BloodcentersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BloodcentersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BloodcentersGroupByOutputType[P]>
            : GetScalarType<T[P], BloodcentersGroupByOutputType[P]>
        }
      >
    >


  export type bloodcentersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    center_id?: boolean
    center_name?: boolean
    address?: boolean
    contact_info?: boolean
    appointments?: boolean | bloodcenters$appointmentsArgs<ExtArgs>
    bloodstock?: boolean | bloodcenters$bloodstockArgs<ExtArgs>
    donationhistory?: boolean | bloodcenters$donationhistoryArgs<ExtArgs>
    subadmins?: boolean | bloodcenters$subadminsArgs<ExtArgs>
    _count?: boolean | BloodcentersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloodcenters"]>

  export type bloodcentersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    center_id?: boolean
    center_name?: boolean
    address?: boolean
    contact_info?: boolean
  }, ExtArgs["result"]["bloodcenters"]>

  export type bloodcentersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    center_id?: boolean
    center_name?: boolean
    address?: boolean
    contact_info?: boolean
  }, ExtArgs["result"]["bloodcenters"]>

  export type bloodcentersSelectScalar = {
    center_id?: boolean
    center_name?: boolean
    address?: boolean
    contact_info?: boolean
  }

  export type bloodcentersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"center_id" | "center_name" | "address" | "contact_info", ExtArgs["result"]["bloodcenters"]>
  export type bloodcentersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | bloodcenters$appointmentsArgs<ExtArgs>
    bloodstock?: boolean | bloodcenters$bloodstockArgs<ExtArgs>
    donationhistory?: boolean | bloodcenters$donationhistoryArgs<ExtArgs>
    subadmins?: boolean | bloodcenters$subadminsArgs<ExtArgs>
    _count?: boolean | BloodcentersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type bloodcentersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type bloodcentersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $bloodcentersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bloodcenters"
    objects: {
      appointments: Prisma.$appointmentsPayload<ExtArgs>[]
      bloodstock: Prisma.$bloodstockPayload<ExtArgs>[]
      donationhistory: Prisma.$donationhistoryPayload<ExtArgs>[]
      subadmins: Prisma.$subadminsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      center_id: number
      center_name: string
      address: string
      contact_info: string
    }, ExtArgs["result"]["bloodcenters"]>
    composites: {}
  }

  type bloodcentersGetPayload<S extends boolean | null | undefined | bloodcentersDefaultArgs> = $Result.GetResult<Prisma.$bloodcentersPayload, S>

  type bloodcentersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bloodcentersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BloodcentersCountAggregateInputType | true
    }

  export interface bloodcentersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bloodcenters'], meta: { name: 'bloodcenters' } }
    /**
     * Find zero or one Bloodcenters that matches the filter.
     * @param {bloodcentersFindUniqueArgs} args - Arguments to find a Bloodcenters
     * @example
     * // Get one Bloodcenters
     * const bloodcenters = await prisma.bloodcenters.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bloodcentersFindUniqueArgs>(args: SelectSubset<T, bloodcentersFindUniqueArgs<ExtArgs>>): Prisma__bloodcentersClient<$Result.GetResult<Prisma.$bloodcentersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bloodcenters that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bloodcentersFindUniqueOrThrowArgs} args - Arguments to find a Bloodcenters
     * @example
     * // Get one Bloodcenters
     * const bloodcenters = await prisma.bloodcenters.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bloodcentersFindUniqueOrThrowArgs>(args: SelectSubset<T, bloodcentersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bloodcentersClient<$Result.GetResult<Prisma.$bloodcentersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bloodcenters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bloodcentersFindFirstArgs} args - Arguments to find a Bloodcenters
     * @example
     * // Get one Bloodcenters
     * const bloodcenters = await prisma.bloodcenters.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bloodcentersFindFirstArgs>(args?: SelectSubset<T, bloodcentersFindFirstArgs<ExtArgs>>): Prisma__bloodcentersClient<$Result.GetResult<Prisma.$bloodcentersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bloodcenters that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bloodcentersFindFirstOrThrowArgs} args - Arguments to find a Bloodcenters
     * @example
     * // Get one Bloodcenters
     * const bloodcenters = await prisma.bloodcenters.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bloodcentersFindFirstOrThrowArgs>(args?: SelectSubset<T, bloodcentersFindFirstOrThrowArgs<ExtArgs>>): Prisma__bloodcentersClient<$Result.GetResult<Prisma.$bloodcentersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bloodcenters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bloodcentersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bloodcenters
     * const bloodcenters = await prisma.bloodcenters.findMany()
     * 
     * // Get first 10 Bloodcenters
     * const bloodcenters = await prisma.bloodcenters.findMany({ take: 10 })
     * 
     * // Only select the `center_id`
     * const bloodcentersWithCenter_idOnly = await prisma.bloodcenters.findMany({ select: { center_id: true } })
     * 
     */
    findMany<T extends bloodcentersFindManyArgs>(args?: SelectSubset<T, bloodcentersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bloodcentersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bloodcenters.
     * @param {bloodcentersCreateArgs} args - Arguments to create a Bloodcenters.
     * @example
     * // Create one Bloodcenters
     * const Bloodcenters = await prisma.bloodcenters.create({
     *   data: {
     *     // ... data to create a Bloodcenters
     *   }
     * })
     * 
     */
    create<T extends bloodcentersCreateArgs>(args: SelectSubset<T, bloodcentersCreateArgs<ExtArgs>>): Prisma__bloodcentersClient<$Result.GetResult<Prisma.$bloodcentersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bloodcenters.
     * @param {bloodcentersCreateManyArgs} args - Arguments to create many Bloodcenters.
     * @example
     * // Create many Bloodcenters
     * const bloodcenters = await prisma.bloodcenters.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bloodcentersCreateManyArgs>(args?: SelectSubset<T, bloodcentersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bloodcenters and returns the data saved in the database.
     * @param {bloodcentersCreateManyAndReturnArgs} args - Arguments to create many Bloodcenters.
     * @example
     * // Create many Bloodcenters
     * const bloodcenters = await prisma.bloodcenters.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bloodcenters and only return the `center_id`
     * const bloodcentersWithCenter_idOnly = await prisma.bloodcenters.createManyAndReturn({
     *   select: { center_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bloodcentersCreateManyAndReturnArgs>(args?: SelectSubset<T, bloodcentersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bloodcentersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bloodcenters.
     * @param {bloodcentersDeleteArgs} args - Arguments to delete one Bloodcenters.
     * @example
     * // Delete one Bloodcenters
     * const Bloodcenters = await prisma.bloodcenters.delete({
     *   where: {
     *     // ... filter to delete one Bloodcenters
     *   }
     * })
     * 
     */
    delete<T extends bloodcentersDeleteArgs>(args: SelectSubset<T, bloodcentersDeleteArgs<ExtArgs>>): Prisma__bloodcentersClient<$Result.GetResult<Prisma.$bloodcentersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bloodcenters.
     * @param {bloodcentersUpdateArgs} args - Arguments to update one Bloodcenters.
     * @example
     * // Update one Bloodcenters
     * const bloodcenters = await prisma.bloodcenters.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bloodcentersUpdateArgs>(args: SelectSubset<T, bloodcentersUpdateArgs<ExtArgs>>): Prisma__bloodcentersClient<$Result.GetResult<Prisma.$bloodcentersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bloodcenters.
     * @param {bloodcentersDeleteManyArgs} args - Arguments to filter Bloodcenters to delete.
     * @example
     * // Delete a few Bloodcenters
     * const { count } = await prisma.bloodcenters.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bloodcentersDeleteManyArgs>(args?: SelectSubset<T, bloodcentersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bloodcenters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bloodcentersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bloodcenters
     * const bloodcenters = await prisma.bloodcenters.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bloodcentersUpdateManyArgs>(args: SelectSubset<T, bloodcentersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bloodcenters and returns the data updated in the database.
     * @param {bloodcentersUpdateManyAndReturnArgs} args - Arguments to update many Bloodcenters.
     * @example
     * // Update many Bloodcenters
     * const bloodcenters = await prisma.bloodcenters.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bloodcenters and only return the `center_id`
     * const bloodcentersWithCenter_idOnly = await prisma.bloodcenters.updateManyAndReturn({
     *   select: { center_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends bloodcentersUpdateManyAndReturnArgs>(args: SelectSubset<T, bloodcentersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bloodcentersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bloodcenters.
     * @param {bloodcentersUpsertArgs} args - Arguments to update or create a Bloodcenters.
     * @example
     * // Update or create a Bloodcenters
     * const bloodcenters = await prisma.bloodcenters.upsert({
     *   create: {
     *     // ... data to create a Bloodcenters
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bloodcenters we want to update
     *   }
     * })
     */
    upsert<T extends bloodcentersUpsertArgs>(args: SelectSubset<T, bloodcentersUpsertArgs<ExtArgs>>): Prisma__bloodcentersClient<$Result.GetResult<Prisma.$bloodcentersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bloodcenters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bloodcentersCountArgs} args - Arguments to filter Bloodcenters to count.
     * @example
     * // Count the number of Bloodcenters
     * const count = await prisma.bloodcenters.count({
     *   where: {
     *     // ... the filter for the Bloodcenters we want to count
     *   }
     * })
    **/
    count<T extends bloodcentersCountArgs>(
      args?: Subset<T, bloodcentersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BloodcentersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bloodcenters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodcentersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BloodcentersAggregateArgs>(args: Subset<T, BloodcentersAggregateArgs>): Prisma.PrismaPromise<GetBloodcentersAggregateType<T>>

    /**
     * Group by Bloodcenters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bloodcentersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bloodcentersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bloodcentersGroupByArgs['orderBy'] }
        : { orderBy?: bloodcentersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bloodcentersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBloodcentersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bloodcenters model
   */
  readonly fields: bloodcentersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bloodcenters.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bloodcentersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointments<T extends bloodcenters$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, bloodcenters$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bloodstock<T extends bloodcenters$bloodstockArgs<ExtArgs> = {}>(args?: Subset<T, bloodcenters$bloodstockArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bloodstockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donationhistory<T extends bloodcenters$donationhistoryArgs<ExtArgs> = {}>(args?: Subset<T, bloodcenters$donationhistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$donationhistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subadmins<T extends bloodcenters$subadminsArgs<ExtArgs> = {}>(args?: Subset<T, bloodcenters$subadminsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subadminsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the bloodcenters model
   */
  interface bloodcentersFieldRefs {
    readonly center_id: FieldRef<"bloodcenters", 'Int'>
    readonly center_name: FieldRef<"bloodcenters", 'String'>
    readonly address: FieldRef<"bloodcenters", 'String'>
    readonly contact_info: FieldRef<"bloodcenters", 'String'>
  }
    

  // Custom InputTypes
  /**
   * bloodcenters findUnique
   */
  export type bloodcentersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodcenters
     */
    select?: bloodcentersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodcenters
     */
    omit?: bloodcentersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodcentersInclude<ExtArgs> | null
    /**
     * Filter, which bloodcenters to fetch.
     */
    where: bloodcentersWhereUniqueInput
  }

  /**
   * bloodcenters findUniqueOrThrow
   */
  export type bloodcentersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodcenters
     */
    select?: bloodcentersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodcenters
     */
    omit?: bloodcentersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodcentersInclude<ExtArgs> | null
    /**
     * Filter, which bloodcenters to fetch.
     */
    where: bloodcentersWhereUniqueInput
  }

  /**
   * bloodcenters findFirst
   */
  export type bloodcentersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodcenters
     */
    select?: bloodcentersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodcenters
     */
    omit?: bloodcentersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodcentersInclude<ExtArgs> | null
    /**
     * Filter, which bloodcenters to fetch.
     */
    where?: bloodcentersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bloodcenters to fetch.
     */
    orderBy?: bloodcentersOrderByWithRelationInput | bloodcentersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bloodcenters.
     */
    cursor?: bloodcentersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bloodcenters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bloodcenters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bloodcenters.
     */
    distinct?: BloodcentersScalarFieldEnum | BloodcentersScalarFieldEnum[]
  }

  /**
   * bloodcenters findFirstOrThrow
   */
  export type bloodcentersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodcenters
     */
    select?: bloodcentersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodcenters
     */
    omit?: bloodcentersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodcentersInclude<ExtArgs> | null
    /**
     * Filter, which bloodcenters to fetch.
     */
    where?: bloodcentersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bloodcenters to fetch.
     */
    orderBy?: bloodcentersOrderByWithRelationInput | bloodcentersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bloodcenters.
     */
    cursor?: bloodcentersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bloodcenters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bloodcenters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bloodcenters.
     */
    distinct?: BloodcentersScalarFieldEnum | BloodcentersScalarFieldEnum[]
  }

  /**
   * bloodcenters findMany
   */
  export type bloodcentersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodcenters
     */
    select?: bloodcentersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodcenters
     */
    omit?: bloodcentersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodcentersInclude<ExtArgs> | null
    /**
     * Filter, which bloodcenters to fetch.
     */
    where?: bloodcentersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bloodcenters to fetch.
     */
    orderBy?: bloodcentersOrderByWithRelationInput | bloodcentersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bloodcenters.
     */
    cursor?: bloodcentersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bloodcenters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bloodcenters.
     */
    skip?: number
    distinct?: BloodcentersScalarFieldEnum | BloodcentersScalarFieldEnum[]
  }

  /**
   * bloodcenters create
   */
  export type bloodcentersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodcenters
     */
    select?: bloodcentersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodcenters
     */
    omit?: bloodcentersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodcentersInclude<ExtArgs> | null
    /**
     * The data needed to create a bloodcenters.
     */
    data: XOR<bloodcentersCreateInput, bloodcentersUncheckedCreateInput>
  }

  /**
   * bloodcenters createMany
   */
  export type bloodcentersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bloodcenters.
     */
    data: bloodcentersCreateManyInput | bloodcentersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bloodcenters createManyAndReturn
   */
  export type bloodcentersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodcenters
     */
    select?: bloodcentersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bloodcenters
     */
    omit?: bloodcentersOmit<ExtArgs> | null
    /**
     * The data used to create many bloodcenters.
     */
    data: bloodcentersCreateManyInput | bloodcentersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bloodcenters update
   */
  export type bloodcentersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodcenters
     */
    select?: bloodcentersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodcenters
     */
    omit?: bloodcentersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodcentersInclude<ExtArgs> | null
    /**
     * The data needed to update a bloodcenters.
     */
    data: XOR<bloodcentersUpdateInput, bloodcentersUncheckedUpdateInput>
    /**
     * Choose, which bloodcenters to update.
     */
    where: bloodcentersWhereUniqueInput
  }

  /**
   * bloodcenters updateMany
   */
  export type bloodcentersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bloodcenters.
     */
    data: XOR<bloodcentersUpdateManyMutationInput, bloodcentersUncheckedUpdateManyInput>
    /**
     * Filter which bloodcenters to update
     */
    where?: bloodcentersWhereInput
    /**
     * Limit how many bloodcenters to update.
     */
    limit?: number
  }

  /**
   * bloodcenters updateManyAndReturn
   */
  export type bloodcentersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodcenters
     */
    select?: bloodcentersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bloodcenters
     */
    omit?: bloodcentersOmit<ExtArgs> | null
    /**
     * The data used to update bloodcenters.
     */
    data: XOR<bloodcentersUpdateManyMutationInput, bloodcentersUncheckedUpdateManyInput>
    /**
     * Filter which bloodcenters to update
     */
    where?: bloodcentersWhereInput
    /**
     * Limit how many bloodcenters to update.
     */
    limit?: number
  }

  /**
   * bloodcenters upsert
   */
  export type bloodcentersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodcenters
     */
    select?: bloodcentersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodcenters
     */
    omit?: bloodcentersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodcentersInclude<ExtArgs> | null
    /**
     * The filter to search for the bloodcenters to update in case it exists.
     */
    where: bloodcentersWhereUniqueInput
    /**
     * In case the bloodcenters found by the `where` argument doesn't exist, create a new bloodcenters with this data.
     */
    create: XOR<bloodcentersCreateInput, bloodcentersUncheckedCreateInput>
    /**
     * In case the bloodcenters was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bloodcentersUpdateInput, bloodcentersUncheckedUpdateInput>
  }

  /**
   * bloodcenters delete
   */
  export type bloodcentersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodcenters
     */
    select?: bloodcentersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodcenters
     */
    omit?: bloodcentersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodcentersInclude<ExtArgs> | null
    /**
     * Filter which bloodcenters to delete.
     */
    where: bloodcentersWhereUniqueInput
  }

  /**
   * bloodcenters deleteMany
   */
  export type bloodcentersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bloodcenters to delete
     */
    where?: bloodcentersWhereInput
    /**
     * Limit how many bloodcenters to delete.
     */
    limit?: number
  }

  /**
   * bloodcenters.appointments
   */
  export type bloodcenters$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    where?: appointmentsWhereInput
    orderBy?: appointmentsOrderByWithRelationInput | appointmentsOrderByWithRelationInput[]
    cursor?: appointmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * bloodcenters.bloodstock
   */
  export type bloodcenters$bloodstockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodstock
     */
    select?: bloodstockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodstock
     */
    omit?: bloodstockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodstockInclude<ExtArgs> | null
    where?: bloodstockWhereInput
    orderBy?: bloodstockOrderByWithRelationInput | bloodstockOrderByWithRelationInput[]
    cursor?: bloodstockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BloodstockScalarFieldEnum | BloodstockScalarFieldEnum[]
  }

  /**
   * bloodcenters.donationhistory
   */
  export type bloodcenters$donationhistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donationhistory
     */
    select?: donationhistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the donationhistory
     */
    omit?: donationhistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationhistoryInclude<ExtArgs> | null
    where?: donationhistoryWhereInput
    orderBy?: donationhistoryOrderByWithRelationInput | donationhistoryOrderByWithRelationInput[]
    cursor?: donationhistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationhistoryScalarFieldEnum | DonationhistoryScalarFieldEnum[]
  }

  /**
   * bloodcenters.subadmins
   */
  export type bloodcenters$subadminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subadmins
     */
    select?: subadminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subadmins
     */
    omit?: subadminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subadminsInclude<ExtArgs> | null
    where?: subadminsWhereInput
    orderBy?: subadminsOrderByWithRelationInput | subadminsOrderByWithRelationInput[]
    cursor?: subadminsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubadminsScalarFieldEnum | SubadminsScalarFieldEnum[]
  }

  /**
   * bloodcenters without action
   */
  export type bloodcentersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodcenters
     */
    select?: bloodcentersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodcenters
     */
    omit?: bloodcentersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodcentersInclude<ExtArgs> | null
  }


  /**
   * Model bloodrequests
   */

  export type AggregateBloodrequests = {
    _count: BloodrequestsCountAggregateOutputType | null
    _avg: BloodrequestsAvgAggregateOutputType | null
    _sum: BloodrequestsSumAggregateOutputType | null
    _min: BloodrequestsMinAggregateOutputType | null
    _max: BloodrequestsMaxAggregateOutputType | null
  }

  export type BloodrequestsAvgAggregateOutputType = {
    request_id: number | null
    staff_id: number | null
    units_needed: number | null
  }

  export type BloodrequestsSumAggregateOutputType = {
    request_id: number | null
    staff_id: number | null
    units_needed: number | null
  }

  export type BloodrequestsMinAggregateOutputType = {
    request_id: number | null
    staff_id: number | null
    request_date: Date | null
    blood_type: string | null
    units_needed: number | null
    patient_name: string | null
    status: string | null
  }

  export type BloodrequestsMaxAggregateOutputType = {
    request_id: number | null
    staff_id: number | null
    request_date: Date | null
    blood_type: string | null
    units_needed: number | null
    patient_name: string | null
    status: string | null
  }

  export type BloodrequestsCountAggregateOutputType = {
    request_id: number
    staff_id: number
    request_date: number
    blood_type: number
    units_needed: number
    patient_name: number
    status: number
    _all: number
  }


  export type BloodrequestsAvgAggregateInputType = {
    request_id?: true
    staff_id?: true
    units_needed?: true
  }

  export type BloodrequestsSumAggregateInputType = {
    request_id?: true
    staff_id?: true
    units_needed?: true
  }

  export type BloodrequestsMinAggregateInputType = {
    request_id?: true
    staff_id?: true
    request_date?: true
    blood_type?: true
    units_needed?: true
    patient_name?: true
    status?: true
  }

  export type BloodrequestsMaxAggregateInputType = {
    request_id?: true
    staff_id?: true
    request_date?: true
    blood_type?: true
    units_needed?: true
    patient_name?: true
    status?: true
  }

  export type BloodrequestsCountAggregateInputType = {
    request_id?: true
    staff_id?: true
    request_date?: true
    blood_type?: true
    units_needed?: true
    patient_name?: true
    status?: true
    _all?: true
  }

  export type BloodrequestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bloodrequests to aggregate.
     */
    where?: bloodrequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bloodrequests to fetch.
     */
    orderBy?: bloodrequestsOrderByWithRelationInput | bloodrequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bloodrequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bloodrequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bloodrequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bloodrequests
    **/
    _count?: true | BloodrequestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BloodrequestsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BloodrequestsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BloodrequestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BloodrequestsMaxAggregateInputType
  }

  export type GetBloodrequestsAggregateType<T extends BloodrequestsAggregateArgs> = {
        [P in keyof T & keyof AggregateBloodrequests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBloodrequests[P]>
      : GetScalarType<T[P], AggregateBloodrequests[P]>
  }




  export type bloodrequestsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bloodrequestsWhereInput
    orderBy?: bloodrequestsOrderByWithAggregationInput | bloodrequestsOrderByWithAggregationInput[]
    by: BloodrequestsScalarFieldEnum[] | BloodrequestsScalarFieldEnum
    having?: bloodrequestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BloodrequestsCountAggregateInputType | true
    _avg?: BloodrequestsAvgAggregateInputType
    _sum?: BloodrequestsSumAggregateInputType
    _min?: BloodrequestsMinAggregateInputType
    _max?: BloodrequestsMaxAggregateInputType
  }

  export type BloodrequestsGroupByOutputType = {
    request_id: number
    staff_id: number
    request_date: Date
    blood_type: string
    units_needed: number
    patient_name: string
    status: string | null
    _count: BloodrequestsCountAggregateOutputType | null
    _avg: BloodrequestsAvgAggregateOutputType | null
    _sum: BloodrequestsSumAggregateOutputType | null
    _min: BloodrequestsMinAggregateOutputType | null
    _max: BloodrequestsMaxAggregateOutputType | null
  }

  type GetBloodrequestsGroupByPayload<T extends bloodrequestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BloodrequestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BloodrequestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BloodrequestsGroupByOutputType[P]>
            : GetScalarType<T[P], BloodrequestsGroupByOutputType[P]>
        }
      >
    >


  export type bloodrequestsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    request_id?: boolean
    staff_id?: boolean
    request_date?: boolean
    blood_type?: boolean
    units_needed?: boolean
    patient_name?: boolean
    status?: boolean
    hospitalstaff?: boolean | hospitalstaffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloodrequests"]>

  export type bloodrequestsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    request_id?: boolean
    staff_id?: boolean
    request_date?: boolean
    blood_type?: boolean
    units_needed?: boolean
    patient_name?: boolean
    status?: boolean
    hospitalstaff?: boolean | hospitalstaffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloodrequests"]>

  export type bloodrequestsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    request_id?: boolean
    staff_id?: boolean
    request_date?: boolean
    blood_type?: boolean
    units_needed?: boolean
    patient_name?: boolean
    status?: boolean
    hospitalstaff?: boolean | hospitalstaffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloodrequests"]>

  export type bloodrequestsSelectScalar = {
    request_id?: boolean
    staff_id?: boolean
    request_date?: boolean
    blood_type?: boolean
    units_needed?: boolean
    patient_name?: boolean
    status?: boolean
  }

  export type bloodrequestsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"request_id" | "staff_id" | "request_date" | "blood_type" | "units_needed" | "patient_name" | "status", ExtArgs["result"]["bloodrequests"]>
  export type bloodrequestsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospitalstaff?: boolean | hospitalstaffDefaultArgs<ExtArgs>
  }
  export type bloodrequestsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospitalstaff?: boolean | hospitalstaffDefaultArgs<ExtArgs>
  }
  export type bloodrequestsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospitalstaff?: boolean | hospitalstaffDefaultArgs<ExtArgs>
  }

  export type $bloodrequestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bloodrequests"
    objects: {
      hospitalstaff: Prisma.$hospitalstaffPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      request_id: number
      staff_id: number
      request_date: Date
      blood_type: string
      units_needed: number
      patient_name: string
      status: string | null
    }, ExtArgs["result"]["bloodrequests"]>
    composites: {}
  }

  type bloodrequestsGetPayload<S extends boolean | null | undefined | bloodrequestsDefaultArgs> = $Result.GetResult<Prisma.$bloodrequestsPayload, S>

  type bloodrequestsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bloodrequestsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BloodrequestsCountAggregateInputType | true
    }

  export interface bloodrequestsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bloodrequests'], meta: { name: 'bloodrequests' } }
    /**
     * Find zero or one Bloodrequests that matches the filter.
     * @param {bloodrequestsFindUniqueArgs} args - Arguments to find a Bloodrequests
     * @example
     * // Get one Bloodrequests
     * const bloodrequests = await prisma.bloodrequests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bloodrequestsFindUniqueArgs>(args: SelectSubset<T, bloodrequestsFindUniqueArgs<ExtArgs>>): Prisma__bloodrequestsClient<$Result.GetResult<Prisma.$bloodrequestsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bloodrequests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bloodrequestsFindUniqueOrThrowArgs} args - Arguments to find a Bloodrequests
     * @example
     * // Get one Bloodrequests
     * const bloodrequests = await prisma.bloodrequests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bloodrequestsFindUniqueOrThrowArgs>(args: SelectSubset<T, bloodrequestsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bloodrequestsClient<$Result.GetResult<Prisma.$bloodrequestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bloodrequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bloodrequestsFindFirstArgs} args - Arguments to find a Bloodrequests
     * @example
     * // Get one Bloodrequests
     * const bloodrequests = await prisma.bloodrequests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bloodrequestsFindFirstArgs>(args?: SelectSubset<T, bloodrequestsFindFirstArgs<ExtArgs>>): Prisma__bloodrequestsClient<$Result.GetResult<Prisma.$bloodrequestsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bloodrequests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bloodrequestsFindFirstOrThrowArgs} args - Arguments to find a Bloodrequests
     * @example
     * // Get one Bloodrequests
     * const bloodrequests = await prisma.bloodrequests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bloodrequestsFindFirstOrThrowArgs>(args?: SelectSubset<T, bloodrequestsFindFirstOrThrowArgs<ExtArgs>>): Prisma__bloodrequestsClient<$Result.GetResult<Prisma.$bloodrequestsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bloodrequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bloodrequestsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bloodrequests
     * const bloodrequests = await prisma.bloodrequests.findMany()
     * 
     * // Get first 10 Bloodrequests
     * const bloodrequests = await prisma.bloodrequests.findMany({ take: 10 })
     * 
     * // Only select the `request_id`
     * const bloodrequestsWithRequest_idOnly = await prisma.bloodrequests.findMany({ select: { request_id: true } })
     * 
     */
    findMany<T extends bloodrequestsFindManyArgs>(args?: SelectSubset<T, bloodrequestsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bloodrequestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bloodrequests.
     * @param {bloodrequestsCreateArgs} args - Arguments to create a Bloodrequests.
     * @example
     * // Create one Bloodrequests
     * const Bloodrequests = await prisma.bloodrequests.create({
     *   data: {
     *     // ... data to create a Bloodrequests
     *   }
     * })
     * 
     */
    create<T extends bloodrequestsCreateArgs>(args: SelectSubset<T, bloodrequestsCreateArgs<ExtArgs>>): Prisma__bloodrequestsClient<$Result.GetResult<Prisma.$bloodrequestsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bloodrequests.
     * @param {bloodrequestsCreateManyArgs} args - Arguments to create many Bloodrequests.
     * @example
     * // Create many Bloodrequests
     * const bloodrequests = await prisma.bloodrequests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bloodrequestsCreateManyArgs>(args?: SelectSubset<T, bloodrequestsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bloodrequests and returns the data saved in the database.
     * @param {bloodrequestsCreateManyAndReturnArgs} args - Arguments to create many Bloodrequests.
     * @example
     * // Create many Bloodrequests
     * const bloodrequests = await prisma.bloodrequests.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bloodrequests and only return the `request_id`
     * const bloodrequestsWithRequest_idOnly = await prisma.bloodrequests.createManyAndReturn({
     *   select: { request_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bloodrequestsCreateManyAndReturnArgs>(args?: SelectSubset<T, bloodrequestsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bloodrequestsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bloodrequests.
     * @param {bloodrequestsDeleteArgs} args - Arguments to delete one Bloodrequests.
     * @example
     * // Delete one Bloodrequests
     * const Bloodrequests = await prisma.bloodrequests.delete({
     *   where: {
     *     // ... filter to delete one Bloodrequests
     *   }
     * })
     * 
     */
    delete<T extends bloodrequestsDeleteArgs>(args: SelectSubset<T, bloodrequestsDeleteArgs<ExtArgs>>): Prisma__bloodrequestsClient<$Result.GetResult<Prisma.$bloodrequestsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bloodrequests.
     * @param {bloodrequestsUpdateArgs} args - Arguments to update one Bloodrequests.
     * @example
     * // Update one Bloodrequests
     * const bloodrequests = await prisma.bloodrequests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bloodrequestsUpdateArgs>(args: SelectSubset<T, bloodrequestsUpdateArgs<ExtArgs>>): Prisma__bloodrequestsClient<$Result.GetResult<Prisma.$bloodrequestsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bloodrequests.
     * @param {bloodrequestsDeleteManyArgs} args - Arguments to filter Bloodrequests to delete.
     * @example
     * // Delete a few Bloodrequests
     * const { count } = await prisma.bloodrequests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bloodrequestsDeleteManyArgs>(args?: SelectSubset<T, bloodrequestsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bloodrequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bloodrequestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bloodrequests
     * const bloodrequests = await prisma.bloodrequests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bloodrequestsUpdateManyArgs>(args: SelectSubset<T, bloodrequestsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bloodrequests and returns the data updated in the database.
     * @param {bloodrequestsUpdateManyAndReturnArgs} args - Arguments to update many Bloodrequests.
     * @example
     * // Update many Bloodrequests
     * const bloodrequests = await prisma.bloodrequests.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bloodrequests and only return the `request_id`
     * const bloodrequestsWithRequest_idOnly = await prisma.bloodrequests.updateManyAndReturn({
     *   select: { request_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends bloodrequestsUpdateManyAndReturnArgs>(args: SelectSubset<T, bloodrequestsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bloodrequestsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bloodrequests.
     * @param {bloodrequestsUpsertArgs} args - Arguments to update or create a Bloodrequests.
     * @example
     * // Update or create a Bloodrequests
     * const bloodrequests = await prisma.bloodrequests.upsert({
     *   create: {
     *     // ... data to create a Bloodrequests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bloodrequests we want to update
     *   }
     * })
     */
    upsert<T extends bloodrequestsUpsertArgs>(args: SelectSubset<T, bloodrequestsUpsertArgs<ExtArgs>>): Prisma__bloodrequestsClient<$Result.GetResult<Prisma.$bloodrequestsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bloodrequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bloodrequestsCountArgs} args - Arguments to filter Bloodrequests to count.
     * @example
     * // Count the number of Bloodrequests
     * const count = await prisma.bloodrequests.count({
     *   where: {
     *     // ... the filter for the Bloodrequests we want to count
     *   }
     * })
    **/
    count<T extends bloodrequestsCountArgs>(
      args?: Subset<T, bloodrequestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BloodrequestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bloodrequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodrequestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BloodrequestsAggregateArgs>(args: Subset<T, BloodrequestsAggregateArgs>): Prisma.PrismaPromise<GetBloodrequestsAggregateType<T>>

    /**
     * Group by Bloodrequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bloodrequestsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bloodrequestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bloodrequestsGroupByArgs['orderBy'] }
        : { orderBy?: bloodrequestsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bloodrequestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBloodrequestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bloodrequests model
   */
  readonly fields: bloodrequestsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bloodrequests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bloodrequestsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hospitalstaff<T extends hospitalstaffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, hospitalstaffDefaultArgs<ExtArgs>>): Prisma__hospitalstaffClient<$Result.GetResult<Prisma.$hospitalstaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the bloodrequests model
   */
  interface bloodrequestsFieldRefs {
    readonly request_id: FieldRef<"bloodrequests", 'Int'>
    readonly staff_id: FieldRef<"bloodrequests", 'Int'>
    readonly request_date: FieldRef<"bloodrequests", 'DateTime'>
    readonly blood_type: FieldRef<"bloodrequests", 'String'>
    readonly units_needed: FieldRef<"bloodrequests", 'Int'>
    readonly patient_name: FieldRef<"bloodrequests", 'String'>
    readonly status: FieldRef<"bloodrequests", 'String'>
  }
    

  // Custom InputTypes
  /**
   * bloodrequests findUnique
   */
  export type bloodrequestsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodrequests
     */
    select?: bloodrequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodrequests
     */
    omit?: bloodrequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodrequestsInclude<ExtArgs> | null
    /**
     * Filter, which bloodrequests to fetch.
     */
    where: bloodrequestsWhereUniqueInput
  }

  /**
   * bloodrequests findUniqueOrThrow
   */
  export type bloodrequestsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodrequests
     */
    select?: bloodrequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodrequests
     */
    omit?: bloodrequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodrequestsInclude<ExtArgs> | null
    /**
     * Filter, which bloodrequests to fetch.
     */
    where: bloodrequestsWhereUniqueInput
  }

  /**
   * bloodrequests findFirst
   */
  export type bloodrequestsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodrequests
     */
    select?: bloodrequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodrequests
     */
    omit?: bloodrequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodrequestsInclude<ExtArgs> | null
    /**
     * Filter, which bloodrequests to fetch.
     */
    where?: bloodrequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bloodrequests to fetch.
     */
    orderBy?: bloodrequestsOrderByWithRelationInput | bloodrequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bloodrequests.
     */
    cursor?: bloodrequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bloodrequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bloodrequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bloodrequests.
     */
    distinct?: BloodrequestsScalarFieldEnum | BloodrequestsScalarFieldEnum[]
  }

  /**
   * bloodrequests findFirstOrThrow
   */
  export type bloodrequestsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodrequests
     */
    select?: bloodrequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodrequests
     */
    omit?: bloodrequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodrequestsInclude<ExtArgs> | null
    /**
     * Filter, which bloodrequests to fetch.
     */
    where?: bloodrequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bloodrequests to fetch.
     */
    orderBy?: bloodrequestsOrderByWithRelationInput | bloodrequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bloodrequests.
     */
    cursor?: bloodrequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bloodrequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bloodrequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bloodrequests.
     */
    distinct?: BloodrequestsScalarFieldEnum | BloodrequestsScalarFieldEnum[]
  }

  /**
   * bloodrequests findMany
   */
  export type bloodrequestsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodrequests
     */
    select?: bloodrequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodrequests
     */
    omit?: bloodrequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodrequestsInclude<ExtArgs> | null
    /**
     * Filter, which bloodrequests to fetch.
     */
    where?: bloodrequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bloodrequests to fetch.
     */
    orderBy?: bloodrequestsOrderByWithRelationInput | bloodrequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bloodrequests.
     */
    cursor?: bloodrequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bloodrequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bloodrequests.
     */
    skip?: number
    distinct?: BloodrequestsScalarFieldEnum | BloodrequestsScalarFieldEnum[]
  }

  /**
   * bloodrequests create
   */
  export type bloodrequestsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodrequests
     */
    select?: bloodrequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodrequests
     */
    omit?: bloodrequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodrequestsInclude<ExtArgs> | null
    /**
     * The data needed to create a bloodrequests.
     */
    data: XOR<bloodrequestsCreateInput, bloodrequestsUncheckedCreateInput>
  }

  /**
   * bloodrequests createMany
   */
  export type bloodrequestsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bloodrequests.
     */
    data: bloodrequestsCreateManyInput | bloodrequestsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bloodrequests createManyAndReturn
   */
  export type bloodrequestsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodrequests
     */
    select?: bloodrequestsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bloodrequests
     */
    omit?: bloodrequestsOmit<ExtArgs> | null
    /**
     * The data used to create many bloodrequests.
     */
    data: bloodrequestsCreateManyInput | bloodrequestsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodrequestsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * bloodrequests update
   */
  export type bloodrequestsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodrequests
     */
    select?: bloodrequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodrequests
     */
    omit?: bloodrequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodrequestsInclude<ExtArgs> | null
    /**
     * The data needed to update a bloodrequests.
     */
    data: XOR<bloodrequestsUpdateInput, bloodrequestsUncheckedUpdateInput>
    /**
     * Choose, which bloodrequests to update.
     */
    where: bloodrequestsWhereUniqueInput
  }

  /**
   * bloodrequests updateMany
   */
  export type bloodrequestsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bloodrequests.
     */
    data: XOR<bloodrequestsUpdateManyMutationInput, bloodrequestsUncheckedUpdateManyInput>
    /**
     * Filter which bloodrequests to update
     */
    where?: bloodrequestsWhereInput
    /**
     * Limit how many bloodrequests to update.
     */
    limit?: number
  }

  /**
   * bloodrequests updateManyAndReturn
   */
  export type bloodrequestsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodrequests
     */
    select?: bloodrequestsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bloodrequests
     */
    omit?: bloodrequestsOmit<ExtArgs> | null
    /**
     * The data used to update bloodrequests.
     */
    data: XOR<bloodrequestsUpdateManyMutationInput, bloodrequestsUncheckedUpdateManyInput>
    /**
     * Filter which bloodrequests to update
     */
    where?: bloodrequestsWhereInput
    /**
     * Limit how many bloodrequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodrequestsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * bloodrequests upsert
   */
  export type bloodrequestsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodrequests
     */
    select?: bloodrequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodrequests
     */
    omit?: bloodrequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodrequestsInclude<ExtArgs> | null
    /**
     * The filter to search for the bloodrequests to update in case it exists.
     */
    where: bloodrequestsWhereUniqueInput
    /**
     * In case the bloodrequests found by the `where` argument doesn't exist, create a new bloodrequests with this data.
     */
    create: XOR<bloodrequestsCreateInput, bloodrequestsUncheckedCreateInput>
    /**
     * In case the bloodrequests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bloodrequestsUpdateInput, bloodrequestsUncheckedUpdateInput>
  }

  /**
   * bloodrequests delete
   */
  export type bloodrequestsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodrequests
     */
    select?: bloodrequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodrequests
     */
    omit?: bloodrequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodrequestsInclude<ExtArgs> | null
    /**
     * Filter which bloodrequests to delete.
     */
    where: bloodrequestsWhereUniqueInput
  }

  /**
   * bloodrequests deleteMany
   */
  export type bloodrequestsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bloodrequests to delete
     */
    where?: bloodrequestsWhereInput
    /**
     * Limit how many bloodrequests to delete.
     */
    limit?: number
  }

  /**
   * bloodrequests without action
   */
  export type bloodrequestsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodrequests
     */
    select?: bloodrequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodrequests
     */
    omit?: bloodrequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodrequestsInclude<ExtArgs> | null
  }


  /**
   * Model bloodstock
   */

  export type AggregateBloodstock = {
    _count: BloodstockCountAggregateOutputType | null
    _avg: BloodstockAvgAggregateOutputType | null
    _sum: BloodstockSumAggregateOutputType | null
    _min: BloodstockMinAggregateOutputType | null
    _max: BloodstockMaxAggregateOutputType | null
  }

  export type BloodstockAvgAggregateOutputType = {
    stock_id: number | null
    center_id: number | null
    units_available: number | null
  }

  export type BloodstockSumAggregateOutputType = {
    stock_id: number | null
    center_id: number | null
    units_available: number | null
  }

  export type BloodstockMinAggregateOutputType = {
    stock_id: number | null
    center_id: number | null
    blood_type: string | null
    units_available: number | null
    expiration_date: Date | null
  }

  export type BloodstockMaxAggregateOutputType = {
    stock_id: number | null
    center_id: number | null
    blood_type: string | null
    units_available: number | null
    expiration_date: Date | null
  }

  export type BloodstockCountAggregateOutputType = {
    stock_id: number
    center_id: number
    blood_type: number
    units_available: number
    expiration_date: number
    _all: number
  }


  export type BloodstockAvgAggregateInputType = {
    stock_id?: true
    center_id?: true
    units_available?: true
  }

  export type BloodstockSumAggregateInputType = {
    stock_id?: true
    center_id?: true
    units_available?: true
  }

  export type BloodstockMinAggregateInputType = {
    stock_id?: true
    center_id?: true
    blood_type?: true
    units_available?: true
    expiration_date?: true
  }

  export type BloodstockMaxAggregateInputType = {
    stock_id?: true
    center_id?: true
    blood_type?: true
    units_available?: true
    expiration_date?: true
  }

  export type BloodstockCountAggregateInputType = {
    stock_id?: true
    center_id?: true
    blood_type?: true
    units_available?: true
    expiration_date?: true
    _all?: true
  }

  export type BloodstockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bloodstock to aggregate.
     */
    where?: bloodstockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bloodstocks to fetch.
     */
    orderBy?: bloodstockOrderByWithRelationInput | bloodstockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bloodstockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bloodstocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bloodstocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bloodstocks
    **/
    _count?: true | BloodstockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BloodstockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BloodstockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BloodstockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BloodstockMaxAggregateInputType
  }

  export type GetBloodstockAggregateType<T extends BloodstockAggregateArgs> = {
        [P in keyof T & keyof AggregateBloodstock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBloodstock[P]>
      : GetScalarType<T[P], AggregateBloodstock[P]>
  }




  export type bloodstockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bloodstockWhereInput
    orderBy?: bloodstockOrderByWithAggregationInput | bloodstockOrderByWithAggregationInput[]
    by: BloodstockScalarFieldEnum[] | BloodstockScalarFieldEnum
    having?: bloodstockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BloodstockCountAggregateInputType | true
    _avg?: BloodstockAvgAggregateInputType
    _sum?: BloodstockSumAggregateInputType
    _min?: BloodstockMinAggregateInputType
    _max?: BloodstockMaxAggregateInputType
  }

  export type BloodstockGroupByOutputType = {
    stock_id: number
    center_id: number
    blood_type: string
    units_available: number
    expiration_date: Date
    _count: BloodstockCountAggregateOutputType | null
    _avg: BloodstockAvgAggregateOutputType | null
    _sum: BloodstockSumAggregateOutputType | null
    _min: BloodstockMinAggregateOutputType | null
    _max: BloodstockMaxAggregateOutputType | null
  }

  type GetBloodstockGroupByPayload<T extends bloodstockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BloodstockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BloodstockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BloodstockGroupByOutputType[P]>
            : GetScalarType<T[P], BloodstockGroupByOutputType[P]>
        }
      >
    >


  export type bloodstockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    stock_id?: boolean
    center_id?: boolean
    blood_type?: boolean
    units_available?: boolean
    expiration_date?: boolean
    bloodcenters?: boolean | bloodcentersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloodstock"]>

  export type bloodstockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    stock_id?: boolean
    center_id?: boolean
    blood_type?: boolean
    units_available?: boolean
    expiration_date?: boolean
    bloodcenters?: boolean | bloodcentersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloodstock"]>

  export type bloodstockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    stock_id?: boolean
    center_id?: boolean
    blood_type?: boolean
    units_available?: boolean
    expiration_date?: boolean
    bloodcenters?: boolean | bloodcentersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloodstock"]>

  export type bloodstockSelectScalar = {
    stock_id?: boolean
    center_id?: boolean
    blood_type?: boolean
    units_available?: boolean
    expiration_date?: boolean
  }

  export type bloodstockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"stock_id" | "center_id" | "blood_type" | "units_available" | "expiration_date", ExtArgs["result"]["bloodstock"]>
  export type bloodstockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bloodcenters?: boolean | bloodcentersDefaultArgs<ExtArgs>
  }
  export type bloodstockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bloodcenters?: boolean | bloodcentersDefaultArgs<ExtArgs>
  }
  export type bloodstockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bloodcenters?: boolean | bloodcentersDefaultArgs<ExtArgs>
  }

  export type $bloodstockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bloodstock"
    objects: {
      bloodcenters: Prisma.$bloodcentersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      stock_id: number
      center_id: number
      blood_type: string
      units_available: number
      expiration_date: Date
    }, ExtArgs["result"]["bloodstock"]>
    composites: {}
  }

  type bloodstockGetPayload<S extends boolean | null | undefined | bloodstockDefaultArgs> = $Result.GetResult<Prisma.$bloodstockPayload, S>

  type bloodstockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bloodstockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BloodstockCountAggregateInputType | true
    }

  export interface bloodstockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bloodstock'], meta: { name: 'bloodstock' } }
    /**
     * Find zero or one Bloodstock that matches the filter.
     * @param {bloodstockFindUniqueArgs} args - Arguments to find a Bloodstock
     * @example
     * // Get one Bloodstock
     * const bloodstock = await prisma.bloodstock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bloodstockFindUniqueArgs>(args: SelectSubset<T, bloodstockFindUniqueArgs<ExtArgs>>): Prisma__bloodstockClient<$Result.GetResult<Prisma.$bloodstockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bloodstock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bloodstockFindUniqueOrThrowArgs} args - Arguments to find a Bloodstock
     * @example
     * // Get one Bloodstock
     * const bloodstock = await prisma.bloodstock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bloodstockFindUniqueOrThrowArgs>(args: SelectSubset<T, bloodstockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bloodstockClient<$Result.GetResult<Prisma.$bloodstockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bloodstock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bloodstockFindFirstArgs} args - Arguments to find a Bloodstock
     * @example
     * // Get one Bloodstock
     * const bloodstock = await prisma.bloodstock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bloodstockFindFirstArgs>(args?: SelectSubset<T, bloodstockFindFirstArgs<ExtArgs>>): Prisma__bloodstockClient<$Result.GetResult<Prisma.$bloodstockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bloodstock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bloodstockFindFirstOrThrowArgs} args - Arguments to find a Bloodstock
     * @example
     * // Get one Bloodstock
     * const bloodstock = await prisma.bloodstock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bloodstockFindFirstOrThrowArgs>(args?: SelectSubset<T, bloodstockFindFirstOrThrowArgs<ExtArgs>>): Prisma__bloodstockClient<$Result.GetResult<Prisma.$bloodstockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bloodstocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bloodstockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bloodstocks
     * const bloodstocks = await prisma.bloodstock.findMany()
     * 
     * // Get first 10 Bloodstocks
     * const bloodstocks = await prisma.bloodstock.findMany({ take: 10 })
     * 
     * // Only select the `stock_id`
     * const bloodstockWithStock_idOnly = await prisma.bloodstock.findMany({ select: { stock_id: true } })
     * 
     */
    findMany<T extends bloodstockFindManyArgs>(args?: SelectSubset<T, bloodstockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bloodstockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bloodstock.
     * @param {bloodstockCreateArgs} args - Arguments to create a Bloodstock.
     * @example
     * // Create one Bloodstock
     * const Bloodstock = await prisma.bloodstock.create({
     *   data: {
     *     // ... data to create a Bloodstock
     *   }
     * })
     * 
     */
    create<T extends bloodstockCreateArgs>(args: SelectSubset<T, bloodstockCreateArgs<ExtArgs>>): Prisma__bloodstockClient<$Result.GetResult<Prisma.$bloodstockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bloodstocks.
     * @param {bloodstockCreateManyArgs} args - Arguments to create many Bloodstocks.
     * @example
     * // Create many Bloodstocks
     * const bloodstock = await prisma.bloodstock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bloodstockCreateManyArgs>(args?: SelectSubset<T, bloodstockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bloodstocks and returns the data saved in the database.
     * @param {bloodstockCreateManyAndReturnArgs} args - Arguments to create many Bloodstocks.
     * @example
     * // Create many Bloodstocks
     * const bloodstock = await prisma.bloodstock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bloodstocks and only return the `stock_id`
     * const bloodstockWithStock_idOnly = await prisma.bloodstock.createManyAndReturn({
     *   select: { stock_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bloodstockCreateManyAndReturnArgs>(args?: SelectSubset<T, bloodstockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bloodstockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bloodstock.
     * @param {bloodstockDeleteArgs} args - Arguments to delete one Bloodstock.
     * @example
     * // Delete one Bloodstock
     * const Bloodstock = await prisma.bloodstock.delete({
     *   where: {
     *     // ... filter to delete one Bloodstock
     *   }
     * })
     * 
     */
    delete<T extends bloodstockDeleteArgs>(args: SelectSubset<T, bloodstockDeleteArgs<ExtArgs>>): Prisma__bloodstockClient<$Result.GetResult<Prisma.$bloodstockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bloodstock.
     * @param {bloodstockUpdateArgs} args - Arguments to update one Bloodstock.
     * @example
     * // Update one Bloodstock
     * const bloodstock = await prisma.bloodstock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bloodstockUpdateArgs>(args: SelectSubset<T, bloodstockUpdateArgs<ExtArgs>>): Prisma__bloodstockClient<$Result.GetResult<Prisma.$bloodstockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bloodstocks.
     * @param {bloodstockDeleteManyArgs} args - Arguments to filter Bloodstocks to delete.
     * @example
     * // Delete a few Bloodstocks
     * const { count } = await prisma.bloodstock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bloodstockDeleteManyArgs>(args?: SelectSubset<T, bloodstockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bloodstocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bloodstockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bloodstocks
     * const bloodstock = await prisma.bloodstock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bloodstockUpdateManyArgs>(args: SelectSubset<T, bloodstockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bloodstocks and returns the data updated in the database.
     * @param {bloodstockUpdateManyAndReturnArgs} args - Arguments to update many Bloodstocks.
     * @example
     * // Update many Bloodstocks
     * const bloodstock = await prisma.bloodstock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bloodstocks and only return the `stock_id`
     * const bloodstockWithStock_idOnly = await prisma.bloodstock.updateManyAndReturn({
     *   select: { stock_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends bloodstockUpdateManyAndReturnArgs>(args: SelectSubset<T, bloodstockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bloodstockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bloodstock.
     * @param {bloodstockUpsertArgs} args - Arguments to update or create a Bloodstock.
     * @example
     * // Update or create a Bloodstock
     * const bloodstock = await prisma.bloodstock.upsert({
     *   create: {
     *     // ... data to create a Bloodstock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bloodstock we want to update
     *   }
     * })
     */
    upsert<T extends bloodstockUpsertArgs>(args: SelectSubset<T, bloodstockUpsertArgs<ExtArgs>>): Prisma__bloodstockClient<$Result.GetResult<Prisma.$bloodstockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bloodstocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bloodstockCountArgs} args - Arguments to filter Bloodstocks to count.
     * @example
     * // Count the number of Bloodstocks
     * const count = await prisma.bloodstock.count({
     *   where: {
     *     // ... the filter for the Bloodstocks we want to count
     *   }
     * })
    **/
    count<T extends bloodstockCountArgs>(
      args?: Subset<T, bloodstockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BloodstockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bloodstock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodstockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BloodstockAggregateArgs>(args: Subset<T, BloodstockAggregateArgs>): Prisma.PrismaPromise<GetBloodstockAggregateType<T>>

    /**
     * Group by Bloodstock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bloodstockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bloodstockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bloodstockGroupByArgs['orderBy'] }
        : { orderBy?: bloodstockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bloodstockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBloodstockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bloodstock model
   */
  readonly fields: bloodstockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bloodstock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bloodstockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bloodcenters<T extends bloodcentersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bloodcentersDefaultArgs<ExtArgs>>): Prisma__bloodcentersClient<$Result.GetResult<Prisma.$bloodcentersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the bloodstock model
   */
  interface bloodstockFieldRefs {
    readonly stock_id: FieldRef<"bloodstock", 'Int'>
    readonly center_id: FieldRef<"bloodstock", 'Int'>
    readonly blood_type: FieldRef<"bloodstock", 'String'>
    readonly units_available: FieldRef<"bloodstock", 'Int'>
    readonly expiration_date: FieldRef<"bloodstock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * bloodstock findUnique
   */
  export type bloodstockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodstock
     */
    select?: bloodstockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodstock
     */
    omit?: bloodstockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodstockInclude<ExtArgs> | null
    /**
     * Filter, which bloodstock to fetch.
     */
    where: bloodstockWhereUniqueInput
  }

  /**
   * bloodstock findUniqueOrThrow
   */
  export type bloodstockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodstock
     */
    select?: bloodstockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodstock
     */
    omit?: bloodstockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodstockInclude<ExtArgs> | null
    /**
     * Filter, which bloodstock to fetch.
     */
    where: bloodstockWhereUniqueInput
  }

  /**
   * bloodstock findFirst
   */
  export type bloodstockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodstock
     */
    select?: bloodstockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodstock
     */
    omit?: bloodstockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodstockInclude<ExtArgs> | null
    /**
     * Filter, which bloodstock to fetch.
     */
    where?: bloodstockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bloodstocks to fetch.
     */
    orderBy?: bloodstockOrderByWithRelationInput | bloodstockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bloodstocks.
     */
    cursor?: bloodstockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bloodstocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bloodstocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bloodstocks.
     */
    distinct?: BloodstockScalarFieldEnum | BloodstockScalarFieldEnum[]
  }

  /**
   * bloodstock findFirstOrThrow
   */
  export type bloodstockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodstock
     */
    select?: bloodstockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodstock
     */
    omit?: bloodstockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodstockInclude<ExtArgs> | null
    /**
     * Filter, which bloodstock to fetch.
     */
    where?: bloodstockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bloodstocks to fetch.
     */
    orderBy?: bloodstockOrderByWithRelationInput | bloodstockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bloodstocks.
     */
    cursor?: bloodstockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bloodstocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bloodstocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bloodstocks.
     */
    distinct?: BloodstockScalarFieldEnum | BloodstockScalarFieldEnum[]
  }

  /**
   * bloodstock findMany
   */
  export type bloodstockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodstock
     */
    select?: bloodstockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodstock
     */
    omit?: bloodstockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodstockInclude<ExtArgs> | null
    /**
     * Filter, which bloodstocks to fetch.
     */
    where?: bloodstockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bloodstocks to fetch.
     */
    orderBy?: bloodstockOrderByWithRelationInput | bloodstockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bloodstocks.
     */
    cursor?: bloodstockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bloodstocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bloodstocks.
     */
    skip?: number
    distinct?: BloodstockScalarFieldEnum | BloodstockScalarFieldEnum[]
  }

  /**
   * bloodstock create
   */
  export type bloodstockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodstock
     */
    select?: bloodstockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodstock
     */
    omit?: bloodstockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodstockInclude<ExtArgs> | null
    /**
     * The data needed to create a bloodstock.
     */
    data: XOR<bloodstockCreateInput, bloodstockUncheckedCreateInput>
  }

  /**
   * bloodstock createMany
   */
  export type bloodstockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bloodstocks.
     */
    data: bloodstockCreateManyInput | bloodstockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bloodstock createManyAndReturn
   */
  export type bloodstockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodstock
     */
    select?: bloodstockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bloodstock
     */
    omit?: bloodstockOmit<ExtArgs> | null
    /**
     * The data used to create many bloodstocks.
     */
    data: bloodstockCreateManyInput | bloodstockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodstockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * bloodstock update
   */
  export type bloodstockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodstock
     */
    select?: bloodstockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodstock
     */
    omit?: bloodstockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodstockInclude<ExtArgs> | null
    /**
     * The data needed to update a bloodstock.
     */
    data: XOR<bloodstockUpdateInput, bloodstockUncheckedUpdateInput>
    /**
     * Choose, which bloodstock to update.
     */
    where: bloodstockWhereUniqueInput
  }

  /**
   * bloodstock updateMany
   */
  export type bloodstockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bloodstocks.
     */
    data: XOR<bloodstockUpdateManyMutationInput, bloodstockUncheckedUpdateManyInput>
    /**
     * Filter which bloodstocks to update
     */
    where?: bloodstockWhereInput
    /**
     * Limit how many bloodstocks to update.
     */
    limit?: number
  }

  /**
   * bloodstock updateManyAndReturn
   */
  export type bloodstockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodstock
     */
    select?: bloodstockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bloodstock
     */
    omit?: bloodstockOmit<ExtArgs> | null
    /**
     * The data used to update bloodstocks.
     */
    data: XOR<bloodstockUpdateManyMutationInput, bloodstockUncheckedUpdateManyInput>
    /**
     * Filter which bloodstocks to update
     */
    where?: bloodstockWhereInput
    /**
     * Limit how many bloodstocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodstockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * bloodstock upsert
   */
  export type bloodstockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodstock
     */
    select?: bloodstockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodstock
     */
    omit?: bloodstockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodstockInclude<ExtArgs> | null
    /**
     * The filter to search for the bloodstock to update in case it exists.
     */
    where: bloodstockWhereUniqueInput
    /**
     * In case the bloodstock found by the `where` argument doesn't exist, create a new bloodstock with this data.
     */
    create: XOR<bloodstockCreateInput, bloodstockUncheckedCreateInput>
    /**
     * In case the bloodstock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bloodstockUpdateInput, bloodstockUncheckedUpdateInput>
  }

  /**
   * bloodstock delete
   */
  export type bloodstockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodstock
     */
    select?: bloodstockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodstock
     */
    omit?: bloodstockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodstockInclude<ExtArgs> | null
    /**
     * Filter which bloodstock to delete.
     */
    where: bloodstockWhereUniqueInput
  }

  /**
   * bloodstock deleteMany
   */
  export type bloodstockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bloodstocks to delete
     */
    where?: bloodstockWhereInput
    /**
     * Limit how many bloodstocks to delete.
     */
    limit?: number
  }

  /**
   * bloodstock without action
   */
  export type bloodstockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodstock
     */
    select?: bloodstockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodstock
     */
    omit?: bloodstockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodstockInclude<ExtArgs> | null
  }


  /**
   * Model donationhistory
   */

  export type AggregateDonationhistory = {
    _count: DonationhistoryCountAggregateOutputType | null
    _avg: DonationhistoryAvgAggregateOutputType | null
    _sum: DonationhistorySumAggregateOutputType | null
    _min: DonationhistoryMinAggregateOutputType | null
    _max: DonationhistoryMaxAggregateOutputType | null
  }

  export type DonationhistoryAvgAggregateOutputType = {
    donation_id: number | null
    donor_id: number | null
    center_id: number | null
    amount_donated: Decimal | null
  }

  export type DonationhistorySumAggregateOutputType = {
    donation_id: number | null
    donor_id: number | null
    center_id: number | null
    amount_donated: Decimal | null
  }

  export type DonationhistoryMinAggregateOutputType = {
    donation_id: number | null
    donor_id: number | null
    center_id: number | null
    donation_date: Date | null
    amount_donated: Decimal | null
    status: string | null
  }

  export type DonationhistoryMaxAggregateOutputType = {
    donation_id: number | null
    donor_id: number | null
    center_id: number | null
    donation_date: Date | null
    amount_donated: Decimal | null
    status: string | null
  }

  export type DonationhistoryCountAggregateOutputType = {
    donation_id: number
    donor_id: number
    center_id: number
    donation_date: number
    amount_donated: number
    status: number
    _all: number
  }


  export type DonationhistoryAvgAggregateInputType = {
    donation_id?: true
    donor_id?: true
    center_id?: true
    amount_donated?: true
  }

  export type DonationhistorySumAggregateInputType = {
    donation_id?: true
    donor_id?: true
    center_id?: true
    amount_donated?: true
  }

  export type DonationhistoryMinAggregateInputType = {
    donation_id?: true
    donor_id?: true
    center_id?: true
    donation_date?: true
    amount_donated?: true
    status?: true
  }

  export type DonationhistoryMaxAggregateInputType = {
    donation_id?: true
    donor_id?: true
    center_id?: true
    donation_date?: true
    amount_donated?: true
    status?: true
  }

  export type DonationhistoryCountAggregateInputType = {
    donation_id?: true
    donor_id?: true
    center_id?: true
    donation_date?: true
    amount_donated?: true
    status?: true
    _all?: true
  }

  export type DonationhistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which donationhistory to aggregate.
     */
    where?: donationhistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of donationhistories to fetch.
     */
    orderBy?: donationhistoryOrderByWithRelationInput | donationhistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: donationhistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` donationhistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` donationhistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned donationhistories
    **/
    _count?: true | DonationhistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonationhistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonationhistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonationhistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonationhistoryMaxAggregateInputType
  }

  export type GetDonationhistoryAggregateType<T extends DonationhistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateDonationhistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonationhistory[P]>
      : GetScalarType<T[P], AggregateDonationhistory[P]>
  }




  export type donationhistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: donationhistoryWhereInput
    orderBy?: donationhistoryOrderByWithAggregationInput | donationhistoryOrderByWithAggregationInput[]
    by: DonationhistoryScalarFieldEnum[] | DonationhistoryScalarFieldEnum
    having?: donationhistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonationhistoryCountAggregateInputType | true
    _avg?: DonationhistoryAvgAggregateInputType
    _sum?: DonationhistorySumAggregateInputType
    _min?: DonationhistoryMinAggregateInputType
    _max?: DonationhistoryMaxAggregateInputType
  }

  export type DonationhistoryGroupByOutputType = {
    donation_id: number
    donor_id: number
    center_id: number
    donation_date: Date
    amount_donated: Decimal
    status: string | null
    _count: DonationhistoryCountAggregateOutputType | null
    _avg: DonationhistoryAvgAggregateOutputType | null
    _sum: DonationhistorySumAggregateOutputType | null
    _min: DonationhistoryMinAggregateOutputType | null
    _max: DonationhistoryMaxAggregateOutputType | null
  }

  type GetDonationhistoryGroupByPayload<T extends donationhistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonationhistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonationhistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonationhistoryGroupByOutputType[P]>
            : GetScalarType<T[P], DonationhistoryGroupByOutputType[P]>
        }
      >
    >


  export type donationhistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    donation_id?: boolean
    donor_id?: boolean
    center_id?: boolean
    donation_date?: boolean
    amount_donated?: boolean
    status?: boolean
    bloodcenters?: boolean | bloodcentersDefaultArgs<ExtArgs>
    donors?: boolean | donorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donationhistory"]>

  export type donationhistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    donation_id?: boolean
    donor_id?: boolean
    center_id?: boolean
    donation_date?: boolean
    amount_donated?: boolean
    status?: boolean
    bloodcenters?: boolean | bloodcentersDefaultArgs<ExtArgs>
    donors?: boolean | donorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donationhistory"]>

  export type donationhistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    donation_id?: boolean
    donor_id?: boolean
    center_id?: boolean
    donation_date?: boolean
    amount_donated?: boolean
    status?: boolean
    bloodcenters?: boolean | bloodcentersDefaultArgs<ExtArgs>
    donors?: boolean | donorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donationhistory"]>

  export type donationhistorySelectScalar = {
    donation_id?: boolean
    donor_id?: boolean
    center_id?: boolean
    donation_date?: boolean
    amount_donated?: boolean
    status?: boolean
  }

  export type donationhistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"donation_id" | "donor_id" | "center_id" | "donation_date" | "amount_donated" | "status", ExtArgs["result"]["donationhistory"]>
  export type donationhistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bloodcenters?: boolean | bloodcentersDefaultArgs<ExtArgs>
    donors?: boolean | donorsDefaultArgs<ExtArgs>
  }
  export type donationhistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bloodcenters?: boolean | bloodcentersDefaultArgs<ExtArgs>
    donors?: boolean | donorsDefaultArgs<ExtArgs>
  }
  export type donationhistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bloodcenters?: boolean | bloodcentersDefaultArgs<ExtArgs>
    donors?: boolean | donorsDefaultArgs<ExtArgs>
  }

  export type $donationhistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "donationhistory"
    objects: {
      bloodcenters: Prisma.$bloodcentersPayload<ExtArgs>
      donors: Prisma.$donorsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      donation_id: number
      donor_id: number
      center_id: number
      donation_date: Date
      amount_donated: Prisma.Decimal
      status: string | null
    }, ExtArgs["result"]["donationhistory"]>
    composites: {}
  }

  type donationhistoryGetPayload<S extends boolean | null | undefined | donationhistoryDefaultArgs> = $Result.GetResult<Prisma.$donationhistoryPayload, S>

  type donationhistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<donationhistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonationhistoryCountAggregateInputType | true
    }

  export interface donationhistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['donationhistory'], meta: { name: 'donationhistory' } }
    /**
     * Find zero or one Donationhistory that matches the filter.
     * @param {donationhistoryFindUniqueArgs} args - Arguments to find a Donationhistory
     * @example
     * // Get one Donationhistory
     * const donationhistory = await prisma.donationhistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends donationhistoryFindUniqueArgs>(args: SelectSubset<T, donationhistoryFindUniqueArgs<ExtArgs>>): Prisma__donationhistoryClient<$Result.GetResult<Prisma.$donationhistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Donationhistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {donationhistoryFindUniqueOrThrowArgs} args - Arguments to find a Donationhistory
     * @example
     * // Get one Donationhistory
     * const donationhistory = await prisma.donationhistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends donationhistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, donationhistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__donationhistoryClient<$Result.GetResult<Prisma.$donationhistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donationhistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donationhistoryFindFirstArgs} args - Arguments to find a Donationhistory
     * @example
     * // Get one Donationhistory
     * const donationhistory = await prisma.donationhistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends donationhistoryFindFirstArgs>(args?: SelectSubset<T, donationhistoryFindFirstArgs<ExtArgs>>): Prisma__donationhistoryClient<$Result.GetResult<Prisma.$donationhistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donationhistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donationhistoryFindFirstOrThrowArgs} args - Arguments to find a Donationhistory
     * @example
     * // Get one Donationhistory
     * const donationhistory = await prisma.donationhistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends donationhistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, donationhistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__donationhistoryClient<$Result.GetResult<Prisma.$donationhistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Donationhistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donationhistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donationhistories
     * const donationhistories = await prisma.donationhistory.findMany()
     * 
     * // Get first 10 Donationhistories
     * const donationhistories = await prisma.donationhistory.findMany({ take: 10 })
     * 
     * // Only select the `donation_id`
     * const donationhistoryWithDonation_idOnly = await prisma.donationhistory.findMany({ select: { donation_id: true } })
     * 
     */
    findMany<T extends donationhistoryFindManyArgs>(args?: SelectSubset<T, donationhistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$donationhistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Donationhistory.
     * @param {donationhistoryCreateArgs} args - Arguments to create a Donationhistory.
     * @example
     * // Create one Donationhistory
     * const Donationhistory = await prisma.donationhistory.create({
     *   data: {
     *     // ... data to create a Donationhistory
     *   }
     * })
     * 
     */
    create<T extends donationhistoryCreateArgs>(args: SelectSubset<T, donationhistoryCreateArgs<ExtArgs>>): Prisma__donationhistoryClient<$Result.GetResult<Prisma.$donationhistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Donationhistories.
     * @param {donationhistoryCreateManyArgs} args - Arguments to create many Donationhistories.
     * @example
     * // Create many Donationhistories
     * const donationhistory = await prisma.donationhistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends donationhistoryCreateManyArgs>(args?: SelectSubset<T, donationhistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Donationhistories and returns the data saved in the database.
     * @param {donationhistoryCreateManyAndReturnArgs} args - Arguments to create many Donationhistories.
     * @example
     * // Create many Donationhistories
     * const donationhistory = await prisma.donationhistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Donationhistories and only return the `donation_id`
     * const donationhistoryWithDonation_idOnly = await prisma.donationhistory.createManyAndReturn({
     *   select: { donation_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends donationhistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, donationhistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$donationhistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Donationhistory.
     * @param {donationhistoryDeleteArgs} args - Arguments to delete one Donationhistory.
     * @example
     * // Delete one Donationhistory
     * const Donationhistory = await prisma.donationhistory.delete({
     *   where: {
     *     // ... filter to delete one Donationhistory
     *   }
     * })
     * 
     */
    delete<T extends donationhistoryDeleteArgs>(args: SelectSubset<T, donationhistoryDeleteArgs<ExtArgs>>): Prisma__donationhistoryClient<$Result.GetResult<Prisma.$donationhistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Donationhistory.
     * @param {donationhistoryUpdateArgs} args - Arguments to update one Donationhistory.
     * @example
     * // Update one Donationhistory
     * const donationhistory = await prisma.donationhistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends donationhistoryUpdateArgs>(args: SelectSubset<T, donationhistoryUpdateArgs<ExtArgs>>): Prisma__donationhistoryClient<$Result.GetResult<Prisma.$donationhistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Donationhistories.
     * @param {donationhistoryDeleteManyArgs} args - Arguments to filter Donationhistories to delete.
     * @example
     * // Delete a few Donationhistories
     * const { count } = await prisma.donationhistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends donationhistoryDeleteManyArgs>(args?: SelectSubset<T, donationhistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donationhistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donationhistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donationhistories
     * const donationhistory = await prisma.donationhistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends donationhistoryUpdateManyArgs>(args: SelectSubset<T, donationhistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donationhistories and returns the data updated in the database.
     * @param {donationhistoryUpdateManyAndReturnArgs} args - Arguments to update many Donationhistories.
     * @example
     * // Update many Donationhistories
     * const donationhistory = await prisma.donationhistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Donationhistories and only return the `donation_id`
     * const donationhistoryWithDonation_idOnly = await prisma.donationhistory.updateManyAndReturn({
     *   select: { donation_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends donationhistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, donationhistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$donationhistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Donationhistory.
     * @param {donationhistoryUpsertArgs} args - Arguments to update or create a Donationhistory.
     * @example
     * // Update or create a Donationhistory
     * const donationhistory = await prisma.donationhistory.upsert({
     *   create: {
     *     // ... data to create a Donationhistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donationhistory we want to update
     *   }
     * })
     */
    upsert<T extends donationhistoryUpsertArgs>(args: SelectSubset<T, donationhistoryUpsertArgs<ExtArgs>>): Prisma__donationhistoryClient<$Result.GetResult<Prisma.$donationhistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Donationhistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donationhistoryCountArgs} args - Arguments to filter Donationhistories to count.
     * @example
     * // Count the number of Donationhistories
     * const count = await prisma.donationhistory.count({
     *   where: {
     *     // ... the filter for the Donationhistories we want to count
     *   }
     * })
    **/
    count<T extends donationhistoryCountArgs>(
      args?: Subset<T, donationhistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonationhistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Donationhistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationhistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonationhistoryAggregateArgs>(args: Subset<T, DonationhistoryAggregateArgs>): Prisma.PrismaPromise<GetDonationhistoryAggregateType<T>>

    /**
     * Group by Donationhistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donationhistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends donationhistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: donationhistoryGroupByArgs['orderBy'] }
        : { orderBy?: donationhistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, donationhistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonationhistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the donationhistory model
   */
  readonly fields: donationhistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for donationhistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__donationhistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bloodcenters<T extends bloodcentersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bloodcentersDefaultArgs<ExtArgs>>): Prisma__bloodcentersClient<$Result.GetResult<Prisma.$bloodcentersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    donors<T extends donorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, donorsDefaultArgs<ExtArgs>>): Prisma__donorsClient<$Result.GetResult<Prisma.$donorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the donationhistory model
   */
  interface donationhistoryFieldRefs {
    readonly donation_id: FieldRef<"donationhistory", 'Int'>
    readonly donor_id: FieldRef<"donationhistory", 'Int'>
    readonly center_id: FieldRef<"donationhistory", 'Int'>
    readonly donation_date: FieldRef<"donationhistory", 'DateTime'>
    readonly amount_donated: FieldRef<"donationhistory", 'Decimal'>
    readonly status: FieldRef<"donationhistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * donationhistory findUnique
   */
  export type donationhistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donationhistory
     */
    select?: donationhistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the donationhistory
     */
    omit?: donationhistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationhistoryInclude<ExtArgs> | null
    /**
     * Filter, which donationhistory to fetch.
     */
    where: donationhistoryWhereUniqueInput
  }

  /**
   * donationhistory findUniqueOrThrow
   */
  export type donationhistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donationhistory
     */
    select?: donationhistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the donationhistory
     */
    omit?: donationhistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationhistoryInclude<ExtArgs> | null
    /**
     * Filter, which donationhistory to fetch.
     */
    where: donationhistoryWhereUniqueInput
  }

  /**
   * donationhistory findFirst
   */
  export type donationhistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donationhistory
     */
    select?: donationhistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the donationhistory
     */
    omit?: donationhistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationhistoryInclude<ExtArgs> | null
    /**
     * Filter, which donationhistory to fetch.
     */
    where?: donationhistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of donationhistories to fetch.
     */
    orderBy?: donationhistoryOrderByWithRelationInput | donationhistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for donationhistories.
     */
    cursor?: donationhistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` donationhistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` donationhistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of donationhistories.
     */
    distinct?: DonationhistoryScalarFieldEnum | DonationhistoryScalarFieldEnum[]
  }

  /**
   * donationhistory findFirstOrThrow
   */
  export type donationhistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donationhistory
     */
    select?: donationhistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the donationhistory
     */
    omit?: donationhistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationhistoryInclude<ExtArgs> | null
    /**
     * Filter, which donationhistory to fetch.
     */
    where?: donationhistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of donationhistories to fetch.
     */
    orderBy?: donationhistoryOrderByWithRelationInput | donationhistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for donationhistories.
     */
    cursor?: donationhistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` donationhistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` donationhistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of donationhistories.
     */
    distinct?: DonationhistoryScalarFieldEnum | DonationhistoryScalarFieldEnum[]
  }

  /**
   * donationhistory findMany
   */
  export type donationhistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donationhistory
     */
    select?: donationhistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the donationhistory
     */
    omit?: donationhistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationhistoryInclude<ExtArgs> | null
    /**
     * Filter, which donationhistories to fetch.
     */
    where?: donationhistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of donationhistories to fetch.
     */
    orderBy?: donationhistoryOrderByWithRelationInput | donationhistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing donationhistories.
     */
    cursor?: donationhistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` donationhistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` donationhistories.
     */
    skip?: number
    distinct?: DonationhistoryScalarFieldEnum | DonationhistoryScalarFieldEnum[]
  }

  /**
   * donationhistory create
   */
  export type donationhistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donationhistory
     */
    select?: donationhistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the donationhistory
     */
    omit?: donationhistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationhistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a donationhistory.
     */
    data: XOR<donationhistoryCreateInput, donationhistoryUncheckedCreateInput>
  }

  /**
   * donationhistory createMany
   */
  export type donationhistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many donationhistories.
     */
    data: donationhistoryCreateManyInput | donationhistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * donationhistory createManyAndReturn
   */
  export type donationhistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donationhistory
     */
    select?: donationhistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the donationhistory
     */
    omit?: donationhistoryOmit<ExtArgs> | null
    /**
     * The data used to create many donationhistories.
     */
    data: donationhistoryCreateManyInput | donationhistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationhistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * donationhistory update
   */
  export type donationhistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donationhistory
     */
    select?: donationhistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the donationhistory
     */
    omit?: donationhistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationhistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a donationhistory.
     */
    data: XOR<donationhistoryUpdateInput, donationhistoryUncheckedUpdateInput>
    /**
     * Choose, which donationhistory to update.
     */
    where: donationhistoryWhereUniqueInput
  }

  /**
   * donationhistory updateMany
   */
  export type donationhistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update donationhistories.
     */
    data: XOR<donationhistoryUpdateManyMutationInput, donationhistoryUncheckedUpdateManyInput>
    /**
     * Filter which donationhistories to update
     */
    where?: donationhistoryWhereInput
    /**
     * Limit how many donationhistories to update.
     */
    limit?: number
  }

  /**
   * donationhistory updateManyAndReturn
   */
  export type donationhistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donationhistory
     */
    select?: donationhistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the donationhistory
     */
    omit?: donationhistoryOmit<ExtArgs> | null
    /**
     * The data used to update donationhistories.
     */
    data: XOR<donationhistoryUpdateManyMutationInput, donationhistoryUncheckedUpdateManyInput>
    /**
     * Filter which donationhistories to update
     */
    where?: donationhistoryWhereInput
    /**
     * Limit how many donationhistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationhistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * donationhistory upsert
   */
  export type donationhistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donationhistory
     */
    select?: donationhistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the donationhistory
     */
    omit?: donationhistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationhistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the donationhistory to update in case it exists.
     */
    where: donationhistoryWhereUniqueInput
    /**
     * In case the donationhistory found by the `where` argument doesn't exist, create a new donationhistory with this data.
     */
    create: XOR<donationhistoryCreateInput, donationhistoryUncheckedCreateInput>
    /**
     * In case the donationhistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<donationhistoryUpdateInput, donationhistoryUncheckedUpdateInput>
  }

  /**
   * donationhistory delete
   */
  export type donationhistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donationhistory
     */
    select?: donationhistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the donationhistory
     */
    omit?: donationhistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationhistoryInclude<ExtArgs> | null
    /**
     * Filter which donationhistory to delete.
     */
    where: donationhistoryWhereUniqueInput
  }

  /**
   * donationhistory deleteMany
   */
  export type donationhistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which donationhistories to delete
     */
    where?: donationhistoryWhereInput
    /**
     * Limit how many donationhistories to delete.
     */
    limit?: number
  }

  /**
   * donationhistory without action
   */
  export type donationhistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donationhistory
     */
    select?: donationhistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the donationhistory
     */
    omit?: donationhistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationhistoryInclude<ExtArgs> | null
  }


  /**
   * Model donors
   */

  export type AggregateDonors = {
    _count: DonorsCountAggregateOutputType | null
    _avg: DonorsAvgAggregateOutputType | null
    _sum: DonorsSumAggregateOutputType | null
    _min: DonorsMinAggregateOutputType | null
    _max: DonorsMaxAggregateOutputType | null
  }

  export type DonorsAvgAggregateOutputType = {
    donor_id: number | null
    user_id: number | null
    weight: Decimal | null
  }

  export type DonorsSumAggregateOutputType = {
    donor_id: number | null
    user_id: number | null
    weight: Decimal | null
  }

  export type DonorsMinAggregateOutputType = {
    donor_id: number | null
    user_id: number | null
    national_id: string | null
    birth_date: Date | null
    gender: string | null
    address: string | null
    blood_type: string | null
    last_donation_date: Date | null
    medications: string | null
    medical_conditions: string | null
    weight: Decimal | null
    donor_image: string | null
  }

  export type DonorsMaxAggregateOutputType = {
    donor_id: number | null
    user_id: number | null
    national_id: string | null
    birth_date: Date | null
    gender: string | null
    address: string | null
    blood_type: string | null
    last_donation_date: Date | null
    medications: string | null
    medical_conditions: string | null
    weight: Decimal | null
    donor_image: string | null
  }

  export type DonorsCountAggregateOutputType = {
    donor_id: number
    user_id: number
    national_id: number
    birth_date: number
    gender: number
    address: number
    blood_type: number
    last_donation_date: number
    medications: number
    medical_conditions: number
    weight: number
    donor_image: number
    _all: number
  }


  export type DonorsAvgAggregateInputType = {
    donor_id?: true
    user_id?: true
    weight?: true
  }

  export type DonorsSumAggregateInputType = {
    donor_id?: true
    user_id?: true
    weight?: true
  }

  export type DonorsMinAggregateInputType = {
    donor_id?: true
    user_id?: true
    national_id?: true
    birth_date?: true
    gender?: true
    address?: true
    blood_type?: true
    last_donation_date?: true
    medications?: true
    medical_conditions?: true
    weight?: true
    donor_image?: true
  }

  export type DonorsMaxAggregateInputType = {
    donor_id?: true
    user_id?: true
    national_id?: true
    birth_date?: true
    gender?: true
    address?: true
    blood_type?: true
    last_donation_date?: true
    medications?: true
    medical_conditions?: true
    weight?: true
    donor_image?: true
  }

  export type DonorsCountAggregateInputType = {
    donor_id?: true
    user_id?: true
    national_id?: true
    birth_date?: true
    gender?: true
    address?: true
    blood_type?: true
    last_donation_date?: true
    medications?: true
    medical_conditions?: true
    weight?: true
    donor_image?: true
    _all?: true
  }

  export type DonorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which donors to aggregate.
     */
    where?: donorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of donors to fetch.
     */
    orderBy?: donorsOrderByWithRelationInput | donorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: donorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` donors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` donors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned donors
    **/
    _count?: true | DonorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonorsMaxAggregateInputType
  }

  export type GetDonorsAggregateType<T extends DonorsAggregateArgs> = {
        [P in keyof T & keyof AggregateDonors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonors[P]>
      : GetScalarType<T[P], AggregateDonors[P]>
  }




  export type donorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: donorsWhereInput
    orderBy?: donorsOrderByWithAggregationInput | donorsOrderByWithAggregationInput[]
    by: DonorsScalarFieldEnum[] | DonorsScalarFieldEnum
    having?: donorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonorsCountAggregateInputType | true
    _avg?: DonorsAvgAggregateInputType
    _sum?: DonorsSumAggregateInputType
    _min?: DonorsMinAggregateInputType
    _max?: DonorsMaxAggregateInputType
  }

  export type DonorsGroupByOutputType = {
    donor_id: number
    user_id: number
    national_id: string
    birth_date: Date
    gender: string
    address: string
    blood_type: string
    last_donation_date: Date | null
    medications: string | null
    medical_conditions: string | null
    weight: Decimal
    donor_image: string
    _count: DonorsCountAggregateOutputType | null
    _avg: DonorsAvgAggregateOutputType | null
    _sum: DonorsSumAggregateOutputType | null
    _min: DonorsMinAggregateOutputType | null
    _max: DonorsMaxAggregateOutputType | null
  }

  type GetDonorsGroupByPayload<T extends donorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonorsGroupByOutputType[P]>
            : GetScalarType<T[P], DonorsGroupByOutputType[P]>
        }
      >
    >


  export type donorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    donor_id?: boolean
    user_id?: boolean
    national_id?: boolean
    birth_date?: boolean
    gender?: boolean
    address?: boolean
    blood_type?: boolean
    last_donation_date?: boolean
    medications?: boolean
    medical_conditions?: boolean
    weight?: boolean
    donor_image?: boolean
    appointments?: boolean | donors$appointmentsArgs<ExtArgs>
    donationhistory?: boolean | donors$donationhistoryArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | DonorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donors"]>

  export type donorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    donor_id?: boolean
    user_id?: boolean
    national_id?: boolean
    birth_date?: boolean
    gender?: boolean
    address?: boolean
    blood_type?: boolean
    last_donation_date?: boolean
    medications?: boolean
    medical_conditions?: boolean
    weight?: boolean
    donor_image?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donors"]>

  export type donorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    donor_id?: boolean
    user_id?: boolean
    national_id?: boolean
    birth_date?: boolean
    gender?: boolean
    address?: boolean
    blood_type?: boolean
    last_donation_date?: boolean
    medications?: boolean
    medical_conditions?: boolean
    weight?: boolean
    donor_image?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donors"]>

  export type donorsSelectScalar = {
    donor_id?: boolean
    user_id?: boolean
    national_id?: boolean
    birth_date?: boolean
    gender?: boolean
    address?: boolean
    blood_type?: boolean
    last_donation_date?: boolean
    medications?: boolean
    medical_conditions?: boolean
    weight?: boolean
    donor_image?: boolean
  }

  export type donorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"donor_id" | "user_id" | "national_id" | "birth_date" | "gender" | "address" | "blood_type" | "last_donation_date" | "medications" | "medical_conditions" | "weight" | "donor_image", ExtArgs["result"]["donors"]>
  export type donorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | donors$appointmentsArgs<ExtArgs>
    donationhistory?: boolean | donors$donationhistoryArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | DonorsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type donorsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type donorsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $donorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "donors"
    objects: {
      appointments: Prisma.$appointmentsPayload<ExtArgs>[]
      donationhistory: Prisma.$donationhistoryPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      donor_id: number
      user_id: number
      national_id: string
      birth_date: Date
      gender: string
      address: string
      blood_type: string
      last_donation_date: Date | null
      medications: string | null
      medical_conditions: string | null
      weight: Prisma.Decimal
      donor_image: string
    }, ExtArgs["result"]["donors"]>
    composites: {}
  }

  type donorsGetPayload<S extends boolean | null | undefined | donorsDefaultArgs> = $Result.GetResult<Prisma.$donorsPayload, S>

  type donorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<donorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonorsCountAggregateInputType | true
    }

  export interface donorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['donors'], meta: { name: 'donors' } }
    /**
     * Find zero or one Donors that matches the filter.
     * @param {donorsFindUniqueArgs} args - Arguments to find a Donors
     * @example
     * // Get one Donors
     * const donors = await prisma.donors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends donorsFindUniqueArgs>(args: SelectSubset<T, donorsFindUniqueArgs<ExtArgs>>): Prisma__donorsClient<$Result.GetResult<Prisma.$donorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Donors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {donorsFindUniqueOrThrowArgs} args - Arguments to find a Donors
     * @example
     * // Get one Donors
     * const donors = await prisma.donors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends donorsFindUniqueOrThrowArgs>(args: SelectSubset<T, donorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__donorsClient<$Result.GetResult<Prisma.$donorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donorsFindFirstArgs} args - Arguments to find a Donors
     * @example
     * // Get one Donors
     * const donors = await prisma.donors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends donorsFindFirstArgs>(args?: SelectSubset<T, donorsFindFirstArgs<ExtArgs>>): Prisma__donorsClient<$Result.GetResult<Prisma.$donorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donorsFindFirstOrThrowArgs} args - Arguments to find a Donors
     * @example
     * // Get one Donors
     * const donors = await prisma.donors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends donorsFindFirstOrThrowArgs>(args?: SelectSubset<T, donorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__donorsClient<$Result.GetResult<Prisma.$donorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Donors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donors
     * const donors = await prisma.donors.findMany()
     * 
     * // Get first 10 Donors
     * const donors = await prisma.donors.findMany({ take: 10 })
     * 
     * // Only select the `donor_id`
     * const donorsWithDonor_idOnly = await prisma.donors.findMany({ select: { donor_id: true } })
     * 
     */
    findMany<T extends donorsFindManyArgs>(args?: SelectSubset<T, donorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$donorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Donors.
     * @param {donorsCreateArgs} args - Arguments to create a Donors.
     * @example
     * // Create one Donors
     * const Donors = await prisma.donors.create({
     *   data: {
     *     // ... data to create a Donors
     *   }
     * })
     * 
     */
    create<T extends donorsCreateArgs>(args: SelectSubset<T, donorsCreateArgs<ExtArgs>>): Prisma__donorsClient<$Result.GetResult<Prisma.$donorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Donors.
     * @param {donorsCreateManyArgs} args - Arguments to create many Donors.
     * @example
     * // Create many Donors
     * const donors = await prisma.donors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends donorsCreateManyArgs>(args?: SelectSubset<T, donorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Donors and returns the data saved in the database.
     * @param {donorsCreateManyAndReturnArgs} args - Arguments to create many Donors.
     * @example
     * // Create many Donors
     * const donors = await prisma.donors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Donors and only return the `donor_id`
     * const donorsWithDonor_idOnly = await prisma.donors.createManyAndReturn({
     *   select: { donor_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends donorsCreateManyAndReturnArgs>(args?: SelectSubset<T, donorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$donorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Donors.
     * @param {donorsDeleteArgs} args - Arguments to delete one Donors.
     * @example
     * // Delete one Donors
     * const Donors = await prisma.donors.delete({
     *   where: {
     *     // ... filter to delete one Donors
     *   }
     * })
     * 
     */
    delete<T extends donorsDeleteArgs>(args: SelectSubset<T, donorsDeleteArgs<ExtArgs>>): Prisma__donorsClient<$Result.GetResult<Prisma.$donorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Donors.
     * @param {donorsUpdateArgs} args - Arguments to update one Donors.
     * @example
     * // Update one Donors
     * const donors = await prisma.donors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends donorsUpdateArgs>(args: SelectSubset<T, donorsUpdateArgs<ExtArgs>>): Prisma__donorsClient<$Result.GetResult<Prisma.$donorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Donors.
     * @param {donorsDeleteManyArgs} args - Arguments to filter Donors to delete.
     * @example
     * // Delete a few Donors
     * const { count } = await prisma.donors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends donorsDeleteManyArgs>(args?: SelectSubset<T, donorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donors
     * const donors = await prisma.donors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends donorsUpdateManyArgs>(args: SelectSubset<T, donorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donors and returns the data updated in the database.
     * @param {donorsUpdateManyAndReturnArgs} args - Arguments to update many Donors.
     * @example
     * // Update many Donors
     * const donors = await prisma.donors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Donors and only return the `donor_id`
     * const donorsWithDonor_idOnly = await prisma.donors.updateManyAndReturn({
     *   select: { donor_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends donorsUpdateManyAndReturnArgs>(args: SelectSubset<T, donorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$donorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Donors.
     * @param {donorsUpsertArgs} args - Arguments to update or create a Donors.
     * @example
     * // Update or create a Donors
     * const donors = await prisma.donors.upsert({
     *   create: {
     *     // ... data to create a Donors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donors we want to update
     *   }
     * })
     */
    upsert<T extends donorsUpsertArgs>(args: SelectSubset<T, donorsUpsertArgs<ExtArgs>>): Prisma__donorsClient<$Result.GetResult<Prisma.$donorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Donors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donorsCountArgs} args - Arguments to filter Donors to count.
     * @example
     * // Count the number of Donors
     * const count = await prisma.donors.count({
     *   where: {
     *     // ... the filter for the Donors we want to count
     *   }
     * })
    **/
    count<T extends donorsCountArgs>(
      args?: Subset<T, donorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Donors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonorsAggregateArgs>(args: Subset<T, DonorsAggregateArgs>): Prisma.PrismaPromise<GetDonorsAggregateType<T>>

    /**
     * Group by Donors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends donorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: donorsGroupByArgs['orderBy'] }
        : { orderBy?: donorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, donorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the donors model
   */
  readonly fields: donorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for donors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__donorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointments<T extends donors$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, donors$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donationhistory<T extends donors$donationhistoryArgs<ExtArgs> = {}>(args?: Subset<T, donors$donationhistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$donationhistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the donors model
   */
  interface donorsFieldRefs {
    readonly donor_id: FieldRef<"donors", 'Int'>
    readonly user_id: FieldRef<"donors", 'Int'>
    readonly national_id: FieldRef<"donors", 'String'>
    readonly birth_date: FieldRef<"donors", 'DateTime'>
    readonly gender: FieldRef<"donors", 'String'>
    readonly address: FieldRef<"donors", 'String'>
    readonly blood_type: FieldRef<"donors", 'String'>
    readonly last_donation_date: FieldRef<"donors", 'DateTime'>
    readonly medications: FieldRef<"donors", 'String'>
    readonly medical_conditions: FieldRef<"donors", 'String'>
    readonly weight: FieldRef<"donors", 'Decimal'>
    readonly donor_image: FieldRef<"donors", 'String'>
  }
    

  // Custom InputTypes
  /**
   * donors findUnique
   */
  export type donorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donors
     */
    select?: donorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donors
     */
    omit?: donorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donorsInclude<ExtArgs> | null
    /**
     * Filter, which donors to fetch.
     */
    where: donorsWhereUniqueInput
  }

  /**
   * donors findUniqueOrThrow
   */
  export type donorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donors
     */
    select?: donorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donors
     */
    omit?: donorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donorsInclude<ExtArgs> | null
    /**
     * Filter, which donors to fetch.
     */
    where: donorsWhereUniqueInput
  }

  /**
   * donors findFirst
   */
  export type donorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donors
     */
    select?: donorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donors
     */
    omit?: donorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donorsInclude<ExtArgs> | null
    /**
     * Filter, which donors to fetch.
     */
    where?: donorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of donors to fetch.
     */
    orderBy?: donorsOrderByWithRelationInput | donorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for donors.
     */
    cursor?: donorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` donors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` donors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of donors.
     */
    distinct?: DonorsScalarFieldEnum | DonorsScalarFieldEnum[]
  }

  /**
   * donors findFirstOrThrow
   */
  export type donorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donors
     */
    select?: donorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donors
     */
    omit?: donorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donorsInclude<ExtArgs> | null
    /**
     * Filter, which donors to fetch.
     */
    where?: donorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of donors to fetch.
     */
    orderBy?: donorsOrderByWithRelationInput | donorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for donors.
     */
    cursor?: donorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` donors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` donors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of donors.
     */
    distinct?: DonorsScalarFieldEnum | DonorsScalarFieldEnum[]
  }

  /**
   * donors findMany
   */
  export type donorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donors
     */
    select?: donorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donors
     */
    omit?: donorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donorsInclude<ExtArgs> | null
    /**
     * Filter, which donors to fetch.
     */
    where?: donorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of donors to fetch.
     */
    orderBy?: donorsOrderByWithRelationInput | donorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing donors.
     */
    cursor?: donorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` donors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` donors.
     */
    skip?: number
    distinct?: DonorsScalarFieldEnum | DonorsScalarFieldEnum[]
  }

  /**
   * donors create
   */
  export type donorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donors
     */
    select?: donorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donors
     */
    omit?: donorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donorsInclude<ExtArgs> | null
    /**
     * The data needed to create a donors.
     */
    data: XOR<donorsCreateInput, donorsUncheckedCreateInput>
  }

  /**
   * donors createMany
   */
  export type donorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many donors.
     */
    data: donorsCreateManyInput | donorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * donors createManyAndReturn
   */
  export type donorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donors
     */
    select?: donorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the donors
     */
    omit?: donorsOmit<ExtArgs> | null
    /**
     * The data used to create many donors.
     */
    data: donorsCreateManyInput | donorsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donorsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * donors update
   */
  export type donorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donors
     */
    select?: donorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donors
     */
    omit?: donorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donorsInclude<ExtArgs> | null
    /**
     * The data needed to update a donors.
     */
    data: XOR<donorsUpdateInput, donorsUncheckedUpdateInput>
    /**
     * Choose, which donors to update.
     */
    where: donorsWhereUniqueInput
  }

  /**
   * donors updateMany
   */
  export type donorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update donors.
     */
    data: XOR<donorsUpdateManyMutationInput, donorsUncheckedUpdateManyInput>
    /**
     * Filter which donors to update
     */
    where?: donorsWhereInput
    /**
     * Limit how many donors to update.
     */
    limit?: number
  }

  /**
   * donors updateManyAndReturn
   */
  export type donorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donors
     */
    select?: donorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the donors
     */
    omit?: donorsOmit<ExtArgs> | null
    /**
     * The data used to update donors.
     */
    data: XOR<donorsUpdateManyMutationInput, donorsUncheckedUpdateManyInput>
    /**
     * Filter which donors to update
     */
    where?: donorsWhereInput
    /**
     * Limit how many donors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donorsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * donors upsert
   */
  export type donorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donors
     */
    select?: donorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donors
     */
    omit?: donorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donorsInclude<ExtArgs> | null
    /**
     * The filter to search for the donors to update in case it exists.
     */
    where: donorsWhereUniqueInput
    /**
     * In case the donors found by the `where` argument doesn't exist, create a new donors with this data.
     */
    create: XOR<donorsCreateInput, donorsUncheckedCreateInput>
    /**
     * In case the donors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<donorsUpdateInput, donorsUncheckedUpdateInput>
  }

  /**
   * donors delete
   */
  export type donorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donors
     */
    select?: donorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donors
     */
    omit?: donorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donorsInclude<ExtArgs> | null
    /**
     * Filter which donors to delete.
     */
    where: donorsWhereUniqueInput
  }

  /**
   * donors deleteMany
   */
  export type donorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which donors to delete
     */
    where?: donorsWhereInput
    /**
     * Limit how many donors to delete.
     */
    limit?: number
  }

  /**
   * donors.appointments
   */
  export type donors$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointments
     */
    select?: appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointments
     */
    omit?: appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentsInclude<ExtArgs> | null
    where?: appointmentsWhereInput
    orderBy?: appointmentsOrderByWithRelationInput | appointmentsOrderByWithRelationInput[]
    cursor?: appointmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * donors.donationhistory
   */
  export type donors$donationhistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donationhistory
     */
    select?: donationhistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the donationhistory
     */
    omit?: donationhistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationhistoryInclude<ExtArgs> | null
    where?: donationhistoryWhereInput
    orderBy?: donationhistoryOrderByWithRelationInput | donationhistoryOrderByWithRelationInput[]
    cursor?: donationhistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationhistoryScalarFieldEnum | DonationhistoryScalarFieldEnum[]
  }

  /**
   * donors without action
   */
  export type donorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donors
     */
    select?: donorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donors
     */
    omit?: donorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donorsInclude<ExtArgs> | null
  }


  /**
   * Model hospitalstaff
   */

  export type AggregateHospitalstaff = {
    _count: HospitalstaffCountAggregateOutputType | null
    _avg: HospitalstaffAvgAggregateOutputType | null
    _sum: HospitalstaffSumAggregateOutputType | null
    _min: HospitalstaffMinAggregateOutputType | null
    _max: HospitalstaffMaxAggregateOutputType | null
  }

  export type HospitalstaffAvgAggregateOutputType = {
    staff_id: number | null
    user_id: number | null
  }

  export type HospitalstaffSumAggregateOutputType = {
    staff_id: number | null
    user_id: number | null
  }

  export type HospitalstaffMinAggregateOutputType = {
    staff_id: number | null
    user_id: number | null
    address: string | null
  }

  export type HospitalstaffMaxAggregateOutputType = {
    staff_id: number | null
    user_id: number | null
    address: string | null
  }

  export type HospitalstaffCountAggregateOutputType = {
    staff_id: number
    user_id: number
    address: number
    _all: number
  }


  export type HospitalstaffAvgAggregateInputType = {
    staff_id?: true
    user_id?: true
  }

  export type HospitalstaffSumAggregateInputType = {
    staff_id?: true
    user_id?: true
  }

  export type HospitalstaffMinAggregateInputType = {
    staff_id?: true
    user_id?: true
    address?: true
  }

  export type HospitalstaffMaxAggregateInputType = {
    staff_id?: true
    user_id?: true
    address?: true
  }

  export type HospitalstaffCountAggregateInputType = {
    staff_id?: true
    user_id?: true
    address?: true
    _all?: true
  }

  export type HospitalstaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hospitalstaff to aggregate.
     */
    where?: hospitalstaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hospitalstaffs to fetch.
     */
    orderBy?: hospitalstaffOrderByWithRelationInput | hospitalstaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hospitalstaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hospitalstaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hospitalstaffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hospitalstaffs
    **/
    _count?: true | HospitalstaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HospitalstaffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HospitalstaffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HospitalstaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HospitalstaffMaxAggregateInputType
  }

  export type GetHospitalstaffAggregateType<T extends HospitalstaffAggregateArgs> = {
        [P in keyof T & keyof AggregateHospitalstaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHospitalstaff[P]>
      : GetScalarType<T[P], AggregateHospitalstaff[P]>
  }




  export type hospitalstaffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hospitalstaffWhereInput
    orderBy?: hospitalstaffOrderByWithAggregationInput | hospitalstaffOrderByWithAggregationInput[]
    by: HospitalstaffScalarFieldEnum[] | HospitalstaffScalarFieldEnum
    having?: hospitalstaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HospitalstaffCountAggregateInputType | true
    _avg?: HospitalstaffAvgAggregateInputType
    _sum?: HospitalstaffSumAggregateInputType
    _min?: HospitalstaffMinAggregateInputType
    _max?: HospitalstaffMaxAggregateInputType
  }

  export type HospitalstaffGroupByOutputType = {
    staff_id: number
    user_id: number
    address: string
    _count: HospitalstaffCountAggregateOutputType | null
    _avg: HospitalstaffAvgAggregateOutputType | null
    _sum: HospitalstaffSumAggregateOutputType | null
    _min: HospitalstaffMinAggregateOutputType | null
    _max: HospitalstaffMaxAggregateOutputType | null
  }

  type GetHospitalstaffGroupByPayload<T extends hospitalstaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HospitalstaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HospitalstaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HospitalstaffGroupByOutputType[P]>
            : GetScalarType<T[P], HospitalstaffGroupByOutputType[P]>
        }
      >
    >


  export type hospitalstaffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    staff_id?: boolean
    user_id?: boolean
    address?: boolean
    bloodrequests?: boolean | hospitalstaff$bloodrequestsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | HospitalstaffCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hospitalstaff"]>

  export type hospitalstaffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    staff_id?: boolean
    user_id?: boolean
    address?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hospitalstaff"]>

  export type hospitalstaffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    staff_id?: boolean
    user_id?: boolean
    address?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hospitalstaff"]>

  export type hospitalstaffSelectScalar = {
    staff_id?: boolean
    user_id?: boolean
    address?: boolean
  }

  export type hospitalstaffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"staff_id" | "user_id" | "address", ExtArgs["result"]["hospitalstaff"]>
  export type hospitalstaffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bloodrequests?: boolean | hospitalstaff$bloodrequestsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | HospitalstaffCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type hospitalstaffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type hospitalstaffIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $hospitalstaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hospitalstaff"
    objects: {
      bloodrequests: Prisma.$bloodrequestsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      staff_id: number
      user_id: number
      address: string
    }, ExtArgs["result"]["hospitalstaff"]>
    composites: {}
  }

  type hospitalstaffGetPayload<S extends boolean | null | undefined | hospitalstaffDefaultArgs> = $Result.GetResult<Prisma.$hospitalstaffPayload, S>

  type hospitalstaffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hospitalstaffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HospitalstaffCountAggregateInputType | true
    }

  export interface hospitalstaffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hospitalstaff'], meta: { name: 'hospitalstaff' } }
    /**
     * Find zero or one Hospitalstaff that matches the filter.
     * @param {hospitalstaffFindUniqueArgs} args - Arguments to find a Hospitalstaff
     * @example
     * // Get one Hospitalstaff
     * const hospitalstaff = await prisma.hospitalstaff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hospitalstaffFindUniqueArgs>(args: SelectSubset<T, hospitalstaffFindUniqueArgs<ExtArgs>>): Prisma__hospitalstaffClient<$Result.GetResult<Prisma.$hospitalstaffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hospitalstaff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hospitalstaffFindUniqueOrThrowArgs} args - Arguments to find a Hospitalstaff
     * @example
     * // Get one Hospitalstaff
     * const hospitalstaff = await prisma.hospitalstaff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hospitalstaffFindUniqueOrThrowArgs>(args: SelectSubset<T, hospitalstaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hospitalstaffClient<$Result.GetResult<Prisma.$hospitalstaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hospitalstaff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalstaffFindFirstArgs} args - Arguments to find a Hospitalstaff
     * @example
     * // Get one Hospitalstaff
     * const hospitalstaff = await prisma.hospitalstaff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hospitalstaffFindFirstArgs>(args?: SelectSubset<T, hospitalstaffFindFirstArgs<ExtArgs>>): Prisma__hospitalstaffClient<$Result.GetResult<Prisma.$hospitalstaffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hospitalstaff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalstaffFindFirstOrThrowArgs} args - Arguments to find a Hospitalstaff
     * @example
     * // Get one Hospitalstaff
     * const hospitalstaff = await prisma.hospitalstaff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hospitalstaffFindFirstOrThrowArgs>(args?: SelectSubset<T, hospitalstaffFindFirstOrThrowArgs<ExtArgs>>): Prisma__hospitalstaffClient<$Result.GetResult<Prisma.$hospitalstaffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hospitalstaffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalstaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hospitalstaffs
     * const hospitalstaffs = await prisma.hospitalstaff.findMany()
     * 
     * // Get first 10 Hospitalstaffs
     * const hospitalstaffs = await prisma.hospitalstaff.findMany({ take: 10 })
     * 
     * // Only select the `staff_id`
     * const hospitalstaffWithStaff_idOnly = await prisma.hospitalstaff.findMany({ select: { staff_id: true } })
     * 
     */
    findMany<T extends hospitalstaffFindManyArgs>(args?: SelectSubset<T, hospitalstaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hospitalstaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hospitalstaff.
     * @param {hospitalstaffCreateArgs} args - Arguments to create a Hospitalstaff.
     * @example
     * // Create one Hospitalstaff
     * const Hospitalstaff = await prisma.hospitalstaff.create({
     *   data: {
     *     // ... data to create a Hospitalstaff
     *   }
     * })
     * 
     */
    create<T extends hospitalstaffCreateArgs>(args: SelectSubset<T, hospitalstaffCreateArgs<ExtArgs>>): Prisma__hospitalstaffClient<$Result.GetResult<Prisma.$hospitalstaffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hospitalstaffs.
     * @param {hospitalstaffCreateManyArgs} args - Arguments to create many Hospitalstaffs.
     * @example
     * // Create many Hospitalstaffs
     * const hospitalstaff = await prisma.hospitalstaff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hospitalstaffCreateManyArgs>(args?: SelectSubset<T, hospitalstaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hospitalstaffs and returns the data saved in the database.
     * @param {hospitalstaffCreateManyAndReturnArgs} args - Arguments to create many Hospitalstaffs.
     * @example
     * // Create many Hospitalstaffs
     * const hospitalstaff = await prisma.hospitalstaff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hospitalstaffs and only return the `staff_id`
     * const hospitalstaffWithStaff_idOnly = await prisma.hospitalstaff.createManyAndReturn({
     *   select: { staff_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends hospitalstaffCreateManyAndReturnArgs>(args?: SelectSubset<T, hospitalstaffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hospitalstaffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hospitalstaff.
     * @param {hospitalstaffDeleteArgs} args - Arguments to delete one Hospitalstaff.
     * @example
     * // Delete one Hospitalstaff
     * const Hospitalstaff = await prisma.hospitalstaff.delete({
     *   where: {
     *     // ... filter to delete one Hospitalstaff
     *   }
     * })
     * 
     */
    delete<T extends hospitalstaffDeleteArgs>(args: SelectSubset<T, hospitalstaffDeleteArgs<ExtArgs>>): Prisma__hospitalstaffClient<$Result.GetResult<Prisma.$hospitalstaffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hospitalstaff.
     * @param {hospitalstaffUpdateArgs} args - Arguments to update one Hospitalstaff.
     * @example
     * // Update one Hospitalstaff
     * const hospitalstaff = await prisma.hospitalstaff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hospitalstaffUpdateArgs>(args: SelectSubset<T, hospitalstaffUpdateArgs<ExtArgs>>): Prisma__hospitalstaffClient<$Result.GetResult<Prisma.$hospitalstaffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hospitalstaffs.
     * @param {hospitalstaffDeleteManyArgs} args - Arguments to filter Hospitalstaffs to delete.
     * @example
     * // Delete a few Hospitalstaffs
     * const { count } = await prisma.hospitalstaff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hospitalstaffDeleteManyArgs>(args?: SelectSubset<T, hospitalstaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospitalstaffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalstaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hospitalstaffs
     * const hospitalstaff = await prisma.hospitalstaff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hospitalstaffUpdateManyArgs>(args: SelectSubset<T, hospitalstaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospitalstaffs and returns the data updated in the database.
     * @param {hospitalstaffUpdateManyAndReturnArgs} args - Arguments to update many Hospitalstaffs.
     * @example
     * // Update many Hospitalstaffs
     * const hospitalstaff = await prisma.hospitalstaff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hospitalstaffs and only return the `staff_id`
     * const hospitalstaffWithStaff_idOnly = await prisma.hospitalstaff.updateManyAndReturn({
     *   select: { staff_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends hospitalstaffUpdateManyAndReturnArgs>(args: SelectSubset<T, hospitalstaffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hospitalstaffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hospitalstaff.
     * @param {hospitalstaffUpsertArgs} args - Arguments to update or create a Hospitalstaff.
     * @example
     * // Update or create a Hospitalstaff
     * const hospitalstaff = await prisma.hospitalstaff.upsert({
     *   create: {
     *     // ... data to create a Hospitalstaff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hospitalstaff we want to update
     *   }
     * })
     */
    upsert<T extends hospitalstaffUpsertArgs>(args: SelectSubset<T, hospitalstaffUpsertArgs<ExtArgs>>): Prisma__hospitalstaffClient<$Result.GetResult<Prisma.$hospitalstaffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hospitalstaffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalstaffCountArgs} args - Arguments to filter Hospitalstaffs to count.
     * @example
     * // Count the number of Hospitalstaffs
     * const count = await prisma.hospitalstaff.count({
     *   where: {
     *     // ... the filter for the Hospitalstaffs we want to count
     *   }
     * })
    **/
    count<T extends hospitalstaffCountArgs>(
      args?: Subset<T, hospitalstaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HospitalstaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hospitalstaff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalstaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HospitalstaffAggregateArgs>(args: Subset<T, HospitalstaffAggregateArgs>): Prisma.PrismaPromise<GetHospitalstaffAggregateType<T>>

    /**
     * Group by Hospitalstaff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalstaffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends hospitalstaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hospitalstaffGroupByArgs['orderBy'] }
        : { orderBy?: hospitalstaffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, hospitalstaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHospitalstaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hospitalstaff model
   */
  readonly fields: hospitalstaffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hospitalstaff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hospitalstaffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bloodrequests<T extends hospitalstaff$bloodrequestsArgs<ExtArgs> = {}>(args?: Subset<T, hospitalstaff$bloodrequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bloodrequestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the hospitalstaff model
   */
  interface hospitalstaffFieldRefs {
    readonly staff_id: FieldRef<"hospitalstaff", 'Int'>
    readonly user_id: FieldRef<"hospitalstaff", 'Int'>
    readonly address: FieldRef<"hospitalstaff", 'String'>
  }
    

  // Custom InputTypes
  /**
   * hospitalstaff findUnique
   */
  export type hospitalstaffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitalstaff
     */
    select?: hospitalstaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitalstaff
     */
    omit?: hospitalstaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalstaffInclude<ExtArgs> | null
    /**
     * Filter, which hospitalstaff to fetch.
     */
    where: hospitalstaffWhereUniqueInput
  }

  /**
   * hospitalstaff findUniqueOrThrow
   */
  export type hospitalstaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitalstaff
     */
    select?: hospitalstaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitalstaff
     */
    omit?: hospitalstaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalstaffInclude<ExtArgs> | null
    /**
     * Filter, which hospitalstaff to fetch.
     */
    where: hospitalstaffWhereUniqueInput
  }

  /**
   * hospitalstaff findFirst
   */
  export type hospitalstaffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitalstaff
     */
    select?: hospitalstaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitalstaff
     */
    omit?: hospitalstaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalstaffInclude<ExtArgs> | null
    /**
     * Filter, which hospitalstaff to fetch.
     */
    where?: hospitalstaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hospitalstaffs to fetch.
     */
    orderBy?: hospitalstaffOrderByWithRelationInput | hospitalstaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hospitalstaffs.
     */
    cursor?: hospitalstaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hospitalstaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hospitalstaffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hospitalstaffs.
     */
    distinct?: HospitalstaffScalarFieldEnum | HospitalstaffScalarFieldEnum[]
  }

  /**
   * hospitalstaff findFirstOrThrow
   */
  export type hospitalstaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitalstaff
     */
    select?: hospitalstaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitalstaff
     */
    omit?: hospitalstaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalstaffInclude<ExtArgs> | null
    /**
     * Filter, which hospitalstaff to fetch.
     */
    where?: hospitalstaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hospitalstaffs to fetch.
     */
    orderBy?: hospitalstaffOrderByWithRelationInput | hospitalstaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hospitalstaffs.
     */
    cursor?: hospitalstaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hospitalstaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hospitalstaffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hospitalstaffs.
     */
    distinct?: HospitalstaffScalarFieldEnum | HospitalstaffScalarFieldEnum[]
  }

  /**
   * hospitalstaff findMany
   */
  export type hospitalstaffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitalstaff
     */
    select?: hospitalstaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitalstaff
     */
    omit?: hospitalstaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalstaffInclude<ExtArgs> | null
    /**
     * Filter, which hospitalstaffs to fetch.
     */
    where?: hospitalstaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hospitalstaffs to fetch.
     */
    orderBy?: hospitalstaffOrderByWithRelationInput | hospitalstaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hospitalstaffs.
     */
    cursor?: hospitalstaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hospitalstaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hospitalstaffs.
     */
    skip?: number
    distinct?: HospitalstaffScalarFieldEnum | HospitalstaffScalarFieldEnum[]
  }

  /**
   * hospitalstaff create
   */
  export type hospitalstaffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitalstaff
     */
    select?: hospitalstaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitalstaff
     */
    omit?: hospitalstaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalstaffInclude<ExtArgs> | null
    /**
     * The data needed to create a hospitalstaff.
     */
    data: XOR<hospitalstaffCreateInput, hospitalstaffUncheckedCreateInput>
  }

  /**
   * hospitalstaff createMany
   */
  export type hospitalstaffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hospitalstaffs.
     */
    data: hospitalstaffCreateManyInput | hospitalstaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hospitalstaff createManyAndReturn
   */
  export type hospitalstaffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitalstaff
     */
    select?: hospitalstaffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hospitalstaff
     */
    omit?: hospitalstaffOmit<ExtArgs> | null
    /**
     * The data used to create many hospitalstaffs.
     */
    data: hospitalstaffCreateManyInput | hospitalstaffCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalstaffIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * hospitalstaff update
   */
  export type hospitalstaffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitalstaff
     */
    select?: hospitalstaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitalstaff
     */
    omit?: hospitalstaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalstaffInclude<ExtArgs> | null
    /**
     * The data needed to update a hospitalstaff.
     */
    data: XOR<hospitalstaffUpdateInput, hospitalstaffUncheckedUpdateInput>
    /**
     * Choose, which hospitalstaff to update.
     */
    where: hospitalstaffWhereUniqueInput
  }

  /**
   * hospitalstaff updateMany
   */
  export type hospitalstaffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hospitalstaffs.
     */
    data: XOR<hospitalstaffUpdateManyMutationInput, hospitalstaffUncheckedUpdateManyInput>
    /**
     * Filter which hospitalstaffs to update
     */
    where?: hospitalstaffWhereInput
    /**
     * Limit how many hospitalstaffs to update.
     */
    limit?: number
  }

  /**
   * hospitalstaff updateManyAndReturn
   */
  export type hospitalstaffUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitalstaff
     */
    select?: hospitalstaffSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hospitalstaff
     */
    omit?: hospitalstaffOmit<ExtArgs> | null
    /**
     * The data used to update hospitalstaffs.
     */
    data: XOR<hospitalstaffUpdateManyMutationInput, hospitalstaffUncheckedUpdateManyInput>
    /**
     * Filter which hospitalstaffs to update
     */
    where?: hospitalstaffWhereInput
    /**
     * Limit how many hospitalstaffs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalstaffIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * hospitalstaff upsert
   */
  export type hospitalstaffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitalstaff
     */
    select?: hospitalstaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitalstaff
     */
    omit?: hospitalstaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalstaffInclude<ExtArgs> | null
    /**
     * The filter to search for the hospitalstaff to update in case it exists.
     */
    where: hospitalstaffWhereUniqueInput
    /**
     * In case the hospitalstaff found by the `where` argument doesn't exist, create a new hospitalstaff with this data.
     */
    create: XOR<hospitalstaffCreateInput, hospitalstaffUncheckedCreateInput>
    /**
     * In case the hospitalstaff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hospitalstaffUpdateInput, hospitalstaffUncheckedUpdateInput>
  }

  /**
   * hospitalstaff delete
   */
  export type hospitalstaffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitalstaff
     */
    select?: hospitalstaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitalstaff
     */
    omit?: hospitalstaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalstaffInclude<ExtArgs> | null
    /**
     * Filter which hospitalstaff to delete.
     */
    where: hospitalstaffWhereUniqueInput
  }

  /**
   * hospitalstaff deleteMany
   */
  export type hospitalstaffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hospitalstaffs to delete
     */
    where?: hospitalstaffWhereInput
    /**
     * Limit how many hospitalstaffs to delete.
     */
    limit?: number
  }

  /**
   * hospitalstaff.bloodrequests
   */
  export type hospitalstaff$bloodrequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloodrequests
     */
    select?: bloodrequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloodrequests
     */
    omit?: bloodrequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bloodrequestsInclude<ExtArgs> | null
    where?: bloodrequestsWhereInput
    orderBy?: bloodrequestsOrderByWithRelationInput | bloodrequestsOrderByWithRelationInput[]
    cursor?: bloodrequestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BloodrequestsScalarFieldEnum | BloodrequestsScalarFieldEnum[]
  }

  /**
   * hospitalstaff without action
   */
  export type hospitalstaffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitalstaff
     */
    select?: hospitalstaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitalstaff
     */
    omit?: hospitalstaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalstaffInclude<ExtArgs> | null
  }


  /**
   * Model subadmins
   */

  export type AggregateSubadmins = {
    _count: SubadminsCountAggregateOutputType | null
    _avg: SubadminsAvgAggregateOutputType | null
    _sum: SubadminsSumAggregateOutputType | null
    _min: SubadminsMinAggregateOutputType | null
    _max: SubadminsMaxAggregateOutputType | null
  }

  export type SubadminsAvgAggregateOutputType = {
    sub_admin_id: number | null
    user_id: number | null
    center_id: number | null
  }

  export type SubadminsSumAggregateOutputType = {
    sub_admin_id: number | null
    user_id: number | null
    center_id: number | null
  }

  export type SubadminsMinAggregateOutputType = {
    sub_admin_id: number | null
    user_id: number | null
    center_id: number | null
  }

  export type SubadminsMaxAggregateOutputType = {
    sub_admin_id: number | null
    user_id: number | null
    center_id: number | null
  }

  export type SubadminsCountAggregateOutputType = {
    sub_admin_id: number
    user_id: number
    center_id: number
    _all: number
  }


  export type SubadminsAvgAggregateInputType = {
    sub_admin_id?: true
    user_id?: true
    center_id?: true
  }

  export type SubadminsSumAggregateInputType = {
    sub_admin_id?: true
    user_id?: true
    center_id?: true
  }

  export type SubadminsMinAggregateInputType = {
    sub_admin_id?: true
    user_id?: true
    center_id?: true
  }

  export type SubadminsMaxAggregateInputType = {
    sub_admin_id?: true
    user_id?: true
    center_id?: true
  }

  export type SubadminsCountAggregateInputType = {
    sub_admin_id?: true
    user_id?: true
    center_id?: true
    _all?: true
  }

  export type SubadminsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subadmins to aggregate.
     */
    where?: subadminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subadmins to fetch.
     */
    orderBy?: subadminsOrderByWithRelationInput | subadminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subadminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subadmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subadmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subadmins
    **/
    _count?: true | SubadminsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubadminsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubadminsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubadminsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubadminsMaxAggregateInputType
  }

  export type GetSubadminsAggregateType<T extends SubadminsAggregateArgs> = {
        [P in keyof T & keyof AggregateSubadmins]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubadmins[P]>
      : GetScalarType<T[P], AggregateSubadmins[P]>
  }




  export type subadminsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subadminsWhereInput
    orderBy?: subadminsOrderByWithAggregationInput | subadminsOrderByWithAggregationInput[]
    by: SubadminsScalarFieldEnum[] | SubadminsScalarFieldEnum
    having?: subadminsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubadminsCountAggregateInputType | true
    _avg?: SubadminsAvgAggregateInputType
    _sum?: SubadminsSumAggregateInputType
    _min?: SubadminsMinAggregateInputType
    _max?: SubadminsMaxAggregateInputType
  }

  export type SubadminsGroupByOutputType = {
    sub_admin_id: number
    user_id: number
    center_id: number
    _count: SubadminsCountAggregateOutputType | null
    _avg: SubadminsAvgAggregateOutputType | null
    _sum: SubadminsSumAggregateOutputType | null
    _min: SubadminsMinAggregateOutputType | null
    _max: SubadminsMaxAggregateOutputType | null
  }

  type GetSubadminsGroupByPayload<T extends subadminsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubadminsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubadminsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubadminsGroupByOutputType[P]>
            : GetScalarType<T[P], SubadminsGroupByOutputType[P]>
        }
      >
    >


  export type subadminsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sub_admin_id?: boolean
    user_id?: boolean
    center_id?: boolean
    bloodcenters?: boolean | bloodcentersDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subadmins"]>

  export type subadminsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sub_admin_id?: boolean
    user_id?: boolean
    center_id?: boolean
    bloodcenters?: boolean | bloodcentersDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subadmins"]>

  export type subadminsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sub_admin_id?: boolean
    user_id?: boolean
    center_id?: boolean
    bloodcenters?: boolean | bloodcentersDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subadmins"]>

  export type subadminsSelectScalar = {
    sub_admin_id?: boolean
    user_id?: boolean
    center_id?: boolean
  }

  export type subadminsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sub_admin_id" | "user_id" | "center_id", ExtArgs["result"]["subadmins"]>
  export type subadminsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bloodcenters?: boolean | bloodcentersDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type subadminsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bloodcenters?: boolean | bloodcentersDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type subadminsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bloodcenters?: boolean | bloodcentersDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $subadminsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "subadmins"
    objects: {
      bloodcenters: Prisma.$bloodcentersPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      sub_admin_id: number
      user_id: number
      center_id: number
    }, ExtArgs["result"]["subadmins"]>
    composites: {}
  }

  type subadminsGetPayload<S extends boolean | null | undefined | subadminsDefaultArgs> = $Result.GetResult<Prisma.$subadminsPayload, S>

  type subadminsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<subadminsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubadminsCountAggregateInputType | true
    }

  export interface subadminsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subadmins'], meta: { name: 'subadmins' } }
    /**
     * Find zero or one Subadmins that matches the filter.
     * @param {subadminsFindUniqueArgs} args - Arguments to find a Subadmins
     * @example
     * // Get one Subadmins
     * const subadmins = await prisma.subadmins.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends subadminsFindUniqueArgs>(args: SelectSubset<T, subadminsFindUniqueArgs<ExtArgs>>): Prisma__subadminsClient<$Result.GetResult<Prisma.$subadminsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subadmins that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {subadminsFindUniqueOrThrowArgs} args - Arguments to find a Subadmins
     * @example
     * // Get one Subadmins
     * const subadmins = await prisma.subadmins.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends subadminsFindUniqueOrThrowArgs>(args: SelectSubset<T, subadminsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__subadminsClient<$Result.GetResult<Prisma.$subadminsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subadmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subadminsFindFirstArgs} args - Arguments to find a Subadmins
     * @example
     * // Get one Subadmins
     * const subadmins = await prisma.subadmins.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends subadminsFindFirstArgs>(args?: SelectSubset<T, subadminsFindFirstArgs<ExtArgs>>): Prisma__subadminsClient<$Result.GetResult<Prisma.$subadminsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subadmins that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subadminsFindFirstOrThrowArgs} args - Arguments to find a Subadmins
     * @example
     * // Get one Subadmins
     * const subadmins = await prisma.subadmins.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends subadminsFindFirstOrThrowArgs>(args?: SelectSubset<T, subadminsFindFirstOrThrowArgs<ExtArgs>>): Prisma__subadminsClient<$Result.GetResult<Prisma.$subadminsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subadmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subadminsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subadmins
     * const subadmins = await prisma.subadmins.findMany()
     * 
     * // Get first 10 Subadmins
     * const subadmins = await prisma.subadmins.findMany({ take: 10 })
     * 
     * // Only select the `sub_admin_id`
     * const subadminsWithSub_admin_idOnly = await prisma.subadmins.findMany({ select: { sub_admin_id: true } })
     * 
     */
    findMany<T extends subadminsFindManyArgs>(args?: SelectSubset<T, subadminsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subadminsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subadmins.
     * @param {subadminsCreateArgs} args - Arguments to create a Subadmins.
     * @example
     * // Create one Subadmins
     * const Subadmins = await prisma.subadmins.create({
     *   data: {
     *     // ... data to create a Subadmins
     *   }
     * })
     * 
     */
    create<T extends subadminsCreateArgs>(args: SelectSubset<T, subadminsCreateArgs<ExtArgs>>): Prisma__subadminsClient<$Result.GetResult<Prisma.$subadminsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subadmins.
     * @param {subadminsCreateManyArgs} args - Arguments to create many Subadmins.
     * @example
     * // Create many Subadmins
     * const subadmins = await prisma.subadmins.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends subadminsCreateManyArgs>(args?: SelectSubset<T, subadminsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subadmins and returns the data saved in the database.
     * @param {subadminsCreateManyAndReturnArgs} args - Arguments to create many Subadmins.
     * @example
     * // Create many Subadmins
     * const subadmins = await prisma.subadmins.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subadmins and only return the `sub_admin_id`
     * const subadminsWithSub_admin_idOnly = await prisma.subadmins.createManyAndReturn({
     *   select: { sub_admin_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends subadminsCreateManyAndReturnArgs>(args?: SelectSubset<T, subadminsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subadminsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subadmins.
     * @param {subadminsDeleteArgs} args - Arguments to delete one Subadmins.
     * @example
     * // Delete one Subadmins
     * const Subadmins = await prisma.subadmins.delete({
     *   where: {
     *     // ... filter to delete one Subadmins
     *   }
     * })
     * 
     */
    delete<T extends subadminsDeleteArgs>(args: SelectSubset<T, subadminsDeleteArgs<ExtArgs>>): Prisma__subadminsClient<$Result.GetResult<Prisma.$subadminsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subadmins.
     * @param {subadminsUpdateArgs} args - Arguments to update one Subadmins.
     * @example
     * // Update one Subadmins
     * const subadmins = await prisma.subadmins.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends subadminsUpdateArgs>(args: SelectSubset<T, subadminsUpdateArgs<ExtArgs>>): Prisma__subadminsClient<$Result.GetResult<Prisma.$subadminsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subadmins.
     * @param {subadminsDeleteManyArgs} args - Arguments to filter Subadmins to delete.
     * @example
     * // Delete a few Subadmins
     * const { count } = await prisma.subadmins.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends subadminsDeleteManyArgs>(args?: SelectSubset<T, subadminsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subadmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subadminsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subadmins
     * const subadmins = await prisma.subadmins.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends subadminsUpdateManyArgs>(args: SelectSubset<T, subadminsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subadmins and returns the data updated in the database.
     * @param {subadminsUpdateManyAndReturnArgs} args - Arguments to update many Subadmins.
     * @example
     * // Update many Subadmins
     * const subadmins = await prisma.subadmins.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subadmins and only return the `sub_admin_id`
     * const subadminsWithSub_admin_idOnly = await prisma.subadmins.updateManyAndReturn({
     *   select: { sub_admin_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends subadminsUpdateManyAndReturnArgs>(args: SelectSubset<T, subadminsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subadminsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subadmins.
     * @param {subadminsUpsertArgs} args - Arguments to update or create a Subadmins.
     * @example
     * // Update or create a Subadmins
     * const subadmins = await prisma.subadmins.upsert({
     *   create: {
     *     // ... data to create a Subadmins
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subadmins we want to update
     *   }
     * })
     */
    upsert<T extends subadminsUpsertArgs>(args: SelectSubset<T, subadminsUpsertArgs<ExtArgs>>): Prisma__subadminsClient<$Result.GetResult<Prisma.$subadminsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subadmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subadminsCountArgs} args - Arguments to filter Subadmins to count.
     * @example
     * // Count the number of Subadmins
     * const count = await prisma.subadmins.count({
     *   where: {
     *     // ... the filter for the Subadmins we want to count
     *   }
     * })
    **/
    count<T extends subadminsCountArgs>(
      args?: Subset<T, subadminsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubadminsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subadmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubadminsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubadminsAggregateArgs>(args: Subset<T, SubadminsAggregateArgs>): Prisma.PrismaPromise<GetSubadminsAggregateType<T>>

    /**
     * Group by Subadmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subadminsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends subadminsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subadminsGroupByArgs['orderBy'] }
        : { orderBy?: subadminsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, subadminsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubadminsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subadmins model
   */
  readonly fields: subadminsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subadmins.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subadminsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bloodcenters<T extends bloodcentersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bloodcentersDefaultArgs<ExtArgs>>): Prisma__bloodcentersClient<$Result.GetResult<Prisma.$bloodcentersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the subadmins model
   */
  interface subadminsFieldRefs {
    readonly sub_admin_id: FieldRef<"subadmins", 'Int'>
    readonly user_id: FieldRef<"subadmins", 'Int'>
    readonly center_id: FieldRef<"subadmins", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * subadmins findUnique
   */
  export type subadminsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subadmins
     */
    select?: subadminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subadmins
     */
    omit?: subadminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subadminsInclude<ExtArgs> | null
    /**
     * Filter, which subadmins to fetch.
     */
    where: subadminsWhereUniqueInput
  }

  /**
   * subadmins findUniqueOrThrow
   */
  export type subadminsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subadmins
     */
    select?: subadminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subadmins
     */
    omit?: subadminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subadminsInclude<ExtArgs> | null
    /**
     * Filter, which subadmins to fetch.
     */
    where: subadminsWhereUniqueInput
  }

  /**
   * subadmins findFirst
   */
  export type subadminsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subadmins
     */
    select?: subadminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subadmins
     */
    omit?: subadminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subadminsInclude<ExtArgs> | null
    /**
     * Filter, which subadmins to fetch.
     */
    where?: subadminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subadmins to fetch.
     */
    orderBy?: subadminsOrderByWithRelationInput | subadminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subadmins.
     */
    cursor?: subadminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subadmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subadmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subadmins.
     */
    distinct?: SubadminsScalarFieldEnum | SubadminsScalarFieldEnum[]
  }

  /**
   * subadmins findFirstOrThrow
   */
  export type subadminsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subadmins
     */
    select?: subadminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subadmins
     */
    omit?: subadminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subadminsInclude<ExtArgs> | null
    /**
     * Filter, which subadmins to fetch.
     */
    where?: subadminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subadmins to fetch.
     */
    orderBy?: subadminsOrderByWithRelationInput | subadminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subadmins.
     */
    cursor?: subadminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subadmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subadmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subadmins.
     */
    distinct?: SubadminsScalarFieldEnum | SubadminsScalarFieldEnum[]
  }

  /**
   * subadmins findMany
   */
  export type subadminsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subadmins
     */
    select?: subadminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subadmins
     */
    omit?: subadminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subadminsInclude<ExtArgs> | null
    /**
     * Filter, which subadmins to fetch.
     */
    where?: subadminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subadmins to fetch.
     */
    orderBy?: subadminsOrderByWithRelationInput | subadminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subadmins.
     */
    cursor?: subadminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subadmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subadmins.
     */
    skip?: number
    distinct?: SubadminsScalarFieldEnum | SubadminsScalarFieldEnum[]
  }

  /**
   * subadmins create
   */
  export type subadminsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subadmins
     */
    select?: subadminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subadmins
     */
    omit?: subadminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subadminsInclude<ExtArgs> | null
    /**
     * The data needed to create a subadmins.
     */
    data: XOR<subadminsCreateInput, subadminsUncheckedCreateInput>
  }

  /**
   * subadmins createMany
   */
  export type subadminsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subadmins.
     */
    data: subadminsCreateManyInput | subadminsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * subadmins createManyAndReturn
   */
  export type subadminsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subadmins
     */
    select?: subadminsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subadmins
     */
    omit?: subadminsOmit<ExtArgs> | null
    /**
     * The data used to create many subadmins.
     */
    data: subadminsCreateManyInput | subadminsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subadminsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * subadmins update
   */
  export type subadminsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subadmins
     */
    select?: subadminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subadmins
     */
    omit?: subadminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subadminsInclude<ExtArgs> | null
    /**
     * The data needed to update a subadmins.
     */
    data: XOR<subadminsUpdateInput, subadminsUncheckedUpdateInput>
    /**
     * Choose, which subadmins to update.
     */
    where: subadminsWhereUniqueInput
  }

  /**
   * subadmins updateMany
   */
  export type subadminsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subadmins.
     */
    data: XOR<subadminsUpdateManyMutationInput, subadminsUncheckedUpdateManyInput>
    /**
     * Filter which subadmins to update
     */
    where?: subadminsWhereInput
    /**
     * Limit how many subadmins to update.
     */
    limit?: number
  }

  /**
   * subadmins updateManyAndReturn
   */
  export type subadminsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subadmins
     */
    select?: subadminsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subadmins
     */
    omit?: subadminsOmit<ExtArgs> | null
    /**
     * The data used to update subadmins.
     */
    data: XOR<subadminsUpdateManyMutationInput, subadminsUncheckedUpdateManyInput>
    /**
     * Filter which subadmins to update
     */
    where?: subadminsWhereInput
    /**
     * Limit how many subadmins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subadminsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * subadmins upsert
   */
  export type subadminsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subadmins
     */
    select?: subadminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subadmins
     */
    omit?: subadminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subadminsInclude<ExtArgs> | null
    /**
     * The filter to search for the subadmins to update in case it exists.
     */
    where: subadminsWhereUniqueInput
    /**
     * In case the subadmins found by the `where` argument doesn't exist, create a new subadmins with this data.
     */
    create: XOR<subadminsCreateInput, subadminsUncheckedCreateInput>
    /**
     * In case the subadmins was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subadminsUpdateInput, subadminsUncheckedUpdateInput>
  }

  /**
   * subadmins delete
   */
  export type subadminsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subadmins
     */
    select?: subadminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subadmins
     */
    omit?: subadminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subadminsInclude<ExtArgs> | null
    /**
     * Filter which subadmins to delete.
     */
    where: subadminsWhereUniqueInput
  }

  /**
   * subadmins deleteMany
   */
  export type subadminsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subadmins to delete
     */
    where?: subadminsWhereInput
    /**
     * Limit how many subadmins to delete.
     */
    limit?: number
  }

  /**
   * subadmins without action
   */
  export type subadminsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subadmins
     */
    select?: subadminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subadmins
     */
    omit?: subadminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subadminsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    user_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: number | null
    password: string | null
    email: string | null
    contact_phone: string | null
    role: string | null
    name: string | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: number | null
    password: string | null
    email: string | null
    contact_phone: string | null
    role: string | null
    name: string | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    password: number
    email: number
    contact_phone: number
    role: number
    name: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    user_id?: true
  }

  export type UsersSumAggregateInputType = {
    user_id?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    password?: true
    email?: true
    contact_phone?: true
    role?: true
    name?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    password?: true
    email?: true
    contact_phone?: true
    role?: true
    name?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    password?: true
    email?: true
    contact_phone?: true
    role?: true
    name?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: number
    password: string
    email: string
    contact_phone: string
    role: string
    name: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    password?: boolean
    email?: boolean
    contact_phone?: boolean
    role?: boolean
    name?: boolean
    admins?: boolean | users$adminsArgs<ExtArgs>
    donors?: boolean | users$donorsArgs<ExtArgs>
    hospitalstaff?: boolean | users$hospitalstaffArgs<ExtArgs>
    subadmins?: boolean | users$subadminsArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    password?: boolean
    email?: boolean
    contact_phone?: boolean
    role?: boolean
    name?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    password?: boolean
    email?: boolean
    contact_phone?: boolean
    role?: boolean
    name?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    user_id?: boolean
    password?: boolean
    email?: boolean
    contact_phone?: boolean
    role?: boolean
    name?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "password" | "email" | "contact_phone" | "role" | "name", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admins?: boolean | users$adminsArgs<ExtArgs>
    donors?: boolean | users$donorsArgs<ExtArgs>
    hospitalstaff?: boolean | users$hospitalstaffArgs<ExtArgs>
    subadmins?: boolean | users$subadminsArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      admins: Prisma.$adminsPayload<ExtArgs> | null
      donors: Prisma.$donorsPayload<ExtArgs> | null
      hospitalstaff: Prisma.$hospitalstaffPayload<ExtArgs> | null
      subadmins: Prisma.$subadminsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      password: string
      email: string
      contact_phone: string
      role: string
      name: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admins<T extends users$adminsArgs<ExtArgs> = {}>(args?: Subset<T, users$adminsArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    donors<T extends users$donorsArgs<ExtArgs> = {}>(args?: Subset<T, users$donorsArgs<ExtArgs>>): Prisma__donorsClient<$Result.GetResult<Prisma.$donorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    hospitalstaff<T extends users$hospitalstaffArgs<ExtArgs> = {}>(args?: Subset<T, users$hospitalstaffArgs<ExtArgs>>): Prisma__hospitalstaffClient<$Result.GetResult<Prisma.$hospitalstaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subadmins<T extends users$subadminsArgs<ExtArgs> = {}>(args?: Subset<T, users$subadminsArgs<ExtArgs>>): Prisma__subadminsClient<$Result.GetResult<Prisma.$subadminsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly user_id: FieldRef<"users", 'Int'>
    readonly password: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly contact_phone: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.admins
   */
  export type users$adminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    where?: adminsWhereInput
  }

  /**
   * users.donors
   */
  export type users$donorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donors
     */
    select?: donorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donors
     */
    omit?: donorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donorsInclude<ExtArgs> | null
    where?: donorsWhereInput
  }

  /**
   * users.hospitalstaff
   */
  export type users$hospitalstaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospitalstaff
     */
    select?: hospitalstaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hospitalstaff
     */
    omit?: hospitalstaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hospitalstaffInclude<ExtArgs> | null
    where?: hospitalstaffWhereInput
  }

  /**
   * users.subadmins
   */
  export type users$subadminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subadmins
     */
    select?: subadminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subadmins
     */
    omit?: subadminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subadminsInclude<ExtArgs> | null
    where?: subadminsWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminsScalarFieldEnum: {
    admin_id: 'admin_id',
    user_id: 'user_id',
    created_at: 'created_at'
  };

  export type AdminsScalarFieldEnum = (typeof AdminsScalarFieldEnum)[keyof typeof AdminsScalarFieldEnum]


  export const AppointmentsScalarFieldEnum: {
    appointment_id: 'appointment_id',
    donor_id: 'donor_id',
    center_id: 'center_id',
    appointment_date: 'appointment_date',
    description: 'description',
    status: 'status'
  };

  export type AppointmentsScalarFieldEnum = (typeof AppointmentsScalarFieldEnum)[keyof typeof AppointmentsScalarFieldEnum]


  export const BloodcentersScalarFieldEnum: {
    center_id: 'center_id',
    center_name: 'center_name',
    address: 'address',
    contact_info: 'contact_info'
  };

  export type BloodcentersScalarFieldEnum = (typeof BloodcentersScalarFieldEnum)[keyof typeof BloodcentersScalarFieldEnum]


  export const BloodrequestsScalarFieldEnum: {
    request_id: 'request_id',
    staff_id: 'staff_id',
    request_date: 'request_date',
    blood_type: 'blood_type',
    units_needed: 'units_needed',
    patient_name: 'patient_name',
    status: 'status'
  };

  export type BloodrequestsScalarFieldEnum = (typeof BloodrequestsScalarFieldEnum)[keyof typeof BloodrequestsScalarFieldEnum]


  export const BloodstockScalarFieldEnum: {
    stock_id: 'stock_id',
    center_id: 'center_id',
    blood_type: 'blood_type',
    units_available: 'units_available',
    expiration_date: 'expiration_date'
  };

  export type BloodstockScalarFieldEnum = (typeof BloodstockScalarFieldEnum)[keyof typeof BloodstockScalarFieldEnum]


  export const DonationhistoryScalarFieldEnum: {
    donation_id: 'donation_id',
    donor_id: 'donor_id',
    center_id: 'center_id',
    donation_date: 'donation_date',
    amount_donated: 'amount_donated',
    status: 'status'
  };

  export type DonationhistoryScalarFieldEnum = (typeof DonationhistoryScalarFieldEnum)[keyof typeof DonationhistoryScalarFieldEnum]


  export const DonorsScalarFieldEnum: {
    donor_id: 'donor_id',
    user_id: 'user_id',
    national_id: 'national_id',
    birth_date: 'birth_date',
    gender: 'gender',
    address: 'address',
    blood_type: 'blood_type',
    last_donation_date: 'last_donation_date',
    medications: 'medications',
    medical_conditions: 'medical_conditions',
    weight: 'weight',
    donor_image: 'donor_image'
  };

  export type DonorsScalarFieldEnum = (typeof DonorsScalarFieldEnum)[keyof typeof DonorsScalarFieldEnum]


  export const HospitalstaffScalarFieldEnum: {
    staff_id: 'staff_id',
    user_id: 'user_id',
    address: 'address'
  };

  export type HospitalstaffScalarFieldEnum = (typeof HospitalstaffScalarFieldEnum)[keyof typeof HospitalstaffScalarFieldEnum]


  export const SubadminsScalarFieldEnum: {
    sub_admin_id: 'sub_admin_id',
    user_id: 'user_id',
    center_id: 'center_id'
  };

  export type SubadminsScalarFieldEnum = (typeof SubadminsScalarFieldEnum)[keyof typeof SubadminsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    password: 'password',
    email: 'email',
    contact_phone: 'contact_phone',
    role: 'role',
    name: 'name'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type adminsWhereInput = {
    AND?: adminsWhereInput | adminsWhereInput[]
    OR?: adminsWhereInput[]
    NOT?: adminsWhereInput | adminsWhereInput[]
    admin_id?: IntFilter<"admins"> | number
    user_id?: IntFilter<"admins"> | number
    created_at?: DateTimeNullableFilter<"admins"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type adminsOrderByWithRelationInput = {
    admin_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type adminsWhereUniqueInput = Prisma.AtLeast<{
    admin_id?: number
    user_id?: number
    AND?: adminsWhereInput | adminsWhereInput[]
    OR?: adminsWhereInput[]
    NOT?: adminsWhereInput | adminsWhereInput[]
    created_at?: DateTimeNullableFilter<"admins"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "admin_id" | "user_id">

  export type adminsOrderByWithAggregationInput = {
    admin_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: adminsCountOrderByAggregateInput
    _avg?: adminsAvgOrderByAggregateInput
    _max?: adminsMaxOrderByAggregateInput
    _min?: adminsMinOrderByAggregateInput
    _sum?: adminsSumOrderByAggregateInput
  }

  export type adminsScalarWhereWithAggregatesInput = {
    AND?: adminsScalarWhereWithAggregatesInput | adminsScalarWhereWithAggregatesInput[]
    OR?: adminsScalarWhereWithAggregatesInput[]
    NOT?: adminsScalarWhereWithAggregatesInput | adminsScalarWhereWithAggregatesInput[]
    admin_id?: IntWithAggregatesFilter<"admins"> | number
    user_id?: IntWithAggregatesFilter<"admins"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"admins"> | Date | string | null
  }

  export type appointmentsWhereInput = {
    AND?: appointmentsWhereInput | appointmentsWhereInput[]
    OR?: appointmentsWhereInput[]
    NOT?: appointmentsWhereInput | appointmentsWhereInput[]
    appointment_id?: IntFilter<"appointments"> | number
    donor_id?: IntFilter<"appointments"> | number
    center_id?: IntFilter<"appointments"> | number
    appointment_date?: DateTimeFilter<"appointments"> | Date | string
    description?: StringNullableFilter<"appointments"> | string | null
    status?: StringNullableFilter<"appointments"> | string | null
    bloodcenters?: XOR<BloodcentersScalarRelationFilter, bloodcentersWhereInput>
    donors?: XOR<DonorsScalarRelationFilter, donorsWhereInput>
  }

  export type appointmentsOrderByWithRelationInput = {
    appointment_id?: SortOrder
    donor_id?: SortOrder
    center_id?: SortOrder
    appointment_date?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    bloodcenters?: bloodcentersOrderByWithRelationInput
    donors?: donorsOrderByWithRelationInput
  }

  export type appointmentsWhereUniqueInput = Prisma.AtLeast<{
    appointment_id?: number
    AND?: appointmentsWhereInput | appointmentsWhereInput[]
    OR?: appointmentsWhereInput[]
    NOT?: appointmentsWhereInput | appointmentsWhereInput[]
    donor_id?: IntFilter<"appointments"> | number
    center_id?: IntFilter<"appointments"> | number
    appointment_date?: DateTimeFilter<"appointments"> | Date | string
    description?: StringNullableFilter<"appointments"> | string | null
    status?: StringNullableFilter<"appointments"> | string | null
    bloodcenters?: XOR<BloodcentersScalarRelationFilter, bloodcentersWhereInput>
    donors?: XOR<DonorsScalarRelationFilter, donorsWhereInput>
  }, "appointment_id">

  export type appointmentsOrderByWithAggregationInput = {
    appointment_id?: SortOrder
    donor_id?: SortOrder
    center_id?: SortOrder
    appointment_date?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: appointmentsCountOrderByAggregateInput
    _avg?: appointmentsAvgOrderByAggregateInput
    _max?: appointmentsMaxOrderByAggregateInput
    _min?: appointmentsMinOrderByAggregateInput
    _sum?: appointmentsSumOrderByAggregateInput
  }

  export type appointmentsScalarWhereWithAggregatesInput = {
    AND?: appointmentsScalarWhereWithAggregatesInput | appointmentsScalarWhereWithAggregatesInput[]
    OR?: appointmentsScalarWhereWithAggregatesInput[]
    NOT?: appointmentsScalarWhereWithAggregatesInput | appointmentsScalarWhereWithAggregatesInput[]
    appointment_id?: IntWithAggregatesFilter<"appointments"> | number
    donor_id?: IntWithAggregatesFilter<"appointments"> | number
    center_id?: IntWithAggregatesFilter<"appointments"> | number
    appointment_date?: DateTimeWithAggregatesFilter<"appointments"> | Date | string
    description?: StringNullableWithAggregatesFilter<"appointments"> | string | null
    status?: StringNullableWithAggregatesFilter<"appointments"> | string | null
  }

  export type bloodcentersWhereInput = {
    AND?: bloodcentersWhereInput | bloodcentersWhereInput[]
    OR?: bloodcentersWhereInput[]
    NOT?: bloodcentersWhereInput | bloodcentersWhereInput[]
    center_id?: IntFilter<"bloodcenters"> | number
    center_name?: StringFilter<"bloodcenters"> | string
    address?: StringFilter<"bloodcenters"> | string
    contact_info?: StringFilter<"bloodcenters"> | string
    appointments?: AppointmentsListRelationFilter
    bloodstock?: BloodstockListRelationFilter
    donationhistory?: DonationhistoryListRelationFilter
    subadmins?: SubadminsListRelationFilter
  }

  export type bloodcentersOrderByWithRelationInput = {
    center_id?: SortOrder
    center_name?: SortOrder
    address?: SortOrder
    contact_info?: SortOrder
    appointments?: appointmentsOrderByRelationAggregateInput
    bloodstock?: bloodstockOrderByRelationAggregateInput
    donationhistory?: donationhistoryOrderByRelationAggregateInput
    subadmins?: subadminsOrderByRelationAggregateInput
  }

  export type bloodcentersWhereUniqueInput = Prisma.AtLeast<{
    center_id?: number
    AND?: bloodcentersWhereInput | bloodcentersWhereInput[]
    OR?: bloodcentersWhereInput[]
    NOT?: bloodcentersWhereInput | bloodcentersWhereInput[]
    center_name?: StringFilter<"bloodcenters"> | string
    address?: StringFilter<"bloodcenters"> | string
    contact_info?: StringFilter<"bloodcenters"> | string
    appointments?: AppointmentsListRelationFilter
    bloodstock?: BloodstockListRelationFilter
    donationhistory?: DonationhistoryListRelationFilter
    subadmins?: SubadminsListRelationFilter
  }, "center_id">

  export type bloodcentersOrderByWithAggregationInput = {
    center_id?: SortOrder
    center_name?: SortOrder
    address?: SortOrder
    contact_info?: SortOrder
    _count?: bloodcentersCountOrderByAggregateInput
    _avg?: bloodcentersAvgOrderByAggregateInput
    _max?: bloodcentersMaxOrderByAggregateInput
    _min?: bloodcentersMinOrderByAggregateInput
    _sum?: bloodcentersSumOrderByAggregateInput
  }

  export type bloodcentersScalarWhereWithAggregatesInput = {
    AND?: bloodcentersScalarWhereWithAggregatesInput | bloodcentersScalarWhereWithAggregatesInput[]
    OR?: bloodcentersScalarWhereWithAggregatesInput[]
    NOT?: bloodcentersScalarWhereWithAggregatesInput | bloodcentersScalarWhereWithAggregatesInput[]
    center_id?: IntWithAggregatesFilter<"bloodcenters"> | number
    center_name?: StringWithAggregatesFilter<"bloodcenters"> | string
    address?: StringWithAggregatesFilter<"bloodcenters"> | string
    contact_info?: StringWithAggregatesFilter<"bloodcenters"> | string
  }

  export type bloodrequestsWhereInput = {
    AND?: bloodrequestsWhereInput | bloodrequestsWhereInput[]
    OR?: bloodrequestsWhereInput[]
    NOT?: bloodrequestsWhereInput | bloodrequestsWhereInput[]
    request_id?: IntFilter<"bloodrequests"> | number
    staff_id?: IntFilter<"bloodrequests"> | number
    request_date?: DateTimeFilter<"bloodrequests"> | Date | string
    blood_type?: StringFilter<"bloodrequests"> | string
    units_needed?: IntFilter<"bloodrequests"> | number
    patient_name?: StringFilter<"bloodrequests"> | string
    status?: StringNullableFilter<"bloodrequests"> | string | null
    hospitalstaff?: XOR<HospitalstaffScalarRelationFilter, hospitalstaffWhereInput>
  }

  export type bloodrequestsOrderByWithRelationInput = {
    request_id?: SortOrder
    staff_id?: SortOrder
    request_date?: SortOrder
    blood_type?: SortOrder
    units_needed?: SortOrder
    patient_name?: SortOrder
    status?: SortOrderInput | SortOrder
    hospitalstaff?: hospitalstaffOrderByWithRelationInput
  }

  export type bloodrequestsWhereUniqueInput = Prisma.AtLeast<{
    request_id?: number
    AND?: bloodrequestsWhereInput | bloodrequestsWhereInput[]
    OR?: bloodrequestsWhereInput[]
    NOT?: bloodrequestsWhereInput | bloodrequestsWhereInput[]
    staff_id?: IntFilter<"bloodrequests"> | number
    request_date?: DateTimeFilter<"bloodrequests"> | Date | string
    blood_type?: StringFilter<"bloodrequests"> | string
    units_needed?: IntFilter<"bloodrequests"> | number
    patient_name?: StringFilter<"bloodrequests"> | string
    status?: StringNullableFilter<"bloodrequests"> | string | null
    hospitalstaff?: XOR<HospitalstaffScalarRelationFilter, hospitalstaffWhereInput>
  }, "request_id">

  export type bloodrequestsOrderByWithAggregationInput = {
    request_id?: SortOrder
    staff_id?: SortOrder
    request_date?: SortOrder
    blood_type?: SortOrder
    units_needed?: SortOrder
    patient_name?: SortOrder
    status?: SortOrderInput | SortOrder
    _count?: bloodrequestsCountOrderByAggregateInput
    _avg?: bloodrequestsAvgOrderByAggregateInput
    _max?: bloodrequestsMaxOrderByAggregateInput
    _min?: bloodrequestsMinOrderByAggregateInput
    _sum?: bloodrequestsSumOrderByAggregateInput
  }

  export type bloodrequestsScalarWhereWithAggregatesInput = {
    AND?: bloodrequestsScalarWhereWithAggregatesInput | bloodrequestsScalarWhereWithAggregatesInput[]
    OR?: bloodrequestsScalarWhereWithAggregatesInput[]
    NOT?: bloodrequestsScalarWhereWithAggregatesInput | bloodrequestsScalarWhereWithAggregatesInput[]
    request_id?: IntWithAggregatesFilter<"bloodrequests"> | number
    staff_id?: IntWithAggregatesFilter<"bloodrequests"> | number
    request_date?: DateTimeWithAggregatesFilter<"bloodrequests"> | Date | string
    blood_type?: StringWithAggregatesFilter<"bloodrequests"> | string
    units_needed?: IntWithAggregatesFilter<"bloodrequests"> | number
    patient_name?: StringWithAggregatesFilter<"bloodrequests"> | string
    status?: StringNullableWithAggregatesFilter<"bloodrequests"> | string | null
  }

  export type bloodstockWhereInput = {
    AND?: bloodstockWhereInput | bloodstockWhereInput[]
    OR?: bloodstockWhereInput[]
    NOT?: bloodstockWhereInput | bloodstockWhereInput[]
    stock_id?: IntFilter<"bloodstock"> | number
    center_id?: IntFilter<"bloodstock"> | number
    blood_type?: StringFilter<"bloodstock"> | string
    units_available?: IntFilter<"bloodstock"> | number
    expiration_date?: DateTimeFilter<"bloodstock"> | Date | string
    bloodcenters?: XOR<BloodcentersScalarRelationFilter, bloodcentersWhereInput>
  }

  export type bloodstockOrderByWithRelationInput = {
    stock_id?: SortOrder
    center_id?: SortOrder
    blood_type?: SortOrder
    units_available?: SortOrder
    expiration_date?: SortOrder
    bloodcenters?: bloodcentersOrderByWithRelationInput
  }

  export type bloodstockWhereUniqueInput = Prisma.AtLeast<{
    stock_id?: number
    AND?: bloodstockWhereInput | bloodstockWhereInput[]
    OR?: bloodstockWhereInput[]
    NOT?: bloodstockWhereInput | bloodstockWhereInput[]
    center_id?: IntFilter<"bloodstock"> | number
    blood_type?: StringFilter<"bloodstock"> | string
    units_available?: IntFilter<"bloodstock"> | number
    expiration_date?: DateTimeFilter<"bloodstock"> | Date | string
    bloodcenters?: XOR<BloodcentersScalarRelationFilter, bloodcentersWhereInput>
  }, "stock_id">

  export type bloodstockOrderByWithAggregationInput = {
    stock_id?: SortOrder
    center_id?: SortOrder
    blood_type?: SortOrder
    units_available?: SortOrder
    expiration_date?: SortOrder
    _count?: bloodstockCountOrderByAggregateInput
    _avg?: bloodstockAvgOrderByAggregateInput
    _max?: bloodstockMaxOrderByAggregateInput
    _min?: bloodstockMinOrderByAggregateInput
    _sum?: bloodstockSumOrderByAggregateInput
  }

  export type bloodstockScalarWhereWithAggregatesInput = {
    AND?: bloodstockScalarWhereWithAggregatesInput | bloodstockScalarWhereWithAggregatesInput[]
    OR?: bloodstockScalarWhereWithAggregatesInput[]
    NOT?: bloodstockScalarWhereWithAggregatesInput | bloodstockScalarWhereWithAggregatesInput[]
    stock_id?: IntWithAggregatesFilter<"bloodstock"> | number
    center_id?: IntWithAggregatesFilter<"bloodstock"> | number
    blood_type?: StringWithAggregatesFilter<"bloodstock"> | string
    units_available?: IntWithAggregatesFilter<"bloodstock"> | number
    expiration_date?: DateTimeWithAggregatesFilter<"bloodstock"> | Date | string
  }

  export type donationhistoryWhereInput = {
    AND?: donationhistoryWhereInput | donationhistoryWhereInput[]
    OR?: donationhistoryWhereInput[]
    NOT?: donationhistoryWhereInput | donationhistoryWhereInput[]
    donation_id?: IntFilter<"donationhistory"> | number
    donor_id?: IntFilter<"donationhistory"> | number
    center_id?: IntFilter<"donationhistory"> | number
    donation_date?: DateTimeFilter<"donationhistory"> | Date | string
    amount_donated?: DecimalFilter<"donationhistory"> | Decimal | DecimalJsLike | number | string
    status?: StringNullableFilter<"donationhistory"> | string | null
    bloodcenters?: XOR<BloodcentersScalarRelationFilter, bloodcentersWhereInput>
    donors?: XOR<DonorsScalarRelationFilter, donorsWhereInput>
  }

  export type donationhistoryOrderByWithRelationInput = {
    donation_id?: SortOrder
    donor_id?: SortOrder
    center_id?: SortOrder
    donation_date?: SortOrder
    amount_donated?: SortOrder
    status?: SortOrderInput | SortOrder
    bloodcenters?: bloodcentersOrderByWithRelationInput
    donors?: donorsOrderByWithRelationInput
  }

  export type donationhistoryWhereUniqueInput = Prisma.AtLeast<{
    donation_id?: number
    AND?: donationhistoryWhereInput | donationhistoryWhereInput[]
    OR?: donationhistoryWhereInput[]
    NOT?: donationhistoryWhereInput | donationhistoryWhereInput[]
    donor_id?: IntFilter<"donationhistory"> | number
    center_id?: IntFilter<"donationhistory"> | number
    donation_date?: DateTimeFilter<"donationhistory"> | Date | string
    amount_donated?: DecimalFilter<"donationhistory"> | Decimal | DecimalJsLike | number | string
    status?: StringNullableFilter<"donationhistory"> | string | null
    bloodcenters?: XOR<BloodcentersScalarRelationFilter, bloodcentersWhereInput>
    donors?: XOR<DonorsScalarRelationFilter, donorsWhereInput>
  }, "donation_id">

  export type donationhistoryOrderByWithAggregationInput = {
    donation_id?: SortOrder
    donor_id?: SortOrder
    center_id?: SortOrder
    donation_date?: SortOrder
    amount_donated?: SortOrder
    status?: SortOrderInput | SortOrder
    _count?: donationhistoryCountOrderByAggregateInput
    _avg?: donationhistoryAvgOrderByAggregateInput
    _max?: donationhistoryMaxOrderByAggregateInput
    _min?: donationhistoryMinOrderByAggregateInput
    _sum?: donationhistorySumOrderByAggregateInput
  }

  export type donationhistoryScalarWhereWithAggregatesInput = {
    AND?: donationhistoryScalarWhereWithAggregatesInput | donationhistoryScalarWhereWithAggregatesInput[]
    OR?: donationhistoryScalarWhereWithAggregatesInput[]
    NOT?: donationhistoryScalarWhereWithAggregatesInput | donationhistoryScalarWhereWithAggregatesInput[]
    donation_id?: IntWithAggregatesFilter<"donationhistory"> | number
    donor_id?: IntWithAggregatesFilter<"donationhistory"> | number
    center_id?: IntWithAggregatesFilter<"donationhistory"> | number
    donation_date?: DateTimeWithAggregatesFilter<"donationhistory"> | Date | string
    amount_donated?: DecimalWithAggregatesFilter<"donationhistory"> | Decimal | DecimalJsLike | number | string
    status?: StringNullableWithAggregatesFilter<"donationhistory"> | string | null
  }

  export type donorsWhereInput = {
    AND?: donorsWhereInput | donorsWhereInput[]
    OR?: donorsWhereInput[]
    NOT?: donorsWhereInput | donorsWhereInput[]
    donor_id?: IntFilter<"donors"> | number
    user_id?: IntFilter<"donors"> | number
    national_id?: StringFilter<"donors"> | string
    birth_date?: DateTimeFilter<"donors"> | Date | string
    gender?: StringFilter<"donors"> | string
    address?: StringFilter<"donors"> | string
    blood_type?: StringFilter<"donors"> | string
    last_donation_date?: DateTimeNullableFilter<"donors"> | Date | string | null
    medications?: StringNullableFilter<"donors"> | string | null
    medical_conditions?: StringNullableFilter<"donors"> | string | null
    weight?: DecimalFilter<"donors"> | Decimal | DecimalJsLike | number | string
    donor_image?: StringFilter<"donors"> | string
    appointments?: AppointmentsListRelationFilter
    donationhistory?: DonationhistoryListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type donorsOrderByWithRelationInput = {
    donor_id?: SortOrder
    user_id?: SortOrder
    national_id?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    blood_type?: SortOrder
    last_donation_date?: SortOrderInput | SortOrder
    medications?: SortOrderInput | SortOrder
    medical_conditions?: SortOrderInput | SortOrder
    weight?: SortOrder
    donor_image?: SortOrder
    appointments?: appointmentsOrderByRelationAggregateInput
    donationhistory?: donationhistoryOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type donorsWhereUniqueInput = Prisma.AtLeast<{
    donor_id?: number
    user_id?: number
    national_id?: string
    AND?: donorsWhereInput | donorsWhereInput[]
    OR?: donorsWhereInput[]
    NOT?: donorsWhereInput | donorsWhereInput[]
    birth_date?: DateTimeFilter<"donors"> | Date | string
    gender?: StringFilter<"donors"> | string
    address?: StringFilter<"donors"> | string
    blood_type?: StringFilter<"donors"> | string
    last_donation_date?: DateTimeNullableFilter<"donors"> | Date | string | null
    medications?: StringNullableFilter<"donors"> | string | null
    medical_conditions?: StringNullableFilter<"donors"> | string | null
    weight?: DecimalFilter<"donors"> | Decimal | DecimalJsLike | number | string
    donor_image?: StringFilter<"donors"> | string
    appointments?: AppointmentsListRelationFilter
    donationhistory?: DonationhistoryListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "donor_id" | "user_id" | "national_id">

  export type donorsOrderByWithAggregationInput = {
    donor_id?: SortOrder
    user_id?: SortOrder
    national_id?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    blood_type?: SortOrder
    last_donation_date?: SortOrderInput | SortOrder
    medications?: SortOrderInput | SortOrder
    medical_conditions?: SortOrderInput | SortOrder
    weight?: SortOrder
    donor_image?: SortOrder
    _count?: donorsCountOrderByAggregateInput
    _avg?: donorsAvgOrderByAggregateInput
    _max?: donorsMaxOrderByAggregateInput
    _min?: donorsMinOrderByAggregateInput
    _sum?: donorsSumOrderByAggregateInput
  }

  export type donorsScalarWhereWithAggregatesInput = {
    AND?: donorsScalarWhereWithAggregatesInput | donorsScalarWhereWithAggregatesInput[]
    OR?: donorsScalarWhereWithAggregatesInput[]
    NOT?: donorsScalarWhereWithAggregatesInput | donorsScalarWhereWithAggregatesInput[]
    donor_id?: IntWithAggregatesFilter<"donors"> | number
    user_id?: IntWithAggregatesFilter<"donors"> | number
    national_id?: StringWithAggregatesFilter<"donors"> | string
    birth_date?: DateTimeWithAggregatesFilter<"donors"> | Date | string
    gender?: StringWithAggregatesFilter<"donors"> | string
    address?: StringWithAggregatesFilter<"donors"> | string
    blood_type?: StringWithAggregatesFilter<"donors"> | string
    last_donation_date?: DateTimeNullableWithAggregatesFilter<"donors"> | Date | string | null
    medications?: StringNullableWithAggregatesFilter<"donors"> | string | null
    medical_conditions?: StringNullableWithAggregatesFilter<"donors"> | string | null
    weight?: DecimalWithAggregatesFilter<"donors"> | Decimal | DecimalJsLike | number | string
    donor_image?: StringWithAggregatesFilter<"donors"> | string
  }

  export type hospitalstaffWhereInput = {
    AND?: hospitalstaffWhereInput | hospitalstaffWhereInput[]
    OR?: hospitalstaffWhereInput[]
    NOT?: hospitalstaffWhereInput | hospitalstaffWhereInput[]
    staff_id?: IntFilter<"hospitalstaff"> | number
    user_id?: IntFilter<"hospitalstaff"> | number
    address?: StringFilter<"hospitalstaff"> | string
    bloodrequests?: BloodrequestsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type hospitalstaffOrderByWithRelationInput = {
    staff_id?: SortOrder
    user_id?: SortOrder
    address?: SortOrder
    bloodrequests?: bloodrequestsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type hospitalstaffWhereUniqueInput = Prisma.AtLeast<{
    staff_id?: number
    user_id?: number
    AND?: hospitalstaffWhereInput | hospitalstaffWhereInput[]
    OR?: hospitalstaffWhereInput[]
    NOT?: hospitalstaffWhereInput | hospitalstaffWhereInput[]
    address?: StringFilter<"hospitalstaff"> | string
    bloodrequests?: BloodrequestsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "staff_id" | "user_id">

  export type hospitalstaffOrderByWithAggregationInput = {
    staff_id?: SortOrder
    user_id?: SortOrder
    address?: SortOrder
    _count?: hospitalstaffCountOrderByAggregateInput
    _avg?: hospitalstaffAvgOrderByAggregateInput
    _max?: hospitalstaffMaxOrderByAggregateInput
    _min?: hospitalstaffMinOrderByAggregateInput
    _sum?: hospitalstaffSumOrderByAggregateInput
  }

  export type hospitalstaffScalarWhereWithAggregatesInput = {
    AND?: hospitalstaffScalarWhereWithAggregatesInput | hospitalstaffScalarWhereWithAggregatesInput[]
    OR?: hospitalstaffScalarWhereWithAggregatesInput[]
    NOT?: hospitalstaffScalarWhereWithAggregatesInput | hospitalstaffScalarWhereWithAggregatesInput[]
    staff_id?: IntWithAggregatesFilter<"hospitalstaff"> | number
    user_id?: IntWithAggregatesFilter<"hospitalstaff"> | number
    address?: StringWithAggregatesFilter<"hospitalstaff"> | string
  }

  export type subadminsWhereInput = {
    AND?: subadminsWhereInput | subadminsWhereInput[]
    OR?: subadminsWhereInput[]
    NOT?: subadminsWhereInput | subadminsWhereInput[]
    sub_admin_id?: IntFilter<"subadmins"> | number
    user_id?: IntFilter<"subadmins"> | number
    center_id?: IntFilter<"subadmins"> | number
    bloodcenters?: XOR<BloodcentersScalarRelationFilter, bloodcentersWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type subadminsOrderByWithRelationInput = {
    sub_admin_id?: SortOrder
    user_id?: SortOrder
    center_id?: SortOrder
    bloodcenters?: bloodcentersOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type subadminsWhereUniqueInput = Prisma.AtLeast<{
    sub_admin_id?: number
    user_id?: number
    AND?: subadminsWhereInput | subadminsWhereInput[]
    OR?: subadminsWhereInput[]
    NOT?: subadminsWhereInput | subadminsWhereInput[]
    center_id?: IntFilter<"subadmins"> | number
    bloodcenters?: XOR<BloodcentersScalarRelationFilter, bloodcentersWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "sub_admin_id" | "user_id">

  export type subadminsOrderByWithAggregationInput = {
    sub_admin_id?: SortOrder
    user_id?: SortOrder
    center_id?: SortOrder
    _count?: subadminsCountOrderByAggregateInput
    _avg?: subadminsAvgOrderByAggregateInput
    _max?: subadminsMaxOrderByAggregateInput
    _min?: subadminsMinOrderByAggregateInput
    _sum?: subadminsSumOrderByAggregateInput
  }

  export type subadminsScalarWhereWithAggregatesInput = {
    AND?: subadminsScalarWhereWithAggregatesInput | subadminsScalarWhereWithAggregatesInput[]
    OR?: subadminsScalarWhereWithAggregatesInput[]
    NOT?: subadminsScalarWhereWithAggregatesInput | subadminsScalarWhereWithAggregatesInput[]
    sub_admin_id?: IntWithAggregatesFilter<"subadmins"> | number
    user_id?: IntWithAggregatesFilter<"subadmins"> | number
    center_id?: IntWithAggregatesFilter<"subadmins"> | number
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_id?: IntFilter<"users"> | number
    password?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    contact_phone?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    admins?: XOR<AdminsNullableScalarRelationFilter, adminsWhereInput> | null
    donors?: XOR<DonorsNullableScalarRelationFilter, donorsWhereInput> | null
    hospitalstaff?: XOR<HospitalstaffNullableScalarRelationFilter, hospitalstaffWhereInput> | null
    subadmins?: XOR<SubadminsNullableScalarRelationFilter, subadminsWhereInput> | null
  }

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder
    password?: SortOrder
    email?: SortOrder
    contact_phone?: SortOrder
    role?: SortOrder
    name?: SortOrder
    admins?: adminsOrderByWithRelationInput
    donors?: donorsOrderByWithRelationInput
    hospitalstaff?: hospitalstaffOrderByWithRelationInput
    subadmins?: subadminsOrderByWithRelationInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    contact_phone?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    admins?: XOR<AdminsNullableScalarRelationFilter, adminsWhereInput> | null
    donors?: XOR<DonorsNullableScalarRelationFilter, donorsWhereInput> | null
    hospitalstaff?: XOR<HospitalstaffNullableScalarRelationFilter, hospitalstaffWhereInput> | null
    subadmins?: XOR<SubadminsNullableScalarRelationFilter, subadminsWhereInput> | null
  }, "user_id" | "email">

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    password?: SortOrder
    email?: SortOrder
    contact_phone?: SortOrder
    role?: SortOrder
    name?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"users"> | number
    password?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    contact_phone?: StringWithAggregatesFilter<"users"> | string
    role?: StringWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
  }

  export type adminsCreateInput = {
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutAdminsInput
  }

  export type adminsUncheckedCreateInput = {
    admin_id?: number
    user_id: number
    created_at?: Date | string | null
  }

  export type adminsUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutAdminsNestedInput
  }

  export type adminsUncheckedUpdateInput = {
    admin_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type adminsCreateManyInput = {
    admin_id?: number
    user_id: number
    created_at?: Date | string | null
  }

  export type adminsUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type adminsUncheckedUpdateManyInput = {
    admin_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type appointmentsCreateInput = {
    appointment_date: Date | string
    description?: string | null
    status?: string | null
    bloodcenters: bloodcentersCreateNestedOneWithoutAppointmentsInput
    donors: donorsCreateNestedOneWithoutAppointmentsInput
  }

  export type appointmentsUncheckedCreateInput = {
    appointment_id?: number
    donor_id: number
    center_id: number
    appointment_date: Date | string
    description?: string | null
    status?: string | null
  }

  export type appointmentsUpdateInput = {
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    bloodcenters?: bloodcentersUpdateOneRequiredWithoutAppointmentsNestedInput
    donors?: donorsUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type appointmentsUncheckedUpdateInput = {
    appointment_id?: IntFieldUpdateOperationsInput | number
    donor_id?: IntFieldUpdateOperationsInput | number
    center_id?: IntFieldUpdateOperationsInput | number
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type appointmentsCreateManyInput = {
    appointment_id?: number
    donor_id: number
    center_id: number
    appointment_date: Date | string
    description?: string | null
    status?: string | null
  }

  export type appointmentsUpdateManyMutationInput = {
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type appointmentsUncheckedUpdateManyInput = {
    appointment_id?: IntFieldUpdateOperationsInput | number
    donor_id?: IntFieldUpdateOperationsInput | number
    center_id?: IntFieldUpdateOperationsInput | number
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type bloodcentersCreateInput = {
    center_name: string
    address: string
    contact_info: string
    appointments?: appointmentsCreateNestedManyWithoutBloodcentersInput
    bloodstock?: bloodstockCreateNestedManyWithoutBloodcentersInput
    donationhistory?: donationhistoryCreateNestedManyWithoutBloodcentersInput
    subadmins?: subadminsCreateNestedManyWithoutBloodcentersInput
  }

  export type bloodcentersUncheckedCreateInput = {
    center_id?: number
    center_name: string
    address: string
    contact_info: string
    appointments?: appointmentsUncheckedCreateNestedManyWithoutBloodcentersInput
    bloodstock?: bloodstockUncheckedCreateNestedManyWithoutBloodcentersInput
    donationhistory?: donationhistoryUncheckedCreateNestedManyWithoutBloodcentersInput
    subadmins?: subadminsUncheckedCreateNestedManyWithoutBloodcentersInput
  }

  export type bloodcentersUpdateInput = {
    center_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_info?: StringFieldUpdateOperationsInput | string
    appointments?: appointmentsUpdateManyWithoutBloodcentersNestedInput
    bloodstock?: bloodstockUpdateManyWithoutBloodcentersNestedInput
    donationhistory?: donationhistoryUpdateManyWithoutBloodcentersNestedInput
    subadmins?: subadminsUpdateManyWithoutBloodcentersNestedInput
  }

  export type bloodcentersUncheckedUpdateInput = {
    center_id?: IntFieldUpdateOperationsInput | number
    center_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_info?: StringFieldUpdateOperationsInput | string
    appointments?: appointmentsUncheckedUpdateManyWithoutBloodcentersNestedInput
    bloodstock?: bloodstockUncheckedUpdateManyWithoutBloodcentersNestedInput
    donationhistory?: donationhistoryUncheckedUpdateManyWithoutBloodcentersNestedInput
    subadmins?: subadminsUncheckedUpdateManyWithoutBloodcentersNestedInput
  }

  export type bloodcentersCreateManyInput = {
    center_id?: number
    center_name: string
    address: string
    contact_info: string
  }

  export type bloodcentersUpdateManyMutationInput = {
    center_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_info?: StringFieldUpdateOperationsInput | string
  }

  export type bloodcentersUncheckedUpdateManyInput = {
    center_id?: IntFieldUpdateOperationsInput | number
    center_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_info?: StringFieldUpdateOperationsInput | string
  }

  export type bloodrequestsCreateInput = {
    request_date: Date | string
    blood_type: string
    units_needed: number
    patient_name: string
    status?: string | null
    hospitalstaff: hospitalstaffCreateNestedOneWithoutBloodrequestsInput
  }

  export type bloodrequestsUncheckedCreateInput = {
    request_id?: number
    staff_id: number
    request_date: Date | string
    blood_type: string
    units_needed: number
    patient_name: string
    status?: string | null
  }

  export type bloodrequestsUpdateInput = {
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string
    blood_type?: StringFieldUpdateOperationsInput | string
    units_needed?: IntFieldUpdateOperationsInput | number
    patient_name?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalstaff?: hospitalstaffUpdateOneRequiredWithoutBloodrequestsNestedInput
  }

  export type bloodrequestsUncheckedUpdateInput = {
    request_id?: IntFieldUpdateOperationsInput | number
    staff_id?: IntFieldUpdateOperationsInput | number
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string
    blood_type?: StringFieldUpdateOperationsInput | string
    units_needed?: IntFieldUpdateOperationsInput | number
    patient_name?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type bloodrequestsCreateManyInput = {
    request_id?: number
    staff_id: number
    request_date: Date | string
    blood_type: string
    units_needed: number
    patient_name: string
    status?: string | null
  }

  export type bloodrequestsUpdateManyMutationInput = {
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string
    blood_type?: StringFieldUpdateOperationsInput | string
    units_needed?: IntFieldUpdateOperationsInput | number
    patient_name?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type bloodrequestsUncheckedUpdateManyInput = {
    request_id?: IntFieldUpdateOperationsInput | number
    staff_id?: IntFieldUpdateOperationsInput | number
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string
    blood_type?: StringFieldUpdateOperationsInput | string
    units_needed?: IntFieldUpdateOperationsInput | number
    patient_name?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type bloodstockCreateInput = {
    blood_type: string
    units_available: number
    expiration_date: Date | string
    bloodcenters: bloodcentersCreateNestedOneWithoutBloodstockInput
  }

  export type bloodstockUncheckedCreateInput = {
    stock_id?: number
    center_id: number
    blood_type: string
    units_available: number
    expiration_date: Date | string
  }

  export type bloodstockUpdateInput = {
    blood_type?: StringFieldUpdateOperationsInput | string
    units_available?: IntFieldUpdateOperationsInput | number
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodcenters?: bloodcentersUpdateOneRequiredWithoutBloodstockNestedInput
  }

  export type bloodstockUncheckedUpdateInput = {
    stock_id?: IntFieldUpdateOperationsInput | number
    center_id?: IntFieldUpdateOperationsInput | number
    blood_type?: StringFieldUpdateOperationsInput | string
    units_available?: IntFieldUpdateOperationsInput | number
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bloodstockCreateManyInput = {
    stock_id?: number
    center_id: number
    blood_type: string
    units_available: number
    expiration_date: Date | string
  }

  export type bloodstockUpdateManyMutationInput = {
    blood_type?: StringFieldUpdateOperationsInput | string
    units_available?: IntFieldUpdateOperationsInput | number
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bloodstockUncheckedUpdateManyInput = {
    stock_id?: IntFieldUpdateOperationsInput | number
    center_id?: IntFieldUpdateOperationsInput | number
    blood_type?: StringFieldUpdateOperationsInput | string
    units_available?: IntFieldUpdateOperationsInput | number
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type donationhistoryCreateInput = {
    donation_date: Date | string
    amount_donated: Decimal | DecimalJsLike | number | string
    status?: string | null
    bloodcenters: bloodcentersCreateNestedOneWithoutDonationhistoryInput
    donors: donorsCreateNestedOneWithoutDonationhistoryInput
  }

  export type donationhistoryUncheckedCreateInput = {
    donation_id?: number
    donor_id: number
    center_id: number
    donation_date: Date | string
    amount_donated: Decimal | DecimalJsLike | number | string
    status?: string | null
  }

  export type donationhistoryUpdateInput = {
    donation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount_donated?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    bloodcenters?: bloodcentersUpdateOneRequiredWithoutDonationhistoryNestedInput
    donors?: donorsUpdateOneRequiredWithoutDonationhistoryNestedInput
  }

  export type donationhistoryUncheckedUpdateInput = {
    donation_id?: IntFieldUpdateOperationsInput | number
    donor_id?: IntFieldUpdateOperationsInput | number
    center_id?: IntFieldUpdateOperationsInput | number
    donation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount_donated?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type donationhistoryCreateManyInput = {
    donation_id?: number
    donor_id: number
    center_id: number
    donation_date: Date | string
    amount_donated: Decimal | DecimalJsLike | number | string
    status?: string | null
  }

  export type donationhistoryUpdateManyMutationInput = {
    donation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount_donated?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type donationhistoryUncheckedUpdateManyInput = {
    donation_id?: IntFieldUpdateOperationsInput | number
    donor_id?: IntFieldUpdateOperationsInput | number
    center_id?: IntFieldUpdateOperationsInput | number
    donation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount_donated?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type donorsCreateInput = {
    national_id: string
    birth_date: Date | string
    gender: string
    address: string
    blood_type: string
    last_donation_date?: Date | string | null
    medications?: string | null
    medical_conditions?: string | null
    weight: Decimal | DecimalJsLike | number | string
    donor_image: string
    appointments?: appointmentsCreateNestedManyWithoutDonorsInput
    donationhistory?: donationhistoryCreateNestedManyWithoutDonorsInput
    users: usersCreateNestedOneWithoutDonorsInput
  }

  export type donorsUncheckedCreateInput = {
    donor_id?: number
    user_id: number
    national_id: string
    birth_date: Date | string
    gender: string
    address: string
    blood_type: string
    last_donation_date?: Date | string | null
    medications?: string | null
    medical_conditions?: string | null
    weight: Decimal | DecimalJsLike | number | string
    donor_image: string
    appointments?: appointmentsUncheckedCreateNestedManyWithoutDonorsInput
    donationhistory?: donationhistoryUncheckedCreateNestedManyWithoutDonorsInput
  }

  export type donorsUpdateInput = {
    national_id?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    blood_type?: StringFieldUpdateOperationsInput | string
    last_donation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medications?: NullableStringFieldUpdateOperationsInput | string | null
    medical_conditions?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    donor_image?: StringFieldUpdateOperationsInput | string
    appointments?: appointmentsUpdateManyWithoutDonorsNestedInput
    donationhistory?: donationhistoryUpdateManyWithoutDonorsNestedInput
    users?: usersUpdateOneRequiredWithoutDonorsNestedInput
  }

  export type donorsUncheckedUpdateInput = {
    donor_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    national_id?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    blood_type?: StringFieldUpdateOperationsInput | string
    last_donation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medications?: NullableStringFieldUpdateOperationsInput | string | null
    medical_conditions?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    donor_image?: StringFieldUpdateOperationsInput | string
    appointments?: appointmentsUncheckedUpdateManyWithoutDonorsNestedInput
    donationhistory?: donationhistoryUncheckedUpdateManyWithoutDonorsNestedInput
  }

  export type donorsCreateManyInput = {
    donor_id?: number
    user_id: number
    national_id: string
    birth_date: Date | string
    gender: string
    address: string
    blood_type: string
    last_donation_date?: Date | string | null
    medications?: string | null
    medical_conditions?: string | null
    weight: Decimal | DecimalJsLike | number | string
    donor_image: string
  }

  export type donorsUpdateManyMutationInput = {
    national_id?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    blood_type?: StringFieldUpdateOperationsInput | string
    last_donation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medications?: NullableStringFieldUpdateOperationsInput | string | null
    medical_conditions?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    donor_image?: StringFieldUpdateOperationsInput | string
  }

  export type donorsUncheckedUpdateManyInput = {
    donor_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    national_id?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    blood_type?: StringFieldUpdateOperationsInput | string
    last_donation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medications?: NullableStringFieldUpdateOperationsInput | string | null
    medical_conditions?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    donor_image?: StringFieldUpdateOperationsInput | string
  }

  export type hospitalstaffCreateInput = {
    address: string
    bloodrequests?: bloodrequestsCreateNestedManyWithoutHospitalstaffInput
    users: usersCreateNestedOneWithoutHospitalstaffInput
  }

  export type hospitalstaffUncheckedCreateInput = {
    staff_id?: number
    user_id: number
    address: string
    bloodrequests?: bloodrequestsUncheckedCreateNestedManyWithoutHospitalstaffInput
  }

  export type hospitalstaffUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    bloodrequests?: bloodrequestsUpdateManyWithoutHospitalstaffNestedInput
    users?: usersUpdateOneRequiredWithoutHospitalstaffNestedInput
  }

  export type hospitalstaffUncheckedUpdateInput = {
    staff_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    bloodrequests?: bloodrequestsUncheckedUpdateManyWithoutHospitalstaffNestedInput
  }

  export type hospitalstaffCreateManyInput = {
    staff_id?: number
    user_id: number
    address: string
  }

  export type hospitalstaffUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
  }

  export type hospitalstaffUncheckedUpdateManyInput = {
    staff_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
  }

  export type subadminsCreateInput = {
    bloodcenters: bloodcentersCreateNestedOneWithoutSubadminsInput
    users: usersCreateNestedOneWithoutSubadminsInput
  }

  export type subadminsUncheckedCreateInput = {
    sub_admin_id?: number
    user_id: number
    center_id: number
  }

  export type subadminsUpdateInput = {
    bloodcenters?: bloodcentersUpdateOneRequiredWithoutSubadminsNestedInput
    users?: usersUpdateOneRequiredWithoutSubadminsNestedInput
  }

  export type subadminsUncheckedUpdateInput = {
    sub_admin_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    center_id?: IntFieldUpdateOperationsInput | number
  }

  export type subadminsCreateManyInput = {
    sub_admin_id?: number
    user_id: number
    center_id: number
  }

  export type subadminsUpdateManyMutationInput = {

  }

  export type subadminsUncheckedUpdateManyInput = {
    sub_admin_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    center_id?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateInput = {
    password: string
    email: string
    contact_phone: string
    role: string
    name: string
    admins?: adminsCreateNestedOneWithoutUsersInput
    donors?: donorsCreateNestedOneWithoutUsersInput
    hospitalstaff?: hospitalstaffCreateNestedOneWithoutUsersInput
    subadmins?: subadminsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    user_id?: number
    password: string
    email: string
    contact_phone: string
    role: string
    name: string
    admins?: adminsUncheckedCreateNestedOneWithoutUsersInput
    donors?: donorsUncheckedCreateNestedOneWithoutUsersInput
    hospitalstaff?: hospitalstaffUncheckedCreateNestedOneWithoutUsersInput
    subadmins?: subadminsUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersUpdateInput = {
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admins?: adminsUpdateOneWithoutUsersNestedInput
    donors?: donorsUpdateOneWithoutUsersNestedInput
    hospitalstaff?: hospitalstaffUpdateOneWithoutUsersNestedInput
    subadmins?: subadminsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admins?: adminsUncheckedUpdateOneWithoutUsersNestedInput
    donors?: donorsUncheckedUpdateOneWithoutUsersNestedInput
    hospitalstaff?: hospitalstaffUncheckedUpdateOneWithoutUsersNestedInput
    subadmins?: subadminsUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    user_id?: number
    password: string
    email: string
    contact_phone: string
    role: string
    name: string
  }

  export type usersUpdateManyMutationInput = {
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type adminsCountOrderByAggregateInput = {
    admin_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type adminsAvgOrderByAggregateInput = {
    admin_id?: SortOrder
    user_id?: SortOrder
  }

  export type adminsMaxOrderByAggregateInput = {
    admin_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type adminsMinOrderByAggregateInput = {
    admin_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type adminsSumOrderByAggregateInput = {
    admin_id?: SortOrder
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BloodcentersScalarRelationFilter = {
    is?: bloodcentersWhereInput
    isNot?: bloodcentersWhereInput
  }

  export type DonorsScalarRelationFilter = {
    is?: donorsWhereInput
    isNot?: donorsWhereInput
  }

  export type appointmentsCountOrderByAggregateInput = {
    appointment_id?: SortOrder
    donor_id?: SortOrder
    center_id?: SortOrder
    appointment_date?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type appointmentsAvgOrderByAggregateInput = {
    appointment_id?: SortOrder
    donor_id?: SortOrder
    center_id?: SortOrder
  }

  export type appointmentsMaxOrderByAggregateInput = {
    appointment_id?: SortOrder
    donor_id?: SortOrder
    center_id?: SortOrder
    appointment_date?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type appointmentsMinOrderByAggregateInput = {
    appointment_id?: SortOrder
    donor_id?: SortOrder
    center_id?: SortOrder
    appointment_date?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type appointmentsSumOrderByAggregateInput = {
    appointment_id?: SortOrder
    donor_id?: SortOrder
    center_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AppointmentsListRelationFilter = {
    every?: appointmentsWhereInput
    some?: appointmentsWhereInput
    none?: appointmentsWhereInput
  }

  export type BloodstockListRelationFilter = {
    every?: bloodstockWhereInput
    some?: bloodstockWhereInput
    none?: bloodstockWhereInput
  }

  export type DonationhistoryListRelationFilter = {
    every?: donationhistoryWhereInput
    some?: donationhistoryWhereInput
    none?: donationhistoryWhereInput
  }

  export type SubadminsListRelationFilter = {
    every?: subadminsWhereInput
    some?: subadminsWhereInput
    none?: subadminsWhereInput
  }

  export type appointmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type bloodstockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type donationhistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type subadminsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type bloodcentersCountOrderByAggregateInput = {
    center_id?: SortOrder
    center_name?: SortOrder
    address?: SortOrder
    contact_info?: SortOrder
  }

  export type bloodcentersAvgOrderByAggregateInput = {
    center_id?: SortOrder
  }

  export type bloodcentersMaxOrderByAggregateInput = {
    center_id?: SortOrder
    center_name?: SortOrder
    address?: SortOrder
    contact_info?: SortOrder
  }

  export type bloodcentersMinOrderByAggregateInput = {
    center_id?: SortOrder
    center_name?: SortOrder
    address?: SortOrder
    contact_info?: SortOrder
  }

  export type bloodcentersSumOrderByAggregateInput = {
    center_id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type HospitalstaffScalarRelationFilter = {
    is?: hospitalstaffWhereInput
    isNot?: hospitalstaffWhereInput
  }

  export type bloodrequestsCountOrderByAggregateInput = {
    request_id?: SortOrder
    staff_id?: SortOrder
    request_date?: SortOrder
    blood_type?: SortOrder
    units_needed?: SortOrder
    patient_name?: SortOrder
    status?: SortOrder
  }

  export type bloodrequestsAvgOrderByAggregateInput = {
    request_id?: SortOrder
    staff_id?: SortOrder
    units_needed?: SortOrder
  }

  export type bloodrequestsMaxOrderByAggregateInput = {
    request_id?: SortOrder
    staff_id?: SortOrder
    request_date?: SortOrder
    blood_type?: SortOrder
    units_needed?: SortOrder
    patient_name?: SortOrder
    status?: SortOrder
  }

  export type bloodrequestsMinOrderByAggregateInput = {
    request_id?: SortOrder
    staff_id?: SortOrder
    request_date?: SortOrder
    blood_type?: SortOrder
    units_needed?: SortOrder
    patient_name?: SortOrder
    status?: SortOrder
  }

  export type bloodrequestsSumOrderByAggregateInput = {
    request_id?: SortOrder
    staff_id?: SortOrder
    units_needed?: SortOrder
  }

  export type bloodstockCountOrderByAggregateInput = {
    stock_id?: SortOrder
    center_id?: SortOrder
    blood_type?: SortOrder
    units_available?: SortOrder
    expiration_date?: SortOrder
  }

  export type bloodstockAvgOrderByAggregateInput = {
    stock_id?: SortOrder
    center_id?: SortOrder
    units_available?: SortOrder
  }

  export type bloodstockMaxOrderByAggregateInput = {
    stock_id?: SortOrder
    center_id?: SortOrder
    blood_type?: SortOrder
    units_available?: SortOrder
    expiration_date?: SortOrder
  }

  export type bloodstockMinOrderByAggregateInput = {
    stock_id?: SortOrder
    center_id?: SortOrder
    blood_type?: SortOrder
    units_available?: SortOrder
    expiration_date?: SortOrder
  }

  export type bloodstockSumOrderByAggregateInput = {
    stock_id?: SortOrder
    center_id?: SortOrder
    units_available?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type donationhistoryCountOrderByAggregateInput = {
    donation_id?: SortOrder
    donor_id?: SortOrder
    center_id?: SortOrder
    donation_date?: SortOrder
    amount_donated?: SortOrder
    status?: SortOrder
  }

  export type donationhistoryAvgOrderByAggregateInput = {
    donation_id?: SortOrder
    donor_id?: SortOrder
    center_id?: SortOrder
    amount_donated?: SortOrder
  }

  export type donationhistoryMaxOrderByAggregateInput = {
    donation_id?: SortOrder
    donor_id?: SortOrder
    center_id?: SortOrder
    donation_date?: SortOrder
    amount_donated?: SortOrder
    status?: SortOrder
  }

  export type donationhistoryMinOrderByAggregateInput = {
    donation_id?: SortOrder
    donor_id?: SortOrder
    center_id?: SortOrder
    donation_date?: SortOrder
    amount_donated?: SortOrder
    status?: SortOrder
  }

  export type donationhistorySumOrderByAggregateInput = {
    donation_id?: SortOrder
    donor_id?: SortOrder
    center_id?: SortOrder
    amount_donated?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type donorsCountOrderByAggregateInput = {
    donor_id?: SortOrder
    user_id?: SortOrder
    national_id?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    blood_type?: SortOrder
    last_donation_date?: SortOrder
    medications?: SortOrder
    medical_conditions?: SortOrder
    weight?: SortOrder
    donor_image?: SortOrder
  }

  export type donorsAvgOrderByAggregateInput = {
    donor_id?: SortOrder
    user_id?: SortOrder
    weight?: SortOrder
  }

  export type donorsMaxOrderByAggregateInput = {
    donor_id?: SortOrder
    user_id?: SortOrder
    national_id?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    blood_type?: SortOrder
    last_donation_date?: SortOrder
    medications?: SortOrder
    medical_conditions?: SortOrder
    weight?: SortOrder
    donor_image?: SortOrder
  }

  export type donorsMinOrderByAggregateInput = {
    donor_id?: SortOrder
    user_id?: SortOrder
    national_id?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    blood_type?: SortOrder
    last_donation_date?: SortOrder
    medications?: SortOrder
    medical_conditions?: SortOrder
    weight?: SortOrder
    donor_image?: SortOrder
  }

  export type donorsSumOrderByAggregateInput = {
    donor_id?: SortOrder
    user_id?: SortOrder
    weight?: SortOrder
  }

  export type BloodrequestsListRelationFilter = {
    every?: bloodrequestsWhereInput
    some?: bloodrequestsWhereInput
    none?: bloodrequestsWhereInput
  }

  export type bloodrequestsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type hospitalstaffCountOrderByAggregateInput = {
    staff_id?: SortOrder
    user_id?: SortOrder
    address?: SortOrder
  }

  export type hospitalstaffAvgOrderByAggregateInput = {
    staff_id?: SortOrder
    user_id?: SortOrder
  }

  export type hospitalstaffMaxOrderByAggregateInput = {
    staff_id?: SortOrder
    user_id?: SortOrder
    address?: SortOrder
  }

  export type hospitalstaffMinOrderByAggregateInput = {
    staff_id?: SortOrder
    user_id?: SortOrder
    address?: SortOrder
  }

  export type hospitalstaffSumOrderByAggregateInput = {
    staff_id?: SortOrder
    user_id?: SortOrder
  }

  export type subadminsCountOrderByAggregateInput = {
    sub_admin_id?: SortOrder
    user_id?: SortOrder
    center_id?: SortOrder
  }

  export type subadminsAvgOrderByAggregateInput = {
    sub_admin_id?: SortOrder
    user_id?: SortOrder
    center_id?: SortOrder
  }

  export type subadminsMaxOrderByAggregateInput = {
    sub_admin_id?: SortOrder
    user_id?: SortOrder
    center_id?: SortOrder
  }

  export type subadminsMinOrderByAggregateInput = {
    sub_admin_id?: SortOrder
    user_id?: SortOrder
    center_id?: SortOrder
  }

  export type subadminsSumOrderByAggregateInput = {
    sub_admin_id?: SortOrder
    user_id?: SortOrder
    center_id?: SortOrder
  }

  export type AdminsNullableScalarRelationFilter = {
    is?: adminsWhereInput | null
    isNot?: adminsWhereInput | null
  }

  export type DonorsNullableScalarRelationFilter = {
    is?: donorsWhereInput | null
    isNot?: donorsWhereInput | null
  }

  export type HospitalstaffNullableScalarRelationFilter = {
    is?: hospitalstaffWhereInput | null
    isNot?: hospitalstaffWhereInput | null
  }

  export type SubadminsNullableScalarRelationFilter = {
    is?: subadminsWhereInput | null
    isNot?: subadminsWhereInput | null
  }

  export type usersCountOrderByAggregateInput = {
    user_id?: SortOrder
    password?: SortOrder
    email?: SortOrder
    contact_phone?: SortOrder
    role?: SortOrder
    name?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    password?: SortOrder
    email?: SortOrder
    contact_phone?: SortOrder
    role?: SortOrder
    name?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user_id?: SortOrder
    password?: SortOrder
    email?: SortOrder
    contact_phone?: SortOrder
    role?: SortOrder
    name?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type usersCreateNestedOneWithoutAdminsInput = {
    create?: XOR<usersCreateWithoutAdminsInput, usersUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAdminsInput
    connect?: usersWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneRequiredWithoutAdminsNestedInput = {
    create?: XOR<usersCreateWithoutAdminsInput, usersUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAdminsInput
    upsert?: usersUpsertWithoutAdminsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAdminsInput, usersUpdateWithoutAdminsInput>, usersUncheckedUpdateWithoutAdminsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type bloodcentersCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<bloodcentersCreateWithoutAppointmentsInput, bloodcentersUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: bloodcentersCreateOrConnectWithoutAppointmentsInput
    connect?: bloodcentersWhereUniqueInput
  }

  export type donorsCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<donorsCreateWithoutAppointmentsInput, donorsUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: donorsCreateOrConnectWithoutAppointmentsInput
    connect?: donorsWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type bloodcentersUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<bloodcentersCreateWithoutAppointmentsInput, bloodcentersUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: bloodcentersCreateOrConnectWithoutAppointmentsInput
    upsert?: bloodcentersUpsertWithoutAppointmentsInput
    connect?: bloodcentersWhereUniqueInput
    update?: XOR<XOR<bloodcentersUpdateToOneWithWhereWithoutAppointmentsInput, bloodcentersUpdateWithoutAppointmentsInput>, bloodcentersUncheckedUpdateWithoutAppointmentsInput>
  }

  export type donorsUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<donorsCreateWithoutAppointmentsInput, donorsUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: donorsCreateOrConnectWithoutAppointmentsInput
    upsert?: donorsUpsertWithoutAppointmentsInput
    connect?: donorsWhereUniqueInput
    update?: XOR<XOR<donorsUpdateToOneWithWhereWithoutAppointmentsInput, donorsUpdateWithoutAppointmentsInput>, donorsUncheckedUpdateWithoutAppointmentsInput>
  }

  export type appointmentsCreateNestedManyWithoutBloodcentersInput = {
    create?: XOR<appointmentsCreateWithoutBloodcentersInput, appointmentsUncheckedCreateWithoutBloodcentersInput> | appointmentsCreateWithoutBloodcentersInput[] | appointmentsUncheckedCreateWithoutBloodcentersInput[]
    connectOrCreate?: appointmentsCreateOrConnectWithoutBloodcentersInput | appointmentsCreateOrConnectWithoutBloodcentersInput[]
    createMany?: appointmentsCreateManyBloodcentersInputEnvelope
    connect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
  }

  export type bloodstockCreateNestedManyWithoutBloodcentersInput = {
    create?: XOR<bloodstockCreateWithoutBloodcentersInput, bloodstockUncheckedCreateWithoutBloodcentersInput> | bloodstockCreateWithoutBloodcentersInput[] | bloodstockUncheckedCreateWithoutBloodcentersInput[]
    connectOrCreate?: bloodstockCreateOrConnectWithoutBloodcentersInput | bloodstockCreateOrConnectWithoutBloodcentersInput[]
    createMany?: bloodstockCreateManyBloodcentersInputEnvelope
    connect?: bloodstockWhereUniqueInput | bloodstockWhereUniqueInput[]
  }

  export type donationhistoryCreateNestedManyWithoutBloodcentersInput = {
    create?: XOR<donationhistoryCreateWithoutBloodcentersInput, donationhistoryUncheckedCreateWithoutBloodcentersInput> | donationhistoryCreateWithoutBloodcentersInput[] | donationhistoryUncheckedCreateWithoutBloodcentersInput[]
    connectOrCreate?: donationhistoryCreateOrConnectWithoutBloodcentersInput | donationhistoryCreateOrConnectWithoutBloodcentersInput[]
    createMany?: donationhistoryCreateManyBloodcentersInputEnvelope
    connect?: donationhistoryWhereUniqueInput | donationhistoryWhereUniqueInput[]
  }

  export type subadminsCreateNestedManyWithoutBloodcentersInput = {
    create?: XOR<subadminsCreateWithoutBloodcentersInput, subadminsUncheckedCreateWithoutBloodcentersInput> | subadminsCreateWithoutBloodcentersInput[] | subadminsUncheckedCreateWithoutBloodcentersInput[]
    connectOrCreate?: subadminsCreateOrConnectWithoutBloodcentersInput | subadminsCreateOrConnectWithoutBloodcentersInput[]
    createMany?: subadminsCreateManyBloodcentersInputEnvelope
    connect?: subadminsWhereUniqueInput | subadminsWhereUniqueInput[]
  }

  export type appointmentsUncheckedCreateNestedManyWithoutBloodcentersInput = {
    create?: XOR<appointmentsCreateWithoutBloodcentersInput, appointmentsUncheckedCreateWithoutBloodcentersInput> | appointmentsCreateWithoutBloodcentersInput[] | appointmentsUncheckedCreateWithoutBloodcentersInput[]
    connectOrCreate?: appointmentsCreateOrConnectWithoutBloodcentersInput | appointmentsCreateOrConnectWithoutBloodcentersInput[]
    createMany?: appointmentsCreateManyBloodcentersInputEnvelope
    connect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
  }

  export type bloodstockUncheckedCreateNestedManyWithoutBloodcentersInput = {
    create?: XOR<bloodstockCreateWithoutBloodcentersInput, bloodstockUncheckedCreateWithoutBloodcentersInput> | bloodstockCreateWithoutBloodcentersInput[] | bloodstockUncheckedCreateWithoutBloodcentersInput[]
    connectOrCreate?: bloodstockCreateOrConnectWithoutBloodcentersInput | bloodstockCreateOrConnectWithoutBloodcentersInput[]
    createMany?: bloodstockCreateManyBloodcentersInputEnvelope
    connect?: bloodstockWhereUniqueInput | bloodstockWhereUniqueInput[]
  }

  export type donationhistoryUncheckedCreateNestedManyWithoutBloodcentersInput = {
    create?: XOR<donationhistoryCreateWithoutBloodcentersInput, donationhistoryUncheckedCreateWithoutBloodcentersInput> | donationhistoryCreateWithoutBloodcentersInput[] | donationhistoryUncheckedCreateWithoutBloodcentersInput[]
    connectOrCreate?: donationhistoryCreateOrConnectWithoutBloodcentersInput | donationhistoryCreateOrConnectWithoutBloodcentersInput[]
    createMany?: donationhistoryCreateManyBloodcentersInputEnvelope
    connect?: donationhistoryWhereUniqueInput | donationhistoryWhereUniqueInput[]
  }

  export type subadminsUncheckedCreateNestedManyWithoutBloodcentersInput = {
    create?: XOR<subadminsCreateWithoutBloodcentersInput, subadminsUncheckedCreateWithoutBloodcentersInput> | subadminsCreateWithoutBloodcentersInput[] | subadminsUncheckedCreateWithoutBloodcentersInput[]
    connectOrCreate?: subadminsCreateOrConnectWithoutBloodcentersInput | subadminsCreateOrConnectWithoutBloodcentersInput[]
    createMany?: subadminsCreateManyBloodcentersInputEnvelope
    connect?: subadminsWhereUniqueInput | subadminsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type appointmentsUpdateManyWithoutBloodcentersNestedInput = {
    create?: XOR<appointmentsCreateWithoutBloodcentersInput, appointmentsUncheckedCreateWithoutBloodcentersInput> | appointmentsCreateWithoutBloodcentersInput[] | appointmentsUncheckedCreateWithoutBloodcentersInput[]
    connectOrCreate?: appointmentsCreateOrConnectWithoutBloodcentersInput | appointmentsCreateOrConnectWithoutBloodcentersInput[]
    upsert?: appointmentsUpsertWithWhereUniqueWithoutBloodcentersInput | appointmentsUpsertWithWhereUniqueWithoutBloodcentersInput[]
    createMany?: appointmentsCreateManyBloodcentersInputEnvelope
    set?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    disconnect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    delete?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    connect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    update?: appointmentsUpdateWithWhereUniqueWithoutBloodcentersInput | appointmentsUpdateWithWhereUniqueWithoutBloodcentersInput[]
    updateMany?: appointmentsUpdateManyWithWhereWithoutBloodcentersInput | appointmentsUpdateManyWithWhereWithoutBloodcentersInput[]
    deleteMany?: appointmentsScalarWhereInput | appointmentsScalarWhereInput[]
  }

  export type bloodstockUpdateManyWithoutBloodcentersNestedInput = {
    create?: XOR<bloodstockCreateWithoutBloodcentersInput, bloodstockUncheckedCreateWithoutBloodcentersInput> | bloodstockCreateWithoutBloodcentersInput[] | bloodstockUncheckedCreateWithoutBloodcentersInput[]
    connectOrCreate?: bloodstockCreateOrConnectWithoutBloodcentersInput | bloodstockCreateOrConnectWithoutBloodcentersInput[]
    upsert?: bloodstockUpsertWithWhereUniqueWithoutBloodcentersInput | bloodstockUpsertWithWhereUniqueWithoutBloodcentersInput[]
    createMany?: bloodstockCreateManyBloodcentersInputEnvelope
    set?: bloodstockWhereUniqueInput | bloodstockWhereUniqueInput[]
    disconnect?: bloodstockWhereUniqueInput | bloodstockWhereUniqueInput[]
    delete?: bloodstockWhereUniqueInput | bloodstockWhereUniqueInput[]
    connect?: bloodstockWhereUniqueInput | bloodstockWhereUniqueInput[]
    update?: bloodstockUpdateWithWhereUniqueWithoutBloodcentersInput | bloodstockUpdateWithWhereUniqueWithoutBloodcentersInput[]
    updateMany?: bloodstockUpdateManyWithWhereWithoutBloodcentersInput | bloodstockUpdateManyWithWhereWithoutBloodcentersInput[]
    deleteMany?: bloodstockScalarWhereInput | bloodstockScalarWhereInput[]
  }

  export type donationhistoryUpdateManyWithoutBloodcentersNestedInput = {
    create?: XOR<donationhistoryCreateWithoutBloodcentersInput, donationhistoryUncheckedCreateWithoutBloodcentersInput> | donationhistoryCreateWithoutBloodcentersInput[] | donationhistoryUncheckedCreateWithoutBloodcentersInput[]
    connectOrCreate?: donationhistoryCreateOrConnectWithoutBloodcentersInput | donationhistoryCreateOrConnectWithoutBloodcentersInput[]
    upsert?: donationhistoryUpsertWithWhereUniqueWithoutBloodcentersInput | donationhistoryUpsertWithWhereUniqueWithoutBloodcentersInput[]
    createMany?: donationhistoryCreateManyBloodcentersInputEnvelope
    set?: donationhistoryWhereUniqueInput | donationhistoryWhereUniqueInput[]
    disconnect?: donationhistoryWhereUniqueInput | donationhistoryWhereUniqueInput[]
    delete?: donationhistoryWhereUniqueInput | donationhistoryWhereUniqueInput[]
    connect?: donationhistoryWhereUniqueInput | donationhistoryWhereUniqueInput[]
    update?: donationhistoryUpdateWithWhereUniqueWithoutBloodcentersInput | donationhistoryUpdateWithWhereUniqueWithoutBloodcentersInput[]
    updateMany?: donationhistoryUpdateManyWithWhereWithoutBloodcentersInput | donationhistoryUpdateManyWithWhereWithoutBloodcentersInput[]
    deleteMany?: donationhistoryScalarWhereInput | donationhistoryScalarWhereInput[]
  }

  export type subadminsUpdateManyWithoutBloodcentersNestedInput = {
    create?: XOR<subadminsCreateWithoutBloodcentersInput, subadminsUncheckedCreateWithoutBloodcentersInput> | subadminsCreateWithoutBloodcentersInput[] | subadminsUncheckedCreateWithoutBloodcentersInput[]
    connectOrCreate?: subadminsCreateOrConnectWithoutBloodcentersInput | subadminsCreateOrConnectWithoutBloodcentersInput[]
    upsert?: subadminsUpsertWithWhereUniqueWithoutBloodcentersInput | subadminsUpsertWithWhereUniqueWithoutBloodcentersInput[]
    createMany?: subadminsCreateManyBloodcentersInputEnvelope
    set?: subadminsWhereUniqueInput | subadminsWhereUniqueInput[]
    disconnect?: subadminsWhereUniqueInput | subadminsWhereUniqueInput[]
    delete?: subadminsWhereUniqueInput | subadminsWhereUniqueInput[]
    connect?: subadminsWhereUniqueInput | subadminsWhereUniqueInput[]
    update?: subadminsUpdateWithWhereUniqueWithoutBloodcentersInput | subadminsUpdateWithWhereUniqueWithoutBloodcentersInput[]
    updateMany?: subadminsUpdateManyWithWhereWithoutBloodcentersInput | subadminsUpdateManyWithWhereWithoutBloodcentersInput[]
    deleteMany?: subadminsScalarWhereInput | subadminsScalarWhereInput[]
  }

  export type appointmentsUncheckedUpdateManyWithoutBloodcentersNestedInput = {
    create?: XOR<appointmentsCreateWithoutBloodcentersInput, appointmentsUncheckedCreateWithoutBloodcentersInput> | appointmentsCreateWithoutBloodcentersInput[] | appointmentsUncheckedCreateWithoutBloodcentersInput[]
    connectOrCreate?: appointmentsCreateOrConnectWithoutBloodcentersInput | appointmentsCreateOrConnectWithoutBloodcentersInput[]
    upsert?: appointmentsUpsertWithWhereUniqueWithoutBloodcentersInput | appointmentsUpsertWithWhereUniqueWithoutBloodcentersInput[]
    createMany?: appointmentsCreateManyBloodcentersInputEnvelope
    set?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    disconnect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    delete?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    connect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    update?: appointmentsUpdateWithWhereUniqueWithoutBloodcentersInput | appointmentsUpdateWithWhereUniqueWithoutBloodcentersInput[]
    updateMany?: appointmentsUpdateManyWithWhereWithoutBloodcentersInput | appointmentsUpdateManyWithWhereWithoutBloodcentersInput[]
    deleteMany?: appointmentsScalarWhereInput | appointmentsScalarWhereInput[]
  }

  export type bloodstockUncheckedUpdateManyWithoutBloodcentersNestedInput = {
    create?: XOR<bloodstockCreateWithoutBloodcentersInput, bloodstockUncheckedCreateWithoutBloodcentersInput> | bloodstockCreateWithoutBloodcentersInput[] | bloodstockUncheckedCreateWithoutBloodcentersInput[]
    connectOrCreate?: bloodstockCreateOrConnectWithoutBloodcentersInput | bloodstockCreateOrConnectWithoutBloodcentersInput[]
    upsert?: bloodstockUpsertWithWhereUniqueWithoutBloodcentersInput | bloodstockUpsertWithWhereUniqueWithoutBloodcentersInput[]
    createMany?: bloodstockCreateManyBloodcentersInputEnvelope
    set?: bloodstockWhereUniqueInput | bloodstockWhereUniqueInput[]
    disconnect?: bloodstockWhereUniqueInput | bloodstockWhereUniqueInput[]
    delete?: bloodstockWhereUniqueInput | bloodstockWhereUniqueInput[]
    connect?: bloodstockWhereUniqueInput | bloodstockWhereUniqueInput[]
    update?: bloodstockUpdateWithWhereUniqueWithoutBloodcentersInput | bloodstockUpdateWithWhereUniqueWithoutBloodcentersInput[]
    updateMany?: bloodstockUpdateManyWithWhereWithoutBloodcentersInput | bloodstockUpdateManyWithWhereWithoutBloodcentersInput[]
    deleteMany?: bloodstockScalarWhereInput | bloodstockScalarWhereInput[]
  }

  export type donationhistoryUncheckedUpdateManyWithoutBloodcentersNestedInput = {
    create?: XOR<donationhistoryCreateWithoutBloodcentersInput, donationhistoryUncheckedCreateWithoutBloodcentersInput> | donationhistoryCreateWithoutBloodcentersInput[] | donationhistoryUncheckedCreateWithoutBloodcentersInput[]
    connectOrCreate?: donationhistoryCreateOrConnectWithoutBloodcentersInput | donationhistoryCreateOrConnectWithoutBloodcentersInput[]
    upsert?: donationhistoryUpsertWithWhereUniqueWithoutBloodcentersInput | donationhistoryUpsertWithWhereUniqueWithoutBloodcentersInput[]
    createMany?: donationhistoryCreateManyBloodcentersInputEnvelope
    set?: donationhistoryWhereUniqueInput | donationhistoryWhereUniqueInput[]
    disconnect?: donationhistoryWhereUniqueInput | donationhistoryWhereUniqueInput[]
    delete?: donationhistoryWhereUniqueInput | donationhistoryWhereUniqueInput[]
    connect?: donationhistoryWhereUniqueInput | donationhistoryWhereUniqueInput[]
    update?: donationhistoryUpdateWithWhereUniqueWithoutBloodcentersInput | donationhistoryUpdateWithWhereUniqueWithoutBloodcentersInput[]
    updateMany?: donationhistoryUpdateManyWithWhereWithoutBloodcentersInput | donationhistoryUpdateManyWithWhereWithoutBloodcentersInput[]
    deleteMany?: donationhistoryScalarWhereInput | donationhistoryScalarWhereInput[]
  }

  export type subadminsUncheckedUpdateManyWithoutBloodcentersNestedInput = {
    create?: XOR<subadminsCreateWithoutBloodcentersInput, subadminsUncheckedCreateWithoutBloodcentersInput> | subadminsCreateWithoutBloodcentersInput[] | subadminsUncheckedCreateWithoutBloodcentersInput[]
    connectOrCreate?: subadminsCreateOrConnectWithoutBloodcentersInput | subadminsCreateOrConnectWithoutBloodcentersInput[]
    upsert?: subadminsUpsertWithWhereUniqueWithoutBloodcentersInput | subadminsUpsertWithWhereUniqueWithoutBloodcentersInput[]
    createMany?: subadminsCreateManyBloodcentersInputEnvelope
    set?: subadminsWhereUniqueInput | subadminsWhereUniqueInput[]
    disconnect?: subadminsWhereUniqueInput | subadminsWhereUniqueInput[]
    delete?: subadminsWhereUniqueInput | subadminsWhereUniqueInput[]
    connect?: subadminsWhereUniqueInput | subadminsWhereUniqueInput[]
    update?: subadminsUpdateWithWhereUniqueWithoutBloodcentersInput | subadminsUpdateWithWhereUniqueWithoutBloodcentersInput[]
    updateMany?: subadminsUpdateManyWithWhereWithoutBloodcentersInput | subadminsUpdateManyWithWhereWithoutBloodcentersInput[]
    deleteMany?: subadminsScalarWhereInput | subadminsScalarWhereInput[]
  }

  export type hospitalstaffCreateNestedOneWithoutBloodrequestsInput = {
    create?: XOR<hospitalstaffCreateWithoutBloodrequestsInput, hospitalstaffUncheckedCreateWithoutBloodrequestsInput>
    connectOrCreate?: hospitalstaffCreateOrConnectWithoutBloodrequestsInput
    connect?: hospitalstaffWhereUniqueInput
  }

  export type hospitalstaffUpdateOneRequiredWithoutBloodrequestsNestedInput = {
    create?: XOR<hospitalstaffCreateWithoutBloodrequestsInput, hospitalstaffUncheckedCreateWithoutBloodrequestsInput>
    connectOrCreate?: hospitalstaffCreateOrConnectWithoutBloodrequestsInput
    upsert?: hospitalstaffUpsertWithoutBloodrequestsInput
    connect?: hospitalstaffWhereUniqueInput
    update?: XOR<XOR<hospitalstaffUpdateToOneWithWhereWithoutBloodrequestsInput, hospitalstaffUpdateWithoutBloodrequestsInput>, hospitalstaffUncheckedUpdateWithoutBloodrequestsInput>
  }

  export type bloodcentersCreateNestedOneWithoutBloodstockInput = {
    create?: XOR<bloodcentersCreateWithoutBloodstockInput, bloodcentersUncheckedCreateWithoutBloodstockInput>
    connectOrCreate?: bloodcentersCreateOrConnectWithoutBloodstockInput
    connect?: bloodcentersWhereUniqueInput
  }

  export type bloodcentersUpdateOneRequiredWithoutBloodstockNestedInput = {
    create?: XOR<bloodcentersCreateWithoutBloodstockInput, bloodcentersUncheckedCreateWithoutBloodstockInput>
    connectOrCreate?: bloodcentersCreateOrConnectWithoutBloodstockInput
    upsert?: bloodcentersUpsertWithoutBloodstockInput
    connect?: bloodcentersWhereUniqueInput
    update?: XOR<XOR<bloodcentersUpdateToOneWithWhereWithoutBloodstockInput, bloodcentersUpdateWithoutBloodstockInput>, bloodcentersUncheckedUpdateWithoutBloodstockInput>
  }

  export type bloodcentersCreateNestedOneWithoutDonationhistoryInput = {
    create?: XOR<bloodcentersCreateWithoutDonationhistoryInput, bloodcentersUncheckedCreateWithoutDonationhistoryInput>
    connectOrCreate?: bloodcentersCreateOrConnectWithoutDonationhistoryInput
    connect?: bloodcentersWhereUniqueInput
  }

  export type donorsCreateNestedOneWithoutDonationhistoryInput = {
    create?: XOR<donorsCreateWithoutDonationhistoryInput, donorsUncheckedCreateWithoutDonationhistoryInput>
    connectOrCreate?: donorsCreateOrConnectWithoutDonationhistoryInput
    connect?: donorsWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type bloodcentersUpdateOneRequiredWithoutDonationhistoryNestedInput = {
    create?: XOR<bloodcentersCreateWithoutDonationhistoryInput, bloodcentersUncheckedCreateWithoutDonationhistoryInput>
    connectOrCreate?: bloodcentersCreateOrConnectWithoutDonationhistoryInput
    upsert?: bloodcentersUpsertWithoutDonationhistoryInput
    connect?: bloodcentersWhereUniqueInput
    update?: XOR<XOR<bloodcentersUpdateToOneWithWhereWithoutDonationhistoryInput, bloodcentersUpdateWithoutDonationhistoryInput>, bloodcentersUncheckedUpdateWithoutDonationhistoryInput>
  }

  export type donorsUpdateOneRequiredWithoutDonationhistoryNestedInput = {
    create?: XOR<donorsCreateWithoutDonationhistoryInput, donorsUncheckedCreateWithoutDonationhistoryInput>
    connectOrCreate?: donorsCreateOrConnectWithoutDonationhistoryInput
    upsert?: donorsUpsertWithoutDonationhistoryInput
    connect?: donorsWhereUniqueInput
    update?: XOR<XOR<donorsUpdateToOneWithWhereWithoutDonationhistoryInput, donorsUpdateWithoutDonationhistoryInput>, donorsUncheckedUpdateWithoutDonationhistoryInput>
  }

  export type appointmentsCreateNestedManyWithoutDonorsInput = {
    create?: XOR<appointmentsCreateWithoutDonorsInput, appointmentsUncheckedCreateWithoutDonorsInput> | appointmentsCreateWithoutDonorsInput[] | appointmentsUncheckedCreateWithoutDonorsInput[]
    connectOrCreate?: appointmentsCreateOrConnectWithoutDonorsInput | appointmentsCreateOrConnectWithoutDonorsInput[]
    createMany?: appointmentsCreateManyDonorsInputEnvelope
    connect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
  }

  export type donationhistoryCreateNestedManyWithoutDonorsInput = {
    create?: XOR<donationhistoryCreateWithoutDonorsInput, donationhistoryUncheckedCreateWithoutDonorsInput> | donationhistoryCreateWithoutDonorsInput[] | donationhistoryUncheckedCreateWithoutDonorsInput[]
    connectOrCreate?: donationhistoryCreateOrConnectWithoutDonorsInput | donationhistoryCreateOrConnectWithoutDonorsInput[]
    createMany?: donationhistoryCreateManyDonorsInputEnvelope
    connect?: donationhistoryWhereUniqueInput | donationhistoryWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutDonorsInput = {
    create?: XOR<usersCreateWithoutDonorsInput, usersUncheckedCreateWithoutDonorsInput>
    connectOrCreate?: usersCreateOrConnectWithoutDonorsInput
    connect?: usersWhereUniqueInput
  }

  export type appointmentsUncheckedCreateNestedManyWithoutDonorsInput = {
    create?: XOR<appointmentsCreateWithoutDonorsInput, appointmentsUncheckedCreateWithoutDonorsInput> | appointmentsCreateWithoutDonorsInput[] | appointmentsUncheckedCreateWithoutDonorsInput[]
    connectOrCreate?: appointmentsCreateOrConnectWithoutDonorsInput | appointmentsCreateOrConnectWithoutDonorsInput[]
    createMany?: appointmentsCreateManyDonorsInputEnvelope
    connect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
  }

  export type donationhistoryUncheckedCreateNestedManyWithoutDonorsInput = {
    create?: XOR<donationhistoryCreateWithoutDonorsInput, donationhistoryUncheckedCreateWithoutDonorsInput> | donationhistoryCreateWithoutDonorsInput[] | donationhistoryUncheckedCreateWithoutDonorsInput[]
    connectOrCreate?: donationhistoryCreateOrConnectWithoutDonorsInput | donationhistoryCreateOrConnectWithoutDonorsInput[]
    createMany?: donationhistoryCreateManyDonorsInputEnvelope
    connect?: donationhistoryWhereUniqueInput | donationhistoryWhereUniqueInput[]
  }

  export type appointmentsUpdateManyWithoutDonorsNestedInput = {
    create?: XOR<appointmentsCreateWithoutDonorsInput, appointmentsUncheckedCreateWithoutDonorsInput> | appointmentsCreateWithoutDonorsInput[] | appointmentsUncheckedCreateWithoutDonorsInput[]
    connectOrCreate?: appointmentsCreateOrConnectWithoutDonorsInput | appointmentsCreateOrConnectWithoutDonorsInput[]
    upsert?: appointmentsUpsertWithWhereUniqueWithoutDonorsInput | appointmentsUpsertWithWhereUniqueWithoutDonorsInput[]
    createMany?: appointmentsCreateManyDonorsInputEnvelope
    set?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    disconnect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    delete?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    connect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    update?: appointmentsUpdateWithWhereUniqueWithoutDonorsInput | appointmentsUpdateWithWhereUniqueWithoutDonorsInput[]
    updateMany?: appointmentsUpdateManyWithWhereWithoutDonorsInput | appointmentsUpdateManyWithWhereWithoutDonorsInput[]
    deleteMany?: appointmentsScalarWhereInput | appointmentsScalarWhereInput[]
  }

  export type donationhistoryUpdateManyWithoutDonorsNestedInput = {
    create?: XOR<donationhistoryCreateWithoutDonorsInput, donationhistoryUncheckedCreateWithoutDonorsInput> | donationhistoryCreateWithoutDonorsInput[] | donationhistoryUncheckedCreateWithoutDonorsInput[]
    connectOrCreate?: donationhistoryCreateOrConnectWithoutDonorsInput | donationhistoryCreateOrConnectWithoutDonorsInput[]
    upsert?: donationhistoryUpsertWithWhereUniqueWithoutDonorsInput | donationhistoryUpsertWithWhereUniqueWithoutDonorsInput[]
    createMany?: donationhistoryCreateManyDonorsInputEnvelope
    set?: donationhistoryWhereUniqueInput | donationhistoryWhereUniqueInput[]
    disconnect?: donationhistoryWhereUniqueInput | donationhistoryWhereUniqueInput[]
    delete?: donationhistoryWhereUniqueInput | donationhistoryWhereUniqueInput[]
    connect?: donationhistoryWhereUniqueInput | donationhistoryWhereUniqueInput[]
    update?: donationhistoryUpdateWithWhereUniqueWithoutDonorsInput | donationhistoryUpdateWithWhereUniqueWithoutDonorsInput[]
    updateMany?: donationhistoryUpdateManyWithWhereWithoutDonorsInput | donationhistoryUpdateManyWithWhereWithoutDonorsInput[]
    deleteMany?: donationhistoryScalarWhereInput | donationhistoryScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutDonorsNestedInput = {
    create?: XOR<usersCreateWithoutDonorsInput, usersUncheckedCreateWithoutDonorsInput>
    connectOrCreate?: usersCreateOrConnectWithoutDonorsInput
    upsert?: usersUpsertWithoutDonorsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutDonorsInput, usersUpdateWithoutDonorsInput>, usersUncheckedUpdateWithoutDonorsInput>
  }

  export type appointmentsUncheckedUpdateManyWithoutDonorsNestedInput = {
    create?: XOR<appointmentsCreateWithoutDonorsInput, appointmentsUncheckedCreateWithoutDonorsInput> | appointmentsCreateWithoutDonorsInput[] | appointmentsUncheckedCreateWithoutDonorsInput[]
    connectOrCreate?: appointmentsCreateOrConnectWithoutDonorsInput | appointmentsCreateOrConnectWithoutDonorsInput[]
    upsert?: appointmentsUpsertWithWhereUniqueWithoutDonorsInput | appointmentsUpsertWithWhereUniqueWithoutDonorsInput[]
    createMany?: appointmentsCreateManyDonorsInputEnvelope
    set?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    disconnect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    delete?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    connect?: appointmentsWhereUniqueInput | appointmentsWhereUniqueInput[]
    update?: appointmentsUpdateWithWhereUniqueWithoutDonorsInput | appointmentsUpdateWithWhereUniqueWithoutDonorsInput[]
    updateMany?: appointmentsUpdateManyWithWhereWithoutDonorsInput | appointmentsUpdateManyWithWhereWithoutDonorsInput[]
    deleteMany?: appointmentsScalarWhereInput | appointmentsScalarWhereInput[]
  }

  export type donationhistoryUncheckedUpdateManyWithoutDonorsNestedInput = {
    create?: XOR<donationhistoryCreateWithoutDonorsInput, donationhistoryUncheckedCreateWithoutDonorsInput> | donationhistoryCreateWithoutDonorsInput[] | donationhistoryUncheckedCreateWithoutDonorsInput[]
    connectOrCreate?: donationhistoryCreateOrConnectWithoutDonorsInput | donationhistoryCreateOrConnectWithoutDonorsInput[]
    upsert?: donationhistoryUpsertWithWhereUniqueWithoutDonorsInput | donationhistoryUpsertWithWhereUniqueWithoutDonorsInput[]
    createMany?: donationhistoryCreateManyDonorsInputEnvelope
    set?: donationhistoryWhereUniqueInput | donationhistoryWhereUniqueInput[]
    disconnect?: donationhistoryWhereUniqueInput | donationhistoryWhereUniqueInput[]
    delete?: donationhistoryWhereUniqueInput | donationhistoryWhereUniqueInput[]
    connect?: donationhistoryWhereUniqueInput | donationhistoryWhereUniqueInput[]
    update?: donationhistoryUpdateWithWhereUniqueWithoutDonorsInput | donationhistoryUpdateWithWhereUniqueWithoutDonorsInput[]
    updateMany?: donationhistoryUpdateManyWithWhereWithoutDonorsInput | donationhistoryUpdateManyWithWhereWithoutDonorsInput[]
    deleteMany?: donationhistoryScalarWhereInput | donationhistoryScalarWhereInput[]
  }

  export type bloodrequestsCreateNestedManyWithoutHospitalstaffInput = {
    create?: XOR<bloodrequestsCreateWithoutHospitalstaffInput, bloodrequestsUncheckedCreateWithoutHospitalstaffInput> | bloodrequestsCreateWithoutHospitalstaffInput[] | bloodrequestsUncheckedCreateWithoutHospitalstaffInput[]
    connectOrCreate?: bloodrequestsCreateOrConnectWithoutHospitalstaffInput | bloodrequestsCreateOrConnectWithoutHospitalstaffInput[]
    createMany?: bloodrequestsCreateManyHospitalstaffInputEnvelope
    connect?: bloodrequestsWhereUniqueInput | bloodrequestsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutHospitalstaffInput = {
    create?: XOR<usersCreateWithoutHospitalstaffInput, usersUncheckedCreateWithoutHospitalstaffInput>
    connectOrCreate?: usersCreateOrConnectWithoutHospitalstaffInput
    connect?: usersWhereUniqueInput
  }

  export type bloodrequestsUncheckedCreateNestedManyWithoutHospitalstaffInput = {
    create?: XOR<bloodrequestsCreateWithoutHospitalstaffInput, bloodrequestsUncheckedCreateWithoutHospitalstaffInput> | bloodrequestsCreateWithoutHospitalstaffInput[] | bloodrequestsUncheckedCreateWithoutHospitalstaffInput[]
    connectOrCreate?: bloodrequestsCreateOrConnectWithoutHospitalstaffInput | bloodrequestsCreateOrConnectWithoutHospitalstaffInput[]
    createMany?: bloodrequestsCreateManyHospitalstaffInputEnvelope
    connect?: bloodrequestsWhereUniqueInput | bloodrequestsWhereUniqueInput[]
  }

  export type bloodrequestsUpdateManyWithoutHospitalstaffNestedInput = {
    create?: XOR<bloodrequestsCreateWithoutHospitalstaffInput, bloodrequestsUncheckedCreateWithoutHospitalstaffInput> | bloodrequestsCreateWithoutHospitalstaffInput[] | bloodrequestsUncheckedCreateWithoutHospitalstaffInput[]
    connectOrCreate?: bloodrequestsCreateOrConnectWithoutHospitalstaffInput | bloodrequestsCreateOrConnectWithoutHospitalstaffInput[]
    upsert?: bloodrequestsUpsertWithWhereUniqueWithoutHospitalstaffInput | bloodrequestsUpsertWithWhereUniqueWithoutHospitalstaffInput[]
    createMany?: bloodrequestsCreateManyHospitalstaffInputEnvelope
    set?: bloodrequestsWhereUniqueInput | bloodrequestsWhereUniqueInput[]
    disconnect?: bloodrequestsWhereUniqueInput | bloodrequestsWhereUniqueInput[]
    delete?: bloodrequestsWhereUniqueInput | bloodrequestsWhereUniqueInput[]
    connect?: bloodrequestsWhereUniqueInput | bloodrequestsWhereUniqueInput[]
    update?: bloodrequestsUpdateWithWhereUniqueWithoutHospitalstaffInput | bloodrequestsUpdateWithWhereUniqueWithoutHospitalstaffInput[]
    updateMany?: bloodrequestsUpdateManyWithWhereWithoutHospitalstaffInput | bloodrequestsUpdateManyWithWhereWithoutHospitalstaffInput[]
    deleteMany?: bloodrequestsScalarWhereInput | bloodrequestsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutHospitalstaffNestedInput = {
    create?: XOR<usersCreateWithoutHospitalstaffInput, usersUncheckedCreateWithoutHospitalstaffInput>
    connectOrCreate?: usersCreateOrConnectWithoutHospitalstaffInput
    upsert?: usersUpsertWithoutHospitalstaffInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutHospitalstaffInput, usersUpdateWithoutHospitalstaffInput>, usersUncheckedUpdateWithoutHospitalstaffInput>
  }

  export type bloodrequestsUncheckedUpdateManyWithoutHospitalstaffNestedInput = {
    create?: XOR<bloodrequestsCreateWithoutHospitalstaffInput, bloodrequestsUncheckedCreateWithoutHospitalstaffInput> | bloodrequestsCreateWithoutHospitalstaffInput[] | bloodrequestsUncheckedCreateWithoutHospitalstaffInput[]
    connectOrCreate?: bloodrequestsCreateOrConnectWithoutHospitalstaffInput | bloodrequestsCreateOrConnectWithoutHospitalstaffInput[]
    upsert?: bloodrequestsUpsertWithWhereUniqueWithoutHospitalstaffInput | bloodrequestsUpsertWithWhereUniqueWithoutHospitalstaffInput[]
    createMany?: bloodrequestsCreateManyHospitalstaffInputEnvelope
    set?: bloodrequestsWhereUniqueInput | bloodrequestsWhereUniqueInput[]
    disconnect?: bloodrequestsWhereUniqueInput | bloodrequestsWhereUniqueInput[]
    delete?: bloodrequestsWhereUniqueInput | bloodrequestsWhereUniqueInput[]
    connect?: bloodrequestsWhereUniqueInput | bloodrequestsWhereUniqueInput[]
    update?: bloodrequestsUpdateWithWhereUniqueWithoutHospitalstaffInput | bloodrequestsUpdateWithWhereUniqueWithoutHospitalstaffInput[]
    updateMany?: bloodrequestsUpdateManyWithWhereWithoutHospitalstaffInput | bloodrequestsUpdateManyWithWhereWithoutHospitalstaffInput[]
    deleteMany?: bloodrequestsScalarWhereInput | bloodrequestsScalarWhereInput[]
  }

  export type bloodcentersCreateNestedOneWithoutSubadminsInput = {
    create?: XOR<bloodcentersCreateWithoutSubadminsInput, bloodcentersUncheckedCreateWithoutSubadminsInput>
    connectOrCreate?: bloodcentersCreateOrConnectWithoutSubadminsInput
    connect?: bloodcentersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutSubadminsInput = {
    create?: XOR<usersCreateWithoutSubadminsInput, usersUncheckedCreateWithoutSubadminsInput>
    connectOrCreate?: usersCreateOrConnectWithoutSubadminsInput
    connect?: usersWhereUniqueInput
  }

  export type bloodcentersUpdateOneRequiredWithoutSubadminsNestedInput = {
    create?: XOR<bloodcentersCreateWithoutSubadminsInput, bloodcentersUncheckedCreateWithoutSubadminsInput>
    connectOrCreate?: bloodcentersCreateOrConnectWithoutSubadminsInput
    upsert?: bloodcentersUpsertWithoutSubadminsInput
    connect?: bloodcentersWhereUniqueInput
    update?: XOR<XOR<bloodcentersUpdateToOneWithWhereWithoutSubadminsInput, bloodcentersUpdateWithoutSubadminsInput>, bloodcentersUncheckedUpdateWithoutSubadminsInput>
  }

  export type usersUpdateOneRequiredWithoutSubadminsNestedInput = {
    create?: XOR<usersCreateWithoutSubadminsInput, usersUncheckedCreateWithoutSubadminsInput>
    connectOrCreate?: usersCreateOrConnectWithoutSubadminsInput
    upsert?: usersUpsertWithoutSubadminsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSubadminsInput, usersUpdateWithoutSubadminsInput>, usersUncheckedUpdateWithoutSubadminsInput>
  }

  export type adminsCreateNestedOneWithoutUsersInput = {
    create?: XOR<adminsCreateWithoutUsersInput, adminsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: adminsCreateOrConnectWithoutUsersInput
    connect?: adminsWhereUniqueInput
  }

  export type donorsCreateNestedOneWithoutUsersInput = {
    create?: XOR<donorsCreateWithoutUsersInput, donorsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: donorsCreateOrConnectWithoutUsersInput
    connect?: donorsWhereUniqueInput
  }

  export type hospitalstaffCreateNestedOneWithoutUsersInput = {
    create?: XOR<hospitalstaffCreateWithoutUsersInput, hospitalstaffUncheckedCreateWithoutUsersInput>
    connectOrCreate?: hospitalstaffCreateOrConnectWithoutUsersInput
    connect?: hospitalstaffWhereUniqueInput
  }

  export type subadminsCreateNestedOneWithoutUsersInput = {
    create?: XOR<subadminsCreateWithoutUsersInput, subadminsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: subadminsCreateOrConnectWithoutUsersInput
    connect?: subadminsWhereUniqueInput
  }

  export type adminsUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<adminsCreateWithoutUsersInput, adminsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: adminsCreateOrConnectWithoutUsersInput
    connect?: adminsWhereUniqueInput
  }

  export type donorsUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<donorsCreateWithoutUsersInput, donorsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: donorsCreateOrConnectWithoutUsersInput
    connect?: donorsWhereUniqueInput
  }

  export type hospitalstaffUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<hospitalstaffCreateWithoutUsersInput, hospitalstaffUncheckedCreateWithoutUsersInput>
    connectOrCreate?: hospitalstaffCreateOrConnectWithoutUsersInput
    connect?: hospitalstaffWhereUniqueInput
  }

  export type subadminsUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<subadminsCreateWithoutUsersInput, subadminsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: subadminsCreateOrConnectWithoutUsersInput
    connect?: subadminsWhereUniqueInput
  }

  export type adminsUpdateOneWithoutUsersNestedInput = {
    create?: XOR<adminsCreateWithoutUsersInput, adminsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: adminsCreateOrConnectWithoutUsersInput
    upsert?: adminsUpsertWithoutUsersInput
    disconnect?: adminsWhereInput | boolean
    delete?: adminsWhereInput | boolean
    connect?: adminsWhereUniqueInput
    update?: XOR<XOR<adminsUpdateToOneWithWhereWithoutUsersInput, adminsUpdateWithoutUsersInput>, adminsUncheckedUpdateWithoutUsersInput>
  }

  export type donorsUpdateOneWithoutUsersNestedInput = {
    create?: XOR<donorsCreateWithoutUsersInput, donorsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: donorsCreateOrConnectWithoutUsersInput
    upsert?: donorsUpsertWithoutUsersInput
    disconnect?: donorsWhereInput | boolean
    delete?: donorsWhereInput | boolean
    connect?: donorsWhereUniqueInput
    update?: XOR<XOR<donorsUpdateToOneWithWhereWithoutUsersInput, donorsUpdateWithoutUsersInput>, donorsUncheckedUpdateWithoutUsersInput>
  }

  export type hospitalstaffUpdateOneWithoutUsersNestedInput = {
    create?: XOR<hospitalstaffCreateWithoutUsersInput, hospitalstaffUncheckedCreateWithoutUsersInput>
    connectOrCreate?: hospitalstaffCreateOrConnectWithoutUsersInput
    upsert?: hospitalstaffUpsertWithoutUsersInput
    disconnect?: hospitalstaffWhereInput | boolean
    delete?: hospitalstaffWhereInput | boolean
    connect?: hospitalstaffWhereUniqueInput
    update?: XOR<XOR<hospitalstaffUpdateToOneWithWhereWithoutUsersInput, hospitalstaffUpdateWithoutUsersInput>, hospitalstaffUncheckedUpdateWithoutUsersInput>
  }

  export type subadminsUpdateOneWithoutUsersNestedInput = {
    create?: XOR<subadminsCreateWithoutUsersInput, subadminsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: subadminsCreateOrConnectWithoutUsersInput
    upsert?: subadminsUpsertWithoutUsersInput
    disconnect?: subadminsWhereInput | boolean
    delete?: subadminsWhereInput | boolean
    connect?: subadminsWhereUniqueInput
    update?: XOR<XOR<subadminsUpdateToOneWithWhereWithoutUsersInput, subadminsUpdateWithoutUsersInput>, subadminsUncheckedUpdateWithoutUsersInput>
  }

  export type adminsUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<adminsCreateWithoutUsersInput, adminsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: adminsCreateOrConnectWithoutUsersInput
    upsert?: adminsUpsertWithoutUsersInput
    disconnect?: adminsWhereInput | boolean
    delete?: adminsWhereInput | boolean
    connect?: adminsWhereUniqueInput
    update?: XOR<XOR<adminsUpdateToOneWithWhereWithoutUsersInput, adminsUpdateWithoutUsersInput>, adminsUncheckedUpdateWithoutUsersInput>
  }

  export type donorsUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<donorsCreateWithoutUsersInput, donorsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: donorsCreateOrConnectWithoutUsersInput
    upsert?: donorsUpsertWithoutUsersInput
    disconnect?: donorsWhereInput | boolean
    delete?: donorsWhereInput | boolean
    connect?: donorsWhereUniqueInput
    update?: XOR<XOR<donorsUpdateToOneWithWhereWithoutUsersInput, donorsUpdateWithoutUsersInput>, donorsUncheckedUpdateWithoutUsersInput>
  }

  export type hospitalstaffUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<hospitalstaffCreateWithoutUsersInput, hospitalstaffUncheckedCreateWithoutUsersInput>
    connectOrCreate?: hospitalstaffCreateOrConnectWithoutUsersInput
    upsert?: hospitalstaffUpsertWithoutUsersInput
    disconnect?: hospitalstaffWhereInput | boolean
    delete?: hospitalstaffWhereInput | boolean
    connect?: hospitalstaffWhereUniqueInput
    update?: XOR<XOR<hospitalstaffUpdateToOneWithWhereWithoutUsersInput, hospitalstaffUpdateWithoutUsersInput>, hospitalstaffUncheckedUpdateWithoutUsersInput>
  }

  export type subadminsUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<subadminsCreateWithoutUsersInput, subadminsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: subadminsCreateOrConnectWithoutUsersInput
    upsert?: subadminsUpsertWithoutUsersInput
    disconnect?: subadminsWhereInput | boolean
    delete?: subadminsWhereInput | boolean
    connect?: subadminsWhereUniqueInput
    update?: XOR<XOR<subadminsUpdateToOneWithWhereWithoutUsersInput, subadminsUpdateWithoutUsersInput>, subadminsUncheckedUpdateWithoutUsersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type usersCreateWithoutAdminsInput = {
    password: string
    email: string
    contact_phone: string
    role: string
    name: string
    donors?: donorsCreateNestedOneWithoutUsersInput
    hospitalstaff?: hospitalstaffCreateNestedOneWithoutUsersInput
    subadmins?: subadminsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutAdminsInput = {
    user_id?: number
    password: string
    email: string
    contact_phone: string
    role: string
    name: string
    donors?: donorsUncheckedCreateNestedOneWithoutUsersInput
    hospitalstaff?: hospitalstaffUncheckedCreateNestedOneWithoutUsersInput
    subadmins?: subadminsUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutAdminsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAdminsInput, usersUncheckedCreateWithoutAdminsInput>
  }

  export type usersUpsertWithoutAdminsInput = {
    update: XOR<usersUpdateWithoutAdminsInput, usersUncheckedUpdateWithoutAdminsInput>
    create: XOR<usersCreateWithoutAdminsInput, usersUncheckedCreateWithoutAdminsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAdminsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAdminsInput, usersUncheckedUpdateWithoutAdminsInput>
  }

  export type usersUpdateWithoutAdminsInput = {
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    donors?: donorsUpdateOneWithoutUsersNestedInput
    hospitalstaff?: hospitalstaffUpdateOneWithoutUsersNestedInput
    subadmins?: subadminsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutAdminsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    donors?: donorsUncheckedUpdateOneWithoutUsersNestedInput
    hospitalstaff?: hospitalstaffUncheckedUpdateOneWithoutUsersNestedInput
    subadmins?: subadminsUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type bloodcentersCreateWithoutAppointmentsInput = {
    center_name: string
    address: string
    contact_info: string
    bloodstock?: bloodstockCreateNestedManyWithoutBloodcentersInput
    donationhistory?: donationhistoryCreateNestedManyWithoutBloodcentersInput
    subadmins?: subadminsCreateNestedManyWithoutBloodcentersInput
  }

  export type bloodcentersUncheckedCreateWithoutAppointmentsInput = {
    center_id?: number
    center_name: string
    address: string
    contact_info: string
    bloodstock?: bloodstockUncheckedCreateNestedManyWithoutBloodcentersInput
    donationhistory?: donationhistoryUncheckedCreateNestedManyWithoutBloodcentersInput
    subadmins?: subadminsUncheckedCreateNestedManyWithoutBloodcentersInput
  }

  export type bloodcentersCreateOrConnectWithoutAppointmentsInput = {
    where: bloodcentersWhereUniqueInput
    create: XOR<bloodcentersCreateWithoutAppointmentsInput, bloodcentersUncheckedCreateWithoutAppointmentsInput>
  }

  export type donorsCreateWithoutAppointmentsInput = {
    national_id: string
    birth_date: Date | string
    gender: string
    address: string
    blood_type: string
    last_donation_date?: Date | string | null
    medications?: string | null
    medical_conditions?: string | null
    weight: Decimal | DecimalJsLike | number | string
    donor_image: string
    donationhistory?: donationhistoryCreateNestedManyWithoutDonorsInput
    users: usersCreateNestedOneWithoutDonorsInput
  }

  export type donorsUncheckedCreateWithoutAppointmentsInput = {
    donor_id?: number
    user_id: number
    national_id: string
    birth_date: Date | string
    gender: string
    address: string
    blood_type: string
    last_donation_date?: Date | string | null
    medications?: string | null
    medical_conditions?: string | null
    weight: Decimal | DecimalJsLike | number | string
    donor_image: string
    donationhistory?: donationhistoryUncheckedCreateNestedManyWithoutDonorsInput
  }

  export type donorsCreateOrConnectWithoutAppointmentsInput = {
    where: donorsWhereUniqueInput
    create: XOR<donorsCreateWithoutAppointmentsInput, donorsUncheckedCreateWithoutAppointmentsInput>
  }

  export type bloodcentersUpsertWithoutAppointmentsInput = {
    update: XOR<bloodcentersUpdateWithoutAppointmentsInput, bloodcentersUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<bloodcentersCreateWithoutAppointmentsInput, bloodcentersUncheckedCreateWithoutAppointmentsInput>
    where?: bloodcentersWhereInput
  }

  export type bloodcentersUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: bloodcentersWhereInput
    data: XOR<bloodcentersUpdateWithoutAppointmentsInput, bloodcentersUncheckedUpdateWithoutAppointmentsInput>
  }

  export type bloodcentersUpdateWithoutAppointmentsInput = {
    center_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_info?: StringFieldUpdateOperationsInput | string
    bloodstock?: bloodstockUpdateManyWithoutBloodcentersNestedInput
    donationhistory?: donationhistoryUpdateManyWithoutBloodcentersNestedInput
    subadmins?: subadminsUpdateManyWithoutBloodcentersNestedInput
  }

  export type bloodcentersUncheckedUpdateWithoutAppointmentsInput = {
    center_id?: IntFieldUpdateOperationsInput | number
    center_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_info?: StringFieldUpdateOperationsInput | string
    bloodstock?: bloodstockUncheckedUpdateManyWithoutBloodcentersNestedInput
    donationhistory?: donationhistoryUncheckedUpdateManyWithoutBloodcentersNestedInput
    subadmins?: subadminsUncheckedUpdateManyWithoutBloodcentersNestedInput
  }

  export type donorsUpsertWithoutAppointmentsInput = {
    update: XOR<donorsUpdateWithoutAppointmentsInput, donorsUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<donorsCreateWithoutAppointmentsInput, donorsUncheckedCreateWithoutAppointmentsInput>
    where?: donorsWhereInput
  }

  export type donorsUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: donorsWhereInput
    data: XOR<donorsUpdateWithoutAppointmentsInput, donorsUncheckedUpdateWithoutAppointmentsInput>
  }

  export type donorsUpdateWithoutAppointmentsInput = {
    national_id?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    blood_type?: StringFieldUpdateOperationsInput | string
    last_donation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medications?: NullableStringFieldUpdateOperationsInput | string | null
    medical_conditions?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    donor_image?: StringFieldUpdateOperationsInput | string
    donationhistory?: donationhistoryUpdateManyWithoutDonorsNestedInput
    users?: usersUpdateOneRequiredWithoutDonorsNestedInput
  }

  export type donorsUncheckedUpdateWithoutAppointmentsInput = {
    donor_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    national_id?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    blood_type?: StringFieldUpdateOperationsInput | string
    last_donation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medications?: NullableStringFieldUpdateOperationsInput | string | null
    medical_conditions?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    donor_image?: StringFieldUpdateOperationsInput | string
    donationhistory?: donationhistoryUncheckedUpdateManyWithoutDonorsNestedInput
  }

  export type appointmentsCreateWithoutBloodcentersInput = {
    appointment_date: Date | string
    description?: string | null
    status?: string | null
    donors: donorsCreateNestedOneWithoutAppointmentsInput
  }

  export type appointmentsUncheckedCreateWithoutBloodcentersInput = {
    appointment_id?: number
    donor_id: number
    appointment_date: Date | string
    description?: string | null
    status?: string | null
  }

  export type appointmentsCreateOrConnectWithoutBloodcentersInput = {
    where: appointmentsWhereUniqueInput
    create: XOR<appointmentsCreateWithoutBloodcentersInput, appointmentsUncheckedCreateWithoutBloodcentersInput>
  }

  export type appointmentsCreateManyBloodcentersInputEnvelope = {
    data: appointmentsCreateManyBloodcentersInput | appointmentsCreateManyBloodcentersInput[]
    skipDuplicates?: boolean
  }

  export type bloodstockCreateWithoutBloodcentersInput = {
    blood_type: string
    units_available: number
    expiration_date: Date | string
  }

  export type bloodstockUncheckedCreateWithoutBloodcentersInput = {
    stock_id?: number
    blood_type: string
    units_available: number
    expiration_date: Date | string
  }

  export type bloodstockCreateOrConnectWithoutBloodcentersInput = {
    where: bloodstockWhereUniqueInput
    create: XOR<bloodstockCreateWithoutBloodcentersInput, bloodstockUncheckedCreateWithoutBloodcentersInput>
  }

  export type bloodstockCreateManyBloodcentersInputEnvelope = {
    data: bloodstockCreateManyBloodcentersInput | bloodstockCreateManyBloodcentersInput[]
    skipDuplicates?: boolean
  }

  export type donationhistoryCreateWithoutBloodcentersInput = {
    donation_date: Date | string
    amount_donated: Decimal | DecimalJsLike | number | string
    status?: string | null
    donors: donorsCreateNestedOneWithoutDonationhistoryInput
  }

  export type donationhistoryUncheckedCreateWithoutBloodcentersInput = {
    donation_id?: number
    donor_id: number
    donation_date: Date | string
    amount_donated: Decimal | DecimalJsLike | number | string
    status?: string | null
  }

  export type donationhistoryCreateOrConnectWithoutBloodcentersInput = {
    where: donationhistoryWhereUniqueInput
    create: XOR<donationhistoryCreateWithoutBloodcentersInput, donationhistoryUncheckedCreateWithoutBloodcentersInput>
  }

  export type donationhistoryCreateManyBloodcentersInputEnvelope = {
    data: donationhistoryCreateManyBloodcentersInput | donationhistoryCreateManyBloodcentersInput[]
    skipDuplicates?: boolean
  }

  export type subadminsCreateWithoutBloodcentersInput = {
    users: usersCreateNestedOneWithoutSubadminsInput
  }

  export type subadminsUncheckedCreateWithoutBloodcentersInput = {
    sub_admin_id?: number
    user_id: number
  }

  export type subadminsCreateOrConnectWithoutBloodcentersInput = {
    where: subadminsWhereUniqueInput
    create: XOR<subadminsCreateWithoutBloodcentersInput, subadminsUncheckedCreateWithoutBloodcentersInput>
  }

  export type subadminsCreateManyBloodcentersInputEnvelope = {
    data: subadminsCreateManyBloodcentersInput | subadminsCreateManyBloodcentersInput[]
    skipDuplicates?: boolean
  }

  export type appointmentsUpsertWithWhereUniqueWithoutBloodcentersInput = {
    where: appointmentsWhereUniqueInput
    update: XOR<appointmentsUpdateWithoutBloodcentersInput, appointmentsUncheckedUpdateWithoutBloodcentersInput>
    create: XOR<appointmentsCreateWithoutBloodcentersInput, appointmentsUncheckedCreateWithoutBloodcentersInput>
  }

  export type appointmentsUpdateWithWhereUniqueWithoutBloodcentersInput = {
    where: appointmentsWhereUniqueInput
    data: XOR<appointmentsUpdateWithoutBloodcentersInput, appointmentsUncheckedUpdateWithoutBloodcentersInput>
  }

  export type appointmentsUpdateManyWithWhereWithoutBloodcentersInput = {
    where: appointmentsScalarWhereInput
    data: XOR<appointmentsUpdateManyMutationInput, appointmentsUncheckedUpdateManyWithoutBloodcentersInput>
  }

  export type appointmentsScalarWhereInput = {
    AND?: appointmentsScalarWhereInput | appointmentsScalarWhereInput[]
    OR?: appointmentsScalarWhereInput[]
    NOT?: appointmentsScalarWhereInput | appointmentsScalarWhereInput[]
    appointment_id?: IntFilter<"appointments"> | number
    donor_id?: IntFilter<"appointments"> | number
    center_id?: IntFilter<"appointments"> | number
    appointment_date?: DateTimeFilter<"appointments"> | Date | string
    description?: StringNullableFilter<"appointments"> | string | null
    status?: StringNullableFilter<"appointments"> | string | null
  }

  export type bloodstockUpsertWithWhereUniqueWithoutBloodcentersInput = {
    where: bloodstockWhereUniqueInput
    update: XOR<bloodstockUpdateWithoutBloodcentersInput, bloodstockUncheckedUpdateWithoutBloodcentersInput>
    create: XOR<bloodstockCreateWithoutBloodcentersInput, bloodstockUncheckedCreateWithoutBloodcentersInput>
  }

  export type bloodstockUpdateWithWhereUniqueWithoutBloodcentersInput = {
    where: bloodstockWhereUniqueInput
    data: XOR<bloodstockUpdateWithoutBloodcentersInput, bloodstockUncheckedUpdateWithoutBloodcentersInput>
  }

  export type bloodstockUpdateManyWithWhereWithoutBloodcentersInput = {
    where: bloodstockScalarWhereInput
    data: XOR<bloodstockUpdateManyMutationInput, bloodstockUncheckedUpdateManyWithoutBloodcentersInput>
  }

  export type bloodstockScalarWhereInput = {
    AND?: bloodstockScalarWhereInput | bloodstockScalarWhereInput[]
    OR?: bloodstockScalarWhereInput[]
    NOT?: bloodstockScalarWhereInput | bloodstockScalarWhereInput[]
    stock_id?: IntFilter<"bloodstock"> | number
    center_id?: IntFilter<"bloodstock"> | number
    blood_type?: StringFilter<"bloodstock"> | string
    units_available?: IntFilter<"bloodstock"> | number
    expiration_date?: DateTimeFilter<"bloodstock"> | Date | string
  }

  export type donationhistoryUpsertWithWhereUniqueWithoutBloodcentersInput = {
    where: donationhistoryWhereUniqueInput
    update: XOR<donationhistoryUpdateWithoutBloodcentersInput, donationhistoryUncheckedUpdateWithoutBloodcentersInput>
    create: XOR<donationhistoryCreateWithoutBloodcentersInput, donationhistoryUncheckedCreateWithoutBloodcentersInput>
  }

  export type donationhistoryUpdateWithWhereUniqueWithoutBloodcentersInput = {
    where: donationhistoryWhereUniqueInput
    data: XOR<donationhistoryUpdateWithoutBloodcentersInput, donationhistoryUncheckedUpdateWithoutBloodcentersInput>
  }

  export type donationhistoryUpdateManyWithWhereWithoutBloodcentersInput = {
    where: donationhistoryScalarWhereInput
    data: XOR<donationhistoryUpdateManyMutationInput, donationhistoryUncheckedUpdateManyWithoutBloodcentersInput>
  }

  export type donationhistoryScalarWhereInput = {
    AND?: donationhistoryScalarWhereInput | donationhistoryScalarWhereInput[]
    OR?: donationhistoryScalarWhereInput[]
    NOT?: donationhistoryScalarWhereInput | donationhistoryScalarWhereInput[]
    donation_id?: IntFilter<"donationhistory"> | number
    donor_id?: IntFilter<"donationhistory"> | number
    center_id?: IntFilter<"donationhistory"> | number
    donation_date?: DateTimeFilter<"donationhistory"> | Date | string
    amount_donated?: DecimalFilter<"donationhistory"> | Decimal | DecimalJsLike | number | string
    status?: StringNullableFilter<"donationhistory"> | string | null
  }

  export type subadminsUpsertWithWhereUniqueWithoutBloodcentersInput = {
    where: subadminsWhereUniqueInput
    update: XOR<subadminsUpdateWithoutBloodcentersInput, subadminsUncheckedUpdateWithoutBloodcentersInput>
    create: XOR<subadminsCreateWithoutBloodcentersInput, subadminsUncheckedCreateWithoutBloodcentersInput>
  }

  export type subadminsUpdateWithWhereUniqueWithoutBloodcentersInput = {
    where: subadminsWhereUniqueInput
    data: XOR<subadminsUpdateWithoutBloodcentersInput, subadminsUncheckedUpdateWithoutBloodcentersInput>
  }

  export type subadminsUpdateManyWithWhereWithoutBloodcentersInput = {
    where: subadminsScalarWhereInput
    data: XOR<subadminsUpdateManyMutationInput, subadminsUncheckedUpdateManyWithoutBloodcentersInput>
  }

  export type subadminsScalarWhereInput = {
    AND?: subadminsScalarWhereInput | subadminsScalarWhereInput[]
    OR?: subadminsScalarWhereInput[]
    NOT?: subadminsScalarWhereInput | subadminsScalarWhereInput[]
    sub_admin_id?: IntFilter<"subadmins"> | number
    user_id?: IntFilter<"subadmins"> | number
    center_id?: IntFilter<"subadmins"> | number
  }

  export type hospitalstaffCreateWithoutBloodrequestsInput = {
    address: string
    users: usersCreateNestedOneWithoutHospitalstaffInput
  }

  export type hospitalstaffUncheckedCreateWithoutBloodrequestsInput = {
    staff_id?: number
    user_id: number
    address: string
  }

  export type hospitalstaffCreateOrConnectWithoutBloodrequestsInput = {
    where: hospitalstaffWhereUniqueInput
    create: XOR<hospitalstaffCreateWithoutBloodrequestsInput, hospitalstaffUncheckedCreateWithoutBloodrequestsInput>
  }

  export type hospitalstaffUpsertWithoutBloodrequestsInput = {
    update: XOR<hospitalstaffUpdateWithoutBloodrequestsInput, hospitalstaffUncheckedUpdateWithoutBloodrequestsInput>
    create: XOR<hospitalstaffCreateWithoutBloodrequestsInput, hospitalstaffUncheckedCreateWithoutBloodrequestsInput>
    where?: hospitalstaffWhereInput
  }

  export type hospitalstaffUpdateToOneWithWhereWithoutBloodrequestsInput = {
    where?: hospitalstaffWhereInput
    data: XOR<hospitalstaffUpdateWithoutBloodrequestsInput, hospitalstaffUncheckedUpdateWithoutBloodrequestsInput>
  }

  export type hospitalstaffUpdateWithoutBloodrequestsInput = {
    address?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneRequiredWithoutHospitalstaffNestedInput
  }

  export type hospitalstaffUncheckedUpdateWithoutBloodrequestsInput = {
    staff_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
  }

  export type bloodcentersCreateWithoutBloodstockInput = {
    center_name: string
    address: string
    contact_info: string
    appointments?: appointmentsCreateNestedManyWithoutBloodcentersInput
    donationhistory?: donationhistoryCreateNestedManyWithoutBloodcentersInput
    subadmins?: subadminsCreateNestedManyWithoutBloodcentersInput
  }

  export type bloodcentersUncheckedCreateWithoutBloodstockInput = {
    center_id?: number
    center_name: string
    address: string
    contact_info: string
    appointments?: appointmentsUncheckedCreateNestedManyWithoutBloodcentersInput
    donationhistory?: donationhistoryUncheckedCreateNestedManyWithoutBloodcentersInput
    subadmins?: subadminsUncheckedCreateNestedManyWithoutBloodcentersInput
  }

  export type bloodcentersCreateOrConnectWithoutBloodstockInput = {
    where: bloodcentersWhereUniqueInput
    create: XOR<bloodcentersCreateWithoutBloodstockInput, bloodcentersUncheckedCreateWithoutBloodstockInput>
  }

  export type bloodcentersUpsertWithoutBloodstockInput = {
    update: XOR<bloodcentersUpdateWithoutBloodstockInput, bloodcentersUncheckedUpdateWithoutBloodstockInput>
    create: XOR<bloodcentersCreateWithoutBloodstockInput, bloodcentersUncheckedCreateWithoutBloodstockInput>
    where?: bloodcentersWhereInput
  }

  export type bloodcentersUpdateToOneWithWhereWithoutBloodstockInput = {
    where?: bloodcentersWhereInput
    data: XOR<bloodcentersUpdateWithoutBloodstockInput, bloodcentersUncheckedUpdateWithoutBloodstockInput>
  }

  export type bloodcentersUpdateWithoutBloodstockInput = {
    center_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_info?: StringFieldUpdateOperationsInput | string
    appointments?: appointmentsUpdateManyWithoutBloodcentersNestedInput
    donationhistory?: donationhistoryUpdateManyWithoutBloodcentersNestedInput
    subadmins?: subadminsUpdateManyWithoutBloodcentersNestedInput
  }

  export type bloodcentersUncheckedUpdateWithoutBloodstockInput = {
    center_id?: IntFieldUpdateOperationsInput | number
    center_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_info?: StringFieldUpdateOperationsInput | string
    appointments?: appointmentsUncheckedUpdateManyWithoutBloodcentersNestedInput
    donationhistory?: donationhistoryUncheckedUpdateManyWithoutBloodcentersNestedInput
    subadmins?: subadminsUncheckedUpdateManyWithoutBloodcentersNestedInput
  }

  export type bloodcentersCreateWithoutDonationhistoryInput = {
    center_name: string
    address: string
    contact_info: string
    appointments?: appointmentsCreateNestedManyWithoutBloodcentersInput
    bloodstock?: bloodstockCreateNestedManyWithoutBloodcentersInput
    subadmins?: subadminsCreateNestedManyWithoutBloodcentersInput
  }

  export type bloodcentersUncheckedCreateWithoutDonationhistoryInput = {
    center_id?: number
    center_name: string
    address: string
    contact_info: string
    appointments?: appointmentsUncheckedCreateNestedManyWithoutBloodcentersInput
    bloodstock?: bloodstockUncheckedCreateNestedManyWithoutBloodcentersInput
    subadmins?: subadminsUncheckedCreateNestedManyWithoutBloodcentersInput
  }

  export type bloodcentersCreateOrConnectWithoutDonationhistoryInput = {
    where: bloodcentersWhereUniqueInput
    create: XOR<bloodcentersCreateWithoutDonationhistoryInput, bloodcentersUncheckedCreateWithoutDonationhistoryInput>
  }

  export type donorsCreateWithoutDonationhistoryInput = {
    national_id: string
    birth_date: Date | string
    gender: string
    address: string
    blood_type: string
    last_donation_date?: Date | string | null
    medications?: string | null
    medical_conditions?: string | null
    weight: Decimal | DecimalJsLike | number | string
    donor_image: string
    appointments?: appointmentsCreateNestedManyWithoutDonorsInput
    users: usersCreateNestedOneWithoutDonorsInput
  }

  export type donorsUncheckedCreateWithoutDonationhistoryInput = {
    donor_id?: number
    user_id: number
    national_id: string
    birth_date: Date | string
    gender: string
    address: string
    blood_type: string
    last_donation_date?: Date | string | null
    medications?: string | null
    medical_conditions?: string | null
    weight: Decimal | DecimalJsLike | number | string
    donor_image: string
    appointments?: appointmentsUncheckedCreateNestedManyWithoutDonorsInput
  }

  export type donorsCreateOrConnectWithoutDonationhistoryInput = {
    where: donorsWhereUniqueInput
    create: XOR<donorsCreateWithoutDonationhistoryInput, donorsUncheckedCreateWithoutDonationhistoryInput>
  }

  export type bloodcentersUpsertWithoutDonationhistoryInput = {
    update: XOR<bloodcentersUpdateWithoutDonationhistoryInput, bloodcentersUncheckedUpdateWithoutDonationhistoryInput>
    create: XOR<bloodcentersCreateWithoutDonationhistoryInput, bloodcentersUncheckedCreateWithoutDonationhistoryInput>
    where?: bloodcentersWhereInput
  }

  export type bloodcentersUpdateToOneWithWhereWithoutDonationhistoryInput = {
    where?: bloodcentersWhereInput
    data: XOR<bloodcentersUpdateWithoutDonationhistoryInput, bloodcentersUncheckedUpdateWithoutDonationhistoryInput>
  }

  export type bloodcentersUpdateWithoutDonationhistoryInput = {
    center_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_info?: StringFieldUpdateOperationsInput | string
    appointments?: appointmentsUpdateManyWithoutBloodcentersNestedInput
    bloodstock?: bloodstockUpdateManyWithoutBloodcentersNestedInput
    subadmins?: subadminsUpdateManyWithoutBloodcentersNestedInput
  }

  export type bloodcentersUncheckedUpdateWithoutDonationhistoryInput = {
    center_id?: IntFieldUpdateOperationsInput | number
    center_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_info?: StringFieldUpdateOperationsInput | string
    appointments?: appointmentsUncheckedUpdateManyWithoutBloodcentersNestedInput
    bloodstock?: bloodstockUncheckedUpdateManyWithoutBloodcentersNestedInput
    subadmins?: subadminsUncheckedUpdateManyWithoutBloodcentersNestedInput
  }

  export type donorsUpsertWithoutDonationhistoryInput = {
    update: XOR<donorsUpdateWithoutDonationhistoryInput, donorsUncheckedUpdateWithoutDonationhistoryInput>
    create: XOR<donorsCreateWithoutDonationhistoryInput, donorsUncheckedCreateWithoutDonationhistoryInput>
    where?: donorsWhereInput
  }

  export type donorsUpdateToOneWithWhereWithoutDonationhistoryInput = {
    where?: donorsWhereInput
    data: XOR<donorsUpdateWithoutDonationhistoryInput, donorsUncheckedUpdateWithoutDonationhistoryInput>
  }

  export type donorsUpdateWithoutDonationhistoryInput = {
    national_id?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    blood_type?: StringFieldUpdateOperationsInput | string
    last_donation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medications?: NullableStringFieldUpdateOperationsInput | string | null
    medical_conditions?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    donor_image?: StringFieldUpdateOperationsInput | string
    appointments?: appointmentsUpdateManyWithoutDonorsNestedInput
    users?: usersUpdateOneRequiredWithoutDonorsNestedInput
  }

  export type donorsUncheckedUpdateWithoutDonationhistoryInput = {
    donor_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    national_id?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    blood_type?: StringFieldUpdateOperationsInput | string
    last_donation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medications?: NullableStringFieldUpdateOperationsInput | string | null
    medical_conditions?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    donor_image?: StringFieldUpdateOperationsInput | string
    appointments?: appointmentsUncheckedUpdateManyWithoutDonorsNestedInput
  }

  export type appointmentsCreateWithoutDonorsInput = {
    appointment_date: Date | string
    description?: string | null
    status?: string | null
    bloodcenters: bloodcentersCreateNestedOneWithoutAppointmentsInput
  }

  export type appointmentsUncheckedCreateWithoutDonorsInput = {
    appointment_id?: number
    center_id: number
    appointment_date: Date | string
    description?: string | null
    status?: string | null
  }

  export type appointmentsCreateOrConnectWithoutDonorsInput = {
    where: appointmentsWhereUniqueInput
    create: XOR<appointmentsCreateWithoutDonorsInput, appointmentsUncheckedCreateWithoutDonorsInput>
  }

  export type appointmentsCreateManyDonorsInputEnvelope = {
    data: appointmentsCreateManyDonorsInput | appointmentsCreateManyDonorsInput[]
    skipDuplicates?: boolean
  }

  export type donationhistoryCreateWithoutDonorsInput = {
    donation_date: Date | string
    amount_donated: Decimal | DecimalJsLike | number | string
    status?: string | null
    bloodcenters: bloodcentersCreateNestedOneWithoutDonationhistoryInput
  }

  export type donationhistoryUncheckedCreateWithoutDonorsInput = {
    donation_id?: number
    center_id: number
    donation_date: Date | string
    amount_donated: Decimal | DecimalJsLike | number | string
    status?: string | null
  }

  export type donationhistoryCreateOrConnectWithoutDonorsInput = {
    where: donationhistoryWhereUniqueInput
    create: XOR<donationhistoryCreateWithoutDonorsInput, donationhistoryUncheckedCreateWithoutDonorsInput>
  }

  export type donationhistoryCreateManyDonorsInputEnvelope = {
    data: donationhistoryCreateManyDonorsInput | donationhistoryCreateManyDonorsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutDonorsInput = {
    password: string
    email: string
    contact_phone: string
    role: string
    name: string
    admins?: adminsCreateNestedOneWithoutUsersInput
    hospitalstaff?: hospitalstaffCreateNestedOneWithoutUsersInput
    subadmins?: subadminsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutDonorsInput = {
    user_id?: number
    password: string
    email: string
    contact_phone: string
    role: string
    name: string
    admins?: adminsUncheckedCreateNestedOneWithoutUsersInput
    hospitalstaff?: hospitalstaffUncheckedCreateNestedOneWithoutUsersInput
    subadmins?: subadminsUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutDonorsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutDonorsInput, usersUncheckedCreateWithoutDonorsInput>
  }

  export type appointmentsUpsertWithWhereUniqueWithoutDonorsInput = {
    where: appointmentsWhereUniqueInput
    update: XOR<appointmentsUpdateWithoutDonorsInput, appointmentsUncheckedUpdateWithoutDonorsInput>
    create: XOR<appointmentsCreateWithoutDonorsInput, appointmentsUncheckedCreateWithoutDonorsInput>
  }

  export type appointmentsUpdateWithWhereUniqueWithoutDonorsInput = {
    where: appointmentsWhereUniqueInput
    data: XOR<appointmentsUpdateWithoutDonorsInput, appointmentsUncheckedUpdateWithoutDonorsInput>
  }

  export type appointmentsUpdateManyWithWhereWithoutDonorsInput = {
    where: appointmentsScalarWhereInput
    data: XOR<appointmentsUpdateManyMutationInput, appointmentsUncheckedUpdateManyWithoutDonorsInput>
  }

  export type donationhistoryUpsertWithWhereUniqueWithoutDonorsInput = {
    where: donationhistoryWhereUniqueInput
    update: XOR<donationhistoryUpdateWithoutDonorsInput, donationhistoryUncheckedUpdateWithoutDonorsInput>
    create: XOR<donationhistoryCreateWithoutDonorsInput, donationhistoryUncheckedCreateWithoutDonorsInput>
  }

  export type donationhistoryUpdateWithWhereUniqueWithoutDonorsInput = {
    where: donationhistoryWhereUniqueInput
    data: XOR<donationhistoryUpdateWithoutDonorsInput, donationhistoryUncheckedUpdateWithoutDonorsInput>
  }

  export type donationhistoryUpdateManyWithWhereWithoutDonorsInput = {
    where: donationhistoryScalarWhereInput
    data: XOR<donationhistoryUpdateManyMutationInput, donationhistoryUncheckedUpdateManyWithoutDonorsInput>
  }

  export type usersUpsertWithoutDonorsInput = {
    update: XOR<usersUpdateWithoutDonorsInput, usersUncheckedUpdateWithoutDonorsInput>
    create: XOR<usersCreateWithoutDonorsInput, usersUncheckedCreateWithoutDonorsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutDonorsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutDonorsInput, usersUncheckedUpdateWithoutDonorsInput>
  }

  export type usersUpdateWithoutDonorsInput = {
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admins?: adminsUpdateOneWithoutUsersNestedInput
    hospitalstaff?: hospitalstaffUpdateOneWithoutUsersNestedInput
    subadmins?: subadminsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutDonorsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admins?: adminsUncheckedUpdateOneWithoutUsersNestedInput
    hospitalstaff?: hospitalstaffUncheckedUpdateOneWithoutUsersNestedInput
    subadmins?: subadminsUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type bloodrequestsCreateWithoutHospitalstaffInput = {
    request_date: Date | string
    blood_type: string
    units_needed: number
    patient_name: string
    status?: string | null
  }

  export type bloodrequestsUncheckedCreateWithoutHospitalstaffInput = {
    request_id?: number
    request_date: Date | string
    blood_type: string
    units_needed: number
    patient_name: string
    status?: string | null
  }

  export type bloodrequestsCreateOrConnectWithoutHospitalstaffInput = {
    where: bloodrequestsWhereUniqueInput
    create: XOR<bloodrequestsCreateWithoutHospitalstaffInput, bloodrequestsUncheckedCreateWithoutHospitalstaffInput>
  }

  export type bloodrequestsCreateManyHospitalstaffInputEnvelope = {
    data: bloodrequestsCreateManyHospitalstaffInput | bloodrequestsCreateManyHospitalstaffInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutHospitalstaffInput = {
    password: string
    email: string
    contact_phone: string
    role: string
    name: string
    admins?: adminsCreateNestedOneWithoutUsersInput
    donors?: donorsCreateNestedOneWithoutUsersInput
    subadmins?: subadminsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutHospitalstaffInput = {
    user_id?: number
    password: string
    email: string
    contact_phone: string
    role: string
    name: string
    admins?: adminsUncheckedCreateNestedOneWithoutUsersInput
    donors?: donorsUncheckedCreateNestedOneWithoutUsersInput
    subadmins?: subadminsUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutHospitalstaffInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutHospitalstaffInput, usersUncheckedCreateWithoutHospitalstaffInput>
  }

  export type bloodrequestsUpsertWithWhereUniqueWithoutHospitalstaffInput = {
    where: bloodrequestsWhereUniqueInput
    update: XOR<bloodrequestsUpdateWithoutHospitalstaffInput, bloodrequestsUncheckedUpdateWithoutHospitalstaffInput>
    create: XOR<bloodrequestsCreateWithoutHospitalstaffInput, bloodrequestsUncheckedCreateWithoutHospitalstaffInput>
  }

  export type bloodrequestsUpdateWithWhereUniqueWithoutHospitalstaffInput = {
    where: bloodrequestsWhereUniqueInput
    data: XOR<bloodrequestsUpdateWithoutHospitalstaffInput, bloodrequestsUncheckedUpdateWithoutHospitalstaffInput>
  }

  export type bloodrequestsUpdateManyWithWhereWithoutHospitalstaffInput = {
    where: bloodrequestsScalarWhereInput
    data: XOR<bloodrequestsUpdateManyMutationInput, bloodrequestsUncheckedUpdateManyWithoutHospitalstaffInput>
  }

  export type bloodrequestsScalarWhereInput = {
    AND?: bloodrequestsScalarWhereInput | bloodrequestsScalarWhereInput[]
    OR?: bloodrequestsScalarWhereInput[]
    NOT?: bloodrequestsScalarWhereInput | bloodrequestsScalarWhereInput[]
    request_id?: IntFilter<"bloodrequests"> | number
    staff_id?: IntFilter<"bloodrequests"> | number
    request_date?: DateTimeFilter<"bloodrequests"> | Date | string
    blood_type?: StringFilter<"bloodrequests"> | string
    units_needed?: IntFilter<"bloodrequests"> | number
    patient_name?: StringFilter<"bloodrequests"> | string
    status?: StringNullableFilter<"bloodrequests"> | string | null
  }

  export type usersUpsertWithoutHospitalstaffInput = {
    update: XOR<usersUpdateWithoutHospitalstaffInput, usersUncheckedUpdateWithoutHospitalstaffInput>
    create: XOR<usersCreateWithoutHospitalstaffInput, usersUncheckedCreateWithoutHospitalstaffInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutHospitalstaffInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutHospitalstaffInput, usersUncheckedUpdateWithoutHospitalstaffInput>
  }

  export type usersUpdateWithoutHospitalstaffInput = {
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admins?: adminsUpdateOneWithoutUsersNestedInput
    donors?: donorsUpdateOneWithoutUsersNestedInput
    subadmins?: subadminsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutHospitalstaffInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admins?: adminsUncheckedUpdateOneWithoutUsersNestedInput
    donors?: donorsUncheckedUpdateOneWithoutUsersNestedInput
    subadmins?: subadminsUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type bloodcentersCreateWithoutSubadminsInput = {
    center_name: string
    address: string
    contact_info: string
    appointments?: appointmentsCreateNestedManyWithoutBloodcentersInput
    bloodstock?: bloodstockCreateNestedManyWithoutBloodcentersInput
    donationhistory?: donationhistoryCreateNestedManyWithoutBloodcentersInput
  }

  export type bloodcentersUncheckedCreateWithoutSubadminsInput = {
    center_id?: number
    center_name: string
    address: string
    contact_info: string
    appointments?: appointmentsUncheckedCreateNestedManyWithoutBloodcentersInput
    bloodstock?: bloodstockUncheckedCreateNestedManyWithoutBloodcentersInput
    donationhistory?: donationhistoryUncheckedCreateNestedManyWithoutBloodcentersInput
  }

  export type bloodcentersCreateOrConnectWithoutSubadminsInput = {
    where: bloodcentersWhereUniqueInput
    create: XOR<bloodcentersCreateWithoutSubadminsInput, bloodcentersUncheckedCreateWithoutSubadminsInput>
  }

  export type usersCreateWithoutSubadminsInput = {
    password: string
    email: string
    contact_phone: string
    role: string
    name: string
    admins?: adminsCreateNestedOneWithoutUsersInput
    donors?: donorsCreateNestedOneWithoutUsersInput
    hospitalstaff?: hospitalstaffCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutSubadminsInput = {
    user_id?: number
    password: string
    email: string
    contact_phone: string
    role: string
    name: string
    admins?: adminsUncheckedCreateNestedOneWithoutUsersInput
    donors?: donorsUncheckedCreateNestedOneWithoutUsersInput
    hospitalstaff?: hospitalstaffUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutSubadminsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSubadminsInput, usersUncheckedCreateWithoutSubadminsInput>
  }

  export type bloodcentersUpsertWithoutSubadminsInput = {
    update: XOR<bloodcentersUpdateWithoutSubadminsInput, bloodcentersUncheckedUpdateWithoutSubadminsInput>
    create: XOR<bloodcentersCreateWithoutSubadminsInput, bloodcentersUncheckedCreateWithoutSubadminsInput>
    where?: bloodcentersWhereInput
  }

  export type bloodcentersUpdateToOneWithWhereWithoutSubadminsInput = {
    where?: bloodcentersWhereInput
    data: XOR<bloodcentersUpdateWithoutSubadminsInput, bloodcentersUncheckedUpdateWithoutSubadminsInput>
  }

  export type bloodcentersUpdateWithoutSubadminsInput = {
    center_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_info?: StringFieldUpdateOperationsInput | string
    appointments?: appointmentsUpdateManyWithoutBloodcentersNestedInput
    bloodstock?: bloodstockUpdateManyWithoutBloodcentersNestedInput
    donationhistory?: donationhistoryUpdateManyWithoutBloodcentersNestedInput
  }

  export type bloodcentersUncheckedUpdateWithoutSubadminsInput = {
    center_id?: IntFieldUpdateOperationsInput | number
    center_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_info?: StringFieldUpdateOperationsInput | string
    appointments?: appointmentsUncheckedUpdateManyWithoutBloodcentersNestedInput
    bloodstock?: bloodstockUncheckedUpdateManyWithoutBloodcentersNestedInput
    donationhistory?: donationhistoryUncheckedUpdateManyWithoutBloodcentersNestedInput
  }

  export type usersUpsertWithoutSubadminsInput = {
    update: XOR<usersUpdateWithoutSubadminsInput, usersUncheckedUpdateWithoutSubadminsInput>
    create: XOR<usersCreateWithoutSubadminsInput, usersUncheckedCreateWithoutSubadminsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSubadminsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSubadminsInput, usersUncheckedUpdateWithoutSubadminsInput>
  }

  export type usersUpdateWithoutSubadminsInput = {
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admins?: adminsUpdateOneWithoutUsersNestedInput
    donors?: donorsUpdateOneWithoutUsersNestedInput
    hospitalstaff?: hospitalstaffUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutSubadminsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admins?: adminsUncheckedUpdateOneWithoutUsersNestedInput
    donors?: donorsUncheckedUpdateOneWithoutUsersNestedInput
    hospitalstaff?: hospitalstaffUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type adminsCreateWithoutUsersInput = {
    created_at?: Date | string | null
  }

  export type adminsUncheckedCreateWithoutUsersInput = {
    admin_id?: number
    created_at?: Date | string | null
  }

  export type adminsCreateOrConnectWithoutUsersInput = {
    where: adminsWhereUniqueInput
    create: XOR<adminsCreateWithoutUsersInput, adminsUncheckedCreateWithoutUsersInput>
  }

  export type donorsCreateWithoutUsersInput = {
    national_id: string
    birth_date: Date | string
    gender: string
    address: string
    blood_type: string
    last_donation_date?: Date | string | null
    medications?: string | null
    medical_conditions?: string | null
    weight: Decimal | DecimalJsLike | number | string
    donor_image: string
    appointments?: appointmentsCreateNestedManyWithoutDonorsInput
    donationhistory?: donationhistoryCreateNestedManyWithoutDonorsInput
  }

  export type donorsUncheckedCreateWithoutUsersInput = {
    donor_id?: number
    national_id: string
    birth_date: Date | string
    gender: string
    address: string
    blood_type: string
    last_donation_date?: Date | string | null
    medications?: string | null
    medical_conditions?: string | null
    weight: Decimal | DecimalJsLike | number | string
    donor_image: string
    appointments?: appointmentsUncheckedCreateNestedManyWithoutDonorsInput
    donationhistory?: donationhistoryUncheckedCreateNestedManyWithoutDonorsInput
  }

  export type donorsCreateOrConnectWithoutUsersInput = {
    where: donorsWhereUniqueInput
    create: XOR<donorsCreateWithoutUsersInput, donorsUncheckedCreateWithoutUsersInput>
  }

  export type hospitalstaffCreateWithoutUsersInput = {
    address: string
    bloodrequests?: bloodrequestsCreateNestedManyWithoutHospitalstaffInput
  }

  export type hospitalstaffUncheckedCreateWithoutUsersInput = {
    staff_id?: number
    address: string
    bloodrequests?: bloodrequestsUncheckedCreateNestedManyWithoutHospitalstaffInput
  }

  export type hospitalstaffCreateOrConnectWithoutUsersInput = {
    where: hospitalstaffWhereUniqueInput
    create: XOR<hospitalstaffCreateWithoutUsersInput, hospitalstaffUncheckedCreateWithoutUsersInput>
  }

  export type subadminsCreateWithoutUsersInput = {
    bloodcenters: bloodcentersCreateNestedOneWithoutSubadminsInput
  }

  export type subadminsUncheckedCreateWithoutUsersInput = {
    sub_admin_id?: number
    center_id: number
  }

  export type subadminsCreateOrConnectWithoutUsersInput = {
    where: subadminsWhereUniqueInput
    create: XOR<subadminsCreateWithoutUsersInput, subadminsUncheckedCreateWithoutUsersInput>
  }

  export type adminsUpsertWithoutUsersInput = {
    update: XOR<adminsUpdateWithoutUsersInput, adminsUncheckedUpdateWithoutUsersInput>
    create: XOR<adminsCreateWithoutUsersInput, adminsUncheckedCreateWithoutUsersInput>
    where?: adminsWhereInput
  }

  export type adminsUpdateToOneWithWhereWithoutUsersInput = {
    where?: adminsWhereInput
    data: XOR<adminsUpdateWithoutUsersInput, adminsUncheckedUpdateWithoutUsersInput>
  }

  export type adminsUpdateWithoutUsersInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type adminsUncheckedUpdateWithoutUsersInput = {
    admin_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type donorsUpsertWithoutUsersInput = {
    update: XOR<donorsUpdateWithoutUsersInput, donorsUncheckedUpdateWithoutUsersInput>
    create: XOR<donorsCreateWithoutUsersInput, donorsUncheckedCreateWithoutUsersInput>
    where?: donorsWhereInput
  }

  export type donorsUpdateToOneWithWhereWithoutUsersInput = {
    where?: donorsWhereInput
    data: XOR<donorsUpdateWithoutUsersInput, donorsUncheckedUpdateWithoutUsersInput>
  }

  export type donorsUpdateWithoutUsersInput = {
    national_id?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    blood_type?: StringFieldUpdateOperationsInput | string
    last_donation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medications?: NullableStringFieldUpdateOperationsInput | string | null
    medical_conditions?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    donor_image?: StringFieldUpdateOperationsInput | string
    appointments?: appointmentsUpdateManyWithoutDonorsNestedInput
    donationhistory?: donationhistoryUpdateManyWithoutDonorsNestedInput
  }

  export type donorsUncheckedUpdateWithoutUsersInput = {
    donor_id?: IntFieldUpdateOperationsInput | number
    national_id?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    blood_type?: StringFieldUpdateOperationsInput | string
    last_donation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medications?: NullableStringFieldUpdateOperationsInput | string | null
    medical_conditions?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    donor_image?: StringFieldUpdateOperationsInput | string
    appointments?: appointmentsUncheckedUpdateManyWithoutDonorsNestedInput
    donationhistory?: donationhistoryUncheckedUpdateManyWithoutDonorsNestedInput
  }

  export type hospitalstaffUpsertWithoutUsersInput = {
    update: XOR<hospitalstaffUpdateWithoutUsersInput, hospitalstaffUncheckedUpdateWithoutUsersInput>
    create: XOR<hospitalstaffCreateWithoutUsersInput, hospitalstaffUncheckedCreateWithoutUsersInput>
    where?: hospitalstaffWhereInput
  }

  export type hospitalstaffUpdateToOneWithWhereWithoutUsersInput = {
    where?: hospitalstaffWhereInput
    data: XOR<hospitalstaffUpdateWithoutUsersInput, hospitalstaffUncheckedUpdateWithoutUsersInput>
  }

  export type hospitalstaffUpdateWithoutUsersInput = {
    address?: StringFieldUpdateOperationsInput | string
    bloodrequests?: bloodrequestsUpdateManyWithoutHospitalstaffNestedInput
  }

  export type hospitalstaffUncheckedUpdateWithoutUsersInput = {
    staff_id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    bloodrequests?: bloodrequestsUncheckedUpdateManyWithoutHospitalstaffNestedInput
  }

  export type subadminsUpsertWithoutUsersInput = {
    update: XOR<subadminsUpdateWithoutUsersInput, subadminsUncheckedUpdateWithoutUsersInput>
    create: XOR<subadminsCreateWithoutUsersInput, subadminsUncheckedCreateWithoutUsersInput>
    where?: subadminsWhereInput
  }

  export type subadminsUpdateToOneWithWhereWithoutUsersInput = {
    where?: subadminsWhereInput
    data: XOR<subadminsUpdateWithoutUsersInput, subadminsUncheckedUpdateWithoutUsersInput>
  }

  export type subadminsUpdateWithoutUsersInput = {
    bloodcenters?: bloodcentersUpdateOneRequiredWithoutSubadminsNestedInput
  }

  export type subadminsUncheckedUpdateWithoutUsersInput = {
    sub_admin_id?: IntFieldUpdateOperationsInput | number
    center_id?: IntFieldUpdateOperationsInput | number
  }

  export type appointmentsCreateManyBloodcentersInput = {
    appointment_id?: number
    donor_id: number
    appointment_date: Date | string
    description?: string | null
    status?: string | null
  }

  export type bloodstockCreateManyBloodcentersInput = {
    stock_id?: number
    blood_type: string
    units_available: number
    expiration_date: Date | string
  }

  export type donationhistoryCreateManyBloodcentersInput = {
    donation_id?: number
    donor_id: number
    donation_date: Date | string
    amount_donated: Decimal | DecimalJsLike | number | string
    status?: string | null
  }

  export type subadminsCreateManyBloodcentersInput = {
    sub_admin_id?: number
    user_id: number
  }

  export type appointmentsUpdateWithoutBloodcentersInput = {
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    donors?: donorsUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type appointmentsUncheckedUpdateWithoutBloodcentersInput = {
    appointment_id?: IntFieldUpdateOperationsInput | number
    donor_id?: IntFieldUpdateOperationsInput | number
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type appointmentsUncheckedUpdateManyWithoutBloodcentersInput = {
    appointment_id?: IntFieldUpdateOperationsInput | number
    donor_id?: IntFieldUpdateOperationsInput | number
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type bloodstockUpdateWithoutBloodcentersInput = {
    blood_type?: StringFieldUpdateOperationsInput | string
    units_available?: IntFieldUpdateOperationsInput | number
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bloodstockUncheckedUpdateWithoutBloodcentersInput = {
    stock_id?: IntFieldUpdateOperationsInput | number
    blood_type?: StringFieldUpdateOperationsInput | string
    units_available?: IntFieldUpdateOperationsInput | number
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bloodstockUncheckedUpdateManyWithoutBloodcentersInput = {
    stock_id?: IntFieldUpdateOperationsInput | number
    blood_type?: StringFieldUpdateOperationsInput | string
    units_available?: IntFieldUpdateOperationsInput | number
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type donationhistoryUpdateWithoutBloodcentersInput = {
    donation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount_donated?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    donors?: donorsUpdateOneRequiredWithoutDonationhistoryNestedInput
  }

  export type donationhistoryUncheckedUpdateWithoutBloodcentersInput = {
    donation_id?: IntFieldUpdateOperationsInput | number
    donor_id?: IntFieldUpdateOperationsInput | number
    donation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount_donated?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type donationhistoryUncheckedUpdateManyWithoutBloodcentersInput = {
    donation_id?: IntFieldUpdateOperationsInput | number
    donor_id?: IntFieldUpdateOperationsInput | number
    donation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount_donated?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type subadminsUpdateWithoutBloodcentersInput = {
    users?: usersUpdateOneRequiredWithoutSubadminsNestedInput
  }

  export type subadminsUncheckedUpdateWithoutBloodcentersInput = {
    sub_admin_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type subadminsUncheckedUpdateManyWithoutBloodcentersInput = {
    sub_admin_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type appointmentsCreateManyDonorsInput = {
    appointment_id?: number
    center_id: number
    appointment_date: Date | string
    description?: string | null
    status?: string | null
  }

  export type donationhistoryCreateManyDonorsInput = {
    donation_id?: number
    center_id: number
    donation_date: Date | string
    amount_donated: Decimal | DecimalJsLike | number | string
    status?: string | null
  }

  export type appointmentsUpdateWithoutDonorsInput = {
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    bloodcenters?: bloodcentersUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type appointmentsUncheckedUpdateWithoutDonorsInput = {
    appointment_id?: IntFieldUpdateOperationsInput | number
    center_id?: IntFieldUpdateOperationsInput | number
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type appointmentsUncheckedUpdateManyWithoutDonorsInput = {
    appointment_id?: IntFieldUpdateOperationsInput | number
    center_id?: IntFieldUpdateOperationsInput | number
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type donationhistoryUpdateWithoutDonorsInput = {
    donation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount_donated?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    bloodcenters?: bloodcentersUpdateOneRequiredWithoutDonationhistoryNestedInput
  }

  export type donationhistoryUncheckedUpdateWithoutDonorsInput = {
    donation_id?: IntFieldUpdateOperationsInput | number
    center_id?: IntFieldUpdateOperationsInput | number
    donation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount_donated?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type donationhistoryUncheckedUpdateManyWithoutDonorsInput = {
    donation_id?: IntFieldUpdateOperationsInput | number
    center_id?: IntFieldUpdateOperationsInput | number
    donation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount_donated?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type bloodrequestsCreateManyHospitalstaffInput = {
    request_id?: number
    request_date: Date | string
    blood_type: string
    units_needed: number
    patient_name: string
    status?: string | null
  }

  export type bloodrequestsUpdateWithoutHospitalstaffInput = {
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string
    blood_type?: StringFieldUpdateOperationsInput | string
    units_needed?: IntFieldUpdateOperationsInput | number
    patient_name?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type bloodrequestsUncheckedUpdateWithoutHospitalstaffInput = {
    request_id?: IntFieldUpdateOperationsInput | number
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string
    blood_type?: StringFieldUpdateOperationsInput | string
    units_needed?: IntFieldUpdateOperationsInput | number
    patient_name?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type bloodrequestsUncheckedUpdateManyWithoutHospitalstaffInput = {
    request_id?: IntFieldUpdateOperationsInput | number
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string
    blood_type?: StringFieldUpdateOperationsInput | string
    units_needed?: IntFieldUpdateOperationsInput | number
    patient_name?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}