# Ethefund Interface
Ethefund is a grant DAO on Ethereum focused on supporting various projects. The following repository is for the front-end interface.

## Technology Stack & Tools
- Typescript
- Next.js
- Tailwind
- MetaMask
- Ethers
- Web3 Modal

## Getting Started
1. Download/Clone the repository.

2. Install dependencies
`npm install`

3. Start Postgres Docker instance
`docker run --name ethefund_postgres_db -e POSTGRES_USER=glitchical -e POSTGRES_PASSWORD=h5av3lq9x -e POSTGRES_DB=ethefund_database -p 5432:5432 -d postgres`

To start the existing container if already created, you can find the container ID by executing `docker ps -a` followed by `docker start <container_id>`.

4. Run migrations
`npx prisma migrate dev --name init`

3. Start app
`npm run dev`