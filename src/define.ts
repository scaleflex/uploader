import { SfxUploader } from './sfx-uploader';
import { SfxDropZone } from './components/drop-zone';
import { SfxImportDivider } from './components/import-divider';
import { SfxSourcePills } from './components/source-pills';
import { SfxFileList } from './components/file-list';
import { SfxFileItem } from './components/file-item';
import { SfxSuccessCard } from './components/success-card';
import { SfxActionsBar } from './components/actions-bar';
import { SfxUrlDialog } from './components/url-dialog';
import { SfxCameraDialog } from './components/camera-dialog';
import { SfxScreenCastDialog } from './components/screen-cast-dialog';

const register = (tag: string, ctor: CustomElementConstructor) => {
  if (typeof customElements !== 'undefined' && !customElements.get(tag)) {
    customElements.define(tag, ctor);
  }
};

register('sfx-uploader', SfxUploader);
register('sfx-drop-zone', SfxDropZone);
register('sfx-import-divider', SfxImportDivider);
register('sfx-source-pills', SfxSourcePills);
register('sfx-file-list', SfxFileList);
register('sfx-file-item', SfxFileItem);
register('sfx-success-card', SfxSuccessCard);
register('sfx-actions-bar', SfxActionsBar);
register('sfx-url-dialog', SfxUrlDialog);
register('sfx-camera-dialog', SfxCameraDialog);
register('sfx-screen-cast-dialog', SfxScreenCastDialog);
