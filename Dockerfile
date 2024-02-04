FROM postgres as mtgdb
WORKDIR /app
COPY ./prisma/init.sh /docker-entrypoint-initdb.d
COPY ./prisma/seed/AllPrintings.psql ./prisma/seed/AllPrintings.sql
