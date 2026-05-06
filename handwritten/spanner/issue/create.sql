CREATE TABLE
  tracking.DeviceRecentActivityLog ( deviceRecentActivityLogId STRING(64) NOT NULL,
    deviceRecordId STRING(64) NOT NULL,
    httpRequestDetailsId STRING(64) NOT NULL,
    deviceDetailsId STRING(64) NOT NULL,
    ipAddress BYTES(24) NOT NULL,
    ipAddressText STRING(MAX) AS (NET.IP_TO_STRING(ipAddress)),
    xRequestId STRING(64) NOT NULL,
    institutionId STRING(64),
    userId STRING(64),
    username STRING(64),
    httpRequestLocationId STRING(64),
    latency INT64,
    createdAt TIMESTAMP NOT NULL DEFAULT (CURRENT_TIMESTAMP()),
    sessionId STRING(256),
    )
PRIMARY KEY
  (deviceRecentActivityLogId),
  ROW DELETION POLICY (OLDER_THAN(createdAt,
      INTERVAL 20 DAY));
