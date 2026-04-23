declare module 'avro-js' {
  function parse(def: string): Parser;

  class Parser {
    fromBuffer<T>(buf: Buffer): T;
    fromString<T>(str: string): T;
    toBuffer<T>(item: T): Buffer;
    toString<T>(item: T): string;
  }
}
