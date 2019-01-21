import { ResourceParams } from './src/ResourceParams';
import { ResourceAction } from './src/ResourceAction';
import { IResourceMethod, ResourceRequestMethod } from './src/Declarations';
import ResourceDefault from './src/ResourceDefault';

@ResourceParams({
  url: 'https://enbbxv5wit8zv.x.pipedream.net/',
  pathPrefix: '',
})
export default class MyRequest extends ResourceDefault {

  public static get instance(): MyRequest {
    if (!this._singleton) {
      this._singleton = new this();
    }

    return <MyRequest>this._singleton;
  }

  @ResourceAction({
    path: '/get-path',
    method: ResourceRequestMethod.Get
  })
  public get: IResourceMethod<{ id: number }, { name: string }>;

  @ResourceAction({
    path: '/post-path/{id}',
    method: ResourceRequestMethod.Post
  })
  public post: IResourceMethod<{ id: number }, { name: string }>;
}

MyRequest.instance.get({id: 2}).then((res) => {
  console.log(res);
  MyRequest.instance.post({id: 2}).then((res) => {
    console.log(res);
  });
});
