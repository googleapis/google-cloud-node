# Use a minimal base image
FROM marketplace.gcr.io/google/debian12:latest

# Add NodeSource APT repository for Node.js v18
RUN apt-get update && apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

# Remove unnecessary cross-spawn from npm to resolve CVE-2024-21538
RUN rm -r /usr/lib/node_modules/npm/node_modules/cross-spawn

# Install bazelisk
RUN npm install -g @bazel/bazelisk

# --- START of Arbitrary User Fixes for Bazel/Bazelisk ---

# Set environment variables for both Bazelisk and the underlying Bazel binary
# to ensure they operate in world-writable /tmp directories. This is critical
# for running the container as an arbitrary, non-root user (UID/GID specified by Librarian).
ENV BAZELISK_RC_FILE=/tmp/.bazeliskrc
ENV BAZELISK_HOME=/tmp/bazelisk_home

# Set environment variables for the arbitrary user (from Dockerfile.snippet)
ENV BAZEL_HOME="/tmp/.bazel"
ENV BAZEL_CACHE_DIR="/tmp/.bazel_cache"

# Create and set permissions for the required cache directories.
# The directories must be created and set to a+rwx (read/write/execute for all)
# before the container runs as the arbitrary non-root user.
RUN mkdir -p ${BAZEL_HOME} && \
    chmod -R a+rwx ${BAZEL_HOME} && \
    mkdir -p ${BAZEL_CACHE_DIR} && \
    chmod -R a+rwx ${BAZEL_CACHE_DIR}

# NOTE: The previous 'ENV USER=root' has been removed to prevent Bazel/Node
# from looking for configuration files in the non-writable /root directory.

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
