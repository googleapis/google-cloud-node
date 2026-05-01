import os
import glob

def check_metadata_pairs():
    # Find all legacy metadata files (using DOT)
    legacy_pattern = 'packages/*/samples/generated/*/snippet_metadata.*.json'
    legacy_files = glob.glob(legacy_pattern)
    
    paired = []
    orphaned_no_pair = []

    for legacy_file in legacy_files:
        dir_name = os.path.dirname(legacy_file)
        base_name = os.path.basename(legacy_file)
        
        # Construct the expected modern filename
        modern_name = base_name.replace('snippet_metadata.', 'snippet_metadata_', 1)
        modern_file = os.path.join(dir_name, modern_name)
        
        if os.path.exists(modern_file):
            paired.append(legacy_file)
        else:
            orphaned_no_pair.append(legacy_file)

    print(f"Total legacy (DOT) files found: {len(legacy_files)}")
    print(f"Legacy files WITH modern (UNDERSCORE) pairs: {len(paired)}")
    print(f"Legacy files WITHOUT modern pairs: {len(orphaned_no_pair)}")
    
    if orphaned_no_pair:
        print("\n--- Orphaned (No Replacement) ---")
        for f in orphaned_no_pair:
            print(f)

if __name__ == "__main__":
    check_metadata_pairs()
