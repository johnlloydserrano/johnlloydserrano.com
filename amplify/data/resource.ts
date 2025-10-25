import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Skill: a
    .model({
      name: a.string(),
      imageUrl: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),

  PersonalProject: a
    .model({
      name: a.string(),
      slug: a.string(),
      imageUrl: a.string(),
      description: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),

  Timeline: a
    .model({
      imageUrl: a.string(),
      title: a.string(),
      description: a.string(),
      time: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),

    ContactMessage: a
    .model({
      name: a.string(),
      email: a.string(),
      message: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
