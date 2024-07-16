from django.http import HttpResponsePermanentRedirect
from django.utils.deprecation import MiddlewareMixin

class RedirectTrailingSlashMiddleware(MiddlewareMixin):
    def process_request(self, request):
        path = request.path
        if not path.endswith('/') and path.startswith('/api/'):
            return HttpResponsePermanentRedirect(f'{path}/')
        return None


# class ApiRestrictionMiddleware(MiddlewareMixin):
#     def process_request(self, request):
#         headers = request.headers
#         if "api_key" in headers and 