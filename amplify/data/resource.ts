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
      productHunt: a.customType({
        title: a.string(),
        position: a.string(),
        totalLaunches: a.string(),
        launchDate: a.string(),
        logoUrl: a.string(),
      }),
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

  ProjectDetail: a
    .model({
      slug: a.string().required(),
      title: a.string().required(),
      overview: a.string(),
      objectives: a.string().array(),
      keyFeatures: a.string().array(),
      techStack: a.string().array(),
      outcomes: a.string(),
      design: a.string(),
      improvements: a.string().array(),
      conclusion: a.string(),
      images: a.customType({
        banner: a.string(),
        diagram: a.string(),
      }),
      repository: a.string(),
      productHunt: a.customType({
        description: a.string(),
        position: a.string(),
        totalLaunches: a.string(),
        launchDate: a.string(),
        embedImageUrl: a.string(),
        screenshots: a.string().array(),
        link: a.string(),
      }),
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
