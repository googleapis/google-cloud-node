# Use a minimal base image
FROM marketplace.gcr.io/google/debian12:latest

# Add NodeSource APT repository for Node.js v18
RUN apt-get update && apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs openjdk-17-jre-headless && \
    rm -rf /var/lib/apt/lists/*

# Remove unnecessary cross-spawn from npm to resolve CVE-2024-21538
RUN rm -r /usr/lib/node_modules/npm/node_modules/cross-spawn

# Install bazelisk
RUN npm install -g @bazel/bazelisk

# --- START of Arbitrary User Fixes for Bazel/Bazelisk ---

# IMPORTANT FIX: Set HOME to a world-writable directory.
# This prevents Bazel (run by Bazelisk) from defaulting its execution cache 
# location to unwritable paths like '/.cache' when running as an arbitrary user.
ENV HOME=/tmp

# Set environment variables for both Bazelisk and the underlying Bazel binary
# to ensure they operate in world-writable /tmp directories. This is critical
# for running the container as an arbitrary, non-root user (UID/GID specified by Librarian).
ENV BAZELISK_RC_FILE=/tmp/.bazeliskrc
ENV BAZELISK_HOME=/tmp/bazelisk_home

# Set environment variables for the arbitrary user (from Dockerfile.snippet)
ENV BAZEL_HOME="/tmp/.bazel"
ENV BAZEL_CACHE_DIR="/tmp/.bazel_cache"

# Create and set permissions for all required directories.
# This ensures that even arbitrary UIDs can write here.
RUN mkdir -p ${BAZEL_HOME} && \
    chmod -R a+rwx ${BAZEL_HOME} && \
    mkdir -p ${BAZEL_CACHE_DIR} && \
    chmod -R a+rwx ${BAZEL_CACHE_DIR} && \
    # CRITICAL FIX: Ensure the output_base used in generate.cjs is writable
    mkdir -p /tmp/bazel_output && \
    chmod -R a+rwx /tmp/bazel_output && \
    # FIX for FATAL: mkdir('/.cache/...'): Permission denied
    # Create the cache directory Bazelisk uses for the downloaded Bazel binary.
    # Because HOME is now /tmp, this path is /tmp/.cache/bazel.
    mkdir -p /tmp/.cache/bazel && \
    chmod -R a+rwx /tmp/.cache/bazel

# --- END of Arbitrary User Fixes for Bazel/Bazelisk ---

# Create a dummy file in /source to show it works
RUN echo "This is a test file." > testfile.txt

# Command to execute when the container starts
# It prints "Hello, World!" and then lists the contents of the current directory (/source)
CMD ["sh", "-c", "echo 'Hello, World!' && ls -l"]

COPY entrypoint.sh /usr/local/bin/
COPY generate.cjs /usr/local/bin/

RUN chmod 755 /usr/local/bin/generate.cjs
RUN chmod 755 /usr/local/bin/entrypoint.sh

ENTRYPOINT ["entrypoint.sh"]