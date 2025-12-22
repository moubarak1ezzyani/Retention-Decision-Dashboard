# Étape 1 : Construction
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Étape 2 : Exécution (Image plus légère)
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

# Création d'un utilisateur non-root pour la sécurité
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copie des fichiers buildés depuis l'étape 1 (constr)
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]