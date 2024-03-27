
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model customers
 * 
 */
export type customers = $Result.DefaultSelection<Prisma.$customersPayload>
/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model cart
 * 
 */
export type cart = $Result.DefaultSelection<Prisma.$cartPayload>
/**
 * Model sellers
 * 
 */
export type sellers = $Result.DefaultSelection<Prisma.$sellersPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customers.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Customers
   * const customers = await prisma.customers.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.customers`: Exposes CRUD operations for the **customers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customers.findMany()
    * ```
    */
  get customers(): Prisma.customersDelegate<ExtArgs>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.cartDelegate<ExtArgs>;

  /**
   * `prisma.sellers`: Exposes CRUD operations for the **sellers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sellers
    * const sellers = await prisma.sellers.findMany()
    * ```
    */
  get sellers(): Prisma.sellersDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    customers: 'customers',
    products: 'products',
    cart: 'cart',
    sellers: 'sellers'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'customers' | 'products' | 'cart' | 'sellers'
      txIsolationLevel: never
    },
    model: {
      customers: {
        payload: Prisma.$customersPayload<ExtArgs>
        fields: Prisma.customersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findFirst: {
            args: Prisma.customersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findMany: {
            args: Prisma.customersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          create: {
            args: Prisma.customersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          createMany: {
            args: Prisma.customersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.customersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          update: {
            args: Prisma.customersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          deleteMany: {
            args: Prisma.customersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.customersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.customersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          aggregate: {
            args: Prisma.CustomersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCustomers>
          }
          groupBy: {
            args: Prisma.customersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CustomersGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.customersFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.customersAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.customersCountArgs<ExtArgs>,
            result: $Utils.Optional<CustomersCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.productsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.productsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      cart: {
        payload: Prisma.$cartPayload<ExtArgs>
        fields: Prisma.cartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cartFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cartFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          findFirst: {
            args: Prisma.cartFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cartFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          findMany: {
            args: Prisma.cartFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cartPayload>[]
          }
          create: {
            args: Prisma.cartCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          createMany: {
            args: Prisma.cartCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.cartDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          update: {
            args: Prisma.cartUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          deleteMany: {
            args: Prisma.cartDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.cartUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.cartUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.cartGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.cartFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.cartAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.cartCountArgs<ExtArgs>,
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      sellers: {
        payload: Prisma.$sellersPayload<ExtArgs>
        fields: Prisma.sellersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sellersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sellersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sellersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sellersPayload>
          }
          findFirst: {
            args: Prisma.sellersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sellersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sellersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sellersPayload>
          }
          findMany: {
            args: Prisma.sellersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sellersPayload>[]
          }
          create: {
            args: Prisma.sellersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sellersPayload>
          }
          createMany: {
            args: Prisma.sellersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.sellersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sellersPayload>
          }
          update: {
            args: Prisma.sellersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sellersPayload>
          }
          deleteMany: {
            args: Prisma.sellersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.sellersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.sellersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sellersPayload>
          }
          aggregate: {
            args: Prisma.SellersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSellers>
          }
          groupBy: {
            args: Prisma.sellersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SellersGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.sellersFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.sellersAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.sellersCountArgs<ExtArgs>,
            result: $Utils.Optional<SellersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    cart: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | ProductsCountOutputTypeCountCartArgs
  }

  // Custom InputTypes

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountCartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartWhereInput
  }



  /**
   * Models
   */

  /**
   * Model customers
   */

  export type AggregateCustomers = {
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  export type CustomersAvgAggregateOutputType = {
    phoneNo: number | null
  }

  export type CustomersSumAggregateOutputType = {
    phoneNo: bigint | null
  }

  export type CustomersMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    email: string | null
    name: string | null
    password: string | null
    phoneNo: bigint | null
    updatedAt: Date | null
  }

  export type CustomersMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    email: string | null
    name: string | null
    password: string | null
    phoneNo: bigint | null
    updatedAt: Date | null
  }

  export type CustomersCountAggregateOutputType = {
    id: number
    createdAt: number
    email: number
    name: number
    password: number
    phoneNo: number
    updatedAt: number
    _all: number
  }


  export type CustomersAvgAggregateInputType = {
    phoneNo?: true
  }

  export type CustomersSumAggregateInputType = {
    phoneNo?: true
  }

  export type CustomersMinAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
    password?: true
    phoneNo?: true
    updatedAt?: true
  }

  export type CustomersMaxAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
    password?: true
    phoneNo?: true
    updatedAt?: true
  }

  export type CustomersCountAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
    password?: true
    phoneNo?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to aggregate.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers
    **/
    _count?: true | CustomersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomersMaxAggregateInputType
  }

  export type GetCustomersAggregateType<T extends CustomersAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomers[P]>
      : GetScalarType<T[P], AggregateCustomers[P]>
  }




  export type customersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customersWhereInput
    orderBy?: customersOrderByWithAggregationInput | customersOrderByWithAggregationInput[]
    by: CustomersScalarFieldEnum[] | CustomersScalarFieldEnum
    having?: customersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomersCountAggregateInputType | true
    _avg?: CustomersAvgAggregateInputType
    _sum?: CustomersSumAggregateInputType
    _min?: CustomersMinAggregateInputType
    _max?: CustomersMaxAggregateInputType
  }

  export type CustomersGroupByOutputType = {
    id: string
    createdAt: Date
    email: string
    name: string
    password: string
    phoneNo: bigint
    updatedAt: Date
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  type GetCustomersGroupByPayload<T extends customersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomersGroupByOutputType[P]>
            : GetScalarType<T[P], CustomersGroupByOutputType[P]>
        }
      >
    >


  export type customersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    phoneNo?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customers"]>

  export type customersSelectScalar = {
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    phoneNo?: boolean
    updatedAt?: boolean
  }


  export type $customersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customers"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      email: string
      name: string
      password: string
      phoneNo: bigint
      updatedAt: Date
    }, ExtArgs["result"]["customers"]>
    composites: {}
  }


  type customersGetPayload<S extends boolean | null | undefined | customersDefaultArgs> = $Result.GetResult<Prisma.$customersPayload, S>

  type customersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<customersFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CustomersCountAggregateInputType | true
    }

  export interface customersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customers'], meta: { name: 'customers' } }
    /**
     * Find zero or one Customers that matches the filter.
     * @param {customersFindUniqueArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends customersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, customersFindUniqueArgs<ExtArgs>>
    ): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Customers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {customersFindUniqueOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends customersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, customersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends customersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, customersFindFirstArgs<ExtArgs>>
    ): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Customers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends customersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, customersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customers.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customersWithIdOnly = await prisma.customers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends customersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Customers.
     * @param {customersCreateArgs} args - Arguments to create a Customers.
     * @example
     * // Create one Customers
     * const Customers = await prisma.customers.create({
     *   data: {
     *     // ... data to create a Customers
     *   }
     * })
     * 
    **/
    create<T extends customersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, customersCreateArgs<ExtArgs>>
    ): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Customers.
     *     @param {customersCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customers = await prisma.customers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends customersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customers.
     * @param {customersDeleteArgs} args - Arguments to delete one Customers.
     * @example
     * // Delete one Customers
     * const Customers = await prisma.customers.delete({
     *   where: {
     *     // ... filter to delete one Customers
     *   }
     * })
     * 
    **/
    delete<T extends customersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, customersDeleteArgs<ExtArgs>>
    ): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Customers.
     * @param {customersUpdateArgs} args - Arguments to update one Customers.
     * @example
     * // Update one Customers
     * const customers = await prisma.customers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends customersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, customersUpdateArgs<ExtArgs>>
    ): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {customersDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends customersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends customersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, customersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customers.
     * @param {customersUpsertArgs} args - Arguments to update or create a Customers.
     * @example
     * // Update or create a Customers
     * const customers = await prisma.customers.upsert({
     *   create: {
     *     // ... data to create a Customers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customers we want to update
     *   }
     * })
    **/
    upsert<T extends customersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, customersUpsertArgs<ExtArgs>>
    ): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * @param {customersFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const customers = await prisma.customers.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: customersFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Customers.
     * @param {customersAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const customers = await prisma.customers.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: customersAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customers.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends customersCountArgs>(
      args?: Subset<T, customersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomersAggregateArgs>(args: Subset<T, CustomersAggregateArgs>): Prisma.PrismaPromise<GetCustomersAggregateType<T>>

    /**
     * Group by Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersGroupByArgs} args - Group by arguments.
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
      T extends customersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customersGroupByArgs['orderBy'] }
        : { orderBy?: customersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, customersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customers model
   */
  readonly fields: customersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the customers model
   */ 
  interface customersFieldRefs {
    readonly id: FieldRef<"customers", 'String'>
    readonly createdAt: FieldRef<"customers", 'DateTime'>
    readonly email: FieldRef<"customers", 'String'>
    readonly name: FieldRef<"customers", 'String'>
    readonly password: FieldRef<"customers", 'String'>
    readonly phoneNo: FieldRef<"customers", 'BigInt'>
    readonly updatedAt: FieldRef<"customers", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * customers findUnique
   */
  export type customersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }


  /**
   * customers findUniqueOrThrow
   */
  export type customersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }


  /**
   * customers findFirst
   */
  export type customersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }


  /**
   * customers findFirstOrThrow
   */
  export type customersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }


  /**
   * customers findMany
   */
  export type customersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }


  /**
   * customers create
   */
  export type customersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * The data needed to create a customers.
     */
    data: XOR<customersCreateInput, customersUncheckedCreateInput>
  }


  /**
   * customers createMany
   */
  export type customersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customersCreateManyInput | customersCreateManyInput[]
  }


  /**
   * customers update
   */
  export type customersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * The data needed to update a customers.
     */
    data: XOR<customersUpdateInput, customersUncheckedUpdateInput>
    /**
     * Choose, which customers to update.
     */
    where: customersWhereUniqueInput
  }


  /**
   * customers updateMany
   */
  export type customersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customersWhereInput
  }


  /**
   * customers upsert
   */
  export type customersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * The filter to search for the customers to update in case it exists.
     */
    where: customersWhereUniqueInput
    /**
     * In case the customers found by the `where` argument doesn't exist, create a new customers with this data.
     */
    create: XOR<customersCreateInput, customersUncheckedCreateInput>
    /**
     * In case the customers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customersUpdateInput, customersUncheckedUpdateInput>
  }


  /**
   * customers delete
   */
  export type customersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Filter which customers to delete.
     */
    where: customersWhereUniqueInput
  }


  /**
   * customers deleteMany
   */
  export type customersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customersWhereInput
  }


  /**
   * customers findRaw
   */
  export type customersFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * customers aggregateRaw
   */
  export type customersAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * customers without action
   */
  export type customersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
  }



  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    price: number | null
    rating: number | null
  }

  export type ProductsSumAggregateOutputType = {
    price: number | null
    rating: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    ftimage: string | null
    rating: number | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    ftimage: string | null
    rating: number | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    name: number
    price: number
    ftimage: number
    images: number
    rating: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    price?: true
    rating?: true
  }

  export type ProductsSumAggregateInputType = {
    price?: true
    rating?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    ftimage?: true
    rating?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    ftimage?: true
    rating?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    ftimage?: true
    images?: true
    rating?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: string
    name: string
    price: number
    ftimage: string
    images: string[]
    rating: number
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    ftimage?: boolean
    images?: boolean
    rating?: boolean
    cart?: boolean | products$cartArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    ftimage?: boolean
    images?: boolean
    rating?: boolean
  }

  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | products$cartArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      cart: Prisma.$cartPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: number
      ftimage: string
      images: string[]
      rating: number
    }, ExtArgs["result"]["products"]>
    composites: {}
  }


  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends productsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>
    ): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Products that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends productsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>
    ): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends productsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
    **/
    create<T extends productsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, productsCreateArgs<ExtArgs>>
    ): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     *     @param {productsCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const products = await prisma.products.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends productsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
    **/
    delete<T extends productsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, productsDeleteArgs<ExtArgs>>
    ): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends productsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, productsUpdateArgs<ExtArgs>>
    ): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends productsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends productsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
    **/
    upsert<T extends productsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, productsUpsertArgs<ExtArgs>>
    ): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * @param {productsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const products = await prisma.products.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: productsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Products.
     * @param {productsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const products = await prisma.products.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: productsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
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
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cart<T extends products$cartArgs<ExtArgs> = {}>(args?: Subset<T, products$cartArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the products model
   */ 
  interface productsFieldRefs {
    readonly id: FieldRef<"products", 'String'>
    readonly name: FieldRef<"products", 'String'>
    readonly price: FieldRef<"products", 'Float'>
    readonly ftimage: FieldRef<"products", 'String'>
    readonly images: FieldRef<"products", 'String[]'>
    readonly rating: FieldRef<"products", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }


  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }


  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }


  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }


  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }


  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }


  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
  }


  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }


  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
  }


  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }


  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }


  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
  }


  /**
   * products findRaw
   */
  export type productsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * products aggregateRaw
   */
  export type productsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * products.cart
   */
  export type products$cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cartInclude<ExtArgs> | null
    where?: cartWhereInput
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    cursor?: cartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }


  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude<ExtArgs> | null
  }



  /**
   * Model cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartAvgAggregateOutputType = {
    total_price: number | null
    quantity: number | null
  }

  export type CartSumAggregateOutputType = {
    total_price: number | null
    quantity: number | null
  }

  export type CartMinAggregateOutputType = {
    id: string | null
    productId: string | null
    total_price: number | null
    quantity: number | null
    useremail: string | null
  }

  export type CartMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    total_price: number | null
    quantity: number | null
    useremail: string | null
  }

  export type CartCountAggregateOutputType = {
    id: number
    productId: number
    total_price: number
    quantity: number
    useremail: number
    _all: number
  }


  export type CartAvgAggregateInputType = {
    total_price?: true
    quantity?: true
  }

  export type CartSumAggregateInputType = {
    total_price?: true
    quantity?: true
  }

  export type CartMinAggregateInputType = {
    id?: true
    productId?: true
    total_price?: true
    quantity?: true
    useremail?: true
  }

  export type CartMaxAggregateInputType = {
    id?: true
    productId?: true
    total_price?: true
    quantity?: true
    useremail?: true
  }

  export type CartCountAggregateInputType = {
    id?: true
    productId?: true
    total_price?: true
    quantity?: true
    useremail?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cart to aggregate.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type cartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartWhereInput
    orderBy?: cartOrderByWithAggregationInput | cartOrderByWithAggregationInput[]
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: cartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _avg?: CartAvgAggregateInputType
    _sum?: CartSumAggregateInputType
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    id: string
    productId: string
    total_price: number
    quantity: number
    useremail: string
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends cartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type cartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    total_price?: boolean
    quantity?: boolean
    useremail?: boolean
    product?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type cartSelectScalar = {
    id?: boolean
    productId?: boolean
    total_price?: boolean
    quantity?: boolean
    useremail?: boolean
  }

  export type cartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productsDefaultArgs<ExtArgs>
  }


  export type $cartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cart"
    objects: {
      product: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      total_price: number
      quantity: number
      useremail: string
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }


  type cartGetPayload<S extends boolean | null | undefined | cartDefaultArgs> = $Result.GetResult<Prisma.$cartPayload, S>

  type cartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<cartFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CartCountAggregateInputType | true
    }

  export interface cartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cart'], meta: { name: 'cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {cartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends cartFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, cartFindUniqueArgs<ExtArgs>>
    ): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Cart that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {cartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends cartFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cartFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends cartFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, cartFindFirstArgs<ExtArgs>>
    ): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends cartFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cartFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends cartFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cartFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Cart.
     * @param {cartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
    **/
    create<T extends cartCreateArgs<ExtArgs>>(
      args: SelectSubset<T, cartCreateArgs<ExtArgs>>
    ): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Carts.
     *     @param {cartCreateManyArgs} args - Arguments to create many Carts.
     *     @example
     *     // Create many Carts
     *     const cart = await prisma.cart.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends cartCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cartCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cart.
     * @param {cartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
    **/
    delete<T extends cartDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, cartDeleteArgs<ExtArgs>>
    ): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Cart.
     * @param {cartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends cartUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, cartUpdateArgs<ExtArgs>>
    ): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Carts.
     * @param {cartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends cartDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cartDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends cartUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, cartUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cart.
     * @param {cartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
    **/
    upsert<T extends cartUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, cartUpsertArgs<ExtArgs>>
    ): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Carts that matches the filter.
     * @param {cartFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const cart = await prisma.cart.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: cartFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Cart.
     * @param {cartAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const cart = await prisma.cart.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: cartAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends cartCountArgs>(
      args?: Subset<T, cartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartGroupByArgs} args - Group by arguments.
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
      T extends cartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cartGroupByArgs['orderBy'] }
        : { orderBy?: cartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cart model
   */
  readonly fields: cartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the cart model
   */ 
  interface cartFieldRefs {
    readonly id: FieldRef<"cart", 'String'>
    readonly productId: FieldRef<"cart", 'String'>
    readonly total_price: FieldRef<"cart", 'Float'>
    readonly quantity: FieldRef<"cart", 'Int'>
    readonly useremail: FieldRef<"cart", 'String'>
  }
    

  // Custom InputTypes

  /**
   * cart findUnique
   */
  export type cartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where: cartWhereUniqueInput
  }


  /**
   * cart findUniqueOrThrow
   */
  export type cartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where: cartWhereUniqueInput
  }


  /**
   * cart findFirst
   */
  export type cartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }


  /**
   * cart findFirstOrThrow
   */
  export type cartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }


  /**
   * cart findMany
   */
  export type cartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }


  /**
   * cart create
   */
  export type cartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * The data needed to create a cart.
     */
    data: XOR<cartCreateInput, cartUncheckedCreateInput>
  }


  /**
   * cart createMany
   */
  export type cartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carts.
     */
    data: cartCreateManyInput | cartCreateManyInput[]
  }


  /**
   * cart update
   */
  export type cartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * The data needed to update a cart.
     */
    data: XOR<cartUpdateInput, cartUncheckedUpdateInput>
    /**
     * Choose, which cart to update.
     */
    where: cartWhereUniqueInput
  }


  /**
   * cart updateMany
   */
  export type cartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carts.
     */
    data: XOR<cartUpdateManyMutationInput, cartUncheckedUpdateManyInput>
    /**
     * Filter which carts to update
     */
    where?: cartWhereInput
  }


  /**
   * cart upsert
   */
  export type cartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * The filter to search for the cart to update in case it exists.
     */
    where: cartWhereUniqueInput
    /**
     * In case the cart found by the `where` argument doesn't exist, create a new cart with this data.
     */
    create: XOR<cartCreateInput, cartUncheckedCreateInput>
    /**
     * In case the cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cartUpdateInput, cartUncheckedUpdateInput>
  }


  /**
   * cart delete
   */
  export type cartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter which cart to delete.
     */
    where: cartWhereUniqueInput
  }


  /**
   * cart deleteMany
   */
  export type cartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carts to delete
     */
    where?: cartWhereInput
  }


  /**
   * cart findRaw
   */
  export type cartFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * cart aggregateRaw
   */
  export type cartAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * cart without action
   */
  export type cartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cartInclude<ExtArgs> | null
  }



  /**
   * Model sellers
   */

  export type AggregateSellers = {
    _count: SellersCountAggregateOutputType | null
    _avg: SellersAvgAggregateOutputType | null
    _sum: SellersSumAggregateOutputType | null
    _min: SellersMinAggregateOutputType | null
    _max: SellersMaxAggregateOutputType | null
  }

  export type SellersAvgAggregateOutputType = {
    phoneNo: number | null
  }

  export type SellersSumAggregateOutputType = {
    phoneNo: bigint | null
  }

  export type SellersMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    email: string | null
    name: string | null
    password: string | null
    phoneNo: bigint | null
    updatedAt: Date | null
  }

  export type SellersMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    email: string | null
    name: string | null
    password: string | null
    phoneNo: bigint | null
    updatedAt: Date | null
  }

  export type SellersCountAggregateOutputType = {
    id: number
    createdAt: number
    email: number
    name: number
    password: number
    phoneNo: number
    updatedAt: number
    _all: number
  }


  export type SellersAvgAggregateInputType = {
    phoneNo?: true
  }

  export type SellersSumAggregateInputType = {
    phoneNo?: true
  }

  export type SellersMinAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
    password?: true
    phoneNo?: true
    updatedAt?: true
  }

  export type SellersMaxAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
    password?: true
    phoneNo?: true
    updatedAt?: true
  }

  export type SellersCountAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
    password?: true
    phoneNo?: true
    updatedAt?: true
    _all?: true
  }

  export type SellersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sellers to aggregate.
     */
    where?: sellersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sellers to fetch.
     */
    orderBy?: sellersOrderByWithRelationInput | sellersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sellersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sellers
    **/
    _count?: true | SellersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SellersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SellersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SellersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SellersMaxAggregateInputType
  }

  export type GetSellersAggregateType<T extends SellersAggregateArgs> = {
        [P in keyof T & keyof AggregateSellers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSellers[P]>
      : GetScalarType<T[P], AggregateSellers[P]>
  }




  export type sellersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sellersWhereInput
    orderBy?: sellersOrderByWithAggregationInput | sellersOrderByWithAggregationInput[]
    by: SellersScalarFieldEnum[] | SellersScalarFieldEnum
    having?: sellersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SellersCountAggregateInputType | true
    _avg?: SellersAvgAggregateInputType
    _sum?: SellersSumAggregateInputType
    _min?: SellersMinAggregateInputType
    _max?: SellersMaxAggregateInputType
  }

  export type SellersGroupByOutputType = {
    id: string
    createdAt: Date
    email: string
    name: string
    password: string
    phoneNo: bigint
    updatedAt: Date
    _count: SellersCountAggregateOutputType | null
    _avg: SellersAvgAggregateOutputType | null
    _sum: SellersSumAggregateOutputType | null
    _min: SellersMinAggregateOutputType | null
    _max: SellersMaxAggregateOutputType | null
  }

  type GetSellersGroupByPayload<T extends sellersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SellersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SellersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SellersGroupByOutputType[P]>
            : GetScalarType<T[P], SellersGroupByOutputType[P]>
        }
      >
    >


  export type sellersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    phoneNo?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sellers"]>

  export type sellersSelectScalar = {
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    phoneNo?: boolean
    updatedAt?: boolean
  }


  export type $sellersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sellers"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      email: string
      name: string
      password: string
      phoneNo: bigint
      updatedAt: Date
    }, ExtArgs["result"]["sellers"]>
    composites: {}
  }


  type sellersGetPayload<S extends boolean | null | undefined | sellersDefaultArgs> = $Result.GetResult<Prisma.$sellersPayload, S>

  type sellersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<sellersFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SellersCountAggregateInputType | true
    }

  export interface sellersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sellers'], meta: { name: 'sellers' } }
    /**
     * Find zero or one Sellers that matches the filter.
     * @param {sellersFindUniqueArgs} args - Arguments to find a Sellers
     * @example
     * // Get one Sellers
     * const sellers = await prisma.sellers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends sellersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, sellersFindUniqueArgs<ExtArgs>>
    ): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Sellers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {sellersFindUniqueOrThrowArgs} args - Arguments to find a Sellers
     * @example
     * // Get one Sellers
     * const sellers = await prisma.sellers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends sellersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, sellersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Sellers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellersFindFirstArgs} args - Arguments to find a Sellers
     * @example
     * // Get one Sellers
     * const sellers = await prisma.sellers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends sellersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, sellersFindFirstArgs<ExtArgs>>
    ): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Sellers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellersFindFirstOrThrowArgs} args - Arguments to find a Sellers
     * @example
     * // Get one Sellers
     * const sellers = await prisma.sellers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends sellersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, sellersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sellers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sellers
     * const sellers = await prisma.sellers.findMany()
     * 
     * // Get first 10 Sellers
     * const sellers = await prisma.sellers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sellersWithIdOnly = await prisma.sellers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends sellersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sellersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Sellers.
     * @param {sellersCreateArgs} args - Arguments to create a Sellers.
     * @example
     * // Create one Sellers
     * const Sellers = await prisma.sellers.create({
     *   data: {
     *     // ... data to create a Sellers
     *   }
     * })
     * 
    **/
    create<T extends sellersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, sellersCreateArgs<ExtArgs>>
    ): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sellers.
     *     @param {sellersCreateManyArgs} args - Arguments to create many Sellers.
     *     @example
     *     // Create many Sellers
     *     const sellers = await prisma.sellers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends sellersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sellersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sellers.
     * @param {sellersDeleteArgs} args - Arguments to delete one Sellers.
     * @example
     * // Delete one Sellers
     * const Sellers = await prisma.sellers.delete({
     *   where: {
     *     // ... filter to delete one Sellers
     *   }
     * })
     * 
    **/
    delete<T extends sellersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, sellersDeleteArgs<ExtArgs>>
    ): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Sellers.
     * @param {sellersUpdateArgs} args - Arguments to update one Sellers.
     * @example
     * // Update one Sellers
     * const sellers = await prisma.sellers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends sellersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, sellersUpdateArgs<ExtArgs>>
    ): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sellers.
     * @param {sellersDeleteManyArgs} args - Arguments to filter Sellers to delete.
     * @example
     * // Delete a few Sellers
     * const { count } = await prisma.sellers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends sellersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sellersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sellers
     * const sellers = await prisma.sellers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends sellersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, sellersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sellers.
     * @param {sellersUpsertArgs} args - Arguments to update or create a Sellers.
     * @example
     * // Update or create a Sellers
     * const sellers = await prisma.sellers.upsert({
     *   create: {
     *     // ... data to create a Sellers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sellers we want to update
     *   }
     * })
    **/
    upsert<T extends sellersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, sellersUpsertArgs<ExtArgs>>
    ): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Sellers that matches the filter.
     * @param {sellersFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const sellers = await prisma.sellers.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: sellersFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Sellers.
     * @param {sellersAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const sellers = await prisma.sellers.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: sellersAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Sellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellersCountArgs} args - Arguments to filter Sellers to count.
     * @example
     * // Count the number of Sellers
     * const count = await prisma.sellers.count({
     *   where: {
     *     // ... the filter for the Sellers we want to count
     *   }
     * })
    **/
    count<T extends sellersCountArgs>(
      args?: Subset<T, sellersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SellersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SellersAggregateArgs>(args: Subset<T, SellersAggregateArgs>): Prisma.PrismaPromise<GetSellersAggregateType<T>>

    /**
     * Group by Sellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellersGroupByArgs} args - Group by arguments.
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
      T extends sellersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sellersGroupByArgs['orderBy'] }
        : { orderBy?: sellersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sellersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSellersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sellers model
   */
  readonly fields: sellersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sellers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sellersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the sellers model
   */ 
  interface sellersFieldRefs {
    readonly id: FieldRef<"sellers", 'String'>
    readonly createdAt: FieldRef<"sellers", 'DateTime'>
    readonly email: FieldRef<"sellers", 'String'>
    readonly name: FieldRef<"sellers", 'String'>
    readonly password: FieldRef<"sellers", 'String'>
    readonly phoneNo: FieldRef<"sellers", 'BigInt'>
    readonly updatedAt: FieldRef<"sellers", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * sellers findUnique
   */
  export type sellersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Filter, which sellers to fetch.
     */
    where: sellersWhereUniqueInput
  }


  /**
   * sellers findUniqueOrThrow
   */
  export type sellersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Filter, which sellers to fetch.
     */
    where: sellersWhereUniqueInput
  }


  /**
   * sellers findFirst
   */
  export type sellersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Filter, which sellers to fetch.
     */
    where?: sellersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sellers to fetch.
     */
    orderBy?: sellersOrderByWithRelationInput | sellersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sellers.
     */
    cursor?: sellersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sellers.
     */
    distinct?: SellersScalarFieldEnum | SellersScalarFieldEnum[]
  }


  /**
   * sellers findFirstOrThrow
   */
  export type sellersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Filter, which sellers to fetch.
     */
    where?: sellersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sellers to fetch.
     */
    orderBy?: sellersOrderByWithRelationInput | sellersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sellers.
     */
    cursor?: sellersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sellers.
     */
    distinct?: SellersScalarFieldEnum | SellersScalarFieldEnum[]
  }


  /**
   * sellers findMany
   */
  export type sellersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Filter, which sellers to fetch.
     */
    where?: sellersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sellers to fetch.
     */
    orderBy?: sellersOrderByWithRelationInput | sellersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sellers.
     */
    cursor?: sellersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sellers.
     */
    skip?: number
    distinct?: SellersScalarFieldEnum | SellersScalarFieldEnum[]
  }


  /**
   * sellers create
   */
  export type sellersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * The data needed to create a sellers.
     */
    data: XOR<sellersCreateInput, sellersUncheckedCreateInput>
  }


  /**
   * sellers createMany
   */
  export type sellersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sellers.
     */
    data: sellersCreateManyInput | sellersCreateManyInput[]
  }


  /**
   * sellers update
   */
  export type sellersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * The data needed to update a sellers.
     */
    data: XOR<sellersUpdateInput, sellersUncheckedUpdateInput>
    /**
     * Choose, which sellers to update.
     */
    where: sellersWhereUniqueInput
  }


  /**
   * sellers updateMany
   */
  export type sellersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sellers.
     */
    data: XOR<sellersUpdateManyMutationInput, sellersUncheckedUpdateManyInput>
    /**
     * Filter which sellers to update
     */
    where?: sellersWhereInput
  }


  /**
   * sellers upsert
   */
  export type sellersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * The filter to search for the sellers to update in case it exists.
     */
    where: sellersWhereUniqueInput
    /**
     * In case the sellers found by the `where` argument doesn't exist, create a new sellers with this data.
     */
    create: XOR<sellersCreateInput, sellersUncheckedCreateInput>
    /**
     * In case the sellers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sellersUpdateInput, sellersUncheckedUpdateInput>
  }


  /**
   * sellers delete
   */
  export type sellersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Filter which sellers to delete.
     */
    where: sellersWhereUniqueInput
  }


  /**
   * sellers deleteMany
   */
  export type sellersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sellers to delete
     */
    where?: sellersWhereInput
  }


  /**
   * sellers findRaw
   */
  export type sellersFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * sellers aggregateRaw
   */
  export type sellersAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * sellers without action
   */
  export type sellersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const CustomersScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    email: 'email',
    name: 'name',
    password: 'password',
    phoneNo: 'phoneNo',
    updatedAt: 'updatedAt'
  };

  export type CustomersScalarFieldEnum = (typeof CustomersScalarFieldEnum)[keyof typeof CustomersScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    ftimage: 'ftimage',
    images: 'images',
    rating: 'rating'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const CartScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    total_price: 'total_price',
    quantity: 'quantity',
    useremail: 'useremail'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const SellersScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    email: 'email',
    name: 'name',
    password: 'password',
    phoneNo: 'phoneNo',
    updatedAt: 'updatedAt'
  };

  export type SellersScalarFieldEnum = (typeof SellersScalarFieldEnum)[keyof typeof SellersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type customersWhereInput = {
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    id?: StringFilter<"customers"> | string
    createdAt?: DateTimeFilter<"customers"> | Date | string
    email?: StringFilter<"customers"> | string
    name?: StringFilter<"customers"> | string
    password?: StringFilter<"customers"> | string
    phoneNo?: BigIntFilter<"customers"> | bigint | number
    updatedAt?: DateTimeFilter<"customers"> | Date | string
  }

  export type customersOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    phoneNo?: SortOrder
    updatedAt?: SortOrder
  }

  export type customersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phoneNo?: bigint | number
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    createdAt?: DateTimeFilter<"customers"> | Date | string
    name?: StringFilter<"customers"> | string
    password?: StringFilter<"customers"> | string
    updatedAt?: DateTimeFilter<"customers"> | Date | string
  }, "id" | "email" | "phoneNo">

  export type customersOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    phoneNo?: SortOrder
    updatedAt?: SortOrder
    _count?: customersCountOrderByAggregateInput
    _avg?: customersAvgOrderByAggregateInput
    _max?: customersMaxOrderByAggregateInput
    _min?: customersMinOrderByAggregateInput
    _sum?: customersSumOrderByAggregateInput
  }

  export type customersScalarWhereWithAggregatesInput = {
    AND?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    OR?: customersScalarWhereWithAggregatesInput[]
    NOT?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"customers"> | string
    createdAt?: DateTimeWithAggregatesFilter<"customers"> | Date | string
    email?: StringWithAggregatesFilter<"customers"> | string
    name?: StringWithAggregatesFilter<"customers"> | string
    password?: StringWithAggregatesFilter<"customers"> | string
    phoneNo?: BigIntWithAggregatesFilter<"customers"> | bigint | number
    updatedAt?: DateTimeWithAggregatesFilter<"customers"> | Date | string
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    id?: StringFilter<"products"> | string
    name?: StringFilter<"products"> | string
    price?: FloatFilter<"products"> | number
    ftimage?: StringFilter<"products"> | string
    images?: StringNullableListFilter<"products">
    rating?: FloatFilter<"products"> | number
    cart?: CartListRelationFilter
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    ftimage?: SortOrder
    images?: SortOrder
    rating?: SortOrder
    cart?: cartOrderByRelationAggregateInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    name?: StringFilter<"products"> | string
    price?: FloatFilter<"products"> | number
    ftimage?: StringFilter<"products"> | string
    images?: StringNullableListFilter<"products">
    rating?: FloatFilter<"products"> | number
    cart?: CartListRelationFilter
  }, "id">

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    ftimage?: SortOrder
    images?: SortOrder
    rating?: SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"products"> | string
    name?: StringWithAggregatesFilter<"products"> | string
    price?: FloatWithAggregatesFilter<"products"> | number
    ftimage?: StringWithAggregatesFilter<"products"> | string
    images?: StringNullableListFilter<"products">
    rating?: FloatWithAggregatesFilter<"products"> | number
  }

  export type cartWhereInput = {
    AND?: cartWhereInput | cartWhereInput[]
    OR?: cartWhereInput[]
    NOT?: cartWhereInput | cartWhereInput[]
    id?: StringFilter<"cart"> | string
    productId?: StringFilter<"cart"> | string
    total_price?: FloatFilter<"cart"> | number
    quantity?: IntFilter<"cart"> | number
    useremail?: StringFilter<"cart"> | string
    product?: XOR<ProductsRelationFilter, productsWhereInput>
  }

  export type cartOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    total_price?: SortOrder
    quantity?: SortOrder
    useremail?: SortOrder
    product?: productsOrderByWithRelationInput
  }

  export type cartWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: cartWhereInput | cartWhereInput[]
    OR?: cartWhereInput[]
    NOT?: cartWhereInput | cartWhereInput[]
    productId?: StringFilter<"cart"> | string
    total_price?: FloatFilter<"cart"> | number
    quantity?: IntFilter<"cart"> | number
    useremail?: StringFilter<"cart"> | string
    product?: XOR<ProductsRelationFilter, productsWhereInput>
  }, "id">

  export type cartOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    total_price?: SortOrder
    quantity?: SortOrder
    useremail?: SortOrder
    _count?: cartCountOrderByAggregateInput
    _avg?: cartAvgOrderByAggregateInput
    _max?: cartMaxOrderByAggregateInput
    _min?: cartMinOrderByAggregateInput
    _sum?: cartSumOrderByAggregateInput
  }

  export type cartScalarWhereWithAggregatesInput = {
    AND?: cartScalarWhereWithAggregatesInput | cartScalarWhereWithAggregatesInput[]
    OR?: cartScalarWhereWithAggregatesInput[]
    NOT?: cartScalarWhereWithAggregatesInput | cartScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"cart"> | string
    productId?: StringWithAggregatesFilter<"cart"> | string
    total_price?: FloatWithAggregatesFilter<"cart"> | number
    quantity?: IntWithAggregatesFilter<"cart"> | number
    useremail?: StringWithAggregatesFilter<"cart"> | string
  }

  export type sellersWhereInput = {
    AND?: sellersWhereInput | sellersWhereInput[]
    OR?: sellersWhereInput[]
    NOT?: sellersWhereInput | sellersWhereInput[]
    id?: StringFilter<"sellers"> | string
    createdAt?: DateTimeFilter<"sellers"> | Date | string
    email?: StringFilter<"sellers"> | string
    name?: StringFilter<"sellers"> | string
    password?: StringFilter<"sellers"> | string
    phoneNo?: BigIntFilter<"sellers"> | bigint | number
    updatedAt?: DateTimeFilter<"sellers"> | Date | string
  }

  export type sellersOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    phoneNo?: SortOrder
    updatedAt?: SortOrder
  }

  export type sellersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phoneNo?: bigint | number
    AND?: sellersWhereInput | sellersWhereInput[]
    OR?: sellersWhereInput[]
    NOT?: sellersWhereInput | sellersWhereInput[]
    createdAt?: DateTimeFilter<"sellers"> | Date | string
    name?: StringFilter<"sellers"> | string
    password?: StringFilter<"sellers"> | string
    updatedAt?: DateTimeFilter<"sellers"> | Date | string
  }, "id" | "email" | "phoneNo">

  export type sellersOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    phoneNo?: SortOrder
    updatedAt?: SortOrder
    _count?: sellersCountOrderByAggregateInput
    _avg?: sellersAvgOrderByAggregateInput
    _max?: sellersMaxOrderByAggregateInput
    _min?: sellersMinOrderByAggregateInput
    _sum?: sellersSumOrderByAggregateInput
  }

  export type sellersScalarWhereWithAggregatesInput = {
    AND?: sellersScalarWhereWithAggregatesInput | sellersScalarWhereWithAggregatesInput[]
    OR?: sellersScalarWhereWithAggregatesInput[]
    NOT?: sellersScalarWhereWithAggregatesInput | sellersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"sellers"> | string
    createdAt?: DateTimeWithAggregatesFilter<"sellers"> | Date | string
    email?: StringWithAggregatesFilter<"sellers"> | string
    name?: StringWithAggregatesFilter<"sellers"> | string
    password?: StringWithAggregatesFilter<"sellers"> | string
    phoneNo?: BigIntWithAggregatesFilter<"sellers"> | bigint | number
    updatedAt?: DateTimeWithAggregatesFilter<"sellers"> | Date | string
  }

  export type customersCreateInput = {
    id?: string
    createdAt?: Date | string
    email: string
    name: string
    password: string
    phoneNo: bigint | number
    updatedAt?: Date | string
  }

  export type customersUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    email: string
    name: string
    password: string
    phoneNo: bigint | number
    updatedAt?: Date | string
  }

  export type customersUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNo?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customersUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNo?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customersCreateManyInput = {
    id?: string
    createdAt?: Date | string
    email: string
    name: string
    password: string
    phoneNo: bigint | number
    updatedAt?: Date | string
  }

  export type customersUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNo?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customersUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNo?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsCreateInput = {
    id?: string
    name: string
    price: number
    ftimage: string
    images?: productsCreateimagesInput | string[]
    rating: number
    cart?: cartCreateNestedManyWithoutProductInput
  }

  export type productsUncheckedCreateInput = {
    id?: string
    name: string
    price: number
    ftimage: string
    images?: productsCreateimagesInput | string[]
    rating: number
    cart?: cartUncheckedCreateNestedManyWithoutProductInput
  }

  export type productsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    ftimage?: StringFieldUpdateOperationsInput | string
    images?: productsUpdateimagesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    cart?: cartUpdateManyWithoutProductNestedInput
  }

  export type productsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    ftimage?: StringFieldUpdateOperationsInput | string
    images?: productsUpdateimagesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    cart?: cartUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productsCreateManyInput = {
    id?: string
    name: string
    price: number
    ftimage: string
    images?: productsCreateimagesInput | string[]
    rating: number
  }

  export type productsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    ftimage?: StringFieldUpdateOperationsInput | string
    images?: productsUpdateimagesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
  }

  export type productsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    ftimage?: StringFieldUpdateOperationsInput | string
    images?: productsUpdateimagesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
  }

  export type cartCreateInput = {
    id?: string
    total_price: number
    quantity: number
    useremail: string
    product: productsCreateNestedOneWithoutCartInput
  }

  export type cartUncheckedCreateInput = {
    id?: string
    productId: string
    total_price: number
    quantity: number
    useremail: string
  }

  export type cartUpdateInput = {
    total_price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    useremail?: StringFieldUpdateOperationsInput | string
    product?: productsUpdateOneRequiredWithoutCartNestedInput
  }

  export type cartUncheckedUpdateInput = {
    productId?: StringFieldUpdateOperationsInput | string
    total_price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    useremail?: StringFieldUpdateOperationsInput | string
  }

  export type cartCreateManyInput = {
    id?: string
    productId: string
    total_price: number
    quantity: number
    useremail: string
  }

  export type cartUpdateManyMutationInput = {
    total_price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    useremail?: StringFieldUpdateOperationsInput | string
  }

  export type cartUncheckedUpdateManyInput = {
    productId?: StringFieldUpdateOperationsInput | string
    total_price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    useremail?: StringFieldUpdateOperationsInput | string
  }

  export type sellersCreateInput = {
    id?: string
    createdAt?: Date | string
    email: string
    name: string
    password: string
    phoneNo: bigint | number
    updatedAt?: Date | string
  }

  export type sellersUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    email: string
    name: string
    password: string
    phoneNo: bigint | number
    updatedAt?: Date | string
  }

  export type sellersUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNo?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sellersUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNo?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sellersCreateManyInput = {
    id?: string
    createdAt?: Date | string
    email: string
    name: string
    password: string
    phoneNo: bigint | number
    updatedAt?: Date | string
  }

  export type sellersUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNo?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sellersUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNo?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type customersCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    phoneNo?: SortOrder
    updatedAt?: SortOrder
  }

  export type customersAvgOrderByAggregateInput = {
    phoneNo?: SortOrder
  }

  export type customersMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    phoneNo?: SortOrder
    updatedAt?: SortOrder
  }

  export type customersMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    phoneNo?: SortOrder
    updatedAt?: SortOrder
  }

  export type customersSumOrderByAggregateInput = {
    phoneNo?: SortOrder
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

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type CartListRelationFilter = {
    every?: cartWhereInput
    some?: cartWhereInput
    none?: cartWhereInput
  }

  export type cartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    ftimage?: SortOrder
    images?: SortOrder
    rating?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    price?: SortOrder
    rating?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    ftimage?: SortOrder
    rating?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    ftimage?: SortOrder
    rating?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    price?: SortOrder
    rating?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type ProductsRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type cartCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    total_price?: SortOrder
    quantity?: SortOrder
    useremail?: SortOrder
  }

  export type cartAvgOrderByAggregateInput = {
    total_price?: SortOrder
    quantity?: SortOrder
  }

  export type cartMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    total_price?: SortOrder
    quantity?: SortOrder
    useremail?: SortOrder
  }

  export type cartMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    total_price?: SortOrder
    quantity?: SortOrder
    useremail?: SortOrder
  }

  export type cartSumOrderByAggregateInput = {
    total_price?: SortOrder
    quantity?: SortOrder
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

  export type sellersCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    phoneNo?: SortOrder
    updatedAt?: SortOrder
  }

  export type sellersAvgOrderByAggregateInput = {
    phoneNo?: SortOrder
  }

  export type sellersMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    phoneNo?: SortOrder
    updatedAt?: SortOrder
  }

  export type sellersMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    phoneNo?: SortOrder
    updatedAt?: SortOrder
  }

  export type sellersSumOrderByAggregateInput = {
    phoneNo?: SortOrder
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type productsCreateimagesInput = {
    set: string[]
  }

  export type cartCreateNestedManyWithoutProductInput = {
    create?: XOR<cartCreateWithoutProductInput, cartUncheckedCreateWithoutProductInput> | cartCreateWithoutProductInput[] | cartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cartCreateOrConnectWithoutProductInput | cartCreateOrConnectWithoutProductInput[]
    createMany?: cartCreateManyProductInputEnvelope
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
  }

  export type cartUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<cartCreateWithoutProductInput, cartUncheckedCreateWithoutProductInput> | cartCreateWithoutProductInput[] | cartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cartCreateOrConnectWithoutProductInput | cartCreateOrConnectWithoutProductInput[]
    createMany?: cartCreateManyProductInputEnvelope
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type productsUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type cartUpdateManyWithoutProductNestedInput = {
    create?: XOR<cartCreateWithoutProductInput, cartUncheckedCreateWithoutProductInput> | cartCreateWithoutProductInput[] | cartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cartCreateOrConnectWithoutProductInput | cartCreateOrConnectWithoutProductInput[]
    upsert?: cartUpsertWithWhereUniqueWithoutProductInput | cartUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: cartCreateManyProductInputEnvelope
    set?: cartWhereUniqueInput | cartWhereUniqueInput[]
    disconnect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    delete?: cartWhereUniqueInput | cartWhereUniqueInput[]
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    update?: cartUpdateWithWhereUniqueWithoutProductInput | cartUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: cartUpdateManyWithWhereWithoutProductInput | cartUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: cartScalarWhereInput | cartScalarWhereInput[]
  }

  export type cartUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<cartCreateWithoutProductInput, cartUncheckedCreateWithoutProductInput> | cartCreateWithoutProductInput[] | cartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cartCreateOrConnectWithoutProductInput | cartCreateOrConnectWithoutProductInput[]
    upsert?: cartUpsertWithWhereUniqueWithoutProductInput | cartUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: cartCreateManyProductInputEnvelope
    set?: cartWhereUniqueInput | cartWhereUniqueInput[]
    disconnect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    delete?: cartWhereUniqueInput | cartWhereUniqueInput[]
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    update?: cartUpdateWithWhereUniqueWithoutProductInput | cartUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: cartUpdateManyWithWhereWithoutProductInput | cartUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: cartScalarWhereInput | cartScalarWhereInput[]
  }

  export type productsCreateNestedOneWithoutCartInput = {
    create?: XOR<productsCreateWithoutCartInput, productsUncheckedCreateWithoutCartInput>
    connectOrCreate?: productsCreateOrConnectWithoutCartInput
    connect?: productsWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type productsUpdateOneRequiredWithoutCartNestedInput = {
    create?: XOR<productsCreateWithoutCartInput, productsUncheckedCreateWithoutCartInput>
    connectOrCreate?: productsCreateOrConnectWithoutCartInput
    upsert?: productsUpsertWithoutCartInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutCartInput, productsUpdateWithoutCartInput>, productsUncheckedUpdateWithoutCartInput>
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type cartCreateWithoutProductInput = {
    id?: string
    total_price: number
    quantity: number
    useremail: string
  }

  export type cartUncheckedCreateWithoutProductInput = {
    id?: string
    total_price: number
    quantity: number
    useremail: string
  }

  export type cartCreateOrConnectWithoutProductInput = {
    where: cartWhereUniqueInput
    create: XOR<cartCreateWithoutProductInput, cartUncheckedCreateWithoutProductInput>
  }

  export type cartCreateManyProductInputEnvelope = {
    data: cartCreateManyProductInput | cartCreateManyProductInput[]
  }

  export type cartUpsertWithWhereUniqueWithoutProductInput = {
    where: cartWhereUniqueInput
    update: XOR<cartUpdateWithoutProductInput, cartUncheckedUpdateWithoutProductInput>
    create: XOR<cartCreateWithoutProductInput, cartUncheckedCreateWithoutProductInput>
  }

  export type cartUpdateWithWhereUniqueWithoutProductInput = {
    where: cartWhereUniqueInput
    data: XOR<cartUpdateWithoutProductInput, cartUncheckedUpdateWithoutProductInput>
  }

  export type cartUpdateManyWithWhereWithoutProductInput = {
    where: cartScalarWhereInput
    data: XOR<cartUpdateManyMutationInput, cartUncheckedUpdateManyWithoutProductInput>
  }

  export type cartScalarWhereInput = {
    AND?: cartScalarWhereInput | cartScalarWhereInput[]
    OR?: cartScalarWhereInput[]
    NOT?: cartScalarWhereInput | cartScalarWhereInput[]
    id?: StringFilter<"cart"> | string
    productId?: StringFilter<"cart"> | string
    total_price?: FloatFilter<"cart"> | number
    quantity?: IntFilter<"cart"> | number
    useremail?: StringFilter<"cart"> | string
  }

  export type productsCreateWithoutCartInput = {
    id?: string
    name: string
    price: number
    ftimage: string
    images?: productsCreateimagesInput | string[]
    rating: number
  }

  export type productsUncheckedCreateWithoutCartInput = {
    id?: string
    name: string
    price: number
    ftimage: string
    images?: productsCreateimagesInput | string[]
    rating: number
  }

  export type productsCreateOrConnectWithoutCartInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutCartInput, productsUncheckedCreateWithoutCartInput>
  }

  export type productsUpsertWithoutCartInput = {
    update: XOR<productsUpdateWithoutCartInput, productsUncheckedUpdateWithoutCartInput>
    create: XOR<productsCreateWithoutCartInput, productsUncheckedCreateWithoutCartInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutCartInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutCartInput, productsUncheckedUpdateWithoutCartInput>
  }

  export type productsUpdateWithoutCartInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    ftimage?: StringFieldUpdateOperationsInput | string
    images?: productsUpdateimagesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
  }

  export type productsUncheckedUpdateWithoutCartInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    ftimage?: StringFieldUpdateOperationsInput | string
    images?: productsUpdateimagesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
  }

  export type cartCreateManyProductInput = {
    id?: string
    total_price: number
    quantity: number
    useremail: string
  }

  export type cartUpdateWithoutProductInput = {
    total_price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    useremail?: StringFieldUpdateOperationsInput | string
  }

  export type cartUncheckedUpdateWithoutProductInput = {
    total_price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    useremail?: StringFieldUpdateOperationsInput | string
  }

  export type cartUncheckedUpdateManyWithoutProductInput = {
    total_price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    useremail?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ProductsCountOutputTypeDefaultArgs instead
     */
    export type ProductsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use customersDefaultArgs instead
     */
    export type customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = customersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use productsDefaultArgs instead
     */
    export type productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = productsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use cartDefaultArgs instead
     */
    export type cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = cartDefaultArgs<ExtArgs>
    /**
     * @deprecated Use sellersDefaultArgs instead
     */
    export type sellersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = sellersDefaultArgs<ExtArgs>

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