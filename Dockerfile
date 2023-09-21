# Define the build stage
FROM mcr.microsoft.com/dotnet/sdk:7.0.302 AS build
WORKDIR /build

# Install Node.js and update package lists
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get update
RUN apt-get install -y nodejs

# Copy and restore .NET Core project dependencies
COPY ./*.csproj .
RUN dotnet restore

# Copy the entire project and build it
COPY . .
WORKDIR /build
RUN dotnet publish -c release -o published --no-cache

# Define the runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app

# Copy the published application from the build stage
COPY --from=build /build/published ./

# Set the entry point
ENTRYPOINT ["dotnet", "PortfolioWebsiteKgoDev.dll"]
