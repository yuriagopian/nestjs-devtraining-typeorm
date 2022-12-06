#! /bin/bash

npm install
npm run build
# npm run typeorm migration:run -- -d ./typeOrm.config.ts
# npm run typeorm:run-migrations
npm run start:dev

#!/bin/bash

# npm install
# npm run build
# npx typeorm migration:run
# npm run start:dev