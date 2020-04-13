declare namespace NodeJS {
  export interface Global {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _google_trace_agent: any;
  }
}
