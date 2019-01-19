import { IResourceHandlerResponse, IResourceRequest, REQUEST_METHOD_MAP } from './Declarations';
import fetch, { Response } from 'node-fetch';
import { ResourceHandler } from './ResourceHandler';

export default class ResourceDefaultHandler extends ResourceHandler {
  handle(req: IResourceRequest): IResourceHandlerResponse {
    const requestOptions: any = {};

    delete req.body;
    requestOptions.method = REQUEST_METHOD_MAP[req.method];
    requestOptions.query = req.query;
    requestOptions.headers = req.headers;

    const { url } = req;

    return {
      promise: fetch(url, requestOptions).then(async (res: Response) => {
        return {
          headers: res.headers,
          status: res.status,
          body: await res.json()
        };
      }),
    };
  }
}
