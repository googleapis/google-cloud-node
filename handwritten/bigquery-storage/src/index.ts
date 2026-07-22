import * as v1 from '@google-cloud/bigquery-storage-api';
import {BigQueryReadClient, BigQueryWriteClient} from '@google-cloud/bigquery-storage-api';
import * as managedwriter from './managedwriter';
import * as reader from './reader';
const WriterClient = managedwriter.WriterClient;
type WriterClient = managedwriter.WriterClient;
const ReadClient = reader.ReadClient;
type ReadClient = reader.ReadClient;
export {
  v1,
  BigQueryReadClient,
  BigQueryWriteClient,
  managedwriter,
  WriterClient,
  reader,
  ReadClient,
};
// For compatibility with JavaScript libraries we need to provide this default export:
// tslint:disable-next-line no-default-export
export default {
  v1,
  BigQueryReadClient,
  BigQueryWriteClient,
  managedwriter,
  WriterClient,
  reader,
  ReadClient,
};
import {protos} from '@google-cloud/bigquery-storage-api';
export {protos};
import * as adapt from './adapt';
export {adapt};

import './protobuf';
