```mermaid
sequenceDiagram
    participant A as Developer
    participant B as Azure DevOps
    participant C as Azure CLI
    participant D as ARM
    participant E as Resource Group
    participant F as IAM

    A->>B: Trigger CI/CD Pipeline
    B->>C: Run Azure CLI Commands
    C->>D: Deploy Resources via ARM Template
    D->>E: Create/Update Resource Group
    E-->>D: Resource Group Created/Updated
    D->>F: Check Permissions (IAM)
    F-->>D: Permissions Granted
    D->>E: Provision Resources in Resource Group
    E-->>D: Resources Provisioned
    B->>A: Deployment Complete Notification
