// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

export class RequestError extends Error {
  code?: string;
  errors?: Error[];
}

export enum FileExceptionMessages {
  EXPIRATION_TIME_NA = 'An expiration time is not available.',
  DESTINATION_NO_NAME = 'Destination file should have a name.',
  INVALID_VALIDATION_FILE_RANGE = 'Cannot use validation with file ranges (start/end).',
  MD5_NOT_AVAILABLE = 'MD5 verification was specified, but is not available for the requested object. MD5 is not available for composite objects.',
  EQUALS_CONDITION_TWO_ELEMENTS = 'Equals condition must be an array of 2 elements.',
  STARTS_WITH_TWO_ELEMENTS = 'StartsWith condition must be an array of 2 elements.',
  CONTENT_LENGTH_RANGE_MIN_MAX = 'ContentLengthRange must have numeric min & max fields.',
  DOWNLOAD_MISMATCH = 'The downloaded data did not match the data from the server. To be sure the content is the same, you should download the file again.',
  UPLOAD_MISMATCH_DELETE_FAIL = `The uploaded data did not match the data from the server.
    As a precaution, we attempted to delete the file, but it was not successful.
    To be sure the content is the same, you should try removing the file manually,
    then uploading the file again.
    \n\nThe delete attempt failed with this message:\n\n  `,
  UPLOAD_MISMATCH = `The uploaded data did not match the data from the server.
    As a precaution, the file has been deleted.
    To be sure the content is the same, you should try uploading the file again.`,
  MD5_RESUMED_UPLOAD = 'MD5 cannot be used with a continued resumable upload as MD5 cannot be extended from an existing value',
  MISSING_RESUME_CRC32C_FINAL_UPLOAD = 'The CRC32C is missing for the final portion of a resumed upload, which is required for validation. Please provide `resumeCRC32C` if validation is required, or disable `validation`.',
  STREAM_NOT_AVAILABLE = 'Stream was not provided.',
}
