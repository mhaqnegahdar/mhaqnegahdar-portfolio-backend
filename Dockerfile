FROM oven/bun:1 AS base
WORKDIR /usr/src/app

# --- Dependency Installation Stage ---
FROM base AS install

# - Install Dev dependencies
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install

# - Install Prod Dependencies
RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# --- Build Stage ---
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .
ENV NODE_ENV=production
RUN bun run build  

FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
# Copy only dist folder and package.json
COPY --from=prerelease /usr/src/app/dist dist
COPY --from=prerelease /usr/src/app/package.json .

# Set entrypoint to use built files
USER bun
EXPOSE 8000
ENTRYPOINT [ "bun", "run", "start-built" ]
