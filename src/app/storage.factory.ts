import { PLATFORM_ID } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export function createStorage(platformId: any) {
  const storage = new Storage({
    name: '__mydb',
    driverOrder: ['indexeddb', 'localstorage'],
  });
  storage.create();
  return storage;
}
