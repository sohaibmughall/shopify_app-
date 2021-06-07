require("isomorphic-fetch");
const dotenv = require("dotenv");
const Koa = require("koa");
const next = require("next");
const { default: createShopifyAuth } = require("@shopify/koa-shopify-auth");
const { verifyRequest } = require("@shopify/koa-shopify-auth");
const { default: Shopify, ApiVersion } = require("@shopify/shopify-api");
const Router = require("koa-router");
const axios = require("axios")
const {
  receiveWebhook,
  registerWebhook,
} = require("@shopify/koa-shopify-webhooks");

dotenv.config();

Shopify.Context.initialize({
  API_KEY: process.env.SHOPIFY_API_KEY,
  API_SECRET_KEY: process.env.SHOPIFY_API_SECRET,
  SCOPES: process.env.SHOPIFY_API_SCOPES.split(","),
  HOST_NAME: process.env.HOST.replace(/https:\/\//, ""),
  API_VERSION: ApiVersion.October20,
  IS_EMBEDDED_APP: true,
  SESSION_STORAGE: new Shopify.Session.MemorySessionStorage(),
});

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const ACTIVE_SHOPIFY_SHOPS = {};

console.log(ACTIVE_SHOPIFY_SHOPS, "shops");

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();
  server.keys = [Shopify.Context.API_SECRET_KEY];

  server.use(
    createShopifyAuth({
      async afterAuth(ctx) {
        const { shop, scope, accessToken } = ctx.state.shopify;
        ACTIVE_SHOPIFY_SHOPS[shop] = scope;
        ctx.redirect(`/?shop=${shop}`);
        // ctx.cookies.set("shopOrigin", shop, {
        //   httpOnly: false,
        //   secure: true,
        //   sameSite: "none",
        // });

        // const registration = await registerWebhook({
        //   address: `${process.env.SHOPIFY_API_SECRET}/webhooks/products/create`,
        //   topic: 'PRODUCTS_CREATE',
        //   accessToken,
        //   shop,
        //   apiVersion: ApiVersion.October20
        // });

        const registration = await registerWebhook({
          address: `${process.env.HOST}/webhooks/orders/create`,
          topic: 'ORDERS_CREATE',
          accessToken,
          shop,
          apiVersion: ApiVersion.October20
        });

        if (registration.success) {
          console.log("Successfully registered webhook!");
        } else {
          console.log("Failed to register webhook", registration.result);
        }
      },



      // const registration = await registerWebhook({
      //   address: `${process.env.SHOPIFY_APP_URL}/webhooks/orders/create`,
      //   topic: "order/create",
      //   accessToken,
      //   shop,
      //   apiVersion: ApiVersion.October20,
      // });

      // if (registration.success) {
      //   console.log("Successfully registered webhook!");
      // } else {
      //   console.log("Failed to register webhook", registration.result);
      // }

      // },
    })
  );
  const webhook = receiveWebhook({ secret: process.env.SHOPIFY_API_SECRET });

  router.post("/webhooks/orders/create", webhook, (ctx) => {
    console.log("received webhook: ", ctx.state.webhook);
    axios.post('http://portaladmin.edropship.co.uk/api/set/order/test', {
      store_name: ctx.state.webhook.domain, playload: JSON.stringify(ctx.state.webhook.payload)
    })
      .then(function (response) {
        console.log(response, "sucsses");
      })
      .catch(function (error) {
        console.log(error);
      });

  });

  // router.post('/webhooks', async (ctx) => {
  //   await Shopify.Webhooks.Registry.process(ctx.req, ctx.res);
  //   console.log(`Webhook processed with status code 200`);
  // });

  const handleRequest = async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
  };

  router.get("/", async (ctx) => {
    const shop = ctx.query.shop;

    if (ACTIVE_SHOPIFY_SHOPS[shop] === undefined) {
      ctx.redirect(`/auth?shop=${shop}`);
    } else {
      await handleRequest(ctx);
    }
  });

  router.get("(/_next/static/.*)", handleRequest);
  router.get("/_next/webpack-hmr", handleRequest);
  router.get("(.*)", verifyRequest(), handleRequest);

  server.use(router.allowedMethods());
  server.use(router.routes());

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
