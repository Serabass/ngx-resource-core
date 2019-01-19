import { ResourceParams } from './src/ResourceParams';
import { ResourceAction } from './src/ResourceAction';
import { IResourceMethod, ResourceRequestMethod } from './src/Declarations';
import ResourceDefault from './src/ResourceDefault';

@ResourceParams({
  pathPrefix: 'https://enbbxv5wit8zv.x.pipedream.net/'
})
export default class MyRequest extends ResourceDefault {

  @ResourceAction({
    url: '/get-path',
    method: ResourceRequestMethod.Get
  })
  public get: IResourceMethod<{ id: number }, { name: string }>;

  @ResourceAction({
    url: '/post-path',
    method: ResourceRequestMethod.Post
  })
  public post: IResourceMethod<{ id: number }, { name: string }>;
}

(<MyRequest>MyRequest.instance).get({id: 2}).then((res) => {
  console.log(res);
  (<MyRequest>MyRequest.instance).post({id: 2}).then((res) => {
    console.log(res);
  });
});
