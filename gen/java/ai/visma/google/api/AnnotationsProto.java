// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: google/api/annotations.proto

package ai.visma.google.api;

public final class AnnotationsProto {
  private AnnotationsProto() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
    registry.add(ai.visma.google.api.AnnotationsProto.http);
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  public static final int HTTP_FIELD_NUMBER = 72295728;
  /**
   * <pre>
   * See `HttpRule`.
   * </pre>
   *
   * <code>extend .google.protobuf.MethodOptions { ... }</code>
   */
  public static final
    com.google.protobuf.GeneratedMessage.GeneratedExtension<
      com.google.protobuf.DescriptorProtos.MethodOptions,
      ai.visma.google.api.HttpRule> http = com.google.protobuf.GeneratedMessage
          .newFileScopedGeneratedExtension(
        ai.visma.google.api.HttpRule.class,
        ai.visma.google.api.HttpRule.getDefaultInstance());

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\034google/api/annotations.proto\022\ngoogle.a" +
      "pi\032\025google/api/http.proto\032 google/protob" +
      "uf/descriptor.proto:K\n\004http\022\036.google.pro" +
      "tobuf.MethodOptions\030\260\312\274\" \001(\0132\024.google.ap" +
      "i.HttpRuleR\004httpB\263\001\n\023ai.visma.google.api" +
      "B\020AnnotationsProtoP\001ZAgoogle.golang.org/" +
      "genproto/googleapis/api/annotations;anno" +
      "tations\242\002\003GAX\252\002\nGoogle.Api\312\002\nGoogle\\Api\342" +
      "\002\026Google\\Api\\GPBMetadata\352\002\013Google::Apib\006" +
      "proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          ai.visma.google.api.HttpProto.getDescriptor(),
          com.google.protobuf.DescriptorProtos.getDescriptor(),
        });
    http.internalInit(descriptor.getExtensions().get(0));
    ai.visma.google.api.HttpProto.getDescriptor();
    com.google.protobuf.DescriptorProtos.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
