# YCSB Benchmarks

Implements [YCSB](https://github.com/brianfrankcooper/YCSB) clients for cloud
Spanner in Node.js.

Visit [YCSBClientCloudSpanner](https://github.com/haih-g/YCSBClientCloudSpanner)
for more details.

## Setup

First you need to setup a Cloud Spanner instance and database. Then you can use
[YCSB](https://github.com/brianfrankcooper/YCSB) to load the database. Then you
can run the client benchmarks.

### Set up the database

```sh
$ gcloud spanner instances create ycsb-instance --nodes 1 \
  --config regional-us-central1 --description YCSB
$ gcloud spanner databases create ycsb --instance ycsb-instance
$ gcloud spanner databases ddl update ycsb --instance ycsb-instance \
  --ddl="CREATE TABLE usertable (
           id     STRING(MAX),
           field0 STRING(MAX),
           field1 STRING(MAX),
           field2 STRING(MAX),
           field3 STRING(MAX),
           field4 STRING(MAX),
           field5 STRING(MAX),
           field6 STRING(MAX),
           field7 STRING(MAX),
           field8 STRING(MAX),
           field9 STRING(MAX),
         ) PRIMARY KEY(id)"
```

### Use YCSB to load data

You need to set up some environment variables first. You should use your own
gcloud credentials and project.

```sh
$ export GOOGLE_APPLICATION_CREDENTIALS=/usr/local/google/home/haih/cloud-spanner-client-benchmark.json
$ export GCLOUD_PROJECT=cloud-spanner-client-benchmark
```

Then download YCSB and load the database.

```sh
$ curl https://storage.googleapis.com/cloud-spanner-ycsb-custom-release/ycsb-cloudspanner-binding-0.13.0.tar.gz | tar -xzv
$ ycsb-cloudspanner-binding-0.13.0/bin/ycsb load cloudspanner \
  -P ycsb-cloudspanner-binding-0.13.0/workloads/workloada \
  -p table=usertable -p cloudspanner.instance=ycsb-instance \
  -p recordcount=5000 -p operationcount=100 -p cloudspanner.database=ycsb \
  -threads 32
```

## Run benchmarks

```sh
$ npm run ycsb
```

Or if you want complete control over the parameters.

```sh
node benchmarks/ycsb.js run -P benchmarks/workloada -p table=usertable \
  -p cloudspanner.instance=ycsb-542756a4 -p recordcount=5000 \
  -p operationcount=100 -p cloudspanner.database=ycsb -p num_worker=1
```
