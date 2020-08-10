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


ARG GRPC_WEB_VERSION=1.0.7
RUN curl -sSL \
  https://github.com/grpc/grpc-web/releases/download/${GRPC_WEB_VERSION}/protoc-gen-grpc-web-${GRPC_WEB_VERSION}-linux-x86_64 \
  -o /usr/local/bin/protoc-gen-grpc-web && \
  chmod +x /usr/local/bin/protoc-gen-grpc-web

ARG PROTOTOOL_VERSION=1.8.0
RUN curl -sSL \
  https://github.com/uber/prototool/releases/download/v${PROTOTOOL_VERSION}/prototool-Linux-x86_64 \
  -o /usr/local/bin/prototool && \
  chmod +x /usr/local/bin/prototool

WORKDIR /app

COPY ["go.mod", "go.sum", "/app/"]
RUN go get . \
  && go install github.com/golang/mock/mockgen \
  && go install github.com/GoogleCloudPlatform/protoc-gen-bq-schema \
	&& go install google.golang.org/grpc/cmd/protoc-gen-go-grpc \ 
  && go install google.golang.org/protobuf/cmd/protoc-gen-go

ENV PATH="/root/go/bin:${PATH}"

COPY Makefile /app/
COPY deps deps
COPY scripts scripts
COPY proto proto
RUN make all
