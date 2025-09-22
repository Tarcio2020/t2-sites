# Etapa 1 - Build
FROM node:18-alpine AS builder

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todo o código
COPY . .

# Rodar o build do Next.js
RUN npm run build


# Etapa 2 - Produção
FROM node:18-alpine AS runner

# Definir diretório de trabalho
WORKDIR /app

# Copiar apenas o necessário da etapa de build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Definir variáveis de ambiente
ENV NODE_ENV=production

# Porta usada pelo Next.js
EXPOSE 3000

# Comando para iniciar
CMD ["npm", "start"]
