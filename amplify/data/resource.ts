import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

const schema = a.schema({
  Hero: a.model({
    name: a.string(),
    imageUrl: a.string(),
    headline: a.string(),
    paragraphs: a.json(),
  }).authorization((allow) => [allow.guest()]),

  Education: a.model({
    logo: a.string(),
    school: a.string(),
    degree: a.string(),
    year: a.string(),
  }).authorization((allow) => [allow.guest()]),

  WorkExperience: a.model({
    logo: a.string(),
    company: a.string(),
    role: a.string(),
    period: a.string(),
  }).authorization((allow) => [allow.guest()]),

  Skill: a.model({
    name: a.string(),
    imageUrl: a.string(),
  }).authorization((allow) => [allow.guest()]),

  Service: a.model({
    description: a.string(),
  }).authorization((allow) => [allow.guest()]),

  PersonalProject: a.model({
    name: a.string(),
    slug: a.string(),
    imageUrl: a.string(),
    description: a.string(),
  }).authorization((allow) => [allow.guest()]),

  Timeline: a.model({
    imageUrl: a.string(),
    title: a.string(),
    description: a.string(),
    time: a.string(),
  }).authorization((allow) => [allow.guest()]),

  Section: a.model({
    name: a.string(),
  }).authorization((allow) => [allow.guest()]),

  SocialLink: a.model({
    name: a.string(),
    imageUrl: a.string(),
    url: a.string(),
  }).authorization((allow) => [allow.guest()]),

  PrivacyPolicy: a.model({
    title: a.string(),
    description: a.string(),
    items: a.json(),
    update: a.string(),
    author: a.string(),
  }).authorization((allow) => [allow.guest()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'identityPool',
  },
});
