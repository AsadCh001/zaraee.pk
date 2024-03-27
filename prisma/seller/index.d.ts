
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
 * Model sellerotps
 * 
 */
export type sellerotps = $Result.DefaultSelection<Prisma.$sellerotpsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sellerotps
 * const sellerotps = await prisma.sellerotps.findMany()
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
   * // Fetch zero or more Sellerotps
   * const sellerotps = await prisma.sellerotps.findMany()
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
   * `prisma.sellerotps`: Exposes CRUD operations for the **sellerotps** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sellerotps
    * const sellerotps = await prisma.sellerotps.findMany()
    * ```
    */
  get sellerotps(): Prisma.sellerotpsDelegate<ExtArgs>;
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
    sellerotps: 'sellerotps'
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
      modelProps: 'sellerotps'
      txIsolationLevel: never
    },
    model: {
      sellerotps: {
        payload: Prisma.$sellerotpsPayload<ExtArgs>
        fields: Prisma.sellerotpsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sellerotpsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sellerotpsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sellerotpsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sellerotpsPayload>
          }
          findFirst: {
            args: Prisma.sellerotpsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sellerotpsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sellerotpsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sellerotpsPayload>
          }
          findMany: {
            args: Prisma.sellerotpsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sellerotpsPayload>[]
          }
          create: {
            args: Prisma.sellerotpsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sellerotpsPayload>
          }
          createMany: {
            args: Prisma.sellerotpsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.sellerotpsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sellerotpsPayload>
          }
          update: {
            args: Prisma.sellerotpsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sellerotpsPayload>
          }
          deleteMany: {
            args: Prisma.sellerotpsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.sellerotpsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.sellerotpsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sellerotpsPayload>
          }
          aggregate: {
            args: Prisma.SellerotpsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSellerotps>
          }
          groupBy: {
            args: Prisma.sellerotpsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SellerotpsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.sellerotpsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.sellerotpsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.sellerotpsCountArgs<ExtArgs>,
            result: $Utils.Optional<SellerotpsCountAggregateOutputType> | number
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
   * Models
   */

  /**
   * Model sellerotps
   */

  export type AggregateSellerotps = {
    _count: SellerotpsCountAggregateOutputType | null
    _min: SellerotpsMinAggregateOutputType | null
    _max: SellerotpsMaxAggregateOutputType | null
  }

  export type SellerotpsMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    email: string | null
    expiresAt: Date | null
    otp: string | null
    updatedAt: Date | null
  }

  export type SellerotpsMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    email: string | null
    expiresAt: Date | null
    otp: string | null
    updatedAt: Date | null
  }

  export type SellerotpsCountAggregateOutputType = {
    id: number
    createdAt: number
    email: number
    expiresAt: number
    otp: number
    updatedAt: number
    _all: number
  }


  export type SellerotpsMinAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    expiresAt?: true
    otp?: true
    updatedAt?: true
  }

  export type SellerotpsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    expiresAt?: true
    otp?: true
    updatedAt?: true
  }

  export type SellerotpsCountAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    expiresAt?: true
    otp?: true
    updatedAt?: true
    _all?: true
  }

  export type SellerotpsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sellerotps to aggregate.
     */
    where?: sellerotpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sellerotps to fetch.
     */
    orderBy?: sellerotpsOrderByWithRelationInput | sellerotpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sellerotpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sellerotps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sellerotps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sellerotps
    **/
    _count?: true | SellerotpsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SellerotpsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SellerotpsMaxAggregateInputType
  }

  export type GetSellerotpsAggregateType<T extends SellerotpsAggregateArgs> = {
        [P in keyof T & keyof AggregateSellerotps]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSellerotps[P]>
      : GetScalarType<T[P], AggregateSellerotps[P]>
  }




  export type sellerotpsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sellerotpsWhereInput
    orderBy?: sellerotpsOrderByWithAggregationInput | sellerotpsOrderByWithAggregationInput[]
    by: SellerotpsScalarFieldEnum[] | SellerotpsScalarFieldEnum
    having?: sellerotpsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SellerotpsCountAggregateInputType | true
    _min?: SellerotpsMinAggregateInputType
    _max?: SellerotpsMaxAggregateInputType
  }

  export type SellerotpsGroupByOutputType = {
    id: string
    createdAt: Date
    email: string
    expiresAt: Date
    otp: string
    updatedAt: Date
    _count: SellerotpsCountAggregateOutputType | null
    _min: SellerotpsMinAggregateOutputType | null
    _max: SellerotpsMaxAggregateOutputType | null
  }

  type GetSellerotpsGroupByPayload<T extends sellerotpsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SellerotpsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SellerotpsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SellerotpsGroupByOutputType[P]>
            : GetScalarType<T[P], SellerotpsGroupByOutputType[P]>
        }
      >
    >


  export type sellerotpsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    expiresAt?: boolean
    otp?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sellerotps"]>

  export type sellerotpsSelectScalar = {
    id?: boolean
    createdAt?: boolean
    email?: boolean
    expiresAt?: boolean
    otp?: boolean
    updatedAt?: boolean
  }


  export type $sellerotpsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sellerotps"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      email: string
      expiresAt: Date
      otp: string
      updatedAt: Date
    }, ExtArgs["result"]["sellerotps"]>
    composites: {}
  }


  type sellerotpsGetPayload<S extends boolean | null | undefined | sellerotpsDefaultArgs> = $Result.GetResult<Prisma.$sellerotpsPayload, S>

  type sellerotpsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<sellerotpsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SellerotpsCountAggregateInputType | true
    }

  export interface sellerotpsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sellerotps'], meta: { name: 'sellerotps' } }
    /**
     * Find zero or one Sellerotps that matches the filter.
     * @param {sellerotpsFindUniqueArgs} args - Arguments to find a Sellerotps
     * @example
     * // Get one Sellerotps
     * const sellerotps = await prisma.sellerotps.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends sellerotpsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, sellerotpsFindUniqueArgs<ExtArgs>>
    ): Prisma__sellerotpsClient<$Result.GetResult<Prisma.$sellerotpsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Sellerotps that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {sellerotpsFindUniqueOrThrowArgs} args - Arguments to find a Sellerotps
     * @example
     * // Get one Sellerotps
     * const sellerotps = await prisma.sellerotps.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends sellerotpsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, sellerotpsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__sellerotpsClient<$Result.GetResult<Prisma.$sellerotpsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Sellerotps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellerotpsFindFirstArgs} args - Arguments to find a Sellerotps
     * @example
     * // Get one Sellerotps
     * const sellerotps = await prisma.sellerotps.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends sellerotpsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, sellerotpsFindFirstArgs<ExtArgs>>
    ): Prisma__sellerotpsClient<$Result.GetResult<Prisma.$sellerotpsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Sellerotps that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellerotpsFindFirstOrThrowArgs} args - Arguments to find a Sellerotps
     * @example
     * // Get one Sellerotps
     * const sellerotps = await prisma.sellerotps.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends sellerotpsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, sellerotpsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__sellerotpsClient<$Result.GetResult<Prisma.$sellerotpsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sellerotps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellerotpsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sellerotps
     * const sellerotps = await prisma.sellerotps.findMany()
     * 
     * // Get first 10 Sellerotps
     * const sellerotps = await prisma.sellerotps.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sellerotpsWithIdOnly = await prisma.sellerotps.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends sellerotpsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sellerotpsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sellerotpsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Sellerotps.
     * @param {sellerotpsCreateArgs} args - Arguments to create a Sellerotps.
     * @example
     * // Create one Sellerotps
     * const Sellerotps = await prisma.sellerotps.create({
     *   data: {
     *     // ... data to create a Sellerotps
     *   }
     * })
     * 
    **/
    create<T extends sellerotpsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, sellerotpsCreateArgs<ExtArgs>>
    ): Prisma__sellerotpsClient<$Result.GetResult<Prisma.$sellerotpsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sellerotps.
     *     @param {sellerotpsCreateManyArgs} args - Arguments to create many Sellerotps.
     *     @example
     *     // Create many Sellerotps
     *     const sellerotps = await prisma.sellerotps.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends sellerotpsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sellerotpsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sellerotps.
     * @param {sellerotpsDeleteArgs} args - Arguments to delete one Sellerotps.
     * @example
     * // Delete one Sellerotps
     * const Sellerotps = await prisma.sellerotps.delete({
     *   where: {
     *     // ... filter to delete one Sellerotps
     *   }
     * })
     * 
    **/
    delete<T extends sellerotpsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, sellerotpsDeleteArgs<ExtArgs>>
    ): Prisma__sellerotpsClient<$Result.GetResult<Prisma.$sellerotpsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Sellerotps.
     * @param {sellerotpsUpdateArgs} args - Arguments to update one Sellerotps.
     * @example
     * // Update one Sellerotps
     * const sellerotps = await prisma.sellerotps.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends sellerotpsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, sellerotpsUpdateArgs<ExtArgs>>
    ): Prisma__sellerotpsClient<$Result.GetResult<Prisma.$sellerotpsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sellerotps.
     * @param {sellerotpsDeleteManyArgs} args - Arguments to filter Sellerotps to delete.
     * @example
     * // Delete a few Sellerotps
     * const { count } = await prisma.sellerotps.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends sellerotpsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sellerotpsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sellerotps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellerotpsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sellerotps
     * const sellerotps = await prisma.sellerotps.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends sellerotpsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, sellerotpsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sellerotps.
     * @param {sellerotpsUpsertArgs} args - Arguments to update or create a Sellerotps.
     * @example
     * // Update or create a Sellerotps
     * const sellerotps = await prisma.sellerotps.upsert({
     *   create: {
     *     // ... data to create a Sellerotps
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sellerotps we want to update
     *   }
     * })
    **/
    upsert<T extends sellerotpsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, sellerotpsUpsertArgs<ExtArgs>>
    ): Prisma__sellerotpsClient<$Result.GetResult<Prisma.$sellerotpsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Sellerotps that matches the filter.
     * @param {sellerotpsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const sellerotps = await prisma.sellerotps.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: sellerotpsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Sellerotps.
     * @param {sellerotpsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const sellerotps = await prisma.sellerotps.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: sellerotpsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Sellerotps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellerotpsCountArgs} args - Arguments to filter Sellerotps to count.
     * @example
     * // Count the number of Sellerotps
     * const count = await prisma.sellerotps.count({
     *   where: {
     *     // ... the filter for the Sellerotps we want to count
     *   }
     * })
    **/
    count<T extends sellerotpsCountArgs>(
      args?: Subset<T, sellerotpsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SellerotpsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sellerotps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerotpsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SellerotpsAggregateArgs>(args: Subset<T, SellerotpsAggregateArgs>): Prisma.PrismaPromise<GetSellerotpsAggregateType<T>>

    /**
     * Group by Sellerotps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellerotpsGroupByArgs} args - Group by arguments.
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
      T extends sellerotpsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sellerotpsGroupByArgs['orderBy'] }
        : { orderBy?: sellerotpsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sellerotpsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSellerotpsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sellerotps model
   */
  readonly fields: sellerotpsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sellerotps.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sellerotpsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the sellerotps model
   */ 
  interface sellerotpsFieldRefs {
    readonly id: FieldRef<"sellerotps", 'String'>
    readonly createdAt: FieldRef<"sellerotps", 'DateTime'>
    readonly email: FieldRef<"sellerotps", 'String'>
    readonly expiresAt: FieldRef<"sellerotps", 'DateTime'>
    readonly otp: FieldRef<"sellerotps", 'String'>
    readonly updatedAt: FieldRef<"sellerotps", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * sellerotps findUnique
   */
  export type sellerotpsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellerotps
     */
    select?: sellerotpsSelect<ExtArgs> | null
    /**
     * Filter, which sellerotps to fetch.
     */
    where: sellerotpsWhereUniqueInput
  }


  /**
   * sellerotps findUniqueOrThrow
   */
  export type sellerotpsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellerotps
     */
    select?: sellerotpsSelect<ExtArgs> | null
    /**
     * Filter, which sellerotps to fetch.
     */
    where: sellerotpsWhereUniqueInput
  }


  /**
   * sellerotps findFirst
   */
  export type sellerotpsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellerotps
     */
    select?: sellerotpsSelect<ExtArgs> | null
    /**
     * Filter, which sellerotps to fetch.
     */
    where?: sellerotpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sellerotps to fetch.
     */
    orderBy?: sellerotpsOrderByWithRelationInput | sellerotpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sellerotps.
     */
    cursor?: sellerotpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sellerotps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sellerotps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sellerotps.
     */
    distinct?: SellerotpsScalarFieldEnum | SellerotpsScalarFieldEnum[]
  }


  /**
   * sellerotps findFirstOrThrow
   */
  export type sellerotpsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellerotps
     */
    select?: sellerotpsSelect<ExtArgs> | null
    /**
     * Filter, which sellerotps to fetch.
     */
    where?: sellerotpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sellerotps to fetch.
     */
    orderBy?: sellerotpsOrderByWithRelationInput | sellerotpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sellerotps.
     */
    cursor?: sellerotpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sellerotps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sellerotps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sellerotps.
     */
    distinct?: SellerotpsScalarFieldEnum | SellerotpsScalarFieldEnum[]
  }


  /**
   * sellerotps findMany
   */
  export type sellerotpsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellerotps
     */
    select?: sellerotpsSelect<ExtArgs> | null
    /**
     * Filter, which sellerotps to fetch.
     */
    where?: sellerotpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sellerotps to fetch.
     */
    orderBy?: sellerotpsOrderByWithRelationInput | sellerotpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sellerotps.
     */
    cursor?: sellerotpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sellerotps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sellerotps.
     */
    skip?: number
    distinct?: SellerotpsScalarFieldEnum | SellerotpsScalarFieldEnum[]
  }


  /**
   * sellerotps create
   */
  export type sellerotpsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellerotps
     */
    select?: sellerotpsSelect<ExtArgs> | null
    /**
     * The data needed to create a sellerotps.
     */
    data: XOR<sellerotpsCreateInput, sellerotpsUncheckedCreateInput>
  }


  /**
   * sellerotps createMany
   */
  export type sellerotpsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sellerotps.
     */
    data: sellerotpsCreateManyInput | sellerotpsCreateManyInput[]
  }


  /**
   * sellerotps update
   */
  export type sellerotpsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellerotps
     */
    select?: sellerotpsSelect<ExtArgs> | null
    /**
     * The data needed to update a sellerotps.
     */
    data: XOR<sellerotpsUpdateInput, sellerotpsUncheckedUpdateInput>
    /**
     * Choose, which sellerotps to update.
     */
    where: sellerotpsWhereUniqueInput
  }


  /**
   * sellerotps updateMany
   */
  export type sellerotpsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sellerotps.
     */
    data: XOR<sellerotpsUpdateManyMutationInput, sellerotpsUncheckedUpdateManyInput>
    /**
     * Filter which sellerotps to update
     */
    where?: sellerotpsWhereInput
  }


  /**
   * sellerotps upsert
   */
  export type sellerotpsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellerotps
     */
    select?: sellerotpsSelect<ExtArgs> | null
    /**
     * The filter to search for the sellerotps to update in case it exists.
     */
    where: sellerotpsWhereUniqueInput
    /**
     * In case the sellerotps found by the `where` argument doesn't exist, create a new sellerotps with this data.
     */
    create: XOR<sellerotpsCreateInput, sellerotpsUncheckedCreateInput>
    /**
     * In case the sellerotps was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sellerotpsUpdateInput, sellerotpsUncheckedUpdateInput>
  }


  /**
   * sellerotps delete
   */
  export type sellerotpsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellerotps
     */
    select?: sellerotpsSelect<ExtArgs> | null
    /**
     * Filter which sellerotps to delete.
     */
    where: sellerotpsWhereUniqueInput
  }


  /**
   * sellerotps deleteMany
   */
  export type sellerotpsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sellerotps to delete
     */
    where?: sellerotpsWhereInput
  }


  /**
   * sellerotps findRaw
   */
  export type sellerotpsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * sellerotps aggregateRaw
   */
  export type sellerotpsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * sellerotps without action
   */
  export type sellerotpsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellerotps
     */
    select?: sellerotpsSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const SellerotpsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    email: 'email',
    expiresAt: 'expiresAt',
    otp: 'otp',
    updatedAt: 'updatedAt'
  };

  export type SellerotpsScalarFieldEnum = (typeof SellerotpsScalarFieldEnum)[keyof typeof SellerotpsScalarFieldEnum]


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


  export type sellerotpsWhereInput = {
    AND?: sellerotpsWhereInput | sellerotpsWhereInput[]
    OR?: sellerotpsWhereInput[]
    NOT?: sellerotpsWhereInput | sellerotpsWhereInput[]
    id?: StringFilter<"sellerotps"> | string
    createdAt?: DateTimeFilter<"sellerotps"> | Date | string
    email?: StringFilter<"sellerotps"> | string
    expiresAt?: DateTimeFilter<"sellerotps"> | Date | string
    otp?: StringFilter<"sellerotps"> | string
    updatedAt?: DateTimeFilter<"sellerotps"> | Date | string
  }

  export type sellerotpsOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    expiresAt?: SortOrder
    otp?: SortOrder
    updatedAt?: SortOrder
  }

  export type sellerotpsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    otp?: string
    AND?: sellerotpsWhereInput | sellerotpsWhereInput[]
    OR?: sellerotpsWhereInput[]
    NOT?: sellerotpsWhereInput | sellerotpsWhereInput[]
    createdAt?: DateTimeFilter<"sellerotps"> | Date | string
    expiresAt?: DateTimeFilter<"sellerotps"> | Date | string
    updatedAt?: DateTimeFilter<"sellerotps"> | Date | string
  }, "id" | "email" | "otp">

  export type sellerotpsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    expiresAt?: SortOrder
    otp?: SortOrder
    updatedAt?: SortOrder
    _count?: sellerotpsCountOrderByAggregateInput
    _max?: sellerotpsMaxOrderByAggregateInput
    _min?: sellerotpsMinOrderByAggregateInput
  }

  export type sellerotpsScalarWhereWithAggregatesInput = {
    AND?: sellerotpsScalarWhereWithAggregatesInput | sellerotpsScalarWhereWithAggregatesInput[]
    OR?: sellerotpsScalarWhereWithAggregatesInput[]
    NOT?: sellerotpsScalarWhereWithAggregatesInput | sellerotpsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"sellerotps"> | string
    createdAt?: DateTimeWithAggregatesFilter<"sellerotps"> | Date | string
    email?: StringWithAggregatesFilter<"sellerotps"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"sellerotps"> | Date | string
    otp?: StringWithAggregatesFilter<"sellerotps"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"sellerotps"> | Date | string
  }

  export type sellerotpsCreateInput = {
    id?: string
    createdAt?: Date | string
    email: string
    expiresAt: Date | string
    otp: string
    updatedAt?: Date | string
  }

  export type sellerotpsUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    email: string
    expiresAt: Date | string
    otp: string
    updatedAt?: Date | string
  }

  export type sellerotpsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sellerotpsUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sellerotpsCreateManyInput = {
    id?: string
    createdAt?: Date | string
    email: string
    expiresAt: Date | string
    otp: string
    updatedAt?: Date | string
  }

  export type sellerotpsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sellerotpsUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: StringFieldUpdateOperationsInput | string
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

  export type sellerotpsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    expiresAt?: SortOrder
    otp?: SortOrder
    updatedAt?: SortOrder
  }

  export type sellerotpsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    expiresAt?: SortOrder
    otp?: SortOrder
    updatedAt?: SortOrder
  }

  export type sellerotpsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    expiresAt?: SortOrder
    otp?: SortOrder
    updatedAt?: SortOrder
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use sellerotpsDefaultArgs instead
     */
    export type sellerotpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = sellerotpsDefaultArgs<ExtArgs>

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