now=$(date +"%T")
gcloud builds list --format="value(id)" --filter="substitutions.REF_NAME="$REF_NAME" AND status="WORKING" AND create_time<"$now"" | while IFS= read -r line ; do
    echo "$line"
    gcloud builds cancel "$line"
done