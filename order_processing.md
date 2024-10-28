```mermaid
sequenceDiagram
    participant Client as Order Submission Client
    participant ServiceBus as Azure Service Bus (Queue)
    participant Function as Azure Function (Order Processor)
    participant Storage as Azure Storage

    Client->>ServiceBus: Send Order Message (JSON)
    ServiceBus-->>ServiceBus: Message Enqueued in Queue

    Note right of Function: Triggered by new message in Service Bus Queue

    ServiceBus->>Function: Order Message
    Function->>Function: Parse Order JSON
    Function->>Function: Process Order (Calculate Total, etc.)
    
    alt Use Blob Storage
        Function->>Storage: Save Order as JSON file (Blob Storage)
    else Use Table Storage
        Function->>Storage: Insert Order as Record (Table Storage)
    end

    Note over Client, Storage: Order processing and storage complete
