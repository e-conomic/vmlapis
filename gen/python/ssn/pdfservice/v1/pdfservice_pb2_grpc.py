# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from vml_proto.ssn.pdfservice.v1 import pdfservice_pb2 as ssn_dot_pdfservice_dot_v1_dot_pdfservice__pb2


class PdfServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.RasterizePdf = channel.unary_stream(
                '/ssn.pdfservice.v1.PdfService/RasterizePdf',
                request_serializer=ssn_dot_pdfservice_dot_v1_dot_pdfservice__pb2.RasterizePdfRequest.SerializeToString,
                response_deserializer=ssn_dot_pdfservice_dot_v1_dot_pdfservice__pb2.RasterizePdfResponse.FromString,
                )


class PdfServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def RasterizePdf(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_PdfServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'RasterizePdf': grpc.unary_stream_rpc_method_handler(
                    servicer.RasterizePdf,
                    request_deserializer=ssn_dot_pdfservice_dot_v1_dot_pdfservice__pb2.RasterizePdfRequest.FromString,
                    response_serializer=ssn_dot_pdfservice_dot_v1_dot_pdfservice__pb2.RasterizePdfResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'ssn.pdfservice.v1.PdfService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class PdfService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def RasterizePdf(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_stream(request, target, '/ssn.pdfservice.v1.PdfService/RasterizePdf',
            ssn_dot_pdfservice_dot_v1_dot_pdfservice__pb2.RasterizePdfRequest.SerializeToString,
            ssn_dot_pdfservice_dot_v1_dot_pdfservice__pb2.RasterizePdfResponse.FromString,
            options, channel_credentials,
            call_credentials, compression, wait_for_ready, timeout, metadata)
