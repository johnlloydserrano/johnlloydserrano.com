import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Hero: a
    .model({
      name: a.string(),
      imageUrl: a.string(),
      headline: a.string(),
      paragraphs: a.json(),
    })
    .authorization((allow) => [allow.publicApiKey()]),

  Education: a
    .model({
      logo: a.string(),
      school: a.string(),
      degree: a.string(),
      year: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),

  WorkExperience: a
    .model({
      logo: a.string(),
      company: a.string(),
      role: a.string(),
      period: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),

  Skill: a
    .model({
      name: a.string(),
      imageUrl: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),

  Service: a
    .model({
      description: a.string(),
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

  Section: a
    .model({
      name: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),

  SocialLink: a
    .model({
      name: a.string(),
      imageUrl: a.string(),
      url: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),

  PrivacyPolicy: a
    .model({
      title: a.string(),
      description: a.string(),
      items: a.json(),
      update: a.string(),
      author: a.string(),
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
