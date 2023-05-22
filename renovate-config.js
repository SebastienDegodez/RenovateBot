const defaultLabels = [
  "dependencies",
  "renovatebot",
];

module.exports = {
    labels: [...defaultLabels],
    platform: 'azure',
    onboardingConfig: {
        extends: [  
            'local>org/renovate-config',
            'config:base',
            'default:pinDigestsDisabled',
            'group:dotNetCore'
        ],
    },
    hostRules: [
        {
            hostType: 'nuget',
            matchHost: 'pkgs.dev.azure.com',
            username: 'apikey',
            password: process.env.AZURE_DEVOPS_ARTIFACT,
        },
        {
            hostType: 'npm',
            matchHost: 'pkgs.dev.azure.com',
            username: 'apikey',
            password: process.env.AZURE_DEVOPS_ARTIFACT,
        },
        {
            hostType: 'maven',
            matchHost: 'pkgs.dev.azure.com',
            username: 'apikey',
            password: process.env.AZURE_DEVOPS_ARTIFACT,
        },
    ],
};