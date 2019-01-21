import { Resource } from './Resource';
import ResourceDefaultHandler from './ResourceDefaultHandler';

export default class ResourceDefault extends Resource {
  protected static _singleton: ResourceDefault;

  public static get instance() {
    if (!this._singleton) {
      this._singleton = new this();
    }

    return this._singleton;
  }

  constructor() {
    super(new ResourceDefaultHandler());
  }
}
