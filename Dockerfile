# Use an official Bun runtime as the base image
FROM oven/bun:1

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./
COPY bun.lockb ./
COPY src ./

# Install dependencies
RUN bun install

# Copy the rest of the application code
COPY . .

# Expose the port the application runs on
EXPOSE 8000

# Start the application
CMD ["bun" ,"run" ,"start"]


# Build Image Command
# docker build -t mhaqnegahdar/portfolio-backend:1.0 .

# Run Image Command
# docker run --env-file .env -p 8000:8000 your-image-name


