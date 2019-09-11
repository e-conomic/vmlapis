FROM buildpack-deps:buster-scm

RUN apt-get update && \
  apt-get install -y --no-install-recommends \
  protobuf-compiler-grpc \
  g++ \
  gcc \
  libc6-dev \
  make \
  pkg-config \
  golang \
  golang-goprotobuf-dev


ARG GRPC_GATEWAY_VERSION=1.8.5
RUN curl -sSL \
  https://github.com/grpc-ecosystem/grpc-gateway/releases/download/v${GRPC_GATEWAY_VERSION}/protoc-gen-grpc-gateway-v${GRPC_GATEWAY_VERSION}-linux-x86_64 \
  -o /usr/local/bin/protoc-gen-grpc-gateway && \
  curl -sSL \
  https://github.com/grpc-ecosystem/grpc-gateway/releases/download/v${GRPC_GATEWAY_VERSION}/protoc-gen-swagger-v${GRPC_GATEWAY_VERSION}-linux-x86_64 \
  -o /usr/local/bin/protoc-gen-swagger && \
  chmod +x /usr/local/bin/protoc-gen-grpc-gateway && \
  chmod +x /usr/local/bin/protoc-gen-swagger

ARG PROTOTOOL_VERSION=1.8.0
RUN curl -sSL \
  https://github.com/uber/prototool/releases/download/v${PROTOTOOL_VERSION}/prototool-Linux-x86_64 \
  -o /usr/local/bin/prototool && \
  chmod +x /usr/local/bin/prototool

WORKDIR /app

COPY ["go.mod", "go.sum", "/app/"]
RUN go get . \
  && go install github.com/golang/mock/mockgen \
  && go install github.com/GoogleCloudPlatform/protoc-gen-bq-schema

ENV PATH="/root/go/bin:${PATH}"

COPY Makefile /app/
COPY deps deps
COPY scripts scripts
COPY proto proto
RUN make all
