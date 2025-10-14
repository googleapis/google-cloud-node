

# Use a minimal base image
FROM marketplace.gcr.io/google/debian12:latest

# Set the working directory to /source
WORKDIR /source

# Create a dummy file in /source to show it works
RUN echo "This is a test file." > testfile.txt

# Command to execute when the container starts
# It prints "Hello, World!" and then lists the contents of the current directory (/source)
CMD ["sh", "-c", "echo 'Hello, World!' && ls -l"]

COPY entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["entrypoint.sh"]

