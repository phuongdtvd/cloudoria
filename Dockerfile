FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

# Define the service ID as a build argument
ARG SERVICE_ID=3b1b7383-d67c-48bd-8a98-15f4c29ef28d

FROM base AS prod-deps
# Use the service ID in the --mount option
RUN --mount=type=cache,id=s/${SERVICE_ID}-/root/cache/pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
# Use the service ID in the --mount option
RUN --mount=type=cache,id=s/${SERVICE_ID}-/root/cache/pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

FROM base
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist
EXPOSE 8000
CMD [ "pnpm", "start" ]
