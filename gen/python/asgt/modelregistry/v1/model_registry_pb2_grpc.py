# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

from vml_proto.asgt.modelregistry.v1 import model_registry_pb2 as asgt_dot_modelregistry_dot_v1_dot_model__registry__pb2
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2


class ModelRegistryStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.RegisterModel = channel.unary_unary(
        '/asgt.modelregistry.v1.ModelRegistry/RegisterModel',
        request_serializer=asgt_dot_modelregistry_dot_v1_dot_model__registry__pb2.RegisterModelRequest.SerializeToString,
        response_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
        )
    self.GetCurrentModel = channel.unary_unary(
        '/asgt.modelregistry.v1.ModelRegistry/GetCurrentModel',
        request_serializer=asgt_dot_modelregistry_dot_v1_dot_model__registry__pb2.GetCurrentModelRequest.SerializeToString,
        response_deserializer=asgt_dot_modelregistry_dot_v1_dot_model__registry__pb2.GetCurrentModelResponse.FromString,
        )


class ModelRegistryServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def RegisterModel(self, request, context):
    """rpc DeleteModel (DeleteModelRequest) returns (google.protobuf.Empty);
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetCurrentModel(self, request, context):
    """List the most recent versions of a model trained with a specified dataset
    rpc ListModelVersions (ListModelVersionsRequest) returns (ListModelVersionsResponse);
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_ModelRegistryServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'RegisterModel': grpc.unary_unary_rpc_method_handler(
          servicer.RegisterModel,
          request_deserializer=asgt_dot_modelregistry_dot_v1_dot_model__registry__pb2.RegisterModelRequest.FromString,
          response_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
      ),
      'GetCurrentModel': grpc.unary_unary_rpc_method_handler(
          servicer.GetCurrentModel,
          request_deserializer=asgt_dot_modelregistry_dot_v1_dot_model__registry__pb2.GetCurrentModelRequest.FromString,
          response_serializer=asgt_dot_modelregistry_dot_v1_dot_model__registry__pb2.GetCurrentModelResponse.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'asgt.modelregistry.v1.ModelRegistry', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))