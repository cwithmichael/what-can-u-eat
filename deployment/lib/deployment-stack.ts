import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as ecs from "aws-cdk-lib/aws-ecs";
import * as ecs_patterns from "aws-cdk-lib/aws-ecs-patterns";
import * as secrets from "aws-cdk-lib/aws-secretsmanager";
import path = require("path");

export class DeploymentStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'DeploymentQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    const vpc = new ec2.Vpc(this, "MyVpc", {
      maxAzs: 3, // Default is all AZs in region
    });

    const cluster = new ecs.Cluster(this, "WhatCanYouEatCluster", {
      vpc: vpc,
    });

    const secret = ecs.Secret.fromSecretsManager(
      secrets.Secret.fromSecretNameV2(this, "USDAApiSecret", "usda-api-key")
    );

    // Create a load-balanced Fargate service and make it public
    new ecs_patterns.ApplicationLoadBalancedFargateService(
      this,
      "WhatCanYouEatService",
      {
        cluster: cluster, // Required
        cpu: 256, // Default is 256
        desiredCount: 1, // Default is 1
        taskImageOptions: {
          image: ecs.ContainerImage.fromRegistry("cwithmichael/whatcanueat"),
          environment: {
            name: "PORT",
            value: "3000",
          },
          containerPort: 3000,
          secrets: {
            "usda-api-key": secret,
          },
        },
        healthCheckGracePeriod: cdk.Duration.seconds(180),
        memoryLimitMiB: 512, // Default is 512
        publicLoadBalancer: true, // Default is true,
      }
    );
  }
}
