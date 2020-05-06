# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

from vml_proto.asgt.dataservice.v1alpha1 import bank_data_service_pb2 as asgt_dot_dataservice_dot_v1alpha1_dot_bank__data__service__pb2
from vml_proto.asgt.dataservice.v1alpha1 import delete_pb2 as asgt_dot_dataservice_dot_v1alpha1_dot_delete__pb2
from vml_proto.asgt.dataservice.v1alpha1 import info_pb2 as asgt_dot_dataservice_dot_v1alpha1_dot_info__pb2
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2


class BankDataServiceStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.CreateBankDataset = channel.unary_unary(
        '/asgt.dataservice.v1alpha1.BankDataService/CreateBankDataset',
        request_serializer=asgt_dot_dataservice_dot_v1alpha1_dot_bank__data__service__pb2.CreateBankDatasetRequest.SerializeToString,
        response_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
        )
    self.AppendBankData = channel.unary_unary(
        '/asgt.dataservice.v1alpha1.BankDataService/AppendBankData',
        request_serializer=asgt_dot_dataservice_dot_v1alpha1_dot_bank__data__service__pb2.AppendBankDataRequest.SerializeToString,
        response_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
        )
    self.DeleteBankData = channel.unary_unary(
        '/asgt.dataservice.v1alpha1.BankDataService/DeleteBankData',
        request_serializer=asgt_dot_dataservice_dot_v1alpha1_dot_delete__pb2.DeleteRequest.SerializeToString,
        response_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
        )
    self.GetBankInfo = channel.unary_unary(
        '/asgt.dataservice.v1alpha1.BankDataService/GetBankInfo',
        request_serializer=asgt_dot_dataservice_dot_v1alpha1_dot_info__pb2.GetInfoRequest.SerializeToString,
        response_deserializer=asgt_dot_dataservice_dot_v1alpha1_dot_info__pb2.GetInfoResponse.FromString,
        )


class BankDataServiceServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def CreateBankDataset(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def AppendBankData(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def DeleteBankData(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetBankInfo(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_BankDataServiceServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'CreateBankDataset': grpc.unary_unary_rpc_method_handler(
          servicer.CreateBankDataset,
          request_deserializer=asgt_dot_dataservice_dot_v1alpha1_dot_bank__data__service__pb2.CreateBankDatasetRequest.FromString,
          response_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
      ),
      'AppendBankData': grpc.unary_unary_rpc_method_handler(
          servicer.AppendBankData,
          request_deserializer=asgt_dot_dataservice_dot_v1alpha1_dot_bank__data__service__pb2.AppendBankDataRequest.FromString,
          response_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
      ),
      'DeleteBankData': grpc.unary_unary_rpc_method_handler(
          servicer.DeleteBankData,
          request_deserializer=asgt_dot_dataservice_dot_v1alpha1_dot_delete__pb2.DeleteRequest.FromString,
          response_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
      ),
      'GetBankInfo': grpc.unary_unary_rpc_method_handler(
          servicer.GetBankInfo,
          request_deserializer=asgt_dot_dataservice_dot_v1alpha1_dot_info__pb2.GetInfoRequest.FromString,
          response_serializer=asgt_dot_dataservice_dot_v1alpha1_dot_info__pb2.GetInfoResponse.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'asgt.dataservice.v1alpha1.BankDataService', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
