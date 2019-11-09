const stage = process.env.stage;
const resourcesStage = process.env.resourcesStage;
const snsARN = process.env.notePurchasedTopicArn.Ref;
const adminPhoneNumber = "+447706568682";

const stageConfigs = {
  dev: {
    stripeKeyName: "/stripeSecretKey/test"
  },
  prod: {
    stripeKeyName: "/stripeSecretKey/live"
  }
};

const config = stageConfigs[stage] || stageConfigs.dev;

export default {
  stage,
  resourcesStage,
  adminPhoneNumber,
  snsARN,
  ...config
};
