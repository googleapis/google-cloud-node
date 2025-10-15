

# Use a minimal base image
FROM marketplace.gcr.io/google/debian12:latest

# Set the USER environment variable
ENV USER=node

# Add NodeSource APT repository for Node.js v18
RUN apt-get update && apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

# Remove unnecessary cross-spawn from npm to resolve CVE-2024-21538
RUN rm -r /usr/lib/node_modules/npm/node_modules/cross-spawn

 # Install Bazel                                                                             
RUN apt-get update && apt-get install -y apt-transport-https curl gnupg && \                                      
    curl -fsSL https://bazel.build/bazel-release.pub.gpg | gpg --dearmor > /etc/apt/trusted.gpg.d/bazel.gpg && \  
    echo "deb [arch=amd64] https://storage.googleapis.com/bazel-apt stable jdk1.8" | tee /etc/apt/sources.list.d/bazel.list && \                                                                             
    apt-get update && \                                                                                           
    apt-get install -y bazel && \                                                                                 
    rm -rf /var/lib/apt/lists/*                                                                                   

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

