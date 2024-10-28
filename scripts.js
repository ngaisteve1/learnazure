// Embedded JSON data
const data = [
  {
    "Date": "2024-10-01",
    "Title": "Developed a POC which highlights the asynchronous nature of order handling and the integration of Service Bus for messaging.",
    "Tags": "C#, .NET 8 Isolated, Azure Functions, Azure Service Bus, Azure Storage",
    "Code": "",
    "Video": ""
  },
  {
    "Date": "2024-08-01",
    "Title": "Developed a Console Application for YouTube Integration. This application allows for retrieving YouTube playlists and uploading videos to YouTube using C# and .NET 6. The project utilizes API keys and OAuth 2.0 client IDs for secure interactions with YouTube's API.",
    "Tags": "C#, .NET 6, YouTube API, OAuth 2.0, API Key, Console App",
    "Code": "https://github.com/ngaisteve1/youtube.api",
    "Video": ""
  },
  {
    "Date": "2024-07-01",
    "Title": "Created a Proof of Concept (POC) for Google Ad Manager API Dev Tool. It aims to significantly increase productivity by speeding up development and testing processes. This POC also serves as a foundation for creating other POCs, such as .NET 8 migration and exploring Azure services.",
    "Tags": "C#, NET 8, Azure Web App, Azure SQL Server, Azure Function App, Azure Monitor / AppInsights, Azure DevOps CI / CD",
    "Code": "",
    "Video": ""
  },
  {
    "Date": "2024-06-01",
    "Title": "Deployed locally and to the cloud (Azure) for eShop Reference Application implementing an e-commerce website using a services-based architecture using <a href='https://learn.microsoft.com/en-us/dotnet/aspire/deployment/azure/aca-deployment-azd-in-depth?tabs=windows'>.NET Aspire</a>. Provision all Azure resources including 15 Container App in 11 minutes. Azure cost spent: ~RM20. <a href='#' class='openPopup' data-target='#popup1'>View Log</a></i>",
    "Tags": "C#, NET 8, Container registry (1), Container App (15), Container Apps Environment (1), Log Analytics workspace (1), Azure Monitor / AppInsights, Managed Identity (1), Azure Container Registry (ACR), Azure Developer CLI (azd), Playwright Tests, Github Actions",
    "Code": "https://github.com/ngaisteve1/eshop",
    "Video": [
      "https://www.youtube.com/watch?v=rJMXSVO_Ris",
      "https://www.youtube.com/watch?v=rFkIOsg8e5Q",
      "https://www.youtube.com/watch?v=CkKYDJC5Z1E"
    ]
  },
  {
    "Date": "2024-05-01",
    "Title": "Deployed a minimal starter pipeline in Azure DevOps to build, test, and deploy an ASP.NET Core project, utilizing stages for artifact download and deployment to an Azure Web App.",
    "Tags": "C#, NET 8, Azure Web App, Azure DevOps CI / CD",
    "Code": "",
    "Video": ""
  },
  {
    "Date": "2023-06-01",
    "Title": "Set up the eShopOnContainers using Azure Kubernetes Service to enable continuous deployment to GitLab actions.",
    "Tags": "C#, NET 7, Microservices, GitHub Actions (CI / CD), Azure Kubernetes Service (AKS), Azure Container Registry (ACR)",
    "Code": "https://github.com/ngaisteve1/eShopOnContainers/actions",
    "Video": ""
  },
  {
    "Date": "2023-06-01",
    "Title": "Developed a Blazor web application using MudBlazor and implemented GitHub Action CI/CD to deploy it to Azure Web App.",
    "Tags": "C#, NET 6, Blazor Server, GitHub Actions (CI / CD), Azure Web App",
    "Code": "https://github.com/ngaisteve1/Findingsteve",
    "Video": ""
  },
  {
    "Date": "2023-05-01",
    "Title": "Created a mock eCommerce solution with microservices project and folder structure",
    "Tags": "C#, Azure Functions, Azure Service Bus",
    "Code": "https://github.com/ngaisteve1/Sloopee",
    "Video": ""
  },
  {
    "Date": "2023-05-01",
    "Title": "Created two demo .NET 6 projects in a solution: a web app using Blazor Server, which sends web API requests to Azure Functions and receives a string response to display on the web app.",
    "Tags": "C#, NET 6, Azure Functions, Azure AppInsights, Blazor Server, GitHub Actions (CI / CD)",
    "Code": "https://github.com/ngaisteve1/AzureFunctionsDemo",
    "Video": ""
  },
  {
    "Date": "2022-08-01",
    "Title": "Successfully deployed eShopOnContainers microservices of all 21 containers to Docker Desktop using Docker Compose and up all the web apps and health check app and debug it",
    "Tags": "C#, NET 6, Docker, Docker Compose, Microservices, Api gateway",
    "Code": "https://github.com/dotnet-architecture/eShopOnContainers",
    "Video":
      [
        "https://youtu.be/qazYWpOKLU8"
      ]
  },
  {
    "Date": "2022-07-30",
    "Title": "All 63 unit tests and functional tests passed. Deployed eShopOnContainers microservices of 21 containers to Docker Desktop using Docker Compose",
    "Tags": "C#, NET 6, Docker, Docker Compose, Microservices, Api gateway",
    "Code": "https://github.com/dotnet-architecture/eShopOnContainers",
    "Video": ""
  },
  {
    "Date": "2022-07-29",
    "Title": "Deployed Book Management Web App to Docker Window using Docker Compose (App and Db)",
    "Tags": "C#, NET 6, Docker, SQL Server",
    "Code": "https://findingsteve.visualstudio.com/_git/v5-dockerComposeAspNetCpre",
    "Video": ["https://youtu.be/-xnEPRsetIM"]
  },
  {
    "Date": "2022-07-28",
    "Title": "Setup Azure Devops CI pipeline (with Test Result) for CF Customer Api.",
    "Tags": "Azure DevOps (Pipelines CI), C#, NET 6, Web Api, EF Core, XUnit, MOQ",
    "Code": "https://findingsteve.visualstudio.com/_git/cf_api_net_core",
    "Video": ["https://youtu.be/z5P96uXwcG8"]
  },
  {
    "Date": "2022-07-25",
    "Title": "Setup Azure DevOps CI pipeline (with Test Result) for CF Store Api",
    "Tags": "Azure DevOps (Pipelines CI), C#, NET 6, Web Api, EF Core, XUnit, MOQ",
    "Code": "https://findingsteve.visualstudio.com/_git/cf_store_api",
    "Video": ["https://youtu.be/7DJzC-4MWD8"]
  },
  {
    "Date": "2022-07-24",
    "Title": "Deploy .NET 6 Web API to Azure Kubernetes Service (AKS) with Azure DevOps Pipelines (CI/CD)",
    "Tags": "Azure Kubernetes Service (AKS), Azure DevOps (Pipelines CI/CD), C#, NET 6",
    "Code": "",
    "Video": ["https://youtu.be/z5P96uXwcG8"]
  },
  {
    "Date": "2022-07-24",
    "Title": "Successfully deployed a Blazor Server to Azure App Service using Docker, Visual Studio Community 2022",
    "Tags": "Azure App Service, Docker, Visual Studio Community 2022",
    "Code": "",
    "Video": ["https://youtu.be/jpFS9u4AUf4"]
  },
  {
    "Date": "2022-07-23",
    "Title": "Created ASP.NET Core 5 MVC application with GitHub Actions CI / CD to deploy to Azure App Service",
    "Tags": "Azure App Service, GitHub Actions CI/CD, C#, ASP.NET Core 5, MVC",
    "Code": "",
    "Video": ["https://youtu.be/M6b8JkGsmAk"]
  }
];

