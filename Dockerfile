# ---- deps: install once, reused by every other stage ----
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ---- dev: hot-reloading Vite dev server, used by `docker compose up` ----
FROM deps AS dev
COPY . .
EXPOSE 3003
CMD ["npm", "run", "dev"]

# ---- build: compile the static production bundle ----
FROM deps AS build
COPY . .
RUN npm run build

# ---- prod: serve the built files with a tiny static server ----
# Not wired into compose.yml (that runs `dev`); build it directly with:
#   docker build --target prod -t wiski-landing:prod .
#   docker run -p 8080:80 wiski-landing:prod
FROM nginx:1.27-alpine AS prod
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
