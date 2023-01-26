// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: asgt/modelregistry/v1/model_registry.proto
// </auto-generated>
#pragma warning disable 0414, 1591, 8981
#region Designer generated code

using grpc = global::Grpc.Core;

namespace Asgt.Modelregistry.V1 {
  public static partial class ModelRegistry
  {
    static readonly string __ServiceName = "asgt.modelregistry.v1.ModelRegistry";

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static void __Helper_SerializeMessage(global::Google.Protobuf.IMessage message, grpc::SerializationContext context)
    {
      #if !GRPC_DISABLE_PROTOBUF_BUFFER_SERIALIZATION
      if (message is global::Google.Protobuf.IBufferMessage)
      {
        context.SetPayloadLength(message.CalculateSize());
        global::Google.Protobuf.MessageExtensions.WriteTo(message, context.GetBufferWriter());
        context.Complete();
        return;
      }
      #endif
      context.Complete(global::Google.Protobuf.MessageExtensions.ToByteArray(message));
    }

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static class __Helper_MessageCache<T>
    {
      public static readonly bool IsBufferMessage = global::System.Reflection.IntrospectionExtensions.GetTypeInfo(typeof(global::Google.Protobuf.IBufferMessage)).IsAssignableFrom(typeof(T));
    }

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static T __Helper_DeserializeMessage<T>(grpc::DeserializationContext context, global::Google.Protobuf.MessageParser<T> parser) where T : global::Google.Protobuf.IMessage<T>
    {
      #if !GRPC_DISABLE_PROTOBUF_BUFFER_SERIALIZATION
      if (__Helper_MessageCache<T>.IsBufferMessage)
      {
        return parser.ParseFrom(context.PayloadAsReadOnlySequence());
      }
      #endif
      return parser.ParseFrom(context.PayloadAsNewBuffer());
    }

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Asgt.Modelregistry.V1.RegisterModelRequest> __Marshaller_asgt_modelregistry_v1_RegisterModelRequest = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Asgt.Modelregistry.V1.RegisterModelRequest.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Google.Protobuf.WellKnownTypes.Empty> __Marshaller_google_protobuf_Empty = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Google.Protobuf.WellKnownTypes.Empty.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Asgt.Modelregistry.V1.GetCurrentModelRequest> __Marshaller_asgt_modelregistry_v1_GetCurrentModelRequest = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Asgt.Modelregistry.V1.GetCurrentModelRequest.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Asgt.Modelregistry.V1.GetCurrentModelResponse> __Marshaller_asgt_modelregistry_v1_GetCurrentModelResponse = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Asgt.Modelregistry.V1.GetCurrentModelResponse.Parser));

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::Asgt.Modelregistry.V1.RegisterModelRequest, global::Google.Protobuf.WellKnownTypes.Empty> __Method_RegisterModel = new grpc::Method<global::Asgt.Modelregistry.V1.RegisterModelRequest, global::Google.Protobuf.WellKnownTypes.Empty>(
        grpc::MethodType.Unary,
        __ServiceName,
        "RegisterModel",
        __Marshaller_asgt_modelregistry_v1_RegisterModelRequest,
        __Marshaller_google_protobuf_Empty);

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::Asgt.Modelregistry.V1.GetCurrentModelRequest, global::Asgt.Modelregistry.V1.GetCurrentModelResponse> __Method_GetCurrentModel = new grpc::Method<global::Asgt.Modelregistry.V1.GetCurrentModelRequest, global::Asgt.Modelregistry.V1.GetCurrentModelResponse>(
        grpc::MethodType.Unary,
        __ServiceName,
        "GetCurrentModel",
        __Marshaller_asgt_modelregistry_v1_GetCurrentModelRequest,
        __Marshaller_asgt_modelregistry_v1_GetCurrentModelResponse);

    /// <summary>Service descriptor</summary>
    public static global::Google.Protobuf.Reflection.ServiceDescriptor Descriptor
    {
      get { return global::Asgt.Modelregistry.V1.ModelRegistryReflection.Descriptor.Services[0]; }
    }

    /// <summary>Base class for server-side implementations of ModelRegistry</summary>
    [grpc::BindServiceMethod(typeof(ModelRegistry), "BindService")]
    public abstract partial class ModelRegistryBase
    {
      /// <summary>
      ///  rpc DeleteModel (DeleteModelRequest) returns (google.protobuf.Empty);
      /// </summary>
      /// <param name="request">The request received from the client.</param>
      /// <param name="context">The context of the server-side call handler being invoked.</param>
      /// <returns>The response to send back to the client (wrapped by a task).</returns>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task<global::Google.Protobuf.WellKnownTypes.Empty> RegisterModel(global::Asgt.Modelregistry.V1.RegisterModelRequest request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task<global::Asgt.Modelregistry.V1.GetCurrentModelResponse> GetCurrentModel(global::Asgt.Modelregistry.V1.GetCurrentModelRequest request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

    }

    /// <summary>Client for ModelRegistry</summary>
    public partial class ModelRegistryClient : grpc::ClientBase<ModelRegistryClient>
    {
      /// <summary>Creates a new client for ModelRegistry</summary>
      /// <param name="channel">The channel to use to make remote calls.</param>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public ModelRegistryClient(grpc::ChannelBase channel) : base(channel)
      {
      }
      /// <summary>Creates a new client for ModelRegistry that uses a custom <c>CallInvoker</c>.</summary>
      /// <param name="callInvoker">The callInvoker to use to make remote calls.</param>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public ModelRegistryClient(grpc::CallInvoker callInvoker) : base(callInvoker)
      {
      }
      /// <summary>Protected parameterless constructor to allow creation of test doubles.</summary>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      protected ModelRegistryClient() : base()
      {
      }
      /// <summary>Protected constructor to allow creation of configured clients.</summary>
      /// <param name="configuration">The client configuration.</param>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      protected ModelRegistryClient(ClientBaseConfiguration configuration) : base(configuration)
      {
      }

      /// <summary>
      ///  rpc DeleteModel (DeleteModelRequest) returns (google.protobuf.Empty);
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="headers">The initial metadata to send with the call. This parameter is optional.</param>
      /// <param name="deadline">An optional deadline for the call. The call will be cancelled if deadline is hit.</param>
      /// <param name="cancellationToken">An optional token for canceling the call.</param>
      /// <returns>The response received from the server.</returns>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::Google.Protobuf.WellKnownTypes.Empty RegisterModel(global::Asgt.Modelregistry.V1.RegisterModelRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return RegisterModel(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      /// <summary>
      ///  rpc DeleteModel (DeleteModelRequest) returns (google.protobuf.Empty);
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="options">The options for the call.</param>
      /// <returns>The response received from the server.</returns>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::Google.Protobuf.WellKnownTypes.Empty RegisterModel(global::Asgt.Modelregistry.V1.RegisterModelRequest request, grpc::CallOptions options)
      {
        return CallInvoker.BlockingUnaryCall(__Method_RegisterModel, null, options, request);
      }
      /// <summary>
      ///  rpc DeleteModel (DeleteModelRequest) returns (google.protobuf.Empty);
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="headers">The initial metadata to send with the call. This parameter is optional.</param>
      /// <param name="deadline">An optional deadline for the call. The call will be cancelled if deadline is hit.</param>
      /// <param name="cancellationToken">An optional token for canceling the call.</param>
      /// <returns>The call object.</returns>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual grpc::AsyncUnaryCall<global::Google.Protobuf.WellKnownTypes.Empty> RegisterModelAsync(global::Asgt.Modelregistry.V1.RegisterModelRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return RegisterModelAsync(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      /// <summary>
      ///  rpc DeleteModel (DeleteModelRequest) returns (google.protobuf.Empty);
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="options">The options for the call.</param>
      /// <returns>The call object.</returns>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual grpc::AsyncUnaryCall<global::Google.Protobuf.WellKnownTypes.Empty> RegisterModelAsync(global::Asgt.Modelregistry.V1.RegisterModelRequest request, grpc::CallOptions options)
      {
        return CallInvoker.AsyncUnaryCall(__Method_RegisterModel, null, options, request);
      }
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::Asgt.Modelregistry.V1.GetCurrentModelResponse GetCurrentModel(global::Asgt.Modelregistry.V1.GetCurrentModelRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return GetCurrentModel(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::Asgt.Modelregistry.V1.GetCurrentModelResponse GetCurrentModel(global::Asgt.Modelregistry.V1.GetCurrentModelRequest request, grpc::CallOptions options)
      {
        return CallInvoker.BlockingUnaryCall(__Method_GetCurrentModel, null, options, request);
      }
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual grpc::AsyncUnaryCall<global::Asgt.Modelregistry.V1.GetCurrentModelResponse> GetCurrentModelAsync(global::Asgt.Modelregistry.V1.GetCurrentModelRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return GetCurrentModelAsync(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual grpc::AsyncUnaryCall<global::Asgt.Modelregistry.V1.GetCurrentModelResponse> GetCurrentModelAsync(global::Asgt.Modelregistry.V1.GetCurrentModelRequest request, grpc::CallOptions options)
      {
        return CallInvoker.AsyncUnaryCall(__Method_GetCurrentModel, null, options, request);
      }
      /// <summary>Creates a new instance of client from given <c>ClientBaseConfiguration</c>.</summary>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      protected override ModelRegistryClient NewInstance(ClientBaseConfiguration configuration)
      {
        return new ModelRegistryClient(configuration);
      }
    }

    /// <summary>Creates service definition that can be registered with a server</summary>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    public static grpc::ServerServiceDefinition BindService(ModelRegistryBase serviceImpl)
    {
      return grpc::ServerServiceDefinition.CreateBuilder()
          .AddMethod(__Method_RegisterModel, serviceImpl.RegisterModel)
          .AddMethod(__Method_GetCurrentModel, serviceImpl.GetCurrentModel).Build();
    }

    /// <summary>Register service method with a service binder with or without implementation. Useful when customizing the service binding logic.
    /// Note: this method is part of an experimental API that can change or be removed without any prior notice.</summary>
    /// <param name="serviceBinder">Service methods will be bound by calling <c>AddMethod</c> on this object.</param>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    public static void BindService(grpc::ServiceBinderBase serviceBinder, ModelRegistryBase serviceImpl)
    {
      serviceBinder.AddMethod(__Method_RegisterModel, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Asgt.Modelregistry.V1.RegisterModelRequest, global::Google.Protobuf.WellKnownTypes.Empty>(serviceImpl.RegisterModel));
      serviceBinder.AddMethod(__Method_GetCurrentModel, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Asgt.Modelregistry.V1.GetCurrentModelRequest, global::Asgt.Modelregistry.V1.GetCurrentModelResponse>(serviceImpl.GetCurrentModel));
    }

  }
}
#endregion
