# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

from asgt.dataservice.v1alpha1 import dataservice_pb2 as asgt_dot_dataservice_dot_v1alpha1_dot_dataservice__pb2
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2


class DataServiceStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.PrepareScannedInvoiceFeedback = channel.unary_unary(
        '/asgt.dataservice.v1alpha1.DataService/PrepareScannedInvoiceFeedback',
        request_serializer=asgt_dot_dataservice_dot_v1alpha1_dot_dataservice__pb2.PrepareScannedInvoiceFeedbackRequest.SerializeToString,
        response_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
        )
    self.ScannedInvoiceFeedback = channel.unary_unary(
        '/asgt.dataservice.v1alpha1.DataService/ScannedInvoiceFeedback',
        request_serializer=asgt_dot_dataservice_dot_v1alpha1_dot_dataservice__pb2.ScannedInvoiceFeedbackRequest.SerializeToString,
        response_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
        )
    self.PrepareElectronicInvoicLineFeedback = channel.unary_unary(
        '/asgt.dataservice.v1alpha1.DataService/PrepareElectronicInvoicLineFeedback',
        request_serializer=asgt_dot_dataservice_dot_v1alpha1_dot_dataservice__pb2.PrepareScannedInvoiceFeedbackRequest.SerializeToString,
        response_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
        )
    self.ElectronicInvoicLineFeedback = channel.unary_unary(
        '/asgt.dataservice.v1alpha1.DataService/ElectronicInvoicLineFeedback',
        request_serializer=asgt_dot_dataservice_dot_v1alpha1_dot_dataservice__pb2.ScannedInvoiceFeedbackRequest.SerializeToString,
        response_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
        )
    self.Delete = channel.unary_unary(
        '/asgt.dataservice.v1alpha1.DataService/Delete',
        request_serializer=asgt_dot_dataservice_dot_v1alpha1_dot_dataservice__pb2.DeleteRequest.SerializeToString,
        response_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
        )


class DataServiceServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def PrepareScannedInvoiceFeedback(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def ScannedInvoiceFeedback(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def PrepareElectronicInvoicLineFeedback(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def ElectronicInvoicLineFeedback(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def Delete(self, request, context):
    """TODO(helvind)
    rpc AppendDataset(AppendDataRequest) returns (google.protobuf.Empty) {
    option (google.api.http) = {
    post: "/v1alpha1/feedback:append"
    body: "*"
    };
    }
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_DataServiceServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'PrepareScannedInvoiceFeedback': grpc.unary_unary_rpc_method_handler(
          servicer.PrepareScannedInvoiceFeedback,
          request_deserializer=asgt_dot_dataservice_dot_v1alpha1_dot_dataservice__pb2.PrepareScannedInvoiceFeedbackRequest.FromString,
          response_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
      ),
      'ScannedInvoiceFeedback': grpc.unary_unary_rpc_method_handler(
          servicer.ScannedInvoiceFeedback,
          request_deserializer=asgt_dot_dataservice_dot_v1alpha1_dot_dataservice__pb2.ScannedInvoiceFeedbackRequest.FromString,
          response_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
      ),
      'PrepareElectronicInvoicLineFeedback': grpc.unary_unary_rpc_method_handler(
          servicer.PrepareElectronicInvoicLineFeedback,
          request_deserializer=asgt_dot_dataservice_dot_v1alpha1_dot_dataservice__pb2.PrepareScannedInvoiceFeedbackRequest.FromString,
          response_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
      ),
      'ElectronicInvoicLineFeedback': grpc.unary_unary_rpc_method_handler(
          servicer.ElectronicInvoicLineFeedback,
          request_deserializer=asgt_dot_dataservice_dot_v1alpha1_dot_dataservice__pb2.ScannedInvoiceFeedbackRequest.FromString,
          response_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
      ),
      'Delete': grpc.unary_unary_rpc_method_handler(
          servicer.Delete,
          request_deserializer=asgt_dot_dataservice_dot_v1alpha1_dot_dataservice__pb2.DeleteRequest.FromString,
          response_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'asgt.dataservice.v1alpha1.DataService', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
