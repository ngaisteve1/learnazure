```mermaid
sequenceDiagram
    participant A as Azure Functions
    participant B as Azure Storage
    participant C as Azure Key Vault
    participant D as Azure Policy
    participant E as Azure Service Bus
    participant F as ARM
    participant G as IAM
    participant H as APP Insights
    participant I as Azure SQL DB
    participant J as Cosmos DB
    participant K as Azure VM
    participant L as Azure VNet
    participant M as Azure Data Factory

    A->>B: Store Data
    A->>C: Retrieve Secrets
    A->>E: Send Messages
    A->>H: Log Performance
    A->>F: Deploy ARM Templates

    B->>C: Store Blob Metadata
    B->>I: Provide Data Access
    B->>J: Provide Data Access

    C->>G: Manage Access
    G->>A: Grant Permissions

    D->>F: Enforce Policies
    D->>K: Secure VM Access
    D->>L: Network Policies

    K->>L: Communicate through VNet
    L->>A: Support Function Networking

    M->>I: ETL Processes
    M->>H: Monitor Data Pipelines
