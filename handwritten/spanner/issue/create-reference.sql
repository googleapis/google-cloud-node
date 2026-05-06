-- Minimal reference tables needed by issue/go/main.go.
-- DeviceRecentActivityLog insert itself has no foreign keys in issue/create.sql;
-- these tables only feed benchmark ID sampling.

CREATE TABLE tracking.Devices (
  deviceRecordId STRING(64) NOT NULL,
  createdAt TIMESTAMP NOT NULL OPTIONS (allow_commit_timestamp=true)
) PRIMARY KEY (deviceRecordId);

CREATE TABLE tracking.DeviceDetails (
  deviceDetailsId STRING(64) NOT NULL,
  createdAt TIMESTAMP NOT NULL OPTIONS (allow_commit_timestamp=true)
) PRIMARY KEY (deviceDetailsId);

CREATE TABLE tracking.HttpRequestDetails (
  httpRequestDetailsId STRING(64) NOT NULL,
  createdAt TIMESTAMP NOT NULL OPTIONS (allow_commit_timestamp=true)
) PRIMARY KEY (httpRequestDetailsId);

CREATE TABLE tracking.HttpRequestLocations (
  httpRequestLocationId STRING(64) NOT NULL,
  createdAt TIMESTAMP NOT NULL OPTIONS (allow_commit_timestamp=true)
) PRIMARY KEY (httpRequestLocationId);
