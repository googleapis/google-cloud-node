import os
import glob

def clean_all_legacy_metadata():
    # Find all legacy metadata files (using DOT)
    legacy_pattern = 'packages/*/samples/generated/*/snippet_metadata.*.json'
    legacy_files = glob.glob(legacy_pattern)
    
    deleted_count = 0

    for legacy_file in legacy_files:
        os.remove(legacy_file)
        deleted_count += 1
        print(f"DELETED: {legacy_file}")

    print(f"\nSummary:")
    print(f"Deleted {deleted_count} legacy metadata files.")

if __name__ == "__main__":
    clean_all_legacy_metadata()
