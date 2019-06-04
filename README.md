# Website built for Tartu Linna Asutus Varjupaik.

Built using next.js, deployed to now.sh as serverless functions.

# Development & Deployment

You need the Zeit now-cli for this.
Install it with the following command:
`yarn global add now`

To run the project in the serverless mode locally, use the following command:
`now dev`

To deploy the project to your now.sh account run
`yarn run deploy`

or use now-cli directly:
`now --target production`
