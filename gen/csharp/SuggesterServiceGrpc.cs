// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: asgt/v2/suggester_service.proto
// </auto-generated>
#pragma warning disable 0414, 1591, 8981
#region Designer generated code

using grpc = global::Grpc.Core;

namespace Asgt.V2 {
  public static partial class SuggesterService
  {
    static readonly string __ServiceName = "asgt.v2.SuggesterService";

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
    static readonly grpc::Marshaller<global::Asgt.V2.SuggestRequest> __Marshaller_asgt_v2_SuggestRequest = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Asgt.V2.SuggestRequest.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Asgt.V2.SuggestResponse> __Marshaller_asgt_v2_SuggestResponse = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Asgt.V2.SuggestResponse.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Asgt.V2.BatchSuggestRequest> __Marshaller_asgt_v2_BatchSuggestRequest = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Asgt.V2.BatchSuggestRequest.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Asgt.V2.BatchSuggestResponse> __Marshaller_asgt_v2_BatchSuggestResponse = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Asgt.V2.BatchSuggestResponse.Parser));

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::Asgt.V2.SuggestRequest, global::Asgt.V2.SuggestResponse> __Method_Suggest = new grpc::Method<global::Asgt.V2.SuggestRequest, global::Asgt.V2.SuggestResponse>(
        grpc::MethodType.Unary,
        __ServiceName,
        "Suggest",
        __Marshaller_asgt_v2_SuggestRequest,
        __Marshaller_asgt_v2_SuggestResponse);

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::Asgt.V2.BatchSuggestRequest, global::Asgt.V2.BatchSuggestResponse> __Method_BatchSuggest = new grpc::Method<global::Asgt.V2.BatchSuggestRequest, global::Asgt.V2.BatchSuggestResponse>(
        grpc::MethodType.Unary,
        __ServiceName,
        "BatchSuggest",
        __Marshaller_asgt_v2_BatchSuggestRequest,
        __Marshaller_asgt_v2_BatchSuggestResponse);

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::Asgt.V2.BatchSuggestRequest, global::Asgt.V2.BatchSuggestResponse> __Method_ModelBatchSuggest = new grpc::Method<global::Asgt.V2.BatchSuggestRequest, global::Asgt.V2.BatchSuggestResponse>(
        grpc::MethodType.Unary,
        __ServiceName,
        "ModelBatchSuggest",
        __Marshaller_asgt_v2_BatchSuggestRequest,
        __Marshaller_asgt_v2_BatchSuggestResponse);

    /// <summary>Service descriptor</summary>
    public static global::Google.Protobuf.Reflection.ServiceDescriptor Descriptor
    {
      get { return global::Asgt.V2.SuggesterServiceReflection.Descriptor.Services[0]; }
    }

    /// <summary>Base class for server-side implementations of SuggesterService</summary>
    [grpc::BindServiceMethod(typeof(SuggesterService), "BindService")]
    public abstract partial class SuggesterServiceBase
    {
      /// <summary>
      /// Suggest target values for some input using a dataset, returning an empty result if no model exists.
      /// </summary>
      /// <param name="request">The request received from the client.</param>
      /// <param name="context">The context of the server-side call handler being invoked.</param>
      /// <returns>The response to send back to the client (wrapped by a task).</returns>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task<global::Asgt.V2.SuggestResponse> Suggest(global::Asgt.V2.SuggestRequest request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      /// <summary>
      /// BatchSuggest target values for multiple inputs using a dataset, returning an empty result if no model exists.
      /// </summary>
      /// <param name="request">The request received from the client.</param>
      /// <param name="context">The context of the server-side call handler being invoked.</param>
      /// <returns>The response to send back to the client (wrapped by a task).</returns>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task<global::Asgt.V2.BatchSuggestResponse> BatchSuggest(global::Asgt.V2.BatchSuggestRequest request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      /// <summary>
      /// Suggest target values for multiple inputs using the most recently trained model in a dataset.
      /// Returns 404 if a dataset exists, but no model has been trained. This matches the behavior of the v1 API.
      /// </summary>
      /// <param name="request">The request received from the client.</param>
      /// <param name="context">The context of the server-side call handler being invoked.</param>
      /// <returns>The response to send back to the client (wrapped by a task).</returns>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task<global::Asgt.V2.BatchSuggestResponse> ModelBatchSuggest(global::Asgt.V2.BatchSuggestRequest request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

    }

    /// <summary>Client for SuggesterService</summary>
    public partial class SuggesterServiceClient : grpc::ClientBase<SuggesterServiceClient>
    {
      /// <summary>Creates a new client for SuggesterService</summary>
      /// <param name="channel">The channel to use to make remote calls.</param>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public SuggesterServiceClient(grpc::ChannelBase channel) : base(channel)
      {
      }
      /// <summary>Creates a new client for SuggesterService that uses a custom <c>CallInvoker</c>.</summary>
      /// <param name="callInvoker">The callInvoker to use to make remote calls.</param>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public SuggesterServiceClient(grpc::CallInvoker callInvoker) : base(callInvoker)
      {
      }
      /// <summary>Protected parameterless constructor to allow creation of test doubles.</summary>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      protected SuggesterServiceClient() : base()
      {
      }
      /// <summary>Protected constructor to allow creation of configured clients.</summary>
      /// <param name="configuration">The client configuration.</param>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      protected SuggesterServiceClient(ClientBaseConfiguration configuration) : base(configuration)
      {
      }

      /// <summary>
      /// Suggest target values for some input using a dataset, returning an empty result if no model exists.
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="headers">The initial metadata to send with the call. This parameter is optional.</param>
      /// <param name="deadline">An optional deadline for the call. The call will be cancelled if deadline is hit.</param>
      /// <param name="cancellationToken">An optional token for canceling the call.</param>
      /// <returns>The response received from the server.</returns>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::Asgt.V2.SuggestResponse Suggest(global::Asgt.V2.SuggestRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return Suggest(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      /// <summary>
      /// Suggest target values for some input using a dataset, returning an empty result if no model exists.
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="options">The options for the call.</param>
      /// <returns>The response received from the server.</returns>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::Asgt.V2.SuggestResponse Suggest(global::Asgt.V2.SuggestRequest request, grpc::CallOptions options)
      {
        return CallInvoker.BlockingUnaryCall(__Method_Suggest, null, options, request);
      }
      /// <summary>
      /// Suggest target values for some input using a dataset, returning an empty result if no model exists.
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="headers">The initial metadata to send with the call. This parameter is optional.</param>
      /// <param name="deadline">An optional deadline for the call. The call will be cancelled if deadline is hit.</param>
      /// <param name="cancellationToken">An optional token for canceling the call.</param>
      /// <returns>The call object.</returns>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual grpc::AsyncUnaryCall<global::Asgt.V2.SuggestResponse> SuggestAsync(global::Asgt.V2.SuggestRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return SuggestAsync(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      /// <summary>
      /// Suggest target values for some input using a dataset, returning an empty result if no model exists.
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="options">The options for the call.</param>
      /// <returns>The call object.</returns>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual grpc::AsyncUnaryCall<global::Asgt.V2.SuggestResponse> SuggestAsync(global::Asgt.V2.SuggestRequest request, grpc::CallOptions options)
      {
        return CallInvoker.AsyncUnaryCall(__Method_Suggest, null, options, request);
      }
      /// <summary>
      /// BatchSuggest target values for multiple inputs using a dataset, returning an empty result if no model exists.
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="headers">The initial metadata to send with the call. This parameter is optional.</param>
      /// <param name="deadline">An optional deadline for the call. The call will be cancelled if deadline is hit.</param>
      /// <param name="cancellationToken">An optional token for canceling the call.</param>
      /// <returns>The response received from the server.</returns>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::Asgt.V2.BatchSuggestResponse BatchSuggest(global::Asgt.V2.BatchSuggestRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return BatchSuggest(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      /// <summary>
      /// BatchSuggest target values for multiple inputs using a dataset, returning an empty result if no model exists.
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="options">The options for the call.</param>
      /// <returns>The response received from the server.</returns>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::Asgt.V2.BatchSuggestResponse BatchSuggest(global::Asgt.V2.BatchSuggestRequest request, grpc::CallOptions options)
      {
        return CallInvoker.BlockingUnaryCall(__Method_BatchSuggest, null, options, request);
      }
      /// <summary>
      /// BatchSuggest target values for multiple inputs using a dataset, returning an empty result if no model exists.
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="headers">The initial metadata to send with the call. This parameter is optional.</param>
      /// <param name="deadline">An optional deadline for the call. The call will be cancelled if deadline is hit.</param>
      /// <param name="cancellationToken">An optional token for canceling the call.</param>
      /// <returns>The call object.</returns>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual grpc::AsyncUnaryCall<global::Asgt.V2.BatchSuggestResponse> BatchSuggestAsync(global::Asgt.V2.BatchSuggestRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return BatchSuggestAsync(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      /// <summary>
      /// BatchSuggest target values for multiple inputs using a dataset, returning an empty result if no model exists.
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="options">The options for the call.</param>
      /// <returns>The call object.</returns>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual grpc::AsyncUnaryCall<global::Asgt.V2.BatchSuggestResponse> BatchSuggestAsync(global::Asgt.V2.BatchSuggestRequest request, grpc::CallOptions options)
      {
        return CallInvoker.AsyncUnaryCall(__Method_BatchSuggest, null, options, request);
      }
      /// <summary>
      /// Suggest target values for multiple inputs using the most recently trained model in a dataset.
      /// Returns 404 if a dataset exists, but no model has been trained. This matches the behavior of the v1 API.
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="headers">The initial metadata to send with the call. This parameter is optional.</param>
      /// <param name="deadline">An optional deadline for the call. The call will be cancelled if deadline is hit.</param>
      /// <param name="cancellationToken">An optional token for canceling the call.</param>
      /// <returns>The response received from the server.</returns>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::Asgt.V2.BatchSuggestResponse ModelBatchSuggest(global::Asgt.V2.BatchSuggestRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return ModelBatchSuggest(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      /// <summary>
      /// Suggest target values for multiple inputs using the most recently trained model in a dataset.
      /// Returns 404 if a dataset exists, but no model has been trained. This matches the behavior of the v1 API.
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="options">The options for the call.</param>
      /// <returns>The response received from the server.</returns>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::Asgt.V2.BatchSuggestResponse ModelBatchSuggest(global::Asgt.V2.BatchSuggestRequest request, grpc::CallOptions options)
      {
        return CallInvoker.BlockingUnaryCall(__Method_ModelBatchSuggest, null, options, request);
      }
      /// <summary>
      /// Suggest target values for multiple inputs using the most recently trained model in a dataset.
      /// Returns 404 if a dataset exists, but no model has been trained. This matches the behavior of the v1 API.
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="headers">The initial metadata to send with the call. This parameter is optional.</param>
      /// <param name="deadline">An optional deadline for the call. The call will be cancelled if deadline is hit.</param>
      /// <param name="cancellationToken">An optional token for canceling the call.</param>
      /// <returns>The call object.</returns>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual grpc::AsyncUnaryCall<global::Asgt.V2.BatchSuggestResponse> ModelBatchSuggestAsync(global::Asgt.V2.BatchSuggestRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return ModelBatchSuggestAsync(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      /// <summary>
      /// Suggest target values for multiple inputs using the most recently trained model in a dataset.
      /// Returns 404 if a dataset exists, but no model has been trained. This matches the behavior of the v1 API.
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="options">The options for the call.</param>
      /// <returns>The call object.</returns>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual grpc::AsyncUnaryCall<global::Asgt.V2.BatchSuggestResponse> ModelBatchSuggestAsync(global::Asgt.V2.BatchSuggestRequest request, grpc::CallOptions options)
      {
        return CallInvoker.AsyncUnaryCall(__Method_ModelBatchSuggest, null, options, request);
      }
      /// <summary>Creates a new instance of client from given <c>ClientBaseConfiguration</c>.</summary>
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      protected override SuggesterServiceClient NewInstance(ClientBaseConfiguration configuration)
      {
        return new SuggesterServiceClient(configuration);
      }
    }

    /// <summary>Creates service definition that can be registered with a server</summary>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    public static grpc::ServerServiceDefinition BindService(SuggesterServiceBase serviceImpl)
    {
      return grpc::ServerServiceDefinition.CreateBuilder()
          .AddMethod(__Method_Suggest, serviceImpl.Suggest)
          .AddMethod(__Method_BatchSuggest, serviceImpl.BatchSuggest)
          .AddMethod(__Method_ModelBatchSuggest, serviceImpl.ModelBatchSuggest).Build();
    }

    /// <summary>Register service method with a service binder with or without implementation. Useful when customizing the service binding logic.
    /// Note: this method is part of an experimental API that can change or be removed without any prior notice.</summary>
    /// <param name="serviceBinder">Service methods will be bound by calling <c>AddMethod</c> on this object.</param>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    public static void BindService(grpc::ServiceBinderBase serviceBinder, SuggesterServiceBase serviceImpl)
    {
      serviceBinder.AddMethod(__Method_Suggest, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Asgt.V2.SuggestRequest, global::Asgt.V2.SuggestResponse>(serviceImpl.Suggest));
      serviceBinder.AddMethod(__Method_BatchSuggest, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Asgt.V2.BatchSuggestRequest, global::Asgt.V2.BatchSuggestResponse>(serviceImpl.BatchSuggest));
      serviceBinder.AddMethod(__Method_ModelBatchSuggest, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Asgt.V2.BatchSuggestRequest, global::Asgt.V2.BatchSuggestResponse>(serviceImpl.ModelBatchSuggest));
    }

  }
}
#endregion