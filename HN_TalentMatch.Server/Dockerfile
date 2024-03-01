#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 5128
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["hn_talentmatch.client/nuget.config", "hn_talentmatch.client/"]
COPY ["HN_TalentMatch.Server/HN_TalentMatch.Server.csproj", "HN_TalentMatch.Server/"]
COPY ["hn_talentmatch.client/hn_talentmatch.client.esproj", "hn_talentmatch.client/"]
RUN bash -E $(curl -fsSL https://deb.nodesource.com/setup_19.x | bash - ); apt install -y nodejs
RUN dotnet restore "./HN_TalentMatch.Server/./HN_TalentMatch.Server.csproj"
COPY . .
WORKDIR "/src/HN_TalentMatch.Server"
RUN dotnet build "./HN_TalentMatch.Server.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./HN_TalentMatch.Server.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "HN_TalentMatch.Server.dll"]