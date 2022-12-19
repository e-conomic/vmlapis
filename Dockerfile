FROM buildpack-deps:bullseye-scm

COPY --from=golang:1.18-bullseye /usr/local/go/ /usr/local/go/
COPY --from=bitnami/dotnet-sdk /opt/bitnami/dotnet-sdk /usr/local/dotnet-sdk

ENV PATH=/usr/local/go/bin:${PATH}
ENV GOPATH=/go
ENV PATH=/go/bin:$PATH

RUN mkdir -p ${GOPATH}/src ${GOPATH}/bin

RUN apt-get update && \
  apt-get install -y --no-install-recommends \
  protobuf-compiler-grpc \
  make \
  golang-goprotobuf-dev \
  apt-transport-https \
  libicu-dev \
  maven

COPY dotnet-install.sh dotnet-install.sh
RUN chmod +x ./dotnet-install.sh && ./dotnet-install.sh

ARG BIN=/usr/local/bin
ARG VERSION=1.8.0 
RUN curl -sSL \
  https://github.com/bufbuild/buf/releases/download/v${VERSION}/buf-$(uname -s)-$(uname -m) \
  -o ${BIN}/buf && \  
  chmod +x ${BIN}/buf
ENV PATH=/root/.dotnet:$PATH

WORKDIR /app

COPY ["go.mod", "go.sum", "buf.gen.*", "/app/"]
RUN go get all \
  && go install \
  github.com/golang/mock/mockgen \
  github.com/envoyproxy/protoc-gen-validate

COPY Makefile /app/
COPY deps deps
COPY scripts scripts
COPY proto proto
RUN make all

COPY vmlapis.csproj gen/csharp
WORKDIR gen/csharp
RUN dotnet pack --output .

WORKDIR /app
COPY java-package java-package
RUN cp -R gen/java java-package/src/main
WORKDIR java-package
RUN mvn package -q
#RUN cp target/vml-apis-1.0.2.jar /app/gen/java
