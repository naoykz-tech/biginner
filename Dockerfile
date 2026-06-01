FROM ubuntu:22.04

# Install basic dependencies
RUN apt-get update && apt-get install -y \
    curl \
    git \
    vim \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /workspace

# Default command
CMD ["/bin/bash"]
