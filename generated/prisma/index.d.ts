
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
 * Model pgmigrations
 * 
 */
export type pgmigrations = $Result.DefaultSelection<Prisma.$pgmigrationsPayload>
/**
 * Model todos
 * 
 */
export type todos = $Result.DefaultSelection<Prisma.$todosPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pgmigrations
 * const pgmigrations = await prisma.pgmigrations.findMany()
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
   * // Fetch zero or more Pgmigrations
   * const pgmigrations = await prisma.pgmigrations.findMany()
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
   * `prisma.pgmigrations`: Exposes CRUD operations for the **pgmigrations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pgmigrations
    * const pgmigrations = await prisma.pgmigrations.findMany()
    * ```
    */
  get pgmigrations(): Prisma.pgmigrationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.todos`: Exposes CRUD operations for the **todos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Todos
    * const todos = await prisma.todos.findMany()
    * ```
    */
  get todos(): Prisma.todosDelegate<ExtArgs, ClientOptions>;

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    pgmigrations: 'pgmigrations',
    todos: 'todos',
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
      modelProps: "pgmigrations" | "todos" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      pgmigrations: {
        payload: Prisma.$pgmigrationsPayload<ExtArgs>
        fields: Prisma.pgmigrationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pgmigrationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pgmigrationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pgmigrationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pgmigrationsPayload>
          }
          findFirst: {
            args: Prisma.pgmigrationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pgmigrationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pgmigrationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pgmigrationsPayload>
          }
          findMany: {
            args: Prisma.pgmigrationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pgmigrationsPayload>[]
          }
          create: {
            args: Prisma.pgmigrationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pgmigrationsPayload>
          }
          createMany: {
            args: Prisma.pgmigrationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pgmigrationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pgmigrationsPayload>[]
          }
          delete: {
            args: Prisma.pgmigrationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pgmigrationsPayload>
          }
          update: {
            args: Prisma.pgmigrationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pgmigrationsPayload>
          }
          deleteMany: {
            args: Prisma.pgmigrationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pgmigrationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pgmigrationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pgmigrationsPayload>[]
          }
          upsert: {
            args: Prisma.pgmigrationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pgmigrationsPayload>
          }
          aggregate: {
            args: Prisma.PgmigrationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePgmigrations>
          }
          groupBy: {
            args: Prisma.pgmigrationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PgmigrationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.pgmigrationsCountArgs<ExtArgs>
            result: $Utils.Optional<PgmigrationsCountAggregateOutputType> | number
          }
        }
      }
      todos: {
        payload: Prisma.$todosPayload<ExtArgs>
        fields: Prisma.todosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.todosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$todosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.todosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$todosPayload>
          }
          findFirst: {
            args: Prisma.todosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$todosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.todosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$todosPayload>
          }
          findMany: {
            args: Prisma.todosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$todosPayload>[]
          }
          create: {
            args: Prisma.todosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$todosPayload>
          }
          createMany: {
            args: Prisma.todosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.todosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$todosPayload>[]
          }
          delete: {
            args: Prisma.todosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$todosPayload>
          }
          update: {
            args: Prisma.todosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$todosPayload>
          }
          deleteMany: {
            args: Prisma.todosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.todosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.todosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$todosPayload>[]
          }
          upsert: {
            args: Prisma.todosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$todosPayload>
          }
          aggregate: {
            args: Prisma.TodosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTodos>
          }
          groupBy: {
            args: Prisma.todosGroupByArgs<ExtArgs>
            result: $Utils.Optional<TodosGroupByOutputType>[]
          }
          count: {
            args: Prisma.todosCountArgs<ExtArgs>
            result: $Utils.Optional<TodosCountAggregateOutputType> | number
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
    pgmigrations?: pgmigrationsOmit
    todos?: todosOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    todos: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    todos?: boolean | UsersCountOutputTypeCountTodosArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTodosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: todosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model pgmigrations
   */

  export type AggregatePgmigrations = {
    _count: PgmigrationsCountAggregateOutputType | null
    _avg: PgmigrationsAvgAggregateOutputType | null
    _sum: PgmigrationsSumAggregateOutputType | null
    _min: PgmigrationsMinAggregateOutputType | null
    _max: PgmigrationsMaxAggregateOutputType | null
  }

  export type PgmigrationsAvgAggregateOutputType = {
    id: number | null
  }

  export type PgmigrationsSumAggregateOutputType = {
    id: number | null
  }

  export type PgmigrationsMinAggregateOutputType = {
    id: number | null
    name: string | null
    run_on: Date | null
  }

  export type PgmigrationsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    run_on: Date | null
  }

  export type PgmigrationsCountAggregateOutputType = {
    id: number
    name: number
    run_on: number
    _all: number
  }


  export type PgmigrationsAvgAggregateInputType = {
    id?: true
  }

  export type PgmigrationsSumAggregateInputType = {
    id?: true
  }

  export type PgmigrationsMinAggregateInputType = {
    id?: true
    name?: true
    run_on?: true
  }

  export type PgmigrationsMaxAggregateInputType = {
    id?: true
    name?: true
    run_on?: true
  }

  export type PgmigrationsCountAggregateInputType = {
    id?: true
    name?: true
    run_on?: true
    _all?: true
  }

  export type PgmigrationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pgmigrations to aggregate.
     */
    where?: pgmigrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pgmigrations to fetch.
     */
    orderBy?: pgmigrationsOrderByWithRelationInput | pgmigrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pgmigrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pgmigrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pgmigrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pgmigrations
    **/
    _count?: true | PgmigrationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PgmigrationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PgmigrationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PgmigrationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PgmigrationsMaxAggregateInputType
  }

  export type GetPgmigrationsAggregateType<T extends PgmigrationsAggregateArgs> = {
        [P in keyof T & keyof AggregatePgmigrations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePgmigrations[P]>
      : GetScalarType<T[P], AggregatePgmigrations[P]>
  }




  export type pgmigrationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pgmigrationsWhereInput
    orderBy?: pgmigrationsOrderByWithAggregationInput | pgmigrationsOrderByWithAggregationInput[]
    by: PgmigrationsScalarFieldEnum[] | PgmigrationsScalarFieldEnum
    having?: pgmigrationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PgmigrationsCountAggregateInputType | true
    _avg?: PgmigrationsAvgAggregateInputType
    _sum?: PgmigrationsSumAggregateInputType
    _min?: PgmigrationsMinAggregateInputType
    _max?: PgmigrationsMaxAggregateInputType
  }

  export type PgmigrationsGroupByOutputType = {
    id: number
    name: string
    run_on: Date
    _count: PgmigrationsCountAggregateOutputType | null
    _avg: PgmigrationsAvgAggregateOutputType | null
    _sum: PgmigrationsSumAggregateOutputType | null
    _min: PgmigrationsMinAggregateOutputType | null
    _max: PgmigrationsMaxAggregateOutputType | null
  }

  type GetPgmigrationsGroupByPayload<T extends pgmigrationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PgmigrationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PgmigrationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PgmigrationsGroupByOutputType[P]>
            : GetScalarType<T[P], PgmigrationsGroupByOutputType[P]>
        }
      >
    >


  export type pgmigrationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    run_on?: boolean
  }, ExtArgs["result"]["pgmigrations"]>

  export type pgmigrationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    run_on?: boolean
  }, ExtArgs["result"]["pgmigrations"]>

  export type pgmigrationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    run_on?: boolean
  }, ExtArgs["result"]["pgmigrations"]>

  export type pgmigrationsSelectScalar = {
    id?: boolean
    name?: boolean
    run_on?: boolean
  }

  export type pgmigrationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "run_on", ExtArgs["result"]["pgmigrations"]>

  export type $pgmigrationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pgmigrations"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      run_on: Date
    }, ExtArgs["result"]["pgmigrations"]>
    composites: {}
  }

  type pgmigrationsGetPayload<S extends boolean | null | undefined | pgmigrationsDefaultArgs> = $Result.GetResult<Prisma.$pgmigrationsPayload, S>

  type pgmigrationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pgmigrationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PgmigrationsCountAggregateInputType | true
    }

  export interface pgmigrationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pgmigrations'], meta: { name: 'pgmigrations' } }
    /**
     * Find zero or one Pgmigrations that matches the filter.
     * @param {pgmigrationsFindUniqueArgs} args - Arguments to find a Pgmigrations
     * @example
     * // Get one Pgmigrations
     * const pgmigrations = await prisma.pgmigrations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pgmigrationsFindUniqueArgs>(args: SelectSubset<T, pgmigrationsFindUniqueArgs<ExtArgs>>): Prisma__pgmigrationsClient<$Result.GetResult<Prisma.$pgmigrationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pgmigrations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pgmigrationsFindUniqueOrThrowArgs} args - Arguments to find a Pgmigrations
     * @example
     * // Get one Pgmigrations
     * const pgmigrations = await prisma.pgmigrations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pgmigrationsFindUniqueOrThrowArgs>(args: SelectSubset<T, pgmigrationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pgmigrationsClient<$Result.GetResult<Prisma.$pgmigrationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pgmigrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pgmigrationsFindFirstArgs} args - Arguments to find a Pgmigrations
     * @example
     * // Get one Pgmigrations
     * const pgmigrations = await prisma.pgmigrations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pgmigrationsFindFirstArgs>(args?: SelectSubset<T, pgmigrationsFindFirstArgs<ExtArgs>>): Prisma__pgmigrationsClient<$Result.GetResult<Prisma.$pgmigrationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pgmigrations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pgmigrationsFindFirstOrThrowArgs} args - Arguments to find a Pgmigrations
     * @example
     * // Get one Pgmigrations
     * const pgmigrations = await prisma.pgmigrations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pgmigrationsFindFirstOrThrowArgs>(args?: SelectSubset<T, pgmigrationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__pgmigrationsClient<$Result.GetResult<Prisma.$pgmigrationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pgmigrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pgmigrationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pgmigrations
     * const pgmigrations = await prisma.pgmigrations.findMany()
     * 
     * // Get first 10 Pgmigrations
     * const pgmigrations = await prisma.pgmigrations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pgmigrationsWithIdOnly = await prisma.pgmigrations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pgmigrationsFindManyArgs>(args?: SelectSubset<T, pgmigrationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pgmigrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pgmigrations.
     * @param {pgmigrationsCreateArgs} args - Arguments to create a Pgmigrations.
     * @example
     * // Create one Pgmigrations
     * const Pgmigrations = await prisma.pgmigrations.create({
     *   data: {
     *     // ... data to create a Pgmigrations
     *   }
     * })
     * 
     */
    create<T extends pgmigrationsCreateArgs>(args: SelectSubset<T, pgmigrationsCreateArgs<ExtArgs>>): Prisma__pgmigrationsClient<$Result.GetResult<Prisma.$pgmigrationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pgmigrations.
     * @param {pgmigrationsCreateManyArgs} args - Arguments to create many Pgmigrations.
     * @example
     * // Create many Pgmigrations
     * const pgmigrations = await prisma.pgmigrations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pgmigrationsCreateManyArgs>(args?: SelectSubset<T, pgmigrationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pgmigrations and returns the data saved in the database.
     * @param {pgmigrationsCreateManyAndReturnArgs} args - Arguments to create many Pgmigrations.
     * @example
     * // Create many Pgmigrations
     * const pgmigrations = await prisma.pgmigrations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pgmigrations and only return the `id`
     * const pgmigrationsWithIdOnly = await prisma.pgmigrations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pgmigrationsCreateManyAndReturnArgs>(args?: SelectSubset<T, pgmigrationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pgmigrationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pgmigrations.
     * @param {pgmigrationsDeleteArgs} args - Arguments to delete one Pgmigrations.
     * @example
     * // Delete one Pgmigrations
     * const Pgmigrations = await prisma.pgmigrations.delete({
     *   where: {
     *     // ... filter to delete one Pgmigrations
     *   }
     * })
     * 
     */
    delete<T extends pgmigrationsDeleteArgs>(args: SelectSubset<T, pgmigrationsDeleteArgs<ExtArgs>>): Prisma__pgmigrationsClient<$Result.GetResult<Prisma.$pgmigrationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pgmigrations.
     * @param {pgmigrationsUpdateArgs} args - Arguments to update one Pgmigrations.
     * @example
     * // Update one Pgmigrations
     * const pgmigrations = await prisma.pgmigrations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pgmigrationsUpdateArgs>(args: SelectSubset<T, pgmigrationsUpdateArgs<ExtArgs>>): Prisma__pgmigrationsClient<$Result.GetResult<Prisma.$pgmigrationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pgmigrations.
     * @param {pgmigrationsDeleteManyArgs} args - Arguments to filter Pgmigrations to delete.
     * @example
     * // Delete a few Pgmigrations
     * const { count } = await prisma.pgmigrations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pgmigrationsDeleteManyArgs>(args?: SelectSubset<T, pgmigrationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pgmigrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pgmigrationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pgmigrations
     * const pgmigrations = await prisma.pgmigrations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pgmigrationsUpdateManyArgs>(args: SelectSubset<T, pgmigrationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pgmigrations and returns the data updated in the database.
     * @param {pgmigrationsUpdateManyAndReturnArgs} args - Arguments to update many Pgmigrations.
     * @example
     * // Update many Pgmigrations
     * const pgmigrations = await prisma.pgmigrations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pgmigrations and only return the `id`
     * const pgmigrationsWithIdOnly = await prisma.pgmigrations.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends pgmigrationsUpdateManyAndReturnArgs>(args: SelectSubset<T, pgmigrationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pgmigrationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pgmigrations.
     * @param {pgmigrationsUpsertArgs} args - Arguments to update or create a Pgmigrations.
     * @example
     * // Update or create a Pgmigrations
     * const pgmigrations = await prisma.pgmigrations.upsert({
     *   create: {
     *     // ... data to create a Pgmigrations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pgmigrations we want to update
     *   }
     * })
     */
    upsert<T extends pgmigrationsUpsertArgs>(args: SelectSubset<T, pgmigrationsUpsertArgs<ExtArgs>>): Prisma__pgmigrationsClient<$Result.GetResult<Prisma.$pgmigrationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pgmigrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pgmigrationsCountArgs} args - Arguments to filter Pgmigrations to count.
     * @example
     * // Count the number of Pgmigrations
     * const count = await prisma.pgmigrations.count({
     *   where: {
     *     // ... the filter for the Pgmigrations we want to count
     *   }
     * })
    **/
    count<T extends pgmigrationsCountArgs>(
      args?: Subset<T, pgmigrationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PgmigrationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pgmigrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgmigrationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PgmigrationsAggregateArgs>(args: Subset<T, PgmigrationsAggregateArgs>): Prisma.PrismaPromise<GetPgmigrationsAggregateType<T>>

    /**
     * Group by Pgmigrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pgmigrationsGroupByArgs} args - Group by arguments.
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
      T extends pgmigrationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pgmigrationsGroupByArgs['orderBy'] }
        : { orderBy?: pgmigrationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pgmigrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPgmigrationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pgmigrations model
   */
  readonly fields: pgmigrationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pgmigrations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pgmigrationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the pgmigrations model
   */
  interface pgmigrationsFieldRefs {
    readonly id: FieldRef<"pgmigrations", 'Int'>
    readonly name: FieldRef<"pgmigrations", 'String'>
    readonly run_on: FieldRef<"pgmigrations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * pgmigrations findUnique
   */
  export type pgmigrationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pgmigrations
     */
    select?: pgmigrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pgmigrations
     */
    omit?: pgmigrationsOmit<ExtArgs> | null
    /**
     * Filter, which pgmigrations to fetch.
     */
    where: pgmigrationsWhereUniqueInput
  }

  /**
   * pgmigrations findUniqueOrThrow
   */
  export type pgmigrationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pgmigrations
     */
    select?: pgmigrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pgmigrations
     */
    omit?: pgmigrationsOmit<ExtArgs> | null
    /**
     * Filter, which pgmigrations to fetch.
     */
    where: pgmigrationsWhereUniqueInput
  }

  /**
   * pgmigrations findFirst
   */
  export type pgmigrationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pgmigrations
     */
    select?: pgmigrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pgmigrations
     */
    omit?: pgmigrationsOmit<ExtArgs> | null
    /**
     * Filter, which pgmigrations to fetch.
     */
    where?: pgmigrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pgmigrations to fetch.
     */
    orderBy?: pgmigrationsOrderByWithRelationInput | pgmigrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pgmigrations.
     */
    cursor?: pgmigrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pgmigrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pgmigrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pgmigrations.
     */
    distinct?: PgmigrationsScalarFieldEnum | PgmigrationsScalarFieldEnum[]
  }

  /**
   * pgmigrations findFirstOrThrow
   */
  export type pgmigrationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pgmigrations
     */
    select?: pgmigrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pgmigrations
     */
    omit?: pgmigrationsOmit<ExtArgs> | null
    /**
     * Filter, which pgmigrations to fetch.
     */
    where?: pgmigrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pgmigrations to fetch.
     */
    orderBy?: pgmigrationsOrderByWithRelationInput | pgmigrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pgmigrations.
     */
    cursor?: pgmigrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pgmigrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pgmigrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pgmigrations.
     */
    distinct?: PgmigrationsScalarFieldEnum | PgmigrationsScalarFieldEnum[]
  }

  /**
   * pgmigrations findMany
   */
  export type pgmigrationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pgmigrations
     */
    select?: pgmigrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pgmigrations
     */
    omit?: pgmigrationsOmit<ExtArgs> | null
    /**
     * Filter, which pgmigrations to fetch.
     */
    where?: pgmigrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pgmigrations to fetch.
     */
    orderBy?: pgmigrationsOrderByWithRelationInput | pgmigrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pgmigrations.
     */
    cursor?: pgmigrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pgmigrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pgmigrations.
     */
    skip?: number
    distinct?: PgmigrationsScalarFieldEnum | PgmigrationsScalarFieldEnum[]
  }

  /**
   * pgmigrations create
   */
  export type pgmigrationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pgmigrations
     */
    select?: pgmigrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pgmigrations
     */
    omit?: pgmigrationsOmit<ExtArgs> | null
    /**
     * The data needed to create a pgmigrations.
     */
    data: XOR<pgmigrationsCreateInput, pgmigrationsUncheckedCreateInput>
  }

  /**
   * pgmigrations createMany
   */
  export type pgmigrationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pgmigrations.
     */
    data: pgmigrationsCreateManyInput | pgmigrationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pgmigrations createManyAndReturn
   */
  export type pgmigrationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pgmigrations
     */
    select?: pgmigrationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pgmigrations
     */
    omit?: pgmigrationsOmit<ExtArgs> | null
    /**
     * The data used to create many pgmigrations.
     */
    data: pgmigrationsCreateManyInput | pgmigrationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pgmigrations update
   */
  export type pgmigrationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pgmigrations
     */
    select?: pgmigrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pgmigrations
     */
    omit?: pgmigrationsOmit<ExtArgs> | null
    /**
     * The data needed to update a pgmigrations.
     */
    data: XOR<pgmigrationsUpdateInput, pgmigrationsUncheckedUpdateInput>
    /**
     * Choose, which pgmigrations to update.
     */
    where: pgmigrationsWhereUniqueInput
  }

  /**
   * pgmigrations updateMany
   */
  export type pgmigrationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pgmigrations.
     */
    data: XOR<pgmigrationsUpdateManyMutationInput, pgmigrationsUncheckedUpdateManyInput>
    /**
     * Filter which pgmigrations to update
     */
    where?: pgmigrationsWhereInput
    /**
     * Limit how many pgmigrations to update.
     */
    limit?: number
  }

  /**
   * pgmigrations updateManyAndReturn
   */
  export type pgmigrationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pgmigrations
     */
    select?: pgmigrationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pgmigrations
     */
    omit?: pgmigrationsOmit<ExtArgs> | null
    /**
     * The data used to update pgmigrations.
     */
    data: XOR<pgmigrationsUpdateManyMutationInput, pgmigrationsUncheckedUpdateManyInput>
    /**
     * Filter which pgmigrations to update
     */
    where?: pgmigrationsWhereInput
    /**
     * Limit how many pgmigrations to update.
     */
    limit?: number
  }

  /**
   * pgmigrations upsert
   */
  export type pgmigrationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pgmigrations
     */
    select?: pgmigrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pgmigrations
     */
    omit?: pgmigrationsOmit<ExtArgs> | null
    /**
     * The filter to search for the pgmigrations to update in case it exists.
     */
    where: pgmigrationsWhereUniqueInput
    /**
     * In case the pgmigrations found by the `where` argument doesn't exist, create a new pgmigrations with this data.
     */
    create: XOR<pgmigrationsCreateInput, pgmigrationsUncheckedCreateInput>
    /**
     * In case the pgmigrations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pgmigrationsUpdateInput, pgmigrationsUncheckedUpdateInput>
  }

  /**
   * pgmigrations delete
   */
  export type pgmigrationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pgmigrations
     */
    select?: pgmigrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pgmigrations
     */
    omit?: pgmigrationsOmit<ExtArgs> | null
    /**
     * Filter which pgmigrations to delete.
     */
    where: pgmigrationsWhereUniqueInput
  }

  /**
   * pgmigrations deleteMany
   */
  export type pgmigrationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pgmigrations to delete
     */
    where?: pgmigrationsWhereInput
    /**
     * Limit how many pgmigrations to delete.
     */
    limit?: number
  }

  /**
   * pgmigrations without action
   */
  export type pgmigrationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pgmigrations
     */
    select?: pgmigrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pgmigrations
     */
    omit?: pgmigrationsOmit<ExtArgs> | null
  }


  /**
   * Model todos
   */

  export type AggregateTodos = {
    _count: TodosCountAggregateOutputType | null
    _avg: TodosAvgAggregateOutputType | null
    _sum: TodosSumAggregateOutputType | null
    _min: TodosMinAggregateOutputType | null
    _max: TodosMaxAggregateOutputType | null
  }

  export type TodosAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type TodosSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type TodosMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    completed: boolean | null
    created_at: Date | null
    updated_at: Date | null
    user_id: number | null
  }

  export type TodosMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    completed: boolean | null
    created_at: Date | null
    updated_at: Date | null
    user_id: number | null
  }

  export type TodosCountAggregateOutputType = {
    id: number
    title: number
    description: number
    completed: number
    created_at: number
    updated_at: number
    user_id: number
    _all: number
  }


  export type TodosAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type TodosSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type TodosMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    completed?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type TodosMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    completed?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type TodosCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    completed?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    _all?: true
  }

  export type TodosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which todos to aggregate.
     */
    where?: todosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of todos to fetch.
     */
    orderBy?: todosOrderByWithRelationInput | todosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: todosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned todos
    **/
    _count?: true | TodosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TodosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TodosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TodosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TodosMaxAggregateInputType
  }

  export type GetTodosAggregateType<T extends TodosAggregateArgs> = {
        [P in keyof T & keyof AggregateTodos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTodos[P]>
      : GetScalarType<T[P], AggregateTodos[P]>
  }




  export type todosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: todosWhereInput
    orderBy?: todosOrderByWithAggregationInput | todosOrderByWithAggregationInput[]
    by: TodosScalarFieldEnum[] | TodosScalarFieldEnum
    having?: todosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TodosCountAggregateInputType | true
    _avg?: TodosAvgAggregateInputType
    _sum?: TodosSumAggregateInputType
    _min?: TodosMinAggregateInputType
    _max?: TodosMaxAggregateInputType
  }

  export type TodosGroupByOutputType = {
    id: number
    title: string
    description: string
    completed: boolean
    created_at: Date | null
    updated_at: Date | null
    user_id: number
    _count: TodosCountAggregateOutputType | null
    _avg: TodosAvgAggregateOutputType | null
    _sum: TodosSumAggregateOutputType | null
    _min: TodosMinAggregateOutputType | null
    _max: TodosMaxAggregateOutputType | null
  }

  type GetTodosGroupByPayload<T extends todosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TodosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TodosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TodosGroupByOutputType[P]>
            : GetScalarType<T[P], TodosGroupByOutputType[P]>
        }
      >
    >


  export type todosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    completed?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todos"]>

  export type todosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    completed?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todos"]>

  export type todosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    completed?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todos"]>

  export type todosSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    completed?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
  }

  export type todosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "completed" | "created_at" | "updated_at" | "user_id", ExtArgs["result"]["todos"]>
  export type todosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type todosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type todosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $todosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "todos"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      completed: boolean
      created_at: Date | null
      updated_at: Date | null
      user_id: number
    }, ExtArgs["result"]["todos"]>
    composites: {}
  }

  type todosGetPayload<S extends boolean | null | undefined | todosDefaultArgs> = $Result.GetResult<Prisma.$todosPayload, S>

  type todosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<todosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TodosCountAggregateInputType | true
    }

  export interface todosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['todos'], meta: { name: 'todos' } }
    /**
     * Find zero or one Todos that matches the filter.
     * @param {todosFindUniqueArgs} args - Arguments to find a Todos
     * @example
     * // Get one Todos
     * const todos = await prisma.todos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends todosFindUniqueArgs>(args: SelectSubset<T, todosFindUniqueArgs<ExtArgs>>): Prisma__todosClient<$Result.GetResult<Prisma.$todosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Todos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {todosFindUniqueOrThrowArgs} args - Arguments to find a Todos
     * @example
     * // Get one Todos
     * const todos = await prisma.todos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends todosFindUniqueOrThrowArgs>(args: SelectSubset<T, todosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__todosClient<$Result.GetResult<Prisma.$todosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Todos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {todosFindFirstArgs} args - Arguments to find a Todos
     * @example
     * // Get one Todos
     * const todos = await prisma.todos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends todosFindFirstArgs>(args?: SelectSubset<T, todosFindFirstArgs<ExtArgs>>): Prisma__todosClient<$Result.GetResult<Prisma.$todosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Todos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {todosFindFirstOrThrowArgs} args - Arguments to find a Todos
     * @example
     * // Get one Todos
     * const todos = await prisma.todos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends todosFindFirstOrThrowArgs>(args?: SelectSubset<T, todosFindFirstOrThrowArgs<ExtArgs>>): Prisma__todosClient<$Result.GetResult<Prisma.$todosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Todos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {todosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Todos
     * const todos = await prisma.todos.findMany()
     * 
     * // Get first 10 Todos
     * const todos = await prisma.todos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const todosWithIdOnly = await prisma.todos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends todosFindManyArgs>(args?: SelectSubset<T, todosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$todosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Todos.
     * @param {todosCreateArgs} args - Arguments to create a Todos.
     * @example
     * // Create one Todos
     * const Todos = await prisma.todos.create({
     *   data: {
     *     // ... data to create a Todos
     *   }
     * })
     * 
     */
    create<T extends todosCreateArgs>(args: SelectSubset<T, todosCreateArgs<ExtArgs>>): Prisma__todosClient<$Result.GetResult<Prisma.$todosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Todos.
     * @param {todosCreateManyArgs} args - Arguments to create many Todos.
     * @example
     * // Create many Todos
     * const todos = await prisma.todos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends todosCreateManyArgs>(args?: SelectSubset<T, todosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Todos and returns the data saved in the database.
     * @param {todosCreateManyAndReturnArgs} args - Arguments to create many Todos.
     * @example
     * // Create many Todos
     * const todos = await prisma.todos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Todos and only return the `id`
     * const todosWithIdOnly = await prisma.todos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends todosCreateManyAndReturnArgs>(args?: SelectSubset<T, todosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$todosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Todos.
     * @param {todosDeleteArgs} args - Arguments to delete one Todos.
     * @example
     * // Delete one Todos
     * const Todos = await prisma.todos.delete({
     *   where: {
     *     // ... filter to delete one Todos
     *   }
     * })
     * 
     */
    delete<T extends todosDeleteArgs>(args: SelectSubset<T, todosDeleteArgs<ExtArgs>>): Prisma__todosClient<$Result.GetResult<Prisma.$todosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Todos.
     * @param {todosUpdateArgs} args - Arguments to update one Todos.
     * @example
     * // Update one Todos
     * const todos = await prisma.todos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends todosUpdateArgs>(args: SelectSubset<T, todosUpdateArgs<ExtArgs>>): Prisma__todosClient<$Result.GetResult<Prisma.$todosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Todos.
     * @param {todosDeleteManyArgs} args - Arguments to filter Todos to delete.
     * @example
     * // Delete a few Todos
     * const { count } = await prisma.todos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends todosDeleteManyArgs>(args?: SelectSubset<T, todosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Todos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {todosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Todos
     * const todos = await prisma.todos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends todosUpdateManyArgs>(args: SelectSubset<T, todosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Todos and returns the data updated in the database.
     * @param {todosUpdateManyAndReturnArgs} args - Arguments to update many Todos.
     * @example
     * // Update many Todos
     * const todos = await prisma.todos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Todos and only return the `id`
     * const todosWithIdOnly = await prisma.todos.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends todosUpdateManyAndReturnArgs>(args: SelectSubset<T, todosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$todosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Todos.
     * @param {todosUpsertArgs} args - Arguments to update or create a Todos.
     * @example
     * // Update or create a Todos
     * const todos = await prisma.todos.upsert({
     *   create: {
     *     // ... data to create a Todos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Todos we want to update
     *   }
     * })
     */
    upsert<T extends todosUpsertArgs>(args: SelectSubset<T, todosUpsertArgs<ExtArgs>>): Prisma__todosClient<$Result.GetResult<Prisma.$todosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Todos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {todosCountArgs} args - Arguments to filter Todos to count.
     * @example
     * // Count the number of Todos
     * const count = await prisma.todos.count({
     *   where: {
     *     // ... the filter for the Todos we want to count
     *   }
     * })
    **/
    count<T extends todosCountArgs>(
      args?: Subset<T, todosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TodosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Todos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TodosAggregateArgs>(args: Subset<T, TodosAggregateArgs>): Prisma.PrismaPromise<GetTodosAggregateType<T>>

    /**
     * Group by Todos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {todosGroupByArgs} args - Group by arguments.
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
      T extends todosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: todosGroupByArgs['orderBy'] }
        : { orderBy?: todosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, todosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTodosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the todos model
   */
  readonly fields: todosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for todos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__todosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the todos model
   */
  interface todosFieldRefs {
    readonly id: FieldRef<"todos", 'Int'>
    readonly title: FieldRef<"todos", 'String'>
    readonly description: FieldRef<"todos", 'String'>
    readonly completed: FieldRef<"todos", 'Boolean'>
    readonly created_at: FieldRef<"todos", 'DateTime'>
    readonly updated_at: FieldRef<"todos", 'DateTime'>
    readonly user_id: FieldRef<"todos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * todos findUnique
   */
  export type todosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todos
     */
    select?: todosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the todos
     */
    omit?: todosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: todosInclude<ExtArgs> | null
    /**
     * Filter, which todos to fetch.
     */
    where: todosWhereUniqueInput
  }

  /**
   * todos findUniqueOrThrow
   */
  export type todosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todos
     */
    select?: todosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the todos
     */
    omit?: todosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: todosInclude<ExtArgs> | null
    /**
     * Filter, which todos to fetch.
     */
    where: todosWhereUniqueInput
  }

  /**
   * todos findFirst
   */
  export type todosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todos
     */
    select?: todosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the todos
     */
    omit?: todosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: todosInclude<ExtArgs> | null
    /**
     * Filter, which todos to fetch.
     */
    where?: todosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of todos to fetch.
     */
    orderBy?: todosOrderByWithRelationInput | todosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for todos.
     */
    cursor?: todosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of todos.
     */
    distinct?: TodosScalarFieldEnum | TodosScalarFieldEnum[]
  }

  /**
   * todos findFirstOrThrow
   */
  export type todosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todos
     */
    select?: todosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the todos
     */
    omit?: todosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: todosInclude<ExtArgs> | null
    /**
     * Filter, which todos to fetch.
     */
    where?: todosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of todos to fetch.
     */
    orderBy?: todosOrderByWithRelationInput | todosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for todos.
     */
    cursor?: todosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of todos.
     */
    distinct?: TodosScalarFieldEnum | TodosScalarFieldEnum[]
  }

  /**
   * todos findMany
   */
  export type todosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todos
     */
    select?: todosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the todos
     */
    omit?: todosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: todosInclude<ExtArgs> | null
    /**
     * Filter, which todos to fetch.
     */
    where?: todosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of todos to fetch.
     */
    orderBy?: todosOrderByWithRelationInput | todosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing todos.
     */
    cursor?: todosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` todos.
     */
    skip?: number
    distinct?: TodosScalarFieldEnum | TodosScalarFieldEnum[]
  }

  /**
   * todos create
   */
  export type todosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todos
     */
    select?: todosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the todos
     */
    omit?: todosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: todosInclude<ExtArgs> | null
    /**
     * The data needed to create a todos.
     */
    data: XOR<todosCreateInput, todosUncheckedCreateInput>
  }

  /**
   * todos createMany
   */
  export type todosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many todos.
     */
    data: todosCreateManyInput | todosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * todos createManyAndReturn
   */
  export type todosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todos
     */
    select?: todosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the todos
     */
    omit?: todosOmit<ExtArgs> | null
    /**
     * The data used to create many todos.
     */
    data: todosCreateManyInput | todosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: todosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * todos update
   */
  export type todosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todos
     */
    select?: todosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the todos
     */
    omit?: todosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: todosInclude<ExtArgs> | null
    /**
     * The data needed to update a todos.
     */
    data: XOR<todosUpdateInput, todosUncheckedUpdateInput>
    /**
     * Choose, which todos to update.
     */
    where: todosWhereUniqueInput
  }

  /**
   * todos updateMany
   */
  export type todosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update todos.
     */
    data: XOR<todosUpdateManyMutationInput, todosUncheckedUpdateManyInput>
    /**
     * Filter which todos to update
     */
    where?: todosWhereInput
    /**
     * Limit how many todos to update.
     */
    limit?: number
  }

  /**
   * todos updateManyAndReturn
   */
  export type todosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todos
     */
    select?: todosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the todos
     */
    omit?: todosOmit<ExtArgs> | null
    /**
     * The data used to update todos.
     */
    data: XOR<todosUpdateManyMutationInput, todosUncheckedUpdateManyInput>
    /**
     * Filter which todos to update
     */
    where?: todosWhereInput
    /**
     * Limit how many todos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: todosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * todos upsert
   */
  export type todosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todos
     */
    select?: todosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the todos
     */
    omit?: todosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: todosInclude<ExtArgs> | null
    /**
     * The filter to search for the todos to update in case it exists.
     */
    where: todosWhereUniqueInput
    /**
     * In case the todos found by the `where` argument doesn't exist, create a new todos with this data.
     */
    create: XOR<todosCreateInput, todosUncheckedCreateInput>
    /**
     * In case the todos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<todosUpdateInput, todosUncheckedUpdateInput>
  }

  /**
   * todos delete
   */
  export type todosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todos
     */
    select?: todosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the todos
     */
    omit?: todosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: todosInclude<ExtArgs> | null
    /**
     * Filter which todos to delete.
     */
    where: todosWhereUniqueInput
  }

  /**
   * todos deleteMany
   */
  export type todosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which todos to delete
     */
    where?: todosWhereInput
    /**
     * Limit how many todos to delete.
     */
    limit?: number
  }

  /**
   * todos without action
   */
  export type todosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todos
     */
    select?: todosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the todos
     */
    omit?: todosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: todosInclude<ExtArgs> | null
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
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
    firstName: string | null
    lastName: string | null
    company: string | null
    phone: string | null
    country: string | null
    source: string | null
    service: string | null
    subscribe: boolean | null
    terms: boolean | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
    firstName: string | null
    lastName: string | null
    company: string | null
    phone: string | null
    country: string | null
    source: string | null
    service: string | null
    subscribe: boolean | null
    terms: boolean | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    created_at: number
    updated_at: number
    firstName: number
    lastName: number
    company: number
    phone: number
    country: number
    source: number
    service: number
    subscribe: number
    terms: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
    firstName?: true
    lastName?: true
    company?: true
    phone?: true
    country?: true
    source?: true
    service?: true
    subscribe?: true
    terms?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
    firstName?: true
    lastName?: true
    company?: true
    phone?: true
    country?: true
    source?: true
    service?: true
    subscribe?: true
    terms?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
    firstName?: true
    lastName?: true
    company?: true
    phone?: true
    country?: true
    source?: true
    service?: true
    subscribe?: true
    terms?: true
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
    id: number
    name: string
    email: string
    password: string
    created_at: Date | null
    updated_at: Date | null
    firstName: string | null
    lastName: string | null
    company: string | null
    phone: string | null
    country: string | null
    source: string | null
    service: string | null
    subscribe: boolean
    terms: boolean
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
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
    firstName?: boolean
    lastName?: boolean
    company?: boolean
    phone?: boolean
    country?: boolean
    source?: boolean
    service?: boolean
    subscribe?: boolean
    terms?: boolean
    todos?: boolean | users$todosArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
    firstName?: boolean
    lastName?: boolean
    company?: boolean
    phone?: boolean
    country?: boolean
    source?: boolean
    service?: boolean
    subscribe?: boolean
    terms?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
    firstName?: boolean
    lastName?: boolean
    company?: boolean
    phone?: boolean
    country?: boolean
    source?: boolean
    service?: boolean
    subscribe?: boolean
    terms?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
    firstName?: boolean
    lastName?: boolean
    company?: boolean
    phone?: boolean
    country?: boolean
    source?: boolean
    service?: boolean
    subscribe?: boolean
    terms?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "created_at" | "updated_at" | "firstName" | "lastName" | "company" | "phone" | "country" | "source" | "service" | "subscribe" | "terms", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    todos?: boolean | users$todosArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      todos: Prisma.$todosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      created_at: Date | null
      updated_at: Date | null
      firstName: string | null
      lastName: string | null
      company: string | null
      phone: string | null
      country: string | null
      source: string | null
      service: string | null
      subscribe: boolean
      terms: boolean
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
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
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
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
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
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
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
    todos<T extends users$todosArgs<ExtArgs> = {}>(args?: Subset<T, users$todosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$todosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
    readonly firstName: FieldRef<"users", 'String'>
    readonly lastName: FieldRef<"users", 'String'>
    readonly company: FieldRef<"users", 'String'>
    readonly phone: FieldRef<"users", 'String'>
    readonly country: FieldRef<"users", 'String'>
    readonly source: FieldRef<"users", 'String'>
    readonly service: FieldRef<"users", 'String'>
    readonly subscribe: FieldRef<"users", 'Boolean'>
    readonly terms: FieldRef<"users", 'Boolean'>
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
   * users.todos
   */
  export type users$todosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the todos
     */
    select?: todosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the todos
     */
    omit?: todosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: todosInclude<ExtArgs> | null
    where?: todosWhereInput
    orderBy?: todosOrderByWithRelationInput | todosOrderByWithRelationInput[]
    cursor?: todosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TodosScalarFieldEnum | TodosScalarFieldEnum[]
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


  export const PgmigrationsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    run_on: 'run_on'
  };

  export type PgmigrationsScalarFieldEnum = (typeof PgmigrationsScalarFieldEnum)[keyof typeof PgmigrationsScalarFieldEnum]


  export const TodosScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    completed: 'completed',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id'
  };

  export type TodosScalarFieldEnum = (typeof TodosScalarFieldEnum)[keyof typeof TodosScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    created_at: 'created_at',
    updated_at: 'updated_at',
    firstName: 'firstName',
    lastName: 'lastName',
    company: 'company',
    phone: 'phone',
    country: 'country',
    source: 'source',
    service: 'service',
    subscribe: 'subscribe',
    terms: 'terms'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type pgmigrationsWhereInput = {
    AND?: pgmigrationsWhereInput | pgmigrationsWhereInput[]
    OR?: pgmigrationsWhereInput[]
    NOT?: pgmigrationsWhereInput | pgmigrationsWhereInput[]
    id?: IntFilter<"pgmigrations"> | number
    name?: StringFilter<"pgmigrations"> | string
    run_on?: DateTimeFilter<"pgmigrations"> | Date | string
  }

  export type pgmigrationsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    run_on?: SortOrder
  }

  export type pgmigrationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: pgmigrationsWhereInput | pgmigrationsWhereInput[]
    OR?: pgmigrationsWhereInput[]
    NOT?: pgmigrationsWhereInput | pgmigrationsWhereInput[]
    name?: StringFilter<"pgmigrations"> | string
    run_on?: DateTimeFilter<"pgmigrations"> | Date | string
  }, "id">

  export type pgmigrationsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    run_on?: SortOrder
    _count?: pgmigrationsCountOrderByAggregateInput
    _avg?: pgmigrationsAvgOrderByAggregateInput
    _max?: pgmigrationsMaxOrderByAggregateInput
    _min?: pgmigrationsMinOrderByAggregateInput
    _sum?: pgmigrationsSumOrderByAggregateInput
  }

  export type pgmigrationsScalarWhereWithAggregatesInput = {
    AND?: pgmigrationsScalarWhereWithAggregatesInput | pgmigrationsScalarWhereWithAggregatesInput[]
    OR?: pgmigrationsScalarWhereWithAggregatesInput[]
    NOT?: pgmigrationsScalarWhereWithAggregatesInput | pgmigrationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pgmigrations"> | number
    name?: StringWithAggregatesFilter<"pgmigrations"> | string
    run_on?: DateTimeWithAggregatesFilter<"pgmigrations"> | Date | string
  }

  export type todosWhereInput = {
    AND?: todosWhereInput | todosWhereInput[]
    OR?: todosWhereInput[]
    NOT?: todosWhereInput | todosWhereInput[]
    id?: IntFilter<"todos"> | number
    title?: StringFilter<"todos"> | string
    description?: StringFilter<"todos"> | string
    completed?: BoolFilter<"todos"> | boolean
    created_at?: DateTimeNullableFilter<"todos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"todos"> | Date | string | null
    user_id?: IntFilter<"todos"> | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type todosOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    completed?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    user_id?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type todosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: todosWhereInput | todosWhereInput[]
    OR?: todosWhereInput[]
    NOT?: todosWhereInput | todosWhereInput[]
    title?: StringFilter<"todos"> | string
    description?: StringFilter<"todos"> | string
    completed?: BoolFilter<"todos"> | boolean
    created_at?: DateTimeNullableFilter<"todos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"todos"> | Date | string | null
    user_id?: IntFilter<"todos"> | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type todosOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    completed?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    user_id?: SortOrder
    _count?: todosCountOrderByAggregateInput
    _avg?: todosAvgOrderByAggregateInput
    _max?: todosMaxOrderByAggregateInput
    _min?: todosMinOrderByAggregateInput
    _sum?: todosSumOrderByAggregateInput
  }

  export type todosScalarWhereWithAggregatesInput = {
    AND?: todosScalarWhereWithAggregatesInput | todosScalarWhereWithAggregatesInput[]
    OR?: todosScalarWhereWithAggregatesInput[]
    NOT?: todosScalarWhereWithAggregatesInput | todosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"todos"> | number
    title?: StringWithAggregatesFilter<"todos"> | string
    description?: StringWithAggregatesFilter<"todos"> | string
    completed?: BoolWithAggregatesFilter<"todos"> | boolean
    created_at?: DateTimeNullableWithAggregatesFilter<"todos"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"todos"> | Date | string | null
    user_id?: IntWithAggregatesFilter<"todos"> | number
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    firstName?: StringNullableFilter<"users"> | string | null
    lastName?: StringNullableFilter<"users"> | string | null
    company?: StringNullableFilter<"users"> | string | null
    phone?: StringNullableFilter<"users"> | string | null
    country?: StringNullableFilter<"users"> | string | null
    source?: StringNullableFilter<"users"> | string | null
    service?: StringNullableFilter<"users"> | string | null
    subscribe?: BoolFilter<"users"> | boolean
    terms?: BoolFilter<"users"> | boolean
    todos?: TodosListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    service?: SortOrderInput | SortOrder
    subscribe?: SortOrder
    terms?: SortOrder
    todos?: todosOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    firstName?: StringNullableFilter<"users"> | string | null
    lastName?: StringNullableFilter<"users"> | string | null
    company?: StringNullableFilter<"users"> | string | null
    phone?: StringNullableFilter<"users"> | string | null
    country?: StringNullableFilter<"users"> | string | null
    source?: StringNullableFilter<"users"> | string | null
    service?: StringNullableFilter<"users"> | string | null
    subscribe?: BoolFilter<"users"> | boolean
    terms?: BoolFilter<"users"> | boolean
    todos?: TodosListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    service?: SortOrderInput | SortOrder
    subscribe?: SortOrder
    terms?: SortOrder
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
    id?: IntWithAggregatesFilter<"users"> | number
    name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    firstName?: StringNullableWithAggregatesFilter<"users"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"users"> | string | null
    company?: StringNullableWithAggregatesFilter<"users"> | string | null
    phone?: StringNullableWithAggregatesFilter<"users"> | string | null
    country?: StringNullableWithAggregatesFilter<"users"> | string | null
    source?: StringNullableWithAggregatesFilter<"users"> | string | null
    service?: StringNullableWithAggregatesFilter<"users"> | string | null
    subscribe?: BoolWithAggregatesFilter<"users"> | boolean
    terms?: BoolWithAggregatesFilter<"users"> | boolean
  }

  export type pgmigrationsCreateInput = {
    name: string
    run_on: Date | string
  }

  export type pgmigrationsUncheckedCreateInput = {
    id?: number
    name: string
    run_on: Date | string
  }

  export type pgmigrationsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    run_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pgmigrationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    run_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pgmigrationsCreateManyInput = {
    id?: number
    name: string
    run_on: Date | string
  }

  export type pgmigrationsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    run_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pgmigrationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    run_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type todosCreateInput = {
    title: string
    description: string
    completed?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutTodosInput
  }

  export type todosUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    completed?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_id: number
  }

  export type todosUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutTodosNestedInput
  }

  export type todosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type todosCreateManyInput = {
    id?: number
    title: string
    description: string
    completed?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_id: number
  }

  export type todosUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type todosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateInput = {
    name: string
    email: string
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    company?: string | null
    phone?: string | null
    country?: string | null
    source?: string | null
    service?: string | null
    subscribe?: boolean
    terms?: boolean
    todos?: todosCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    company?: string | null
    phone?: string | null
    country?: string | null
    source?: string | null
    service?: string | null
    subscribe?: boolean
    terms?: boolean
    todos?: todosUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    subscribe?: BoolFieldUpdateOperationsInput | boolean
    terms?: BoolFieldUpdateOperationsInput | boolean
    todos?: todosUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    subscribe?: BoolFieldUpdateOperationsInput | boolean
    terms?: BoolFieldUpdateOperationsInput | boolean
    todos?: todosUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    company?: string | null
    phone?: string | null
    country?: string | null
    source?: string | null
    service?: string | null
    subscribe?: boolean
    terms?: boolean
  }

  export type usersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    subscribe?: BoolFieldUpdateOperationsInput | boolean
    terms?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    subscribe?: BoolFieldUpdateOperationsInput | boolean
    terms?: BoolFieldUpdateOperationsInput | boolean
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

  export type pgmigrationsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    run_on?: SortOrder
  }

  export type pgmigrationsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type pgmigrationsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    run_on?: SortOrder
  }

  export type pgmigrationsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    run_on?: SortOrder
  }

  export type pgmigrationsSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type todosCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    completed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type todosAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type todosMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    completed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type todosMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    completed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type todosSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type TodosListRelationFilter = {
    every?: todosWhereInput
    some?: todosWhereInput
    none?: todosWhereInput
  }

  export type todosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    company?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    source?: SortOrder
    service?: SortOrder
    subscribe?: SortOrder
    terms?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    company?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    source?: SortOrder
    service?: SortOrder
    subscribe?: SortOrder
    terms?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    company?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    source?: SortOrder
    service?: SortOrder
    subscribe?: SortOrder
    terms?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersCreateNestedOneWithoutTodosInput = {
    create?: XOR<usersCreateWithoutTodosInput, usersUncheckedCreateWithoutTodosInput>
    connectOrCreate?: usersCreateOrConnectWithoutTodosInput
    connect?: usersWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneRequiredWithoutTodosNestedInput = {
    create?: XOR<usersCreateWithoutTodosInput, usersUncheckedCreateWithoutTodosInput>
    connectOrCreate?: usersCreateOrConnectWithoutTodosInput
    upsert?: usersUpsertWithoutTodosInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTodosInput, usersUpdateWithoutTodosInput>, usersUncheckedUpdateWithoutTodosInput>
  }

  export type todosCreateNestedManyWithoutUsersInput = {
    create?: XOR<todosCreateWithoutUsersInput, todosUncheckedCreateWithoutUsersInput> | todosCreateWithoutUsersInput[] | todosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: todosCreateOrConnectWithoutUsersInput | todosCreateOrConnectWithoutUsersInput[]
    createMany?: todosCreateManyUsersInputEnvelope
    connect?: todosWhereUniqueInput | todosWhereUniqueInput[]
  }

  export type todosUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<todosCreateWithoutUsersInput, todosUncheckedCreateWithoutUsersInput> | todosCreateWithoutUsersInput[] | todosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: todosCreateOrConnectWithoutUsersInput | todosCreateOrConnectWithoutUsersInput[]
    createMany?: todosCreateManyUsersInputEnvelope
    connect?: todosWhereUniqueInput | todosWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type todosUpdateManyWithoutUsersNestedInput = {
    create?: XOR<todosCreateWithoutUsersInput, todosUncheckedCreateWithoutUsersInput> | todosCreateWithoutUsersInput[] | todosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: todosCreateOrConnectWithoutUsersInput | todosCreateOrConnectWithoutUsersInput[]
    upsert?: todosUpsertWithWhereUniqueWithoutUsersInput | todosUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: todosCreateManyUsersInputEnvelope
    set?: todosWhereUniqueInput | todosWhereUniqueInput[]
    disconnect?: todosWhereUniqueInput | todosWhereUniqueInput[]
    delete?: todosWhereUniqueInput | todosWhereUniqueInput[]
    connect?: todosWhereUniqueInput | todosWhereUniqueInput[]
    update?: todosUpdateWithWhereUniqueWithoutUsersInput | todosUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: todosUpdateManyWithWhereWithoutUsersInput | todosUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: todosScalarWhereInput | todosScalarWhereInput[]
  }

  export type todosUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<todosCreateWithoutUsersInput, todosUncheckedCreateWithoutUsersInput> | todosCreateWithoutUsersInput[] | todosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: todosCreateOrConnectWithoutUsersInput | todosCreateOrConnectWithoutUsersInput[]
    upsert?: todosUpsertWithWhereUniqueWithoutUsersInput | todosUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: todosCreateManyUsersInputEnvelope
    set?: todosWhereUniqueInput | todosWhereUniqueInput[]
    disconnect?: todosWhereUniqueInput | todosWhereUniqueInput[]
    delete?: todosWhereUniqueInput | todosWhereUniqueInput[]
    connect?: todosWhereUniqueInput | todosWhereUniqueInput[]
    update?: todosUpdateWithWhereUniqueWithoutUsersInput | todosUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: todosUpdateManyWithWhereWithoutUsersInput | todosUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: todosScalarWhereInput | todosScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type usersCreateWithoutTodosInput = {
    name: string
    email: string
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    company?: string | null
    phone?: string | null
    country?: string | null
    source?: string | null
    service?: string | null
    subscribe?: boolean
    terms?: boolean
  }

  export type usersUncheckedCreateWithoutTodosInput = {
    id?: number
    name: string
    email: string
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    company?: string | null
    phone?: string | null
    country?: string | null
    source?: string | null
    service?: string | null
    subscribe?: boolean
    terms?: boolean
  }

  export type usersCreateOrConnectWithoutTodosInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTodosInput, usersUncheckedCreateWithoutTodosInput>
  }

  export type usersUpsertWithoutTodosInput = {
    update: XOR<usersUpdateWithoutTodosInput, usersUncheckedUpdateWithoutTodosInput>
    create: XOR<usersCreateWithoutTodosInput, usersUncheckedCreateWithoutTodosInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTodosInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTodosInput, usersUncheckedUpdateWithoutTodosInput>
  }

  export type usersUpdateWithoutTodosInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    subscribe?: BoolFieldUpdateOperationsInput | boolean
    terms?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usersUncheckedUpdateWithoutTodosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    subscribe?: BoolFieldUpdateOperationsInput | boolean
    terms?: BoolFieldUpdateOperationsInput | boolean
  }

  export type todosCreateWithoutUsersInput = {
    title: string
    description: string
    completed?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type todosUncheckedCreateWithoutUsersInput = {
    id?: number
    title: string
    description: string
    completed?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type todosCreateOrConnectWithoutUsersInput = {
    where: todosWhereUniqueInput
    create: XOR<todosCreateWithoutUsersInput, todosUncheckedCreateWithoutUsersInput>
  }

  export type todosCreateManyUsersInputEnvelope = {
    data: todosCreateManyUsersInput | todosCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type todosUpsertWithWhereUniqueWithoutUsersInput = {
    where: todosWhereUniqueInput
    update: XOR<todosUpdateWithoutUsersInput, todosUncheckedUpdateWithoutUsersInput>
    create: XOR<todosCreateWithoutUsersInput, todosUncheckedCreateWithoutUsersInput>
  }

  export type todosUpdateWithWhereUniqueWithoutUsersInput = {
    where: todosWhereUniqueInput
    data: XOR<todosUpdateWithoutUsersInput, todosUncheckedUpdateWithoutUsersInput>
  }

  export type todosUpdateManyWithWhereWithoutUsersInput = {
    where: todosScalarWhereInput
    data: XOR<todosUpdateManyMutationInput, todosUncheckedUpdateManyWithoutUsersInput>
  }

  export type todosScalarWhereInput = {
    AND?: todosScalarWhereInput | todosScalarWhereInput[]
    OR?: todosScalarWhereInput[]
    NOT?: todosScalarWhereInput | todosScalarWhereInput[]
    id?: IntFilter<"todos"> | number
    title?: StringFilter<"todos"> | string
    description?: StringFilter<"todos"> | string
    completed?: BoolFilter<"todos"> | boolean
    created_at?: DateTimeNullableFilter<"todos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"todos"> | Date | string | null
    user_id?: IntFilter<"todos"> | number
  }

  export type todosCreateManyUsersInput = {
    id?: number
    title: string
    description: string
    completed?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type todosUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type todosUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type todosUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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