// nativescript
import * as dialogs from 'ui/dialogs';

// app
import {IWindow} from '../../../frameworks/core.framework/interfaces/iwindow';

export class WindowNative implements IWindow {
  public get navigator(): any {
    return {
      language: 'en-US'
    };
  }
  public get location(): any {
    return {
      host: 'nativescript'
    };
  }
  public alert(msg: string): Promise<any> {
    return dialogs.alert(msg);
  }
  public confirm(msg: string): Promise<any> {
    return dialogs.confirm(msg);
  }
}
