# music-tribe

## Development Environment Setup

- Nodejs. Refer to package.json for current
- Postgres
```sql
CREATE DATABASE music_tribe;
CREATE DATABASE music_tribe_test;
CREATE ROLE music_tribe_user WITH PASSWORD 'password' LOGIN;
GRANT ALL ON DATABASE music_tribe to music_tribe_user;
GRANT ALL ON DATABASE music_tribe_test to music_tribe_user;
```
```shell
npm install
NODE_ENV=development npm start
```

## Testing
```shell
npm test
```
