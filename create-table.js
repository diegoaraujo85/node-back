import { sql } from './db.js'

sql`DROP TABLE IF EXISTS videos`.then(() => {
  console.log('Tabela apagada com sucesso!')
})

sql`
    CREATE TABLE IF NOT EXISTS videos (
      id TEXT PRIMARY KEY,
      title TEXT,
      description TEXT,
      duration integer
    )
  `
  .then(() => {
    console.log('Tabela criada com sucesso!')
  })