$(document).ready(function () {
  $(document).on("click", ".openPopup", function (event) {
    event.preventDefault();
    $("#popup").modal('show');
  });

  $("#closePopup, #closePopupFooter").on("click", function () {
    $("#popup").modal('hide');
  });

  // Populate the DataTable
  const table = $('#tbl').DataTable({
    data: data,
    columns: [
      {
        data: 'Date',
        render: function (data, type, row) {
          const date = new Date(data);
          const year = date.getFullYear();
          const month = ('0' + (date.getMonth() + 1)).slice(-2);
          return `${year}-${month}`;
        }
      },
      {
        data: 'Title',
        render: function (data, type, row) {
          // Ensure HTML tags are rendered correctly in DataTables
          return type === 'display' ? data : data.replace(/<[^>]+>/g, '');
        }
      },
      { data: 'Tags' },
      {
        data: 'Code', visible: false,
        render: function (data, type, row) {
          return type === 'display' && data ? `<a href="${data}">Code</a>` : data;
        }
      },
      {
        data: 'Video', visible: false,
        render: function (data, type, row) {
          if (type === 'display' && data && Array.isArray(data)) {
            return data.map((video, index) => `<a href="${video}" target="_blank">Video ${index + 1}</a>`).join(', ');
          }
          return data;
        }
      }
    ],
    order: [[0, 'desc']],
    paging: false,
    info: false
  });

  const params = new URLSearchParams(window.location.search);
  if (params.get('id') === 's') {
    // Show columns if param.id == 's'
    table.columns([3, 4]).visible(true);
  }

  // Filter by year functionality
  $(".year-filter").on("click", function (event) {
    event.preventDefault();
    const year = $(this).data("year");

    // Reset search and sorting before applying new filter
    table.search("").columns().search("").draw();

    table.column(0).search(year, true, false).draw();
    table.order([0, 'desc']).draw();
  });
});

