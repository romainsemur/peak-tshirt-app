# Peak Tshirt Web App

> On vend des tshirts et on le fait bien

## Getting Started

Create an /public/config.json file with

```json
{
  "API_BASE_URL": "http://localhost:3001"
}
```

It should be a `REACT_APP_API_BASE_URL` env var to host it on Netlify
Install dependencies :

```shell
yarn
```

Run the dev server and the local API:

```shell
yarn start:api
yarn start
```

Make your move, develop your nex feat, then commit with :

```shell
yarn commit
```

## Mockup

![MockUp](./docs/mockup.png)

## Design system

Le Design System (DS) sera mis en place à travers l'approche [Atomic Design]() depuis le _folder_ `src/ds/`.

## Storybook

Run storybook :

```shell
yarn storybook
```

## CRA

[Official CRA doc](./docs/CRA.md).
