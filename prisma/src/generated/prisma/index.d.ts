
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
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>
/**
 * Model ActivityAttendance
 * 
 */
export type ActivityAttendance = $Result.DefaultSelection<Prisma.$ActivityAttendancePayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AttendanceType: {
  ONE_TIME: 'ONE_TIME',
  TIME_IN_OUT: 'TIME_IN_OUT'
};

export type AttendanceType = (typeof AttendanceType)[keyof typeof AttendanceType]


export const AdminRole: {
  SUPERADMIN: 'SUPERADMIN',
  ADMIN: 'ADMIN'
};

export type AdminRole = (typeof AdminRole)[keyof typeof AdminRole]

}

export type AttendanceType = $Enums.AttendanceType

export const AttendanceType: typeof $Enums.AttendanceType

export type AdminRole = $Enums.AdminRole

export const AdminRole: typeof $Enums.AdminRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Activities
 * const activities = await prisma.activity.findMany()
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
   * // Fetch zero or more Activities
   * const activities = await prisma.activity.findMany()
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

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityAttendance`: Exposes CRUD operations for the **ActivityAttendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityAttendances
    * const activityAttendances = await prisma.activityAttendance.findMany()
    * ```
    */
  get activityAttendance(): Prisma.ActivityAttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;
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
    Activity: 'Activity',
    ActivityAttendance: 'ActivityAttendance',
    Admin: 'Admin',
    Student: 'Student'
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
      modelProps: "activity" | "activityAttendance" | "admin" | "student"
      txIsolationLevel: never
    }
    model: {
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ActivityFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ActivityAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      ActivityAttendance: {
        payload: Prisma.$ActivityAttendancePayload<ExtArgs>
        fields: Prisma.ActivityAttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityAttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityAttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityAttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityAttendancePayload>
          }
          findFirst: {
            args: Prisma.ActivityAttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityAttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityAttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityAttendancePayload>
          }
          findMany: {
            args: Prisma.ActivityAttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityAttendancePayload>[]
          }
          create: {
            args: Prisma.ActivityAttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityAttendancePayload>
          }
          createMany: {
            args: Prisma.ActivityAttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ActivityAttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityAttendancePayload>
          }
          update: {
            args: Prisma.ActivityAttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityAttendancePayload>
          }
          deleteMany: {
            args: Prisma.ActivityAttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityAttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActivityAttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityAttendancePayload>
          }
          aggregate: {
            args: Prisma.ActivityAttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityAttendance>
          }
          groupBy: {
            args: Prisma.ActivityAttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityAttendanceGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ActivityAttendanceFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ActivityAttendanceAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ActivityAttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityAttendanceCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AdminFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AdminAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.StudentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.StudentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
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
    activity?: ActivityOmit
    activityAttendance?: ActivityAttendanceOmit
    admin?: AdminOmit
    student?: StudentOmit
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
   * Count Type ActivityCountOutputType
   */

  export type ActivityCountOutputType = {
    activityAttendances: number
  }

  export type ActivityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activityAttendances?: boolean | ActivityCountOutputTypeCountActivityAttendancesArgs
  }

  // Custom InputTypes
  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityCountOutputType
     */
    select?: ActivityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeCountActivityAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityAttendanceWhereInput
  }


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    activities: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | AdminCountOutputTypeCountActivitiesArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    activityAttendances: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activityAttendances?: boolean | StudentCountOutputTypeCountActivityAttendancesArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountActivityAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityAttendanceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityAvgAggregateOutputType = {
    hours: number | null
  }

  export type ActivitySumAggregateOutputType = {
    hours: number | null
  }

  export type ActivityMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    date: Date | null
    hours: number | null
    createdAt: Date | null
    updatedAt: Date | null
    attendanceType: $Enums.AttendanceType | null
    adminId: string | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    date: Date | null
    hours: number | null
    createdAt: Date | null
    updatedAt: Date | null
    attendanceType: $Enums.AttendanceType | null
    adminId: string | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    title: number
    description: number
    date: number
    hours: number
    createdAt: number
    updatedAt: number
    attendanceType: number
    adminId: number
    _all: number
  }


  export type ActivityAvgAggregateInputType = {
    hours?: true
  }

  export type ActivitySumAggregateInputType = {
    hours?: true
  }

  export type ActivityMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    hours?: true
    createdAt?: true
    updatedAt?: true
    attendanceType?: true
    adminId?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    hours?: true
    createdAt?: true
    updatedAt?: true
    attendanceType?: true
    adminId?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    hours?: true
    createdAt?: true
    updatedAt?: true
    attendanceType?: true
    adminId?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _avg?: ActivityAvgAggregateInputType
    _sum?: ActivitySumAggregateInputType
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: string
    title: string
    description: string | null
    date: Date
    hours: number
    createdAt: Date
    updatedAt: Date
    attendanceType: $Enums.AttendanceType
    adminId: string
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    hours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attendanceType?: boolean
    adminId?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    activityAttendances?: boolean | Activity$activityAttendancesArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>



  export type ActivitySelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    hours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attendanceType?: boolean
    adminId?: boolean
  }

  export type ActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "date" | "hours" | "createdAt" | "updatedAt" | "attendanceType" | "adminId", ExtArgs["result"]["activity"]>
  export type ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    activityAttendances?: boolean | Activity$activityAttendancesArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs>
      activityAttendances: Prisma.$ActivityAttendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      date: Date
      hours: number
      createdAt: Date
      updatedAt: Date
      attendanceType: $Enums.AttendanceType
      adminId: string
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityFindManyArgs>(args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends ActivityCreateArgs>(args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityCreateManyArgs>(args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends ActivityDeleteArgs>(args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityUpdateArgs>(args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDeleteManyArgs>(args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityUpdateManyArgs>(args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * @param {ActivityFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const activity = await prisma.activity.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ActivityFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Activity.
     * @param {ActivityAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const activity = await prisma.activity.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ActivityAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
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
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    activityAttendances<T extends Activity$activityAttendancesArgs<ExtArgs> = {}>(args?: Subset<T, Activity$activityAttendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityAttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Activity model
   */
  interface ActivityFieldRefs {
    readonly id: FieldRef<"Activity", 'String'>
    readonly title: FieldRef<"Activity", 'String'>
    readonly description: FieldRef<"Activity", 'String'>
    readonly date: FieldRef<"Activity", 'DateTime'>
    readonly hours: FieldRef<"Activity", 'Int'>
    readonly createdAt: FieldRef<"Activity", 'DateTime'>
    readonly updatedAt: FieldRef<"Activity", 'DateTime'>
    readonly attendanceType: FieldRef<"Activity", 'AttendanceType'>
    readonly adminId: FieldRef<"Activity", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to delete.
     */
    limit?: number
  }

  /**
   * Activity findRaw
   */
  export type ActivityFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Activity aggregateRaw
   */
  export type ActivityAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Activity.activityAttendances
   */
  export type Activity$activityAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityAttendance
     */
    select?: ActivityAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityAttendance
     */
    omit?: ActivityAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityAttendanceInclude<ExtArgs> | null
    where?: ActivityAttendanceWhereInput
    orderBy?: ActivityAttendanceOrderByWithRelationInput | ActivityAttendanceOrderByWithRelationInput[]
    cursor?: ActivityAttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityAttendanceScalarFieldEnum | ActivityAttendanceScalarFieldEnum[]
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
  }


  /**
   * Model ActivityAttendance
   */

  export type AggregateActivityAttendance = {
    _count: ActivityAttendanceCountAggregateOutputType | null
    _min: ActivityAttendanceMinAggregateOutputType | null
    _max: ActivityAttendanceMaxAggregateOutputType | null
  }

  export type ActivityAttendanceMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    activityId: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActivityAttendanceMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    activityId: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActivityAttendanceCountAggregateOutputType = {
    id: number
    studentId: number
    activityId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ActivityAttendanceMinAggregateInputType = {
    id?: true
    studentId?: true
    activityId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActivityAttendanceMaxAggregateInputType = {
    id?: true
    studentId?: true
    activityId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActivityAttendanceCountAggregateInputType = {
    id?: true
    studentId?: true
    activityId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ActivityAttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityAttendance to aggregate.
     */
    where?: ActivityAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityAttendances to fetch.
     */
    orderBy?: ActivityAttendanceOrderByWithRelationInput | ActivityAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityAttendances
    **/
    _count?: true | ActivityAttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityAttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityAttendanceMaxAggregateInputType
  }

  export type GetActivityAttendanceAggregateType<T extends ActivityAttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityAttendance[P]>
      : GetScalarType<T[P], AggregateActivityAttendance[P]>
  }




  export type ActivityAttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityAttendanceWhereInput
    orderBy?: ActivityAttendanceOrderByWithAggregationInput | ActivityAttendanceOrderByWithAggregationInput[]
    by: ActivityAttendanceScalarFieldEnum[] | ActivityAttendanceScalarFieldEnum
    having?: ActivityAttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityAttendanceCountAggregateInputType | true
    _min?: ActivityAttendanceMinAggregateInputType
    _max?: ActivityAttendanceMaxAggregateInputType
  }

  export type ActivityAttendanceGroupByOutputType = {
    id: string
    studentId: string
    activityId: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: ActivityAttendanceCountAggregateOutputType | null
    _min: ActivityAttendanceMinAggregateOutputType | null
    _max: ActivityAttendanceMaxAggregateOutputType | null
  }

  type GetActivityAttendanceGroupByPayload<T extends ActivityAttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityAttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityAttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityAttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityAttendanceGroupByOutputType[P]>
        }
      >
    >


  export type ActivityAttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    activityId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityAttendance"]>



  export type ActivityAttendanceSelectScalar = {
    id?: boolean
    studentId?: boolean
    activityId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ActivityAttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "activityId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["activityAttendance"]>
  export type ActivityAttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }

  export type $ActivityAttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityAttendance"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      activity: Prisma.$ActivityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      activityId: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["activityAttendance"]>
    composites: {}
  }

  type ActivityAttendanceGetPayload<S extends boolean | null | undefined | ActivityAttendanceDefaultArgs> = $Result.GetResult<Prisma.$ActivityAttendancePayload, S>

  type ActivityAttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityAttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityAttendanceCountAggregateInputType | true
    }

  export interface ActivityAttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityAttendance'], meta: { name: 'ActivityAttendance' } }
    /**
     * Find zero or one ActivityAttendance that matches the filter.
     * @param {ActivityAttendanceFindUniqueArgs} args - Arguments to find a ActivityAttendance
     * @example
     * // Get one ActivityAttendance
     * const activityAttendance = await prisma.activityAttendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityAttendanceFindUniqueArgs>(args: SelectSubset<T, ActivityAttendanceFindUniqueArgs<ExtArgs>>): Prisma__ActivityAttendanceClient<$Result.GetResult<Prisma.$ActivityAttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityAttendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityAttendanceFindUniqueOrThrowArgs} args - Arguments to find a ActivityAttendance
     * @example
     * // Get one ActivityAttendance
     * const activityAttendance = await prisma.activityAttendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityAttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityAttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityAttendanceClient<$Result.GetResult<Prisma.$ActivityAttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityAttendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAttendanceFindFirstArgs} args - Arguments to find a ActivityAttendance
     * @example
     * // Get one ActivityAttendance
     * const activityAttendance = await prisma.activityAttendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityAttendanceFindFirstArgs>(args?: SelectSubset<T, ActivityAttendanceFindFirstArgs<ExtArgs>>): Prisma__ActivityAttendanceClient<$Result.GetResult<Prisma.$ActivityAttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityAttendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAttendanceFindFirstOrThrowArgs} args - Arguments to find a ActivityAttendance
     * @example
     * // Get one ActivityAttendance
     * const activityAttendance = await prisma.activityAttendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityAttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityAttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityAttendanceClient<$Result.GetResult<Prisma.$ActivityAttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityAttendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityAttendances
     * const activityAttendances = await prisma.activityAttendance.findMany()
     * 
     * // Get first 10 ActivityAttendances
     * const activityAttendances = await prisma.activityAttendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityAttendanceWithIdOnly = await prisma.activityAttendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityAttendanceFindManyArgs>(args?: SelectSubset<T, ActivityAttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityAttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityAttendance.
     * @param {ActivityAttendanceCreateArgs} args - Arguments to create a ActivityAttendance.
     * @example
     * // Create one ActivityAttendance
     * const ActivityAttendance = await prisma.activityAttendance.create({
     *   data: {
     *     // ... data to create a ActivityAttendance
     *   }
     * })
     * 
     */
    create<T extends ActivityAttendanceCreateArgs>(args: SelectSubset<T, ActivityAttendanceCreateArgs<ExtArgs>>): Prisma__ActivityAttendanceClient<$Result.GetResult<Prisma.$ActivityAttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityAttendances.
     * @param {ActivityAttendanceCreateManyArgs} args - Arguments to create many ActivityAttendances.
     * @example
     * // Create many ActivityAttendances
     * const activityAttendance = await prisma.activityAttendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityAttendanceCreateManyArgs>(args?: SelectSubset<T, ActivityAttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ActivityAttendance.
     * @param {ActivityAttendanceDeleteArgs} args - Arguments to delete one ActivityAttendance.
     * @example
     * // Delete one ActivityAttendance
     * const ActivityAttendance = await prisma.activityAttendance.delete({
     *   where: {
     *     // ... filter to delete one ActivityAttendance
     *   }
     * })
     * 
     */
    delete<T extends ActivityAttendanceDeleteArgs>(args: SelectSubset<T, ActivityAttendanceDeleteArgs<ExtArgs>>): Prisma__ActivityAttendanceClient<$Result.GetResult<Prisma.$ActivityAttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityAttendance.
     * @param {ActivityAttendanceUpdateArgs} args - Arguments to update one ActivityAttendance.
     * @example
     * // Update one ActivityAttendance
     * const activityAttendance = await prisma.activityAttendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityAttendanceUpdateArgs>(args: SelectSubset<T, ActivityAttendanceUpdateArgs<ExtArgs>>): Prisma__ActivityAttendanceClient<$Result.GetResult<Prisma.$ActivityAttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityAttendances.
     * @param {ActivityAttendanceDeleteManyArgs} args - Arguments to filter ActivityAttendances to delete.
     * @example
     * // Delete a few ActivityAttendances
     * const { count } = await prisma.activityAttendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityAttendanceDeleteManyArgs>(args?: SelectSubset<T, ActivityAttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityAttendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityAttendances
     * const activityAttendance = await prisma.activityAttendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityAttendanceUpdateManyArgs>(args: SelectSubset<T, ActivityAttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ActivityAttendance.
     * @param {ActivityAttendanceUpsertArgs} args - Arguments to update or create a ActivityAttendance.
     * @example
     * // Update or create a ActivityAttendance
     * const activityAttendance = await prisma.activityAttendance.upsert({
     *   create: {
     *     // ... data to create a ActivityAttendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityAttendance we want to update
     *   }
     * })
     */
    upsert<T extends ActivityAttendanceUpsertArgs>(args: SelectSubset<T, ActivityAttendanceUpsertArgs<ExtArgs>>): Prisma__ActivityAttendanceClient<$Result.GetResult<Prisma.$ActivityAttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityAttendances that matches the filter.
     * @param {ActivityAttendanceFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const activityAttendance = await prisma.activityAttendance.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ActivityAttendanceFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ActivityAttendance.
     * @param {ActivityAttendanceAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const activityAttendance = await prisma.activityAttendance.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ActivityAttendanceAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ActivityAttendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAttendanceCountArgs} args - Arguments to filter ActivityAttendances to count.
     * @example
     * // Count the number of ActivityAttendances
     * const count = await prisma.activityAttendance.count({
     *   where: {
     *     // ... the filter for the ActivityAttendances we want to count
     *   }
     * })
    **/
    count<T extends ActivityAttendanceCountArgs>(
      args?: Subset<T, ActivityAttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityAttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityAttendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityAttendanceAggregateArgs>(args: Subset<T, ActivityAttendanceAggregateArgs>): Prisma.PrismaPromise<GetActivityAttendanceAggregateType<T>>

    /**
     * Group by ActivityAttendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAttendanceGroupByArgs} args - Group by arguments.
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
      T extends ActivityAttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityAttendanceGroupByArgs['orderBy'] }
        : { orderBy?: ActivityAttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityAttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityAttendance model
   */
  readonly fields: ActivityAttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityAttendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityAttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    activity<T extends ActivityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActivityDefaultArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ActivityAttendance model
   */
  interface ActivityAttendanceFieldRefs {
    readonly id: FieldRef<"ActivityAttendance", 'String'>
    readonly studentId: FieldRef<"ActivityAttendance", 'String'>
    readonly activityId: FieldRef<"ActivityAttendance", 'String'>
    readonly status: FieldRef<"ActivityAttendance", 'String'>
    readonly createdAt: FieldRef<"ActivityAttendance", 'DateTime'>
    readonly updatedAt: FieldRef<"ActivityAttendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityAttendance findUnique
   */
  export type ActivityAttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityAttendance
     */
    select?: ActivityAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityAttendance
     */
    omit?: ActivityAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which ActivityAttendance to fetch.
     */
    where: ActivityAttendanceWhereUniqueInput
  }

  /**
   * ActivityAttendance findUniqueOrThrow
   */
  export type ActivityAttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityAttendance
     */
    select?: ActivityAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityAttendance
     */
    omit?: ActivityAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which ActivityAttendance to fetch.
     */
    where: ActivityAttendanceWhereUniqueInput
  }

  /**
   * ActivityAttendance findFirst
   */
  export type ActivityAttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityAttendance
     */
    select?: ActivityAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityAttendance
     */
    omit?: ActivityAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which ActivityAttendance to fetch.
     */
    where?: ActivityAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityAttendances to fetch.
     */
    orderBy?: ActivityAttendanceOrderByWithRelationInput | ActivityAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityAttendances.
     */
    cursor?: ActivityAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityAttendances.
     */
    distinct?: ActivityAttendanceScalarFieldEnum | ActivityAttendanceScalarFieldEnum[]
  }

  /**
   * ActivityAttendance findFirstOrThrow
   */
  export type ActivityAttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityAttendance
     */
    select?: ActivityAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityAttendance
     */
    omit?: ActivityAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which ActivityAttendance to fetch.
     */
    where?: ActivityAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityAttendances to fetch.
     */
    orderBy?: ActivityAttendanceOrderByWithRelationInput | ActivityAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityAttendances.
     */
    cursor?: ActivityAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityAttendances.
     */
    distinct?: ActivityAttendanceScalarFieldEnum | ActivityAttendanceScalarFieldEnum[]
  }

  /**
   * ActivityAttendance findMany
   */
  export type ActivityAttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityAttendance
     */
    select?: ActivityAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityAttendance
     */
    omit?: ActivityAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which ActivityAttendances to fetch.
     */
    where?: ActivityAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityAttendances to fetch.
     */
    orderBy?: ActivityAttendanceOrderByWithRelationInput | ActivityAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityAttendances.
     */
    cursor?: ActivityAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityAttendances.
     */
    skip?: number
    distinct?: ActivityAttendanceScalarFieldEnum | ActivityAttendanceScalarFieldEnum[]
  }

  /**
   * ActivityAttendance create
   */
  export type ActivityAttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityAttendance
     */
    select?: ActivityAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityAttendance
     */
    omit?: ActivityAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityAttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityAttendance.
     */
    data: XOR<ActivityAttendanceCreateInput, ActivityAttendanceUncheckedCreateInput>
  }

  /**
   * ActivityAttendance createMany
   */
  export type ActivityAttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityAttendances.
     */
    data: ActivityAttendanceCreateManyInput | ActivityAttendanceCreateManyInput[]
  }

  /**
   * ActivityAttendance update
   */
  export type ActivityAttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityAttendance
     */
    select?: ActivityAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityAttendance
     */
    omit?: ActivityAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityAttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityAttendance.
     */
    data: XOR<ActivityAttendanceUpdateInput, ActivityAttendanceUncheckedUpdateInput>
    /**
     * Choose, which ActivityAttendance to update.
     */
    where: ActivityAttendanceWhereUniqueInput
  }

  /**
   * ActivityAttendance updateMany
   */
  export type ActivityAttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityAttendances.
     */
    data: XOR<ActivityAttendanceUpdateManyMutationInput, ActivityAttendanceUncheckedUpdateManyInput>
    /**
     * Filter which ActivityAttendances to update
     */
    where?: ActivityAttendanceWhereInput
    /**
     * Limit how many ActivityAttendances to update.
     */
    limit?: number
  }

  /**
   * ActivityAttendance upsert
   */
  export type ActivityAttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityAttendance
     */
    select?: ActivityAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityAttendance
     */
    omit?: ActivityAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityAttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityAttendance to update in case it exists.
     */
    where: ActivityAttendanceWhereUniqueInput
    /**
     * In case the ActivityAttendance found by the `where` argument doesn't exist, create a new ActivityAttendance with this data.
     */
    create: XOR<ActivityAttendanceCreateInput, ActivityAttendanceUncheckedCreateInput>
    /**
     * In case the ActivityAttendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityAttendanceUpdateInput, ActivityAttendanceUncheckedUpdateInput>
  }

  /**
   * ActivityAttendance delete
   */
  export type ActivityAttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityAttendance
     */
    select?: ActivityAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityAttendance
     */
    omit?: ActivityAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityAttendanceInclude<ExtArgs> | null
    /**
     * Filter which ActivityAttendance to delete.
     */
    where: ActivityAttendanceWhereUniqueInput
  }

  /**
   * ActivityAttendance deleteMany
   */
  export type ActivityAttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityAttendances to delete
     */
    where?: ActivityAttendanceWhereInput
    /**
     * Limit how many ActivityAttendances to delete.
     */
    limit?: number
  }

  /**
   * ActivityAttendance findRaw
   */
  export type ActivityAttendanceFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ActivityAttendance aggregateRaw
   */
  export type ActivityAttendanceAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ActivityAttendance without action
   */
  export type ActivityAttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityAttendance
     */
    select?: ActivityAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityAttendance
     */
    omit?: ActivityAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityAttendanceInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    username: string | null
    password: string | null
    role: $Enums.AdminRole | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    username: string | null
    password: string | null
    role: $Enums.AdminRole | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    username: number
    password: number
    role: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    username?: true
    password?: true
    role?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    username?: true
    password?: true
    role?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    username?: true
    password?: true
    role?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    username: string
    password: string
    role: $Enums.AdminRole
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    activities?: boolean | Admin$activitiesArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "username" | "password" | "role", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | Admin$activitiesArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      activities: Prisma.$ActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      username: string
      password: string
      role: $Enums.AdminRole
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * @param {AdminFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const admin = await prisma.admin.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AdminFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Admin.
     * @param {AdminAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const admin = await prisma.admin.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AdminAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activities<T extends Admin$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Admin$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly firstName: FieldRef<"Admin", 'String'>
    readonly lastName: FieldRef<"Admin", 'String'>
    readonly username: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly role: FieldRef<"Admin", 'AdminRole'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin findRaw
   */
  export type AdminFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Admin aggregateRaw
   */
  export type AdminAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Admin.activities
   */
  export type Admin$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    age: number | null
    yearLevel: number | null
  }

  export type StudentSumAggregateOutputType = {
    age: number | null
    yearLevel: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    idNumber: string | null
    age: number | null
    firstName: string | null
    lastName: string | null
    middleName: string | null
    nameExtn: string | null
    guardian: string | null
    email: string | null
    contactNumber: string | null
    course: string | null
    yearLevel: number | null
    gender: string | null
    school: string | null
    temp_password: string | null
    password: string | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    idNumber: string | null
    age: number | null
    firstName: string | null
    lastName: string | null
    middleName: string | null
    nameExtn: string | null
    guardian: string | null
    email: string | null
    contactNumber: string | null
    course: string | null
    yearLevel: number | null
    gender: string | null
    school: string | null
    temp_password: string | null
    password: string | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    idNumber: number
    age: number
    firstName: number
    lastName: number
    middleName: number
    nameExtn: number
    guardian: number
    email: number
    contactNumber: number
    course: number
    yearLevel: number
    gender: number
    school: number
    temp_password: number
    password: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    age?: true
    yearLevel?: true
  }

  export type StudentSumAggregateInputType = {
    age?: true
    yearLevel?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    idNumber?: true
    age?: true
    firstName?: true
    lastName?: true
    middleName?: true
    nameExtn?: true
    guardian?: true
    email?: true
    contactNumber?: true
    course?: true
    yearLevel?: true
    gender?: true
    school?: true
    temp_password?: true
    password?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    idNumber?: true
    age?: true
    firstName?: true
    lastName?: true
    middleName?: true
    nameExtn?: true
    guardian?: true
    email?: true
    contactNumber?: true
    course?: true
    yearLevel?: true
    gender?: true
    school?: true
    temp_password?: true
    password?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    idNumber?: true
    age?: true
    firstName?: true
    lastName?: true
    middleName?: true
    nameExtn?: true
    guardian?: true
    email?: true
    contactNumber?: true
    course?: true
    yearLevel?: true
    gender?: true
    school?: true
    temp_password?: true
    password?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    idNumber: string
    age: number | null
    firstName: string
    lastName: string | null
    middleName: string | null
    nameExtn: string | null
    guardian: string | null
    email: string
    contactNumber: string | null
    course: string | null
    yearLevel: number
    gender: string | null
    school: string | null
    temp_password: string
    password: string
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idNumber?: boolean
    age?: boolean
    firstName?: boolean
    lastName?: boolean
    middleName?: boolean
    nameExtn?: boolean
    guardian?: boolean
    email?: boolean
    contactNumber?: boolean
    course?: boolean
    yearLevel?: boolean
    gender?: boolean
    school?: boolean
    temp_password?: boolean
    password?: boolean
    activityAttendances?: boolean | Student$activityAttendancesArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>



  export type StudentSelectScalar = {
    id?: boolean
    idNumber?: boolean
    age?: boolean
    firstName?: boolean
    lastName?: boolean
    middleName?: boolean
    nameExtn?: boolean
    guardian?: boolean
    email?: boolean
    contactNumber?: boolean
    course?: boolean
    yearLevel?: boolean
    gender?: boolean
    school?: boolean
    temp_password?: boolean
    password?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idNumber" | "age" | "firstName" | "lastName" | "middleName" | "nameExtn" | "guardian" | "email" | "contactNumber" | "course" | "yearLevel" | "gender" | "school" | "temp_password" | "password", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activityAttendances?: boolean | Student$activityAttendancesArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      activityAttendances: Prisma.$ActivityAttendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      idNumber: string
      age: number | null
      firstName: string
      lastName: string | null
      middleName: string | null
      nameExtn: string | null
      guardian: string | null
      email: string
      contactNumber: string | null
      course: string | null
      yearLevel: number
      gender: string | null
      school: string | null
      temp_password: string
      password: string
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * @param {StudentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const student = await prisma.student.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: StudentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Student.
     * @param {StudentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const student = await prisma.student.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: StudentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activityAttendances<T extends Student$activityAttendancesArgs<ExtArgs> = {}>(args?: Subset<T, Student$activityAttendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityAttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly idNumber: FieldRef<"Student", 'String'>
    readonly age: FieldRef<"Student", 'Int'>
    readonly firstName: FieldRef<"Student", 'String'>
    readonly lastName: FieldRef<"Student", 'String'>
    readonly middleName: FieldRef<"Student", 'String'>
    readonly nameExtn: FieldRef<"Student", 'String'>
    readonly guardian: FieldRef<"Student", 'String'>
    readonly email: FieldRef<"Student", 'String'>
    readonly contactNumber: FieldRef<"Student", 'String'>
    readonly course: FieldRef<"Student", 'String'>
    readonly yearLevel: FieldRef<"Student", 'Int'>
    readonly gender: FieldRef<"Student", 'String'>
    readonly school: FieldRef<"Student", 'String'>
    readonly temp_password: FieldRef<"Student", 'String'>
    readonly password: FieldRef<"Student", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student findRaw
   */
  export type StudentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Student aggregateRaw
   */
  export type StudentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Student.activityAttendances
   */
  export type Student$activityAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityAttendance
     */
    select?: ActivityAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityAttendance
     */
    omit?: ActivityAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityAttendanceInclude<ExtArgs> | null
    where?: ActivityAttendanceWhereInput
    orderBy?: ActivityAttendanceOrderByWithRelationInput | ActivityAttendanceOrderByWithRelationInput[]
    cursor?: ActivityAttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityAttendanceScalarFieldEnum | ActivityAttendanceScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const ActivityScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    date: 'date',
    hours: 'hours',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    attendanceType: 'attendanceType',
    adminId: 'adminId'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const ActivityAttendanceScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    activityId: 'activityId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ActivityAttendanceScalarFieldEnum = (typeof ActivityAttendanceScalarFieldEnum)[keyof typeof ActivityAttendanceScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    username: 'username',
    password: 'password',
    role: 'role'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    idNumber: 'idNumber',
    age: 'age',
    firstName: 'firstName',
    lastName: 'lastName',
    middleName: 'middleName',
    nameExtn: 'nameExtn',
    guardian: 'guardian',
    email: 'email',
    contactNumber: 'contactNumber',
    course: 'course',
    yearLevel: 'yearLevel',
    gender: 'gender',
    school: 'school',
    temp_password: 'temp_password',
    password: 'password'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


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
   * Reference to a field of type 'AttendanceType'
   */
  export type EnumAttendanceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceType'>
    


  /**
   * Reference to a field of type 'AttendanceType[]'
   */
  export type ListEnumAttendanceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceType[]'>
    


  /**
   * Reference to a field of type 'AdminRole'
   */
  export type EnumAdminRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminRole'>
    


  /**
   * Reference to a field of type 'AdminRole[]'
   */
  export type ListEnumAdminRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminRole[]'>
    


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


  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    id?: StringFilter<"Activity"> | string
    title?: StringFilter<"Activity"> | string
    description?: StringNullableFilter<"Activity"> | string | null
    date?: DateTimeFilter<"Activity"> | Date | string
    hours?: IntFilter<"Activity"> | number
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    updatedAt?: DateTimeFilter<"Activity"> | Date | string
    attendanceType?: EnumAttendanceTypeFilter<"Activity"> | $Enums.AttendanceType
    adminId?: StringFilter<"Activity"> | string
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    activityAttendances?: ActivityAttendanceListRelationFilter
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    hours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendanceType?: SortOrder
    adminId?: SortOrder
    admin?: AdminOrderByWithRelationInput
    activityAttendances?: ActivityAttendanceOrderByRelationAggregateInput
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    title?: StringFilter<"Activity"> | string
    description?: StringNullableFilter<"Activity"> | string | null
    date?: DateTimeFilter<"Activity"> | Date | string
    hours?: IntFilter<"Activity"> | number
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    updatedAt?: DateTimeFilter<"Activity"> | Date | string
    attendanceType?: EnumAttendanceTypeFilter<"Activity"> | $Enums.AttendanceType
    adminId?: StringFilter<"Activity"> | string
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    activityAttendances?: ActivityAttendanceListRelationFilter
  }, "id">

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    hours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendanceType?: SortOrder
    adminId?: SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _avg?: ActivityAvgOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
    _sum?: ActivitySumOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Activity"> | string
    title?: StringWithAggregatesFilter<"Activity"> | string
    description?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    date?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    hours?: IntWithAggregatesFilter<"Activity"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    attendanceType?: EnumAttendanceTypeWithAggregatesFilter<"Activity"> | $Enums.AttendanceType
    adminId?: StringWithAggregatesFilter<"Activity"> | string
  }

  export type ActivityAttendanceWhereInput = {
    AND?: ActivityAttendanceWhereInput | ActivityAttendanceWhereInput[]
    OR?: ActivityAttendanceWhereInput[]
    NOT?: ActivityAttendanceWhereInput | ActivityAttendanceWhereInput[]
    id?: StringFilter<"ActivityAttendance"> | string
    studentId?: StringFilter<"ActivityAttendance"> | string
    activityId?: StringFilter<"ActivityAttendance"> | string
    status?: StringFilter<"ActivityAttendance"> | string
    createdAt?: DateTimeFilter<"ActivityAttendance"> | Date | string
    updatedAt?: DateTimeFilter<"ActivityAttendance"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    activity?: XOR<ActivityScalarRelationFilter, ActivityWhereInput>
  }

  export type ActivityAttendanceOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    activityId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    activity?: ActivityOrderByWithRelationInput
  }

  export type ActivityAttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId_activityId?: ActivityAttendanceStudentIdActivityIdCompoundUniqueInput
    AND?: ActivityAttendanceWhereInput | ActivityAttendanceWhereInput[]
    OR?: ActivityAttendanceWhereInput[]
    NOT?: ActivityAttendanceWhereInput | ActivityAttendanceWhereInput[]
    studentId?: StringFilter<"ActivityAttendance"> | string
    activityId?: StringFilter<"ActivityAttendance"> | string
    status?: StringFilter<"ActivityAttendance"> | string
    createdAt?: DateTimeFilter<"ActivityAttendance"> | Date | string
    updatedAt?: DateTimeFilter<"ActivityAttendance"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    activity?: XOR<ActivityScalarRelationFilter, ActivityWhereInput>
  }, "id" | "studentId_activityId">

  export type ActivityAttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    activityId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ActivityAttendanceCountOrderByAggregateInput
    _max?: ActivityAttendanceMaxOrderByAggregateInput
    _min?: ActivityAttendanceMinOrderByAggregateInput
  }

  export type ActivityAttendanceScalarWhereWithAggregatesInput = {
    AND?: ActivityAttendanceScalarWhereWithAggregatesInput | ActivityAttendanceScalarWhereWithAggregatesInput[]
    OR?: ActivityAttendanceScalarWhereWithAggregatesInput[]
    NOT?: ActivityAttendanceScalarWhereWithAggregatesInput | ActivityAttendanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActivityAttendance"> | string
    studentId?: StringWithAggregatesFilter<"ActivityAttendance"> | string
    activityId?: StringWithAggregatesFilter<"ActivityAttendance"> | string
    status?: StringWithAggregatesFilter<"ActivityAttendance"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ActivityAttendance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ActivityAttendance"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    firstName?: StringFilter<"Admin"> | string
    lastName?: StringFilter<"Admin"> | string
    username?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    role?: EnumAdminRoleFilter<"Admin"> | $Enums.AdminRole
    activities?: ActivityListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    activities?: ActivityOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    firstName?: StringFilter<"Admin"> | string
    lastName?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    role?: EnumAdminRoleFilter<"Admin"> | $Enums.AdminRole
    activities?: ActivityListRelationFilter
  }, "id" | "username">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    firstName?: StringWithAggregatesFilter<"Admin"> | string
    lastName?: StringWithAggregatesFilter<"Admin"> | string
    username?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    role?: EnumAdminRoleWithAggregatesFilter<"Admin"> | $Enums.AdminRole
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    idNumber?: StringFilter<"Student"> | string
    age?: IntNullableFilter<"Student"> | number | null
    firstName?: StringFilter<"Student"> | string
    lastName?: StringNullableFilter<"Student"> | string | null
    middleName?: StringNullableFilter<"Student"> | string | null
    nameExtn?: StringNullableFilter<"Student"> | string | null
    guardian?: StringNullableFilter<"Student"> | string | null
    email?: StringFilter<"Student"> | string
    contactNumber?: StringNullableFilter<"Student"> | string | null
    course?: StringNullableFilter<"Student"> | string | null
    yearLevel?: IntFilter<"Student"> | number
    gender?: StringNullableFilter<"Student"> | string | null
    school?: StringNullableFilter<"Student"> | string | null
    temp_password?: StringFilter<"Student"> | string
    password?: StringFilter<"Student"> | string
    activityAttendances?: ActivityAttendanceListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    idNumber?: SortOrder
    age?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    middleName?: SortOrder
    nameExtn?: SortOrder
    guardian?: SortOrder
    email?: SortOrder
    contactNumber?: SortOrder
    course?: SortOrder
    yearLevel?: SortOrder
    gender?: SortOrder
    school?: SortOrder
    temp_password?: SortOrder
    password?: SortOrder
    activityAttendances?: ActivityAttendanceOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    idNumber?: StringFilter<"Student"> | string
    age?: IntNullableFilter<"Student"> | number | null
    firstName?: StringFilter<"Student"> | string
    lastName?: StringNullableFilter<"Student"> | string | null
    middleName?: StringNullableFilter<"Student"> | string | null
    nameExtn?: StringNullableFilter<"Student"> | string | null
    guardian?: StringNullableFilter<"Student"> | string | null
    contactNumber?: StringNullableFilter<"Student"> | string | null
    course?: StringNullableFilter<"Student"> | string | null
    yearLevel?: IntFilter<"Student"> | number
    gender?: StringNullableFilter<"Student"> | string | null
    school?: StringNullableFilter<"Student"> | string | null
    temp_password?: StringFilter<"Student"> | string
    password?: StringFilter<"Student"> | string
    activityAttendances?: ActivityAttendanceListRelationFilter
  }, "id" | "email">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    idNumber?: SortOrder
    age?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    middleName?: SortOrder
    nameExtn?: SortOrder
    guardian?: SortOrder
    email?: SortOrder
    contactNumber?: SortOrder
    course?: SortOrder
    yearLevel?: SortOrder
    gender?: SortOrder
    school?: SortOrder
    temp_password?: SortOrder
    password?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    idNumber?: StringWithAggregatesFilter<"Student"> | string
    age?: IntNullableWithAggregatesFilter<"Student"> | number | null
    firstName?: StringWithAggregatesFilter<"Student"> | string
    lastName?: StringNullableWithAggregatesFilter<"Student"> | string | null
    middleName?: StringNullableWithAggregatesFilter<"Student"> | string | null
    nameExtn?: StringNullableWithAggregatesFilter<"Student"> | string | null
    guardian?: StringNullableWithAggregatesFilter<"Student"> | string | null
    email?: StringWithAggregatesFilter<"Student"> | string
    contactNumber?: StringNullableWithAggregatesFilter<"Student"> | string | null
    course?: StringNullableWithAggregatesFilter<"Student"> | string | null
    yearLevel?: IntWithAggregatesFilter<"Student"> | number
    gender?: StringNullableWithAggregatesFilter<"Student"> | string | null
    school?: StringNullableWithAggregatesFilter<"Student"> | string | null
    temp_password?: StringWithAggregatesFilter<"Student"> | string
    password?: StringWithAggregatesFilter<"Student"> | string
  }

  export type ActivityCreateInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    hours: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attendanceType: $Enums.AttendanceType
    admin: AdminCreateNestedOneWithoutActivitiesInput
    activityAttendances?: ActivityAttendanceCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    hours: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attendanceType: $Enums.AttendanceType
    adminId: string
    activityAttendances?: ActivityAttendanceUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceType?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    admin?: AdminUpdateOneRequiredWithoutActivitiesNestedInput
    activityAttendances?: ActivityAttendanceUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceType?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    adminId?: StringFieldUpdateOperationsInput | string
    activityAttendances?: ActivityAttendanceUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type ActivityCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    hours: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attendanceType: $Enums.AttendanceType
    adminId: string
  }

  export type ActivityUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceType?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
  }

  export type ActivityUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceType?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    adminId?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityAttendanceCreateInput = {
    id?: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutActivityAttendancesInput
    activity: ActivityCreateNestedOneWithoutActivityAttendancesInput
  }

  export type ActivityAttendanceUncheckedCreateInput = {
    id?: string
    studentId: string
    activityId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityAttendanceUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutActivityAttendancesNestedInput
    activity?: ActivityUpdateOneRequiredWithoutActivityAttendancesNestedInput
  }

  export type ActivityAttendanceUncheckedUpdateInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    activityId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityAttendanceCreateManyInput = {
    id?: string
    studentId: string
    activityId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityAttendanceUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityAttendanceUncheckedUpdateManyInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    activityId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    password: string
    role?: $Enums.AdminRole
    activities?: ActivityCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    password: string
    role?: $Enums.AdminRole
    activities?: ActivityUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    activities?: ActivityUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    activities?: ActivityUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    password: string
    role?: $Enums.AdminRole
  }

  export type AdminUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
  }

  export type AdminUncheckedUpdateManyInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
  }

  export type StudentCreateInput = {
    id?: string
    idNumber: string
    age?: number | null
    firstName: string
    lastName?: string | null
    middleName?: string | null
    nameExtn?: string | null
    guardian?: string | null
    email: string
    contactNumber?: string | null
    course?: string | null
    yearLevel: number
    gender?: string | null
    school?: string | null
    temp_password: string
    password: string
    activityAttendances?: ActivityAttendanceCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    idNumber: string
    age?: number | null
    firstName: string
    lastName?: string | null
    middleName?: string | null
    nameExtn?: string | null
    guardian?: string | null
    email: string
    contactNumber?: string | null
    course?: string | null
    yearLevel: number
    gender?: string | null
    school?: string | null
    temp_password: string
    password: string
    activityAttendances?: ActivityAttendanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    idNumber?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    nameExtn?: NullableStringFieldUpdateOperationsInput | string | null
    guardian?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    course?: NullableStringFieldUpdateOperationsInput | string | null
    yearLevel?: IntFieldUpdateOperationsInput | number
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    temp_password?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    activityAttendances?: ActivityAttendanceUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    idNumber?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    nameExtn?: NullableStringFieldUpdateOperationsInput | string | null
    guardian?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    course?: NullableStringFieldUpdateOperationsInput | string | null
    yearLevel?: IntFieldUpdateOperationsInput | number
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    temp_password?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    activityAttendances?: ActivityAttendanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    idNumber: string
    age?: number | null
    firstName: string
    lastName?: string | null
    middleName?: string | null
    nameExtn?: string | null
    guardian?: string | null
    email: string
    contactNumber?: string | null
    course?: string | null
    yearLevel: number
    gender?: string | null
    school?: string | null
    temp_password: string
    password: string
  }

  export type StudentUpdateManyMutationInput = {
    idNumber?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    nameExtn?: NullableStringFieldUpdateOperationsInput | string | null
    guardian?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    course?: NullableStringFieldUpdateOperationsInput | string | null
    yearLevel?: IntFieldUpdateOperationsInput | number
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    temp_password?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUncheckedUpdateManyInput = {
    idNumber?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    nameExtn?: NullableStringFieldUpdateOperationsInput | string | null
    guardian?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    course?: NullableStringFieldUpdateOperationsInput | string | null
    yearLevel?: IntFieldUpdateOperationsInput | number
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    temp_password?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
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
    isSet?: boolean
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

  export type EnumAttendanceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceType | EnumAttendanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceType[] | ListEnumAttendanceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceType[] | ListEnumAttendanceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceTypeFilter<$PrismaModel> | $Enums.AttendanceType
  }

  export type AdminScalarRelationFilter = {
    is?: AdminWhereInput
    isNot?: AdminWhereInput
  }

  export type ActivityAttendanceListRelationFilter = {
    every?: ActivityAttendanceWhereInput
    some?: ActivityAttendanceWhereInput
    none?: ActivityAttendanceWhereInput
  }

  export type ActivityAttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    hours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendanceType?: SortOrder
    adminId?: SortOrder
  }

  export type ActivityAvgOrderByAggregateInput = {
    hours?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    hours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendanceType?: SortOrder
    adminId?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    hours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendanceType?: SortOrder
    adminId?: SortOrder
  }

  export type ActivitySumOrderByAggregateInput = {
    hours?: SortOrder
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
    isSet?: boolean
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

  export type EnumAttendanceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceType | EnumAttendanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceType[] | ListEnumAttendanceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceType[] | ListEnumAttendanceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceTypeWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceTypeFilter<$PrismaModel>
    _max?: NestedEnumAttendanceTypeFilter<$PrismaModel>
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type ActivityScalarRelationFilter = {
    is?: ActivityWhereInput
    isNot?: ActivityWhereInput
  }

  export type ActivityAttendanceStudentIdActivityIdCompoundUniqueInput = {
    studentId: string
    activityId: string
  }

  export type ActivityAttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    activityId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActivityAttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    activityId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActivityAttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    activityId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAdminRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleFilter<$PrismaModel> | $Enums.AdminRole
  }

  export type ActivityListRelationFilter = {
    every?: ActivityWhereInput
    some?: ActivityWhereInput
    none?: ActivityWhereInput
  }

  export type ActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type EnumAdminRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel> | $Enums.AdminRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminRoleFilter<$PrismaModel>
    _max?: NestedEnumAdminRoleFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    idNumber?: SortOrder
    age?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    middleName?: SortOrder
    nameExtn?: SortOrder
    guardian?: SortOrder
    email?: SortOrder
    contactNumber?: SortOrder
    course?: SortOrder
    yearLevel?: SortOrder
    gender?: SortOrder
    school?: SortOrder
    temp_password?: SortOrder
    password?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    age?: SortOrder
    yearLevel?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    idNumber?: SortOrder
    age?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    middleName?: SortOrder
    nameExtn?: SortOrder
    guardian?: SortOrder
    email?: SortOrder
    contactNumber?: SortOrder
    course?: SortOrder
    yearLevel?: SortOrder
    gender?: SortOrder
    school?: SortOrder
    temp_password?: SortOrder
    password?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    idNumber?: SortOrder
    age?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    middleName?: SortOrder
    nameExtn?: SortOrder
    guardian?: SortOrder
    email?: SortOrder
    contactNumber?: SortOrder
    course?: SortOrder
    yearLevel?: SortOrder
    gender?: SortOrder
    school?: SortOrder
    temp_password?: SortOrder
    password?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    age?: SortOrder
    yearLevel?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type AdminCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<AdminCreateWithoutActivitiesInput, AdminUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutActivitiesInput
    connect?: AdminWhereUniqueInput
  }

  export type ActivityAttendanceCreateNestedManyWithoutActivityInput = {
    create?: XOR<ActivityAttendanceCreateWithoutActivityInput, ActivityAttendanceUncheckedCreateWithoutActivityInput> | ActivityAttendanceCreateWithoutActivityInput[] | ActivityAttendanceUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ActivityAttendanceCreateOrConnectWithoutActivityInput | ActivityAttendanceCreateOrConnectWithoutActivityInput[]
    createMany?: ActivityAttendanceCreateManyActivityInputEnvelope
    connect?: ActivityAttendanceWhereUniqueInput | ActivityAttendanceWhereUniqueInput[]
  }

  export type ActivityAttendanceUncheckedCreateNestedManyWithoutActivityInput = {
    create?: XOR<ActivityAttendanceCreateWithoutActivityInput, ActivityAttendanceUncheckedCreateWithoutActivityInput> | ActivityAttendanceCreateWithoutActivityInput[] | ActivityAttendanceUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ActivityAttendanceCreateOrConnectWithoutActivityInput | ActivityAttendanceCreateOrConnectWithoutActivityInput[]
    createMany?: ActivityAttendanceCreateManyActivityInputEnvelope
    connect?: ActivityAttendanceWhereUniqueInput | ActivityAttendanceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
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

  export type EnumAttendanceTypeFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceType
  }

  export type AdminUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<AdminCreateWithoutActivitiesInput, AdminUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutActivitiesInput
    upsert?: AdminUpsertWithoutActivitiesInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutActivitiesInput, AdminUpdateWithoutActivitiesInput>, AdminUncheckedUpdateWithoutActivitiesInput>
  }

  export type ActivityAttendanceUpdateManyWithoutActivityNestedInput = {
    create?: XOR<ActivityAttendanceCreateWithoutActivityInput, ActivityAttendanceUncheckedCreateWithoutActivityInput> | ActivityAttendanceCreateWithoutActivityInput[] | ActivityAttendanceUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ActivityAttendanceCreateOrConnectWithoutActivityInput | ActivityAttendanceCreateOrConnectWithoutActivityInput[]
    upsert?: ActivityAttendanceUpsertWithWhereUniqueWithoutActivityInput | ActivityAttendanceUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: ActivityAttendanceCreateManyActivityInputEnvelope
    set?: ActivityAttendanceWhereUniqueInput | ActivityAttendanceWhereUniqueInput[]
    disconnect?: ActivityAttendanceWhereUniqueInput | ActivityAttendanceWhereUniqueInput[]
    delete?: ActivityAttendanceWhereUniqueInput | ActivityAttendanceWhereUniqueInput[]
    connect?: ActivityAttendanceWhereUniqueInput | ActivityAttendanceWhereUniqueInput[]
    update?: ActivityAttendanceUpdateWithWhereUniqueWithoutActivityInput | ActivityAttendanceUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: ActivityAttendanceUpdateManyWithWhereWithoutActivityInput | ActivityAttendanceUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: ActivityAttendanceScalarWhereInput | ActivityAttendanceScalarWhereInput[]
  }

  export type ActivityAttendanceUncheckedUpdateManyWithoutActivityNestedInput = {
    create?: XOR<ActivityAttendanceCreateWithoutActivityInput, ActivityAttendanceUncheckedCreateWithoutActivityInput> | ActivityAttendanceCreateWithoutActivityInput[] | ActivityAttendanceUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ActivityAttendanceCreateOrConnectWithoutActivityInput | ActivityAttendanceCreateOrConnectWithoutActivityInput[]
    upsert?: ActivityAttendanceUpsertWithWhereUniqueWithoutActivityInput | ActivityAttendanceUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: ActivityAttendanceCreateManyActivityInputEnvelope
    set?: ActivityAttendanceWhereUniqueInput | ActivityAttendanceWhereUniqueInput[]
    disconnect?: ActivityAttendanceWhereUniqueInput | ActivityAttendanceWhereUniqueInput[]
    delete?: ActivityAttendanceWhereUniqueInput | ActivityAttendanceWhereUniqueInput[]
    connect?: ActivityAttendanceWhereUniqueInput | ActivityAttendanceWhereUniqueInput[]
    update?: ActivityAttendanceUpdateWithWhereUniqueWithoutActivityInput | ActivityAttendanceUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: ActivityAttendanceUpdateManyWithWhereWithoutActivityInput | ActivityAttendanceUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: ActivityAttendanceScalarWhereInput | ActivityAttendanceScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutActivityAttendancesInput = {
    create?: XOR<StudentCreateWithoutActivityAttendancesInput, StudentUncheckedCreateWithoutActivityAttendancesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutActivityAttendancesInput
    connect?: StudentWhereUniqueInput
  }

  export type ActivityCreateNestedOneWithoutActivityAttendancesInput = {
    create?: XOR<ActivityCreateWithoutActivityAttendancesInput, ActivityUncheckedCreateWithoutActivityAttendancesInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutActivityAttendancesInput
    connect?: ActivityWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutActivityAttendancesNestedInput = {
    create?: XOR<StudentCreateWithoutActivityAttendancesInput, StudentUncheckedCreateWithoutActivityAttendancesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutActivityAttendancesInput
    upsert?: StudentUpsertWithoutActivityAttendancesInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutActivityAttendancesInput, StudentUpdateWithoutActivityAttendancesInput>, StudentUncheckedUpdateWithoutActivityAttendancesInput>
  }

  export type ActivityUpdateOneRequiredWithoutActivityAttendancesNestedInput = {
    create?: XOR<ActivityCreateWithoutActivityAttendancesInput, ActivityUncheckedCreateWithoutActivityAttendancesInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutActivityAttendancesInput
    upsert?: ActivityUpsertWithoutActivityAttendancesInput
    connect?: ActivityWhereUniqueInput
    update?: XOR<XOR<ActivityUpdateToOneWithWhereWithoutActivityAttendancesInput, ActivityUpdateWithoutActivityAttendancesInput>, ActivityUncheckedUpdateWithoutActivityAttendancesInput>
  }

  export type ActivityCreateNestedManyWithoutAdminInput = {
    create?: XOR<ActivityCreateWithoutAdminInput, ActivityUncheckedCreateWithoutAdminInput> | ActivityCreateWithoutAdminInput[] | ActivityUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutAdminInput | ActivityCreateOrConnectWithoutAdminInput[]
    createMany?: ActivityCreateManyAdminInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<ActivityCreateWithoutAdminInput, ActivityUncheckedCreateWithoutAdminInput> | ActivityCreateWithoutAdminInput[] | ActivityUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutAdminInput | ActivityCreateOrConnectWithoutAdminInput[]
    createMany?: ActivityCreateManyAdminInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type EnumAdminRoleFieldUpdateOperationsInput = {
    set?: $Enums.AdminRole
  }

  export type ActivityUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ActivityCreateWithoutAdminInput, ActivityUncheckedCreateWithoutAdminInput> | ActivityCreateWithoutAdminInput[] | ActivityUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutAdminInput | ActivityCreateOrConnectWithoutAdminInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutAdminInput | ActivityUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ActivityCreateManyAdminInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutAdminInput | ActivityUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutAdminInput | ActivityUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ActivityCreateWithoutAdminInput, ActivityUncheckedCreateWithoutAdminInput> | ActivityCreateWithoutAdminInput[] | ActivityUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutAdminInput | ActivityCreateOrConnectWithoutAdminInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutAdminInput | ActivityUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ActivityCreateManyAdminInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutAdminInput | ActivityUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutAdminInput | ActivityUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type ActivityAttendanceCreateNestedManyWithoutStudentInput = {
    create?: XOR<ActivityAttendanceCreateWithoutStudentInput, ActivityAttendanceUncheckedCreateWithoutStudentInput> | ActivityAttendanceCreateWithoutStudentInput[] | ActivityAttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ActivityAttendanceCreateOrConnectWithoutStudentInput | ActivityAttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: ActivityAttendanceCreateManyStudentInputEnvelope
    connect?: ActivityAttendanceWhereUniqueInput | ActivityAttendanceWhereUniqueInput[]
  }

  export type ActivityAttendanceUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ActivityAttendanceCreateWithoutStudentInput, ActivityAttendanceUncheckedCreateWithoutStudentInput> | ActivityAttendanceCreateWithoutStudentInput[] | ActivityAttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ActivityAttendanceCreateOrConnectWithoutStudentInput | ActivityAttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: ActivityAttendanceCreateManyStudentInputEnvelope
    connect?: ActivityAttendanceWhereUniqueInput | ActivityAttendanceWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type ActivityAttendanceUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ActivityAttendanceCreateWithoutStudentInput, ActivityAttendanceUncheckedCreateWithoutStudentInput> | ActivityAttendanceCreateWithoutStudentInput[] | ActivityAttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ActivityAttendanceCreateOrConnectWithoutStudentInput | ActivityAttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: ActivityAttendanceUpsertWithWhereUniqueWithoutStudentInput | ActivityAttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ActivityAttendanceCreateManyStudentInputEnvelope
    set?: ActivityAttendanceWhereUniqueInput | ActivityAttendanceWhereUniqueInput[]
    disconnect?: ActivityAttendanceWhereUniqueInput | ActivityAttendanceWhereUniqueInput[]
    delete?: ActivityAttendanceWhereUniqueInput | ActivityAttendanceWhereUniqueInput[]
    connect?: ActivityAttendanceWhereUniqueInput | ActivityAttendanceWhereUniqueInput[]
    update?: ActivityAttendanceUpdateWithWhereUniqueWithoutStudentInput | ActivityAttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ActivityAttendanceUpdateManyWithWhereWithoutStudentInput | ActivityAttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ActivityAttendanceScalarWhereInput | ActivityAttendanceScalarWhereInput[]
  }

  export type ActivityAttendanceUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ActivityAttendanceCreateWithoutStudentInput, ActivityAttendanceUncheckedCreateWithoutStudentInput> | ActivityAttendanceCreateWithoutStudentInput[] | ActivityAttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ActivityAttendanceCreateOrConnectWithoutStudentInput | ActivityAttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: ActivityAttendanceUpsertWithWhereUniqueWithoutStudentInput | ActivityAttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ActivityAttendanceCreateManyStudentInputEnvelope
    set?: ActivityAttendanceWhereUniqueInput | ActivityAttendanceWhereUniqueInput[]
    disconnect?: ActivityAttendanceWhereUniqueInput | ActivityAttendanceWhereUniqueInput[]
    delete?: ActivityAttendanceWhereUniqueInput | ActivityAttendanceWhereUniqueInput[]
    connect?: ActivityAttendanceWhereUniqueInput | ActivityAttendanceWhereUniqueInput[]
    update?: ActivityAttendanceUpdateWithWhereUniqueWithoutStudentInput | ActivityAttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ActivityAttendanceUpdateManyWithWhereWithoutStudentInput | ActivityAttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ActivityAttendanceScalarWhereInput | ActivityAttendanceScalarWhereInput[]
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
    isSet?: boolean
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

  export type NestedEnumAttendanceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceType | EnumAttendanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceType[] | ListEnumAttendanceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceType[] | ListEnumAttendanceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceTypeFilter<$PrismaModel> | $Enums.AttendanceType
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
    isSet?: boolean
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
    isSet?: boolean
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

  export type NestedEnumAttendanceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceType | EnumAttendanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceType[] | ListEnumAttendanceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceType[] | ListEnumAttendanceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceTypeWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceTypeFilter<$PrismaModel>
    _max?: NestedEnumAttendanceTypeFilter<$PrismaModel>
  }

  export type NestedEnumAdminRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleFilter<$PrismaModel> | $Enums.AdminRole
  }

  export type NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel> | $Enums.AdminRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminRoleFilter<$PrismaModel>
    _max?: NestedEnumAdminRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type AdminCreateWithoutActivitiesInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    password: string
    role?: $Enums.AdminRole
  }

  export type AdminUncheckedCreateWithoutActivitiesInput = {
    id?: string
    firstName: string
    lastName: string
    username: string
    password: string
    role?: $Enums.AdminRole
  }

  export type AdminCreateOrConnectWithoutActivitiesInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutActivitiesInput, AdminUncheckedCreateWithoutActivitiesInput>
  }

  export type ActivityAttendanceCreateWithoutActivityInput = {
    id?: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutActivityAttendancesInput
  }

  export type ActivityAttendanceUncheckedCreateWithoutActivityInput = {
    id?: string
    studentId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityAttendanceCreateOrConnectWithoutActivityInput = {
    where: ActivityAttendanceWhereUniqueInput
    create: XOR<ActivityAttendanceCreateWithoutActivityInput, ActivityAttendanceUncheckedCreateWithoutActivityInput>
  }

  export type ActivityAttendanceCreateManyActivityInputEnvelope = {
    data: ActivityAttendanceCreateManyActivityInput | ActivityAttendanceCreateManyActivityInput[]
  }

  export type AdminUpsertWithoutActivitiesInput = {
    update: XOR<AdminUpdateWithoutActivitiesInput, AdminUncheckedUpdateWithoutActivitiesInput>
    create: XOR<AdminCreateWithoutActivitiesInput, AdminUncheckedCreateWithoutActivitiesInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutActivitiesInput, AdminUncheckedUpdateWithoutActivitiesInput>
  }

  export type AdminUpdateWithoutActivitiesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
  }

  export type AdminUncheckedUpdateWithoutActivitiesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
  }

  export type ActivityAttendanceUpsertWithWhereUniqueWithoutActivityInput = {
    where: ActivityAttendanceWhereUniqueInput
    update: XOR<ActivityAttendanceUpdateWithoutActivityInput, ActivityAttendanceUncheckedUpdateWithoutActivityInput>
    create: XOR<ActivityAttendanceCreateWithoutActivityInput, ActivityAttendanceUncheckedCreateWithoutActivityInput>
  }

  export type ActivityAttendanceUpdateWithWhereUniqueWithoutActivityInput = {
    where: ActivityAttendanceWhereUniqueInput
    data: XOR<ActivityAttendanceUpdateWithoutActivityInput, ActivityAttendanceUncheckedUpdateWithoutActivityInput>
  }

  export type ActivityAttendanceUpdateManyWithWhereWithoutActivityInput = {
    where: ActivityAttendanceScalarWhereInput
    data: XOR<ActivityAttendanceUpdateManyMutationInput, ActivityAttendanceUncheckedUpdateManyWithoutActivityInput>
  }

  export type ActivityAttendanceScalarWhereInput = {
    AND?: ActivityAttendanceScalarWhereInput | ActivityAttendanceScalarWhereInput[]
    OR?: ActivityAttendanceScalarWhereInput[]
    NOT?: ActivityAttendanceScalarWhereInput | ActivityAttendanceScalarWhereInput[]
    id?: StringFilter<"ActivityAttendance"> | string
    studentId?: StringFilter<"ActivityAttendance"> | string
    activityId?: StringFilter<"ActivityAttendance"> | string
    status?: StringFilter<"ActivityAttendance"> | string
    createdAt?: DateTimeFilter<"ActivityAttendance"> | Date | string
    updatedAt?: DateTimeFilter<"ActivityAttendance"> | Date | string
  }

  export type StudentCreateWithoutActivityAttendancesInput = {
    id?: string
    idNumber: string
    age?: number | null
    firstName: string
    lastName?: string | null
    middleName?: string | null
    nameExtn?: string | null
    guardian?: string | null
    email: string
    contactNumber?: string | null
    course?: string | null
    yearLevel: number
    gender?: string | null
    school?: string | null
    temp_password: string
    password: string
  }

  export type StudentUncheckedCreateWithoutActivityAttendancesInput = {
    id?: string
    idNumber: string
    age?: number | null
    firstName: string
    lastName?: string | null
    middleName?: string | null
    nameExtn?: string | null
    guardian?: string | null
    email: string
    contactNumber?: string | null
    course?: string | null
    yearLevel: number
    gender?: string | null
    school?: string | null
    temp_password: string
    password: string
  }

  export type StudentCreateOrConnectWithoutActivityAttendancesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutActivityAttendancesInput, StudentUncheckedCreateWithoutActivityAttendancesInput>
  }

  export type ActivityCreateWithoutActivityAttendancesInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    hours: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attendanceType: $Enums.AttendanceType
    admin: AdminCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityUncheckedCreateWithoutActivityAttendancesInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    hours: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attendanceType: $Enums.AttendanceType
    adminId: string
  }

  export type ActivityCreateOrConnectWithoutActivityAttendancesInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutActivityAttendancesInput, ActivityUncheckedCreateWithoutActivityAttendancesInput>
  }

  export type StudentUpsertWithoutActivityAttendancesInput = {
    update: XOR<StudentUpdateWithoutActivityAttendancesInput, StudentUncheckedUpdateWithoutActivityAttendancesInput>
    create: XOR<StudentCreateWithoutActivityAttendancesInput, StudentUncheckedCreateWithoutActivityAttendancesInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutActivityAttendancesInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutActivityAttendancesInput, StudentUncheckedUpdateWithoutActivityAttendancesInput>
  }

  export type StudentUpdateWithoutActivityAttendancesInput = {
    idNumber?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    nameExtn?: NullableStringFieldUpdateOperationsInput | string | null
    guardian?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    course?: NullableStringFieldUpdateOperationsInput | string | null
    yearLevel?: IntFieldUpdateOperationsInput | number
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    temp_password?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUncheckedUpdateWithoutActivityAttendancesInput = {
    idNumber?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    nameExtn?: NullableStringFieldUpdateOperationsInput | string | null
    guardian?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    course?: NullableStringFieldUpdateOperationsInput | string | null
    yearLevel?: IntFieldUpdateOperationsInput | number
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    temp_password?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityUpsertWithoutActivityAttendancesInput = {
    update: XOR<ActivityUpdateWithoutActivityAttendancesInput, ActivityUncheckedUpdateWithoutActivityAttendancesInput>
    create: XOR<ActivityCreateWithoutActivityAttendancesInput, ActivityUncheckedCreateWithoutActivityAttendancesInput>
    where?: ActivityWhereInput
  }

  export type ActivityUpdateToOneWithWhereWithoutActivityAttendancesInput = {
    where?: ActivityWhereInput
    data: XOR<ActivityUpdateWithoutActivityAttendancesInput, ActivityUncheckedUpdateWithoutActivityAttendancesInput>
  }

  export type ActivityUpdateWithoutActivityAttendancesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceType?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    admin?: AdminUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateWithoutActivityAttendancesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceType?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    adminId?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityCreateWithoutAdminInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    hours: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attendanceType: $Enums.AttendanceType
    activityAttendances?: ActivityAttendanceCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateWithoutAdminInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    hours: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attendanceType: $Enums.AttendanceType
    activityAttendances?: ActivityAttendanceUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityCreateOrConnectWithoutAdminInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutAdminInput, ActivityUncheckedCreateWithoutAdminInput>
  }

  export type ActivityCreateManyAdminInputEnvelope = {
    data: ActivityCreateManyAdminInput | ActivityCreateManyAdminInput[]
  }

  export type ActivityUpsertWithWhereUniqueWithoutAdminInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutAdminInput, ActivityUncheckedUpdateWithoutAdminInput>
    create: XOR<ActivityCreateWithoutAdminInput, ActivityUncheckedCreateWithoutAdminInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutAdminInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutAdminInput, ActivityUncheckedUpdateWithoutAdminInput>
  }

  export type ActivityUpdateManyWithWhereWithoutAdminInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutAdminInput>
  }

  export type ActivityScalarWhereInput = {
    AND?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    OR?: ActivityScalarWhereInput[]
    NOT?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    id?: StringFilter<"Activity"> | string
    title?: StringFilter<"Activity"> | string
    description?: StringNullableFilter<"Activity"> | string | null
    date?: DateTimeFilter<"Activity"> | Date | string
    hours?: IntFilter<"Activity"> | number
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    updatedAt?: DateTimeFilter<"Activity"> | Date | string
    attendanceType?: EnumAttendanceTypeFilter<"Activity"> | $Enums.AttendanceType
    adminId?: StringFilter<"Activity"> | string
  }

  export type ActivityAttendanceCreateWithoutStudentInput = {
    id?: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    activity: ActivityCreateNestedOneWithoutActivityAttendancesInput
  }

  export type ActivityAttendanceUncheckedCreateWithoutStudentInput = {
    id?: string
    activityId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityAttendanceCreateOrConnectWithoutStudentInput = {
    where: ActivityAttendanceWhereUniqueInput
    create: XOR<ActivityAttendanceCreateWithoutStudentInput, ActivityAttendanceUncheckedCreateWithoutStudentInput>
  }

  export type ActivityAttendanceCreateManyStudentInputEnvelope = {
    data: ActivityAttendanceCreateManyStudentInput | ActivityAttendanceCreateManyStudentInput[]
  }

  export type ActivityAttendanceUpsertWithWhereUniqueWithoutStudentInput = {
    where: ActivityAttendanceWhereUniqueInput
    update: XOR<ActivityAttendanceUpdateWithoutStudentInput, ActivityAttendanceUncheckedUpdateWithoutStudentInput>
    create: XOR<ActivityAttendanceCreateWithoutStudentInput, ActivityAttendanceUncheckedCreateWithoutStudentInput>
  }

  export type ActivityAttendanceUpdateWithWhereUniqueWithoutStudentInput = {
    where: ActivityAttendanceWhereUniqueInput
    data: XOR<ActivityAttendanceUpdateWithoutStudentInput, ActivityAttendanceUncheckedUpdateWithoutStudentInput>
  }

  export type ActivityAttendanceUpdateManyWithWhereWithoutStudentInput = {
    where: ActivityAttendanceScalarWhereInput
    data: XOR<ActivityAttendanceUpdateManyMutationInput, ActivityAttendanceUncheckedUpdateManyWithoutStudentInput>
  }

  export type ActivityAttendanceCreateManyActivityInput = {
    id?: string
    studentId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityAttendanceUpdateWithoutActivityInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutActivityAttendancesNestedInput
  }

  export type ActivityAttendanceUncheckedUpdateWithoutActivityInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityAttendanceUncheckedUpdateManyWithoutActivityInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateManyAdminInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    hours: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attendanceType: $Enums.AttendanceType
  }

  export type ActivityUpdateWithoutAdminInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceType?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    activityAttendances?: ActivityAttendanceUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutAdminInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceType?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    activityAttendances?: ActivityAttendanceUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateManyWithoutAdminInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceType?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
  }

  export type ActivityAttendanceCreateManyStudentInput = {
    id?: string
    activityId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityAttendanceUpdateWithoutStudentInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activity?: ActivityUpdateOneRequiredWithoutActivityAttendancesNestedInput
  }

  export type ActivityAttendanceUncheckedUpdateWithoutStudentInput = {
    activityId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityAttendanceUncheckedUpdateManyWithoutStudentInput = {
    activityId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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