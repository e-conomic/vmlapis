# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

from ssn.mlservice.v2alpha1 import mlservice_pb2 as ssn_dot_mlservice_dot_v2alpha1_dot_mlservice__pb2


class MlServiceStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.GetPrediction = channel.unary_unary(
        '/ssn.mlservice.v2alpha1.MlService/GetPrediction',
        request_serializer=ssn_dot_mlservice_dot_v2alpha1_dot_mlservice__pb2.MlRequest.SerializeToString,
        response_deserializer=ssn_dot_mlservice_dot_v2alpha1_dot_mlservice__pb2.MlResponse.FromString,
        )


class MlServiceServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def GetPrediction(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_MlServiceServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'GetPrediction': grpc.unary_unary_rpc_method_handler(
          servicer.GetPrediction,
          request_deserializer=ssn_dot_mlservice_dot_v2alpha1_dot_mlservice__pb2.MlRequest.FromString,
          response_serializer=ssn_dot_mlservice_dot_v2alpha1_dot_mlservice__pb2.MlResponse.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'ssn.mlservice.v2alpha1.MlService', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))