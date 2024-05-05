import { ElectronHandler } from './Loadpreload';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electronLoader: ElectronHandler;
  }
}

export {};
